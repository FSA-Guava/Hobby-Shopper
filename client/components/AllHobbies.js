import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addItem, removeItem} from '../store/cart'

// import the thunk so we can get it into the dispatch
import {fetchHobbies, fetchNewHobby, deleteHobby} from '../store/hobbies'

function checkBoughtHobbies(hobby, user) {
  const userHobbies = user.orders.map(order => order.hobbies).flat()
  const foundHobby = userHobbies.find(
    searchHobby => searchHobby.id === hobby.id
  )
  if (foundHobby) {
    return true
  }
}

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

class AllHobbies extends React.Component {
  constructor() {
    super()
    this.addToCart = this.addToCart.bind(this)
    this.checkCart = this.checkCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkForBought = this.checkForBought.bind(this)
  }

  componentDidMount() {
    this.props.getHobbies()
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
    const {hobbies} = this.props
    return (
      <div className="allHobbiesPage">
        <h1>Here are the all our Hobbies!</h1>
        <div className="allHobbiesContainer">
          {Array.isArray(hobbies) &&
            hobbies.map(hobby => {
              return (
                <div key={hobby.id}>
                  <div key={hobby.id} className="oneHobby">
                    {/* <div className="cardDescription"> */}
                    <Link to={`/hobbies/${hobby.id}`}>
                      <img src={hobby.imageUrl} className="oneHobbyImage" />
                    </Link>
                    <div className="hobbyWords">
                      <Link to={`/hobbies/${hobby.id}`}>
                        <h3 name={hobby.name} className="hobbyTitle">
                          {hobby.name}
                        </h3>
                      </Link>
                      <Link to={`/hobbies/${hobby.id}`}>
                        <p
                          name={hobby.description}
                          className="hobbyDescription"
                        >
                          {hobby.description}
                        </p>
                        <small name={hobby.openSeats}>
                          Available Seats: {hobby.openSeats}
                        </small>
                      </Link>
                    </div>
                    <Link to={`/hobbies/${hobby.id}`}>
                      <h4 name={hobby.price}>
                        Price: ${convertPrice(hobby.price)}
                      </h4>
                    </Link>

                    {this.checkForBought(hobby) ? (
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
                    )}
                  </div>
                  {/* <img
                    src="https://lh3.googleusercontent.com/proxy/_ZI7vH4uRCFijeD1jfRk8Ir0uTT7AVO2p-JM84b_9-Ex1NjiyvjFairqtHOleP8Z0TJ833AcOUsRc4VpkE22saDNKFaSHaMdyaPKMb5jJbIYKCNOZRZ37sEL"
                    className="hobbiesSeparator"
                  /> */}
                  <br />
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    hobbies: state.hobbies,
    user: state.user,
    cart: state.cart
  }
}

const mapToDispatch = dispatch => {
  // set a key that refers to the thunk.
  return {
    getHobbies: user => dispatch(fetchHobbies(user)),
    getHobby: hobby => dispatch(fetchNewHobby(hobby)),
    removeHobby: id => dispatch(deleteHobby(id)),
    addItem: (user, hobby) => dispatch(addItem(user, hobby)),
    removeItem: (user, hobby) => dispatch(removeItem(user, hobby))
  }
}

export default connect(mapToState, mapToDispatch)(AllHobbies)
