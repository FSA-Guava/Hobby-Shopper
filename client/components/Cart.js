import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const {user, cart} = this.props
    return (
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
                    <button type="submit">Delete</button>
                  </div>
                </li>
              ))
            : null}
        </ul>
        <h2> Total Price: ${user.activeOrder.totalPrice}</h2>
        <h3 />
        <button type="button" onClick={() => {}}>
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

// const mapToDispatch = dispatch => {

// }

export default connect(mapToState)(Cart)
