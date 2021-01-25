const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const Hobby = require('../db/models/hobby')

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {email: req.body.email},
      include: {
        model: Order,
        include: Hobby
      }
    })

    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      let activeOrder = await Order.findOne({
        where: {
          userId: user.id,
          isActive: true
        },
        include: [Hobby]
      })

      if (!activeOrder.hobbies) activeOrder.hobbies = []
      const hobbies = req.session.activeOrder.hobbies
      await activeOrder.addHobbies(hobbies)
      await activeOrder.reload()
      await activeOrder.getPrice()
      await user.reload()

      req.login(user, err => {
        if (err) {
          next(err)
        } else {
          let parsedUser = {
            id: user.id,
            orders: user.orders,
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl
          }
          if (user.isAdmin) {
            parsedUser.isAdmin = user.isAdmin
          }
          if (user.isInstructor) {
            parsedUser.isInstructor = user.isInstructor
          }

          res.send(parsedUser)
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        imageUrl: req.body.imageUrl,
        isInstructor: req.body.isInstructor
      },
      {
        include: {
          model: Order,
          include: Hobby
        }
      }
    )

    const order = await Order.findOne({
      where: {
        id: req.session.activeOrder.id
      },
      include: [Hobby]
    })

    await order.update({userId: user.id})
    await order.reload()
    await order.getPrice()
    await user.addOrder(order)
    await user.reload()

    req.login(user, err => {
      if (err) {
        next(err)
      } else {
        let parsedUser = {
          id: user.id,
          orders: user.orders,
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl
        }
        if (user.isAdmin) {
          parsedUser.isAdmin = user.isAdmin
        }
        if (user.isInstructor) {
          parsedUser.isInstructor = user.isInstructor
        }
        res.send(parsedUser)
      }
    })
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
  console.log(req.user, 'req.user')

  let user = {}
  let parsedUser
  if (!req.user) {
    user.activeOrder = req.session.activeOrder
    if (user.activeOrder.hobbies) {
      console.log('hobbiesArray', user.activeOrder.hobbies)
    } else {
      user.activeOrder.hobbies = []
    }
  } else {
    parsedUser = {
      id: req.user.id,
      orders: req.user.orders,
      name: req.user.name,
      isInstructor: req.user.isInstructor,
      email: req.user.email,
      imageUrl: req.user.imageUrl
    }
    if (req.user.isAdmin) {
      parsedUser.isAdmin = req.user.isAdmin
    }
    if (req.user.isInstructor) {
      parsedUser.isInstructor = req.user.isInstructor
    }
  }

  res.json(parsedUser || user)
})

router.use('/google', require('./google'))
module.exports = router
