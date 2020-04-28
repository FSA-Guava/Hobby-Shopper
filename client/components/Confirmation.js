import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

class Confirmation extends React.Component {
  render() {
    const {user, cart} = this.props
    console.log(user)
    const [last] = user.orders.sort(
      (first, second) => (first.id < second.id ? 1 : -1)
    )

    console.log(user)
    return (
      <div className="confirmationDiv">
        {user.name ? (
          <div>
            <h3>{user.name}, Thank you for your purchase!</h3>
            <h3>
              Here is your Purchase Code:{' '}
              <span className="purchaseCode">{last.purchaseCode}</span>
            </h3>
            <div>
              Purchased Hobbies:
              <ol>
                {last.hobbies.map(hobby => (
                  <li key={hobby.id}>{hobby.name}</li>
                ))}
              </ol>
              Total Price: ${convertPrice(last.totalPrice)}
            </div>
          </div>
        ) : (
          <div>
            <h3>Thank you for your purchase!</h3>
            <h3>
              Here is your Purchase Code:{' '}
              <span className="purchaseCode">{last.purchaseCode}</span>
            </h3>
            <div>
              Purchased Hobbies:
              <ol>
                {last.hobbies.map(hobby => (
                  <li key={hobby.id}>{hobby.name}</li>
                ))}
              </ol>
              Total Price: ${convertPrice(last.totalPrice)}
            </div>
          </div>
        )}
        <button
          type="submit"
          onClick={() => this.props.history.push('/hobbies')}
        >
          Continue Shopping
        </button>
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
