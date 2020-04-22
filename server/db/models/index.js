const User = require('./user')
const Hobby = require('./hobby')
const Order = require('./order')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// ASSOCIATIONS BELOW -------------
// Hobby.belongsTo(User, {as: 'instructor'})
User.hasMany(Hobby)
Hobby.belongsToMany(Order, {through: 'purchased_hobbies'})
Order.hasMany(Hobby)
// Order.belongsTo(User)
User.hasMany(Order)
// ================

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Hobby,
  Order
}
