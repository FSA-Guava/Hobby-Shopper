const router = require('express').Router()
const {User} = require('../db/models')
const {Hobby} = require('../db/models')
module.exports = router

// get all users (from admin's perspective)
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

// Get single user
router.get('/:id', async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.id)
    res.json(userById)
  } catch (error) {
    next(error)
  }
})

// Get all hobbies associated with user (by userId)
router.get('/:id/hobbies', async (req, res, next) => {
  const userId = req.params.id
  const hobbies = await Hobby.findAll({
    where: {userId}
  })
  try {
    res.json(hobbies)
  } catch (error) {
    next(error)
  }
})

// gets login information for user (includes only email & id fields)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// Update an existing user (according to ID)
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    const updatedUser = user.update(req.body)
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})

// Delete an existing user by id
router.delete('/:userId', async (req, res, next) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: req.params.userId
      }
    })
    res.status(204).json(deletedUser)
  } catch (error) {
    next(error)
  }
})
