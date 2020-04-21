const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {

  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    },
    get({ associations: true}) {
      const hobbies = this.getHobbies()
      return hobbies.reduce((acc, curr) => {
        acc += curr.price
        return acc
      }, 0)
    }
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }

})




module.exports = Cart
