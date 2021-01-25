import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = props => {
  const {handleClick, isLoggedIn, isAdmin, isInstructor} = props
  return (
    <div className="navBar-Main">
      <div className="navBar">
        <span
          onClick={() => props.history.push('/')}
          className="siteName navLink"
        >
          HS
        </span>
        <Link to="/hobbies" className="navLink">
          All Hobbies
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="navBar">
          {/* The navbar will show these links after you log in */}
          {isAdmin && (
            <div className="navBar">
              <Link to="/admin" className="navLink">
                Dashboard
              </Link>
            </div>
          )}
          {(isInstructor || isAdmin) && (
            <div className="navBar">
              <Link to="/hobbies/add" className="navLink">
                Make Your Hobby Class
              </Link>
            </div>
          )}
          <Link to="/profile" className="navLink">
            Profile
          </Link>

          <a href="/" onClick={handleClick} className="navLink">
            Logout
          </a>

          <Link to="/cart" className="shoppingCart navLink">
            <i className="fas fa-shopping-cart" />
          </Link>
        </div>
      ) : (
        <div className="navBar">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className="navLink">
            Login
          </Link>
          <Link to="/signup" className="navLink">
            Sign Up
          </Link>
          <Link to="/cart" className="shoppingCart navLink">
            <i className="fas fa-shopping-cart" />
          </Link>
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
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
    isInstructor: state.user.isInstructor
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
