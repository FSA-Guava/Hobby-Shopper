'use strict'

const db = require('../server/db')
const {User, Hobby, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const smartCody = await User.create({
    name: 'SmartCody',
    email: 'cody@email.com',
    password: '123',
    isInstructor: true,
    isAdmin: false
  })

  const inexperiencedCody = await User.create({
    name: 'DumbCody',
    email: 'murphy@email.com',
    password: '123',
    isInstructor: false,
    isAdmin: false
  })

  const order = await Order.create()

  const hobby = await Hobby.create({
    name: 'Testing coding stuff',
    description: 'Some hobbie',
    price: 100,
    subject: 'computers'
  })

  // await hobby.setUser(smartCody)
  await smartCody.addHobby(hobby)
  // await hobby.addOrder(order)
  // await order.setUser(inexperiencedCody)
  await order.addHobby(hobby)
  await inexperiencedCody.addOrder(order)

  const users = await User.findAll({
    include: [Hobby, Order],
    attributes: ['id', 'name', 'email']
  })

  // const hobbies = await Hobby.findAll({
  //   include: ['instructor', Order]
  // })

  const orderTest = await Order.findOne({
    where: {
      userId: 2
    },
    include: [Hobby]
  })
  await orderTest.getPrice()
  await orderTest.checkoutOrder()

  console.log(users)

  console.log(orderTest)

  // console.log(`seeded ${models.length} models`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
