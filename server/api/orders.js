const router = require('express').Router()
const {Order, Hobby, User} = require('../db/models')

// security layer: admin authorization
router.get('/', async (req, res, next) => {
  try {
    // NOTE: removed user from findAll
    const foundOrders = await Order.findAll({include: [Hobby]})
    res.status(200).json(foundOrders)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization
router.get('/:orderId', async (req, res, next) => {
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
router.put('/:orderId', async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.orderId)

    if (foundOrder) {
      const updatedOrder = await foundOrder.update(req.body)

      res.status(200).json(updatedOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization, authenticated user
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body, {include: [Hobby]})
    if (newOrder) {
      if (!req.user) {
        req.session.activeOrder = newOrder
      }

      res.status(201).send(newOrder)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    next(err)
  }
})

// security layer: admin authorization
router.delete('/:orderId', async (req, res, next) => {
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
router.get('/:userId/active', async (req, res, next) => {
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
router.get('/:userId/all', async (req, res, next) => {
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
router.put('/:userId/add/:hobbyId', async (req, res, next) => {
  try {
    // finding the active order based on userId
    console.log('req.params', req.body)
    const foundOrder = await Order.findOne({
      where: {
        // userId: req.params.userId === 'guest' ? "null" : req.params.userId,
        isActive: true,
        id: req.body.id
      },
      include: [Hobby]
    })
    console.log('foundOrder', foundOrder)
    // finding all active orders based on userId
    let userOrders
    let containsHobby
    if (req.params.userId !== 'guest') {
      userOrders = await Order.findAll({
        where: {
          userId: req.params.userId
        },
        include: [Hobby]
      })
      // mapping through to find out if hobby already exists in user's past & active orders
      // if not, adds hobby relationship to database and reloads/returns the updated order
      containsHobby = userOrders
        .map(order =>
          order.hobbies.filter(hobby => hobby.id === Number(req.params.hobbyId))
        )
        .flat().length
    } else {
      containsHobby = foundOrder.hobbies
        .filter(hobby => hobby.id === Number(req.params.hobbyId))
        .flat().length
    }
    const foundHobby = await Hobby.findByPk(req.params.hobbyId)
    console.log('containsHobby', containsHobby)

    if (foundOrder && foundHobby && !containsHobby && foundHobby.openSeats) {
      await foundOrder.addHobby(foundHobby)
      await foundOrder.reload()
      await foundOrder.getPrice()
      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when removing items from their own cart)
router.put('/:userId/remove/:hobbyId', async (req, res, next) => {
  try {
    // finding the active order based on userId
    const foundOrder = await Order.findOne({
      where: {
        userId: req.params.userId === 'guest' ? null : req.params.userId,
        isActive: true,
        id: req.body.id
      },
      include: [Hobby]
    })
    // mapping through to find out if hobby already exists in user's past & active orders
    // if not, adds hobby relationship to database and reloads/returns the updated order
    const containsHobby = foundOrder.hobbies.filter(
      hobby => hobby.id === Number(req.params.hobbyId)
    ).length

    const foundHobby = await Hobby.findByPk(req.params.hobbyId)
    if (foundOrder && foundHobby && containsHobby) {
      await foundOrder.removeHobby(foundHobby)
      await foundOrder.reload()
      await foundOrder.getPrice()
      console.log('foundOrder', foundOrder)
      res.status(200).json(foundOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (AND GUEST??)
router.put('/:userId/checkout', async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({
      where: {
        userId: req.params.userId === 'guest' ? null : req.params.userId,
        isActive: true,
        id: req.body.id
      },
      include: [Hobby]
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
