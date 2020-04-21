const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {

  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    },

  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }

})

Cart.prototype.getPrice = function () {
  const total = this.hobbies.reduce((acc, curr) => {
    acc += curr.price
    return acc
  }, 0)
  return this.update({ totalPrice: total })
}


module.exports = Cart
