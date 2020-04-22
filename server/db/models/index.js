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
User.hasMany(Hobby) // user has hobbies as an instructor, not the student
Hobby.belongsToMany(Order, {through: 'ordered_hobbies'})
Order.belongsToMany(Hobby, {through: 'ordered_hobbies'})
// Order.belongsTo(User)
User.hasMany(Order) //user have many orders, so order have an userId
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
