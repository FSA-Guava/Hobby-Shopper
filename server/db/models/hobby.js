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
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://quellochefaperte.altervista.org/wp-content/uploads/2019/05/hobby.jpg'
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  rating: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
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
  },
  // REVISIT...for num of seats per hobby with default & min / max potential for students
  openSeats: {
    type: Sequelize.INTEGER,
    defaultValue: 20,
    validate: {
      min: 0,
      max: 30
    }
  }
})

const setForDefault = hobby => {
  if (!hobby.imageUrl.length) {
    hobby.imageUrl = undefined
  }
}

Hobby.beforeValidate(setForDefault)
module.exports = Hobby

// NOTE: Hobby model should have user/instructor added via association
