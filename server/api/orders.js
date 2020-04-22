const router = require('express').Router()
const {Order, Hobby, User} = require('../db/index')

router.get('/', async (req, res, next) => {
  try {
    const foundOrders = await Order.findAll({include: [User, Hobby]})
    res.status(200).json(foundOrders)
  } catch (error) {
    next(error)
  }
})

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

router.put('/:userId/add/:hobbyId', async (req, res, next) => {
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
})

router.put('/:userId/remove/:hobbyId', async (req, res, next) => {
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
})

module.exports = router
