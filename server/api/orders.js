const router = require('express').Router()
const {Order, Hobby, User} = require('../db/models')
const isAdmin = require('../middlewares/adminTier')
const authUser = require('../middlewares/authenticatedUser')
const isInstructorAuth = require('../middlewares/instructorTier')

const orderBodyParse = body => {
  const orderParse = {
    totalPrice: body.totalPrice,
    isActive: body.isActive,
    purchaseCode: body.purchaseCode
  }

  return orderParse
}
// security layer: admin authorization
router.get('/', isAdmin, async (req, res, next) => {
  try {
    // NOTE: removed user from findAll
    const foundOrders = await Order.findAll({include: [Hobby]})
    res.status(200).json(foundOrders)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization
router.get('/:orderId', isAdmin, async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.orderId)

    if (foundOrder) {
      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization
router.put('/:orderId', isAdmin, async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.orderId)

    if (foundOrder) {
      const orderToEdit = orderBodyParse(req.body)
      const updatedOrder = await foundOrder.update(orderToEdit)

      res.status(200).json(updatedOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization, authenticated user
router.post('/', isAdmin, authUser, async (req, res, next) => {
  try {
    const newOrder = await Order.create({userId: req.body.userId})

    if (newOrder) {
      res.status(201).send(newOrder)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization
router.delete('/:orderId', isAdmin, async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.orderId)

    if (foundOrder) {
      await foundOrder.destroy()

      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization, authenticated user (when viewing their own order history)
// this is to find a single active order related to a user
router.get('/:userId/active', isAdmin, authUser, async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isActive: true
      },
      include: [Hobby]
    })
    if (foundOrder) {
      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when viewing their own orders)
// all orders associated with a user
router.get('/:userId/all', isAdmin, authUser, async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({
      include: [Hobby]
    })
    if (foundOrder) {
      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when adding to their own cart)
router.put(
  '/:userId/add/:hobbyId',
  isAdmin,
  authUser,
  async (req, res, next) => {
    try {
      // finding the active order based on userId
      const activeOrder = await Order.findOne({
        where: {
          userId: req.params.userId,
          isActive: true
        },
        include: [Hobby]
      })
      // finding all active orders based on userId
      const userOrders = await Order.findAll({
        where: {
          userId: req.params.userId
        },
        include: [Hobby]
      })
      // mapping through to find out if hobby already exists in user's past & active orders
      // if not, adds hobby relationship to database and reloads/returns the updated order
      const containsHobby = userOrders
        .map(order =>
          order.hobbies.filter(hobby => hobby.id === req.params.hobbyId)
        )
        .flat().length
      const foundHobby = await Hobby.findByPk(req.params.hobbyId)
      if (activeOrder && foundHobby && !containsHobby) {
        await activeOrder.addHobby(foundHobby)
        await activeOrder.reload()
        await activeOrder.getPrice()
        res.sendStatus(200).json(activeOrder)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      next(error)
    }
  }
)

// security layer: admin authorization, authenticated user (when removing items from their own cart)
router.put(
  '/:userId/remove/:hobbyId',
  isAdmin,
  authUser,
  async (req, res, next) => {
    try {
      // finding the active order based on userId
      const activeOrder = await Order.findOne({
        where: {
          userId: req.params.userId,
          isActive: true
        },
        include: [Hobby]
      })
      // mapping through to find out if hobby already exists in user's past & active orders
      // if not, adds hobby relationship to database and reloads/returns the updated order
      const containsHobby = activeOrder.hobbies.filter(
        hobby => hobby.id === req.params.hobbyId
      ).length
      const foundHobby = await Hobby.findByPk(req.params.hobbyId)
      if (activeOrder && foundHobby && containsHobby) {
        await activeOrder.removeHobby(foundHobby)
        await activeOrder.reload()
        await activeOrder.getPrice()
        res.sendStatus(200).json(activeOrder)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      next(error)
    }
  }
)

// security layer: admin authorization, authenticated user (AND GUEST??)
router.put('/:userId/checkout', async (req, res, next) => {
  const currentUser = req.user
  if (
    req.params.userId !== 'guest' &&
    currentUser.id !== req.params.userId &&
    !currentUser.isAdmin
  ) {
    const error = new Error('YOU SHALL NOT PASS!')
    error.status(401)
    next(error)
  }

  try {
    const foundOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isActive: true
      },
      include: [User]
    })

    if (foundOrder) {
      await foundOrder.checkoutOrder()

      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
