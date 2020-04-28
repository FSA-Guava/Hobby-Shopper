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
      const randomOne = this.props.hobbies[1]
      const randomTwo = this.props.hobbies[2]
      const randomThree = this.props.hobbies[3]
      sampleHobbies.push(randomOne, randomTwo, randomThree)

      return sampleHobbies
    } else {
      return false
    }
  }

  render() {
    const sampleHobbies = this.randomDisplay()
    console.log('IS THIS SAMPLE HOBBIES>>>>', sampleHobbies)
    return (
      <div>
        <div className="welcomePhotoContainer">
          <img
            src="https://www.newsinlevels.com/wp-content/uploads/2019/06/GettyImages-487764222-e1495825614959-800x453.jpg"
            className="welcomePhoto"
          />
          <div className="centered">
            <h2>Welcome to Hobby Shopper</h2>
          </div>
          <div className="bottom-right">
            <h4>"Hobby Shopper made my dreams come true!"</h4>
          </div>
        </div>
        <p className="welcomeText">
          Congratulations on taking the first step to a better you! We thrive on
          connecting our talented instructors with people who are passionate
          about learning new skills. Check out some of our courses below and add
          classes to your cart to get started!
        </p>

        <div>
          <h3 className="sampleHeading">Browse some of our courses:</h3>
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
                        <h6>Course Name: {sample.name}</h6>
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
