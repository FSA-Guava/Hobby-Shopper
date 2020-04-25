import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const {user} = this.props
    console.log('this.props>>>>', this.props.user)
    return (
      <div>
        <h2>Welcome to your cart {user.name}</h2>
        <h2>
          {' '}
          Order Hobbies:{' '}
          {user.activeOrder.hobbies
            ? user.activeOrder.hobbies.map(hobby => (
                <div key={hobby.id}>
                  <li> {hobby.name} </li>
                  <h4> ${hobby.price}</h4>
                </div>
              ))
            : null}
        </h2>
        <h2> Total Price: {user.activeOrder.totalPrice}</h2>
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
        - Delete an item with a button
        - Render price next to hobby
        - Render total price at bottom of cart
        - Include button to checkout and complete order

        - Guest Cart:
        - Merge guest cart into user cart when logging in?
     */

const mapToState = state => {
  return {
    user: state.user
  }
}

// const mapToDispatch = dispatch => {

// }

export default connect(mapToState)(Cart)
