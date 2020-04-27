const authenticatedUser = (req, res, next) => {
  const currentUser = req.user
  if (req.params.userId && req.params.userId === currentUser.id) {
    next()
  } else if (req.body.userId && req.body.userId === currentUser.id) {
    next()
  } else if (!req.body.userId && !req.params.userId) {
    next()
  } else {
    const error = new Error(
      "Wait...you're not authorized for this. YOU SHALL NOT PASS!"
    )
    error.status(401)
    next(error)
  }
}

module.exports = authenticatedUser
