/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          name: 'martin',
          email: 'martin@puppybook.com',
          password: 'bones'
        })
      })

      it('name is not empty, and email is valid', async () => {
        const user = User.build({name: '', email: 'asdas'})
        try {
          await user.validate()
          throw Error(
            'validation should have failed with empty name and invalid email address'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation notEmpty on name')

          expect(err.message).to.contain('Validation isEmail on email')
        }
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
