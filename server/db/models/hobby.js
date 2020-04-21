const Sequelize = require('sequelize')
const db = require('../db')

const Hobby = db.define('hobby', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defalutValue:
      'https://quellochefaperte.altervista.org/wp-content/uploads/2019/05/hobby.jpg'
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  rating: {
    type: Sequelize.ARRAY(Sequelize.INT),
    defaultValue: [],
    get() {
      const totalRatings = this.getDataValue('rating')
      const sumOfRatings = totalRatings.reduce((medianRating, rating) => {
        medianRating += rating
        return medianRating
      }, 0)
      // if this is true...then return the sumOfRatings divided by totalRatings length...otherwise return 0
      return totalRatings.length ? sumOfRatings / totalRatings.length : 0
    }
  }
})

module.exports = Hobby

// NOTE: Hobby model should have user/instructor added via association
