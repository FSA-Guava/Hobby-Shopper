import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeItem, completeOrder, createOrder} from '../store/cart'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      wasSubmitted: false
    }
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkoutButton = this.checkoutButton.bind(this)
  }
  componentDidMount() {}

  removeFromCart(hobby) {
    this.props.removeItem(this.props.user, hobby)
  }

  checkoutButton(userId, activeOrder, id) {
    this.props.completeOrder(userId, activeOrder)
    this.props.createOrder(id)
    this.setState({wasSubmitted: true})
  }

  render() {
    const {user, cart} = this.props
    return this.state.wasSubmitted ? (
      <button
        type="submit"
        onClick={() => this.props.history.push('/confirmation')}
      >
        View Order Confirmation
      </button>
    ) : (
      <div>
        <h2>Welcome to your cart {user.name}</h2>
        <h2>Order Hobbies: </h2>
        <ul>
          {cart.hobbies
            ? cart.hobbies.map(hobby => (
                <li key={hobby.id} className="cartItem">
                  <span>{hobby.name}:</span>
                  <div className="cartPrice">
                    <span>${hobby.price}</span>
                    <button
                      type="submit"
                      onClick={() => this.removeFromCart(hobby)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            : null}
        </ul>
        <h2> Total Price: ${user.activeOrder.totalPrice}</h2>
        <h3 />
        <button
          type="button"
          onClick={() =>
            this.checkoutButton(user.id, user.activeOrder, user.id)
          }
        >
          Checkout
        </button>
      </div>
    )
  }
}
/*
        - Render User Name on top
        - Render all current hobbies in active order
        - Render price next to hobby
        - Render total price at bottom of cart
        - Include button to checkout and complete order
        
        - Delete an item with a button

        - Guest Cart:
        - Merge guest cart into user cart when logging in?
     */

const mapToState = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}

const mapToDispatch = dispatch => {
  return {
    removeItem: (user, hobby) => dispatch(removeItem(user, hobby)),
    completeOrder: (userId, activeOrder) =>
      dispatch(completeOrder(userId, activeOrder)),
    createOrder: id => dispatch(createOrder(id))
  }
}

export default connect(mapToState, mapToDispatch)(Cart)
