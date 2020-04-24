import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = props => {
  const {handleClick, isLoggedIn} = props
  return (
    <div className="navBar">
      <div className="navBar">
        <span onClick={() => props.history.push('/')} className="siteName">
          Hobby Shopper!
        </span>
        <Link to="/hobbies" className="navLink">
          All Hobbies
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="navBar">
          {/* The navbar will show these links after you log in */}
          <ul>
            <Link to="/profile" className="navLink">
              Profile
            </Link>
          </ul>
          <ul>
            <a href="#" onClick={handleClick} className="navLink">
              Logout
            </a>
          </ul>
        </div>
      ) : (
        <div className="navBar">
          {/* The navbar will show these links before you log in */}
          <ul>
            <Link to="/login" className="navLink">
              Login
            </Link>
          </ul>
          <ul>
            <Link to="/signup" className="navLink">
              Sign Up
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
