import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Confirmation extends React.Component {
  render() {
    const {user, cart} = this.props
    console.log(user)
    return (
      <div>
        {user.name ? (
          <h3>{user.name}, Thank you for your purchase!</h3>
        ) : (
          <h3>Thank you for your purchase!</h3>
        )}
        <h4>{cart}</h4>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}
/*
- Username & "Thanks for your purchase"
- List completed items
- Total price
- Link to each hobby single hobby page
- Continue Shopping button link to all hobbies
- Show confirmation code

- Form to send email of confirmation code?
 */
export default connect(mapToState)(Confirmation)
