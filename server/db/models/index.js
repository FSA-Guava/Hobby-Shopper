const User = require('./user')
const Hobby = require('./hobby')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// REVISIT BELOW -------------
// Hobby.belongsTo(User, {as: 'instructor'})
Hobby.belongsToMany(User, {through: 'enrolled_users'})
User.belongsToMany(Hobby, {through: 'enrolled_users'})
// ================

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Hobby
}
