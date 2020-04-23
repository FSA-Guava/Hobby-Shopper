import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <img src={props.user.imageUrl} />
      <h3>Welcome, {props.user.name}</h3>
      <h4>Profile</h4>
      <p>{props.user.email}</p>
      {/* <p>{}</p> */}
      <h4>Active Order</h4>
      <div>
        Hobbies in Cart:
        <ol>
          {props.user.activeOrder.hobbies.map(hobby => (
            <li key={hobby.id}>{hobby.name}</li>
          ))}
        </ol>
        Total Price: {props.user.activeOrder.totalPrice}
      </div>

      <h4>Past Purchases</h4>
      <ul>
        {props.user.orders.map(order => (
          <li key={order.id}>
            Date: {order.updatedAt.match(/.+?(?=[T])/g)[0]} || PurchaseCode:{' '}
            {order.purchaseCode}
            <ol>
              {order.hobbies.map(hobby => <li key={hobby.id}>{hobby.name}</li>)}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
