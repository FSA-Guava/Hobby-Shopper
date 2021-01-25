const router = require('express').Router()
const {Hobby} = require('../db/models')
const isAdmin = require('../middlewares/adminTier')
const authUser = require('../middlewares/authenticatedUser')
const isInstructorAuth = require('../middlewares/instructorTier')
// NOTE: all these are mounted on 'api/hobbies'
const hobbyBodyParse = body => {
  const hobbyObj = {
    name: body.name,
    description: body.description,
    price: body.price,
    imageUrl: body.imageUrl,
    subject: body.subject,
    tags: body.tags,
    openSeats: body.openSeats,
    userId: body.userId
  }

  return hobbyObj
}
// security layer: none
// Get all hobbies & get all users
router.get('/', async (req, res, next) => {
  try {
    const allHobbies = await Hobby.findAll({})
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

    if (singleHobby) {
      res.status(200).json(singleHobby)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// security layer: admin authorization, instructor authorization (only if hobby belongs to them)
// Update a particular Hobby by Id
router.put('/:hobbyId', isInstructorAuth, async (req, res, next) => {
  try {
    const hobby = await Hobby.findByPk(req.params.hobbyId)

    if (hobby) {
      const hobbyToEdit = hobbyBodyParse(req.body)
      await hobby.update(hobbyToEdit)
      await hobby.reload()
      res.status(200).json(hobby)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id/decrease', async (req, res, next) => {
  try {
    console.log('decreased!!!!!!')
    let hobby = await Hobby.findByPk(req.params.id)
    hobby.openSeats = hobby.openSeats - 1
    await hobby.save()
    res.json(hobby)
  } catch (error) {
    next(error)
  }
})

//security layer: admin authorizationn
router.put('/:id/increase', async (req, res, next) => {
  try {
    let hobby = await Hobby.findByPk(req.params.id)
    hobby.openSeats++
    await hobby.save()
    res.json(hobby)
  } catch (error) {
    next(error)
  }
})
// security layer: admin authorization, instructor authorization (only if hobby belongs to them)
// Create a new Hobby
router.post('/', isInstructorAuth, async (req, res, next) => {
  try {
    const hobbyToCreate = hobbyBodyParse(req.body)
    const newHobby = await Hobby.create(hobbyToCreate)
    res.status(201).json(newHobby)
  } catch (error) {
    next(error)
  }
})

// security layer: admin authoriztion, instructor authorization (only if hobby belongs to them)
// Delete a hobby by id
router.delete('/:hobbyId', isInstructorAuth, async (req, res, next) => {
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
