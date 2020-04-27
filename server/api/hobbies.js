const router = require('express').Router()
const {Hobby} = require('../db/models')

// NOTE: all these are mounted on 'api/hobbies'

// security layer: none
// Get all hobbies & get all users
router.get('/', async (req, res, next) => {
  try {
    const allHobbies = await Hobby.findAll()
    res.json(allHobbies)
  } catch (error) {
    next(error)
  }
})

// security layer: none
// Get single hobby
router.get('/:id', async (req, res, next) => {
  try {
    const singleHobby = await Hobby.findByPk(req.params.id)
    res.json(singleHobby)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, instructor authorization (only if hobby belongs to them)
// Update a particular Hobby by Id
router.put('/:id', async (req, res, next) => {
  try {
    const hobby = await Hobby.findByPk(req.params.id)
    console.log('req.body>>>>', req.body)
    await hobby.update(req.body)
    await hobby.reload()
    res.json(hobby)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, instructor authorization (only if hobby belongs to them)
// Create a new Hobby
router.post('/', async (req, res, next) => {
  try {
    const newHobby = await Hobby.create(req.body)
    res.status(201).json(newHobby)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authoriztion, instructor authorization (only if hobby belongs to them)
// Delete a hobby by id
router.delete('/:hobbyId', async (req, res, next) => {
  try {
    const deletedHobby = await Hobby.findOne({
      where: {
        id: req.params.hobbyId
      }
    })
    if (deletedHobby) {
      await deletedHobby.destroy()
      res.status(200).json(deletedHobby)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
