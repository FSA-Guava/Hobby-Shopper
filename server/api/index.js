const router = require('express').Router()
module.exports = router

// Users mounted on api/users
router.use('/users', require('./users'))

// Hobby mounted on api/hobby
router.use('/hobbies', require('./hobbies'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
