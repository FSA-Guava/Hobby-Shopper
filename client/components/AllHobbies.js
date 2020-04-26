import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addItem, removeItem} from '../store/cart'

// import the thunk so we can get it into the dispatch
import {fetchHobbies, fetchNewHobby, deleteHobby} from '../store/hobbies'

class AllHobbies extends React.Component {
  constructor() {
    super()
    this.addToCart = this.addToCart.bind(this)
    this.checkCart = this.checkCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
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

  render() {
    const {hobbies} = this.props
    return (
      <div>
        <h1>Here's the ALL Hobbies Page!</h1>
        {Array.isArray(hobbies) &&
          hobbies.map(hobby => {
            return (
              <div key={hobby.id}>
                <ul>
                  <Link to={`/hobbies/${hobby.id}`}>
                    <h3 name={hobby.name}>Hobby Name: {hobby.name}</h3>
                    <img src={hobby.imageUrl} />
                  </Link>
                  {this.checkCart(hobby) ? (
                    <button
                      type="submit"
                      onClick={() => this.removeFromCart(hobby)}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button type="submit" onClick={() => this.addToCart(hobby)}>
                      Add To Cart
                    </button>
                  )}
                </ul>
              </div>
            )
          })}
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
    getHobbies: () => dispatch(fetchHobbies()),
    getHobby: hobby => dispatch(fetchNewHobby(hobby)),
    removeHobby: id => dispatch(deleteHobby(id)),
    addItem: (user, hobby) => dispatch(addItem(user, hobby)),
    removeItem: (user, hobby) => dispatch(removeItem(user, hobby))
  }
}

export default connect(mapToState, mapToDispatch)(AllHobbies)
