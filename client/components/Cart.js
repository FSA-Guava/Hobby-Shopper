import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Cart extends React.Component {
  componentDidMount() {
    console.log('this.props>>>>', this.props)
  }

  render() {
    return (
      <div>
        <h2>Welcome, name</h2>
        <h3 />
        <button type="button" onClick={() => {}}>
          PURCHASE
        </button>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    user: state.user
  }
}

// const mapToDispatch = dispatch => {

// }

export default connect(mapToState)(Cart)

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
