const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const Hobby = require('../db/models/hobby')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {email: req.body.email},
      include: {
        model: Order,
        include: Hobby
      }
    })
    // const hobbies = req.session.activeOrder.hobbies
    // await order.addHobbies(hobbies)
    // await order.reload()
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body, {
      include: [Order]
    })
    const order = await Order.create(
      {},
      {
        include: [Hobby]
      }
    )
    // waiting for session.order.hobbies to exist
    // const hobbies = req.session.activeOrder.hobbies
    // await order.addHobbies(hobbies)
    // await order.reload()
    await user.addOrder(order)
    await user.reload()
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  let user = {}

  if (!req.user) {
    user.activeOrder = req.session.activeOrder
  }
  console.log(req.user, 'req.user')
  res.json(req.user || user)
})

router.use('/google', require('./google'))
