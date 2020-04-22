const {expect} = require('chai')
const db = require('../index')
const Hobby = db.model('hobby')

// clear the model for our tests.
describe('Hobby model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('has name, description, imageUrl, price, subject, tags and rating fields', async () => {
    const hobby = await Hobby.create({
      name: 'Cow Tipping',
      description: 'Meet the crazy cows of OKC and knock them over!',
      imageUrl: '/images/jupiter.png',
      price: 125,
      subject: 'Physical Education / Athletics',
      tags: ['farming', 'cows', 'fun'],
      rating: [3, 5, 4]
    })
    expect(hobby.name).to.equal('Cow Tipping')
    expect(hobby.description).to.equal(
      'Meet the crazy cows of OKC and knock them over!'
    )
    expect(hobby.imageUrl).to.equal('/images/jupiter.png')
    expect(hobby.price).to.equal(125)
    expect(hobby.subject).to.equal('Physical Education / Athletics')
    // expect(Array.isArray(hobby.tags)).to.equal(true)
    expect(hobby.tags).to.deep.equal(['farming', 'cows', 'fun'])
    // expect(Array.isArray(hobby.rating)).to.equal(true)
    expect(hobby.getDataValue('rating')).to.deep.equal([3, 5, 4])
  })
})
// })

// THOUGHTS FOR ASSOCIATION TESTS (to be reworked)

// it('A Hobby belongs to many Orders', () => {
//         return Promise.all(
//           [10, 25, 50].map((orderTotal) => {
//             return Order.create({
//               totalPrice: orderTotal,
//             })
//           })
//         )
//           .then((orders) => {
//             return (
//               Promise.all([appointment.save(), appointment2.save()])
//                 // creating 2 appointments
//                 .then((appts) => {
//                   // the `addUsers` and `addAppointment` methods will automatically exist if you set up the association correctly
//                   // Sue, Danny, and Kelsea are attending appointment 1, and Sue is attending appointment 2
//                   return Promise.all([
//                     appts[0].addUsers(users),
//                     users[0].addAppointment(appts[1]),
//                   ])
//                 })
//             )
//           })
//           .then(() => {
//             return Appointment.findOne({
//               where: {
//                 title: 'Office hours!',
//               },
//               include: [User],
//             }).then((appt) => {
//               expect(appt.users).to.be.instanceOf(Array)
//               expect(appt.users.length).to.equal(3)
//             })
//           })
//       })
//     })
//   })
