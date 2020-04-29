import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const hobbies = props.user.activeOrder.hobbies
  return (
    <div className="profilePage">
      <div className="profilePhoto">
        <img src={props.user.imageUrl} />
      </div>
      <div className="profileContent">
        <h3>Welcome, {props.user.name}</h3>
        <p>{props.user.email}</p>
        {/* <p>{}</p> */}
        <h4>Active Order</h4>
        <div>
          Hobbies in Cart:
          <ol>
            {Array.isArray(hobbies) &&
              hobbies.map(hobby => <li key={hobby.id}>{hobby.name}</li>)}
          </ol>
          Total Price: {props.user.activeOrder.totalPrice}
        </div>

        <h4>Past Purchases</h4>
        <table>
          <thead>
            <th>Date</th>
            <th>Purchase Code</th>
            <th>Items Purchased</th>
          </thead>
          <tbody>
            {!props.user.orders.length ? (
              <tr>
                <td />
                <td />
                <td />
              </tr>
            ) : (
              props.user.orders.map(order => (
                <tr key={order.id}>
                  <td>{order.updatedAt.match(/.+?(?=[T])/g)[0]}</td>
                  <td>{order.purchaseCode}</td>
                  <td>
                    <ol>
                      {order.hobbies.map(hobby => (
                        <li key={hobby.id}>{hobby.name}</li>
                      ))}
                    </ol>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
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
