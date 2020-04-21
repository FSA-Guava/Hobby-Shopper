const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  purchaseCode: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  }
})

Order.prototype.getPrice = function() {
  const total = this.hobbies.reduce((acc, curr) => {
    acc += curr.price
    return acc
  }, 0)
  return this.update({totalPrice: total})
}

Order.prototype.checkoutOrder = function() {
  const generateCode = function() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    )
  }

  const newCode = generateCode()

  return this.update({purchaseCode: newCode, isActive: false})
}

module.exports = Order
