const router = require('express').Router()
const {User} = require('../db/models')
const {Hobby} = require('../db/models')
module.exports = router

// security layer: admin authorization
// get all users (from admin's perspective)
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when viewing themself)
// Get single user
router.get('/:id', async (req, res, next) => {
  try {
    const userById = await User.findByPk(req.params.id)
    res.json(userById)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when viewing their own hobbies)
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

// security layer: admin authorization, authenticated user (when updating their own account)
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

// security layer: admin authorization
// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, authenticated user (when deleting their own account)
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
