import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// Import the thunk here!
import {fetchHobby, revisedHobby} from '../store/singleHobby'

const convertPrice = price => {
  let comma = price > 0 ? '.' : ''
  comma = price < 100 ? '0.' : comma
  return (
    String(price)
      .slice(0, -2)
      .replace('.', '') +
    comma +
    String(price)
      .slice(-2)
      .replace('.', '')
  )
}

function checkBoughtHobbies(hobby, user) {
  const userHobbies = user.orders.map(order => order.hobbies).flat()
  const foundHobby = userHobbies.find(
    searchHobby => searchHobby.id === hobby.id
  )
  if (foundHobby) {
    return true
  }
}

export class SingleHobby extends React.Component {
  constructor() {
    super()
    this.addToCart = this.addToCart.bind(this)
    this.checkCart = this.checkCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkForBought = this.checkForBought.bind(this)
  }

  componentDidMount() {
    this.props.grabTheHobby()
  }

  addToCart(hobby) {
    this.props.addItem(this.props.user, hobby)
  }

  removeFromCart(hobby) {
    this.props.removeItem(this.props.user, hobby)
  }

  checkCart(hobby) {
    return this.props.cart.hobbies.filter(item => hobby.id === item.id).length
  }

  checkForBought(hobby) {
    if (this.props.user.id) {
      return checkBoughtHobbies(hobby, this.props.user)
    }
  }

  render() {
    const {hobby} = this.props
    return (
      <div className="singleHobbyPage">
        <div className="singleHobbyPhoto">
          <img src={hobby.imageUrl} />
        </div>
        <div className="singleHobbyContent">
          <h3>{hobby.name}</h3>

          <p>{hobby.description}</p>
          <ul>
            <li>Cost: ${convertPrice(hobby.price)}</li>
            <li>Hobby Category: {hobby.subject}</li>
            <li>Rating: {hobby.rating}</li>
            {!hobby.openSeats ? (
              <li>This Hobby Class is full :sad:</li>
            ) : (
              <li>Available Seats: {hobby.openSeats}</li>
            )}
            {hobby.tags && hobby.tags.length ? (
              <li>This Hobby's Tags: {hobby.tags.join(' ')}</li>
            ) : (
              <li>There aren't any tags for this hobby</li>
            )}
          </ul>
          {/* {this.checkForBought(hobby) ? (
          <p>You Already Own This Product!</p>
          ) : this.checkCart(hobby) ? (
            <button
            type="submit"
            className="hobbyButton"
            onClick={() => this.removeFromCart(hobby)}
            >
            Remove From Cart
            </button>
            ) : (
              <button
              type="submit"
              className="hobbyButton"
              onClick={() => this.addToCart(hobby)}
              >
              Add To Cart
              </button>
            )} */}
        </div>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    hobby: state.hobby,
    user: state.user
  }
}

const mapToDispatch = (dispatch, ownProps) => {
  // NOTE: IN JPFP, this is where props for dispatch were actually located (on ownProps.match.params)!
  const hobbyId = ownProps.match.params.id
  // const {data} = ownProps.match.params // <--- CHECK WITH GROUP!
  return {
    grabTheHobby: () => dispatch(fetchHobby(hobbyId))
    // updateTheHobby: () => dispatch(revisedHobby(hobbyId, data)),
  }
}

export default connect(mapToState, mapToDispatch)(SingleHobby)
