import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import the thunks so we get that to dispatch
import {fetchHobbies} from '../store/hobbies'
import {HobbyForm} from '.'
import {applyMiddleware} from 'redux'

// define a helper function to get a random number!
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive}
}

class LandingPage extends Component {
  constructor() {
    super()
    this.randomDisplay = this.randomDisplay.bind(this)
  }
  componentDidMount() {
    this.props.getHobbies()
  }

  randomDisplay() {
    // create an array of sample hobbies
    const sampleHobbies = []

    if (this.props.hobbies) {
      const randomOne = this.props.hobbies[
        getRandomInt(0, this.props.hobbies.length - 1)
      ]
      const randomTwo = this.props.hobbies[
        getRandomInt(0, this.props.hobbies.length - 1)
      ]
      const randomThree = this.props.hobbies[
        getRandomInt(0, this.props.hobbies.length - 1)
      ]
      sampleHobbies.push(randomOne, randomTwo, randomThree)

      return sampleHobbies
    } else {
      return false
    }
  }

  render() {
    const sampleHobbies = this.randomDisplay()
    return (
      <div className="landingPage">
        <div className="welcomePhotoContainer">
          <img
            src="https://www.newsinlevels.com/wp-content/uploads/2019/06/GettyImages-487764222-e1495825614959-800x453.jpg"
            className="welcomePhoto"
          />
          <div className="centered">
            <h2>Welcome to Hobby Shopper</h2>
          </div>
          <div className="bottom-right">
            <h4>
              "Hobby Shopper made my dreams come true!" - Jessica B., FSA 2003
              Instructor
            </h4>
          </div>
        </div>
        <div className="landingPageContent">
          <h2>Become a part of our student body!</h2>
          <p className="welcomeText">
            Congratulations on taking the first step to a better you! We thrive
            on connecting our talented instructors with people who are
            passionate about learning new skills. Check out some of our courses
            below and add classes to your cart to get started!
          </p>
          <img
            src="https://lh3.googleusercontent.com/proxy/_ZI7vH4uRCFijeD1jfRk8Ir0uTT7AVO2p-JM84b_9-Ex1NjiyvjFairqtHOleP8Z0TJ833AcOUsRc4VpkE22saDNKFaSHaMdyaPKMb5jJbIYKCNOZRZ37sEL"
            className="separator"
          />
          <h2>Join our team of instructors!</h2>
          <p className="welcomeText">
            Why sit on the sidelines, when you could be sharing your passion
            with the world? At Hobby Shopper, we put you in the driver's seat so
            you can create a legacy of excellence.
          </p>
          <img
            src="https://lh3.googleusercontent.com/proxy/_ZI7vH4uRCFijeD1jfRk8Ir0uTT7AVO2p-JM84b_9-Ex1NjiyvjFairqtHOleP8Z0TJ833AcOUsRc4VpkE22saDNKFaSHaMdyaPKMb5jJbIYKCNOZRZ37sEL"
            className="separator"
          />

          <div className="sampleContainer">
            <h2 className="sampleHeading">Browse some of our courses:</h2>
            <div className="sampleHobbies">
              {sampleHobbies[0]
                ? sampleHobbies.map(sample => {
                    return (
                      <div key={sample.id} className="sampleHobby">
                        <Link
                          to={`/hobbies/${sample.id}`}
                          className="sampleHobby"
                        >
                          <img
                            src={sample.imageUrl}
                            className="sampleHobbyPhoto"
                          />
                          <h6>{sample.name}</h6>
                          <h6>Price: ${sample.price}</h6>
                          <h6>Seats Available: {sample.openSeats}</h6>
                        </Link>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    hobbies: state.hobbies
  }
}

const mapToDispatch = dispatch => {
  return {
    getHobbies: () => dispatch(fetchHobbies())
  }
}

export default connect(mapToState, mapToDispatch)(LandingPage)
