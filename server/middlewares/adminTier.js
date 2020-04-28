const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  console.log(req.user)
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const error = new Error('YOU SHALL NOT PASS!')
    error.status = 401
    next(error)
  }
}

module.exports = isAdminMiddleware
