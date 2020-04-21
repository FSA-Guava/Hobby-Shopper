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
