/* eslint-disable complexity */
const isInstructorMiddleware = (req, res, next) => {
  const currentUser = req.user
  console.log(req.user)
  if (currentUser && currentUser.isAdmin) {
    next()
  } else if (currentUser && currentUser.isInstructor) {
    if (req.params.userId && req.params.userId === currentUser.id) {
      next()
    } else if (req.body.userId && req.body.userId === currentUser.id) {
      next()
    } else if (!req.body.userId && !req.params.userId) {
      next()
    } else {
      const error = new Error(
        "Wait...you're not an instructor. YOU SHALL NOT PASS!"
      )
      error.status = 401
      next(error)
    }
  } else {
    const error = new Error(
      "Wait...you're not an instructor. YOU SHALL NOT PASS!"
    )
    error.status = 401
    next(error)
  }
}

module.exports = isInstructorMiddleware
