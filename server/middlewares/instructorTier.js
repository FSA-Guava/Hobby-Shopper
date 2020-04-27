const isInstructorMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.isInstructor) {
    if (req.params.userId && req.params.userId === currentUser.id) {
      next()
    }
    if (req.body.userId && req.body.userId === currentUser.id) {
      next()
    }
    if (!req.body.userId && !req.params.userId) {
      next()
    }
  } else {
    const error = new Error(
      "Wait...you're not an instructor. YOU SHALL NOT PASS!"
    )
    error.status(401)
    next(error)
  }
}

module.exports = isInstructorMiddleware