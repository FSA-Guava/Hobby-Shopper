import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeItem, completeOrder, createOrder} from '../store/cart'

const convertPrice = price => {
  let comma = price > 0 ? ',' : ''
  comma = price < 100 ? '0,' : comma
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

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkoutButton = this.checkoutButton.bind(this)
  }
  componentDidMount() {
    this.setState({loading: false})
  }

  removeFromCart(hobby) {
    this.props.removeItem(this.props.user, hobby)
  }

  checkoutButton(userId, activeOrder, id) {
    this.props.completeOrder(userId, activeOrder)
    this.props.createOrder(id)
    this.setState({loading: true})
    setTimeout(() => {
      this.props.history.push('/confirmation')
    }, 2500)
  }

  render() {
    const {user, cart} = this.props
    return this.state.loading ? (
      <div className="orderSuccess">
        <h2>Confirming your order...</h2>
        {/* <button
        type="submit"
        onClick={() => this.props.history.push('/confirmation')}
        >
        Take me there!
      </button> */}
      </div>
    ) : (
      <div className="cart">
        <h2>Welcome to your cart {user.name}</h2>
        <h2>Order Hobbies: </h2>
        <ul>
          {cart.hobbies
            ? cart.hobbies.map(hobby => (
                <li key={hobby.id} className="cartItem">
                  <span>{hobby.name}:</span>
                  <div className="cartPrice">
                    <span>${convertPrice(hobby.price)}</span>
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
        <h2> Total Price: ${convertPrice(user.activeOrder.totalPrice)}</h2>
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
