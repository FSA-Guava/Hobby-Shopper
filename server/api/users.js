const router = require('express').Router()
const {User} = require('../db/models')
const {Hobby, Order} = require('../db/models')
const isAdmin = require('../middlewares/adminTier')
const authUser = require('../middlewares/authenticatedUser')
const isInstructorAuth = require('../middlewares/instructorTier')

// security layer: admin authorization
// get all users (from admin's perspective)
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when viewing themself)
// Get single user
router.get('/:userId', isAdmin, authUser, async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.userId, {
      attributes: ['id', 'name', 'imageUrl', 'email'],
      include: {
        model: Order,
        include: Hobby
      }
    })

    if (userById) {
      res.status(200).json(userById)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when viewing their own hobbies)
// Get all hobbies associated with user (by userId)
router.get(
  '/:userId/hobbies',
  isAdmin,
  isInstructorAuth,
  async (req, res, next) => {
    try {
      const hobbies = await Hobby.findAll({
        where: {
          userId: req.params.userId
        }
      })
      res.json(hobbies)
    } catch (error) {
      next(error)
    }
  }
)

// security layer: admin authorization, authenticated user (when updating their own account)
// Update an existing user (according to ID)
router.put('/:userId', isAdmin, authUser, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)

    if (user) {
      const updatedUser = user.update({
        name: req.body.name,
        email: req.body.email,
        imageUrl: req.body.imageUrl,
        password: req.body.password
      })
      res.json(updatedUser)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization
// Create a new user
router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when deleting their own account)
// Delete an existing user by id
router.delete('/:userId', isAdmin, authUser, async (req, res, next) => {
  try {
    const deletedUser = await User.findOne({
      where: {
        id: req.params.userId
      }
    })

    if (deletedUser) {
      await deletedUser.destroy()
      res.status(204).json(deletedUser)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
