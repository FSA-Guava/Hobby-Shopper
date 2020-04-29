const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.INTEGER,
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

Order.prototype.getPrice = async function() {
  const total = Number(
    this.hobbies.reduce((acc, curr) => {
      acc += curr.price
      return acc
    }, 0)
  )
  await this.update({totalPrice: total})
  await this.reload()
}

Order.prototype.checkoutOrder = async function() {
  const generateCode = function() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    )
  }

  const newCode = generateCode()
  await this.update({purchaseCode: newCode, isActive: false})
  await this.reload()
}

Order.addHook('afterSave', async (order, options) => {
  if (!order.hobbies) {
    const hobbies = await order.getHobbies()
    order.setDataValue('hobbies', hobbies)
  }
  return order
})

module.exports = Order
