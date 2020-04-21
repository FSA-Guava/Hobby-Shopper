const {expect} = require('chai')
const db = require('../index')

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
