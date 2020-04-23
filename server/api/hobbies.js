const router = require('express').Router()
const {Hobby} = require('../db/models')

// NOTE: all these are mounted on 'api/hobbies'

// Get all hobbies & get all users
router.get('/', async (req, res, next) => {
  try {
    const allHobbies = await Hobby.findAll()
    res.json(allHobbies)
  } catch (error) {
    next(error)
  }
})

// Get single hobby
router.get('/:id', async (req, res, next) => {
  try {
    const singleHobby = await Hobby.findByPk(req.params.id)
    res.json(singleHobby)
  } catch (error) {
    next(error)
  }
})

// Update a particular Hobby by Id
router.put('/:id', async (req, res, next) => {
  try {
    const hobby = await Hobby.findByPk(req.params.id)
    const updatedHobby = hobby.update(req.body)
    res.json(updatedHobby)
  } catch (error) {
    next(error)
  }
})

// Create a new Hobby
router.post('/', async (req, res, next) => {
  try {
    const newHobby = await Hobby.create(req.body)
    res.status(201).json(newHobby)
  } catch (error) {
    next(error)
  }
})

// Delete a hobby by id
router.delete('/:hobbyId', async (req, res, next) => {
  try {
    const deletedHobby = await Hobby.destroy({
      where: {
        id: req.params.hobbyId
      }
    })
    res.status(204).json(deletedHobby)
  } catch (error) {
    next(error)
  }
})

module.exports = router
