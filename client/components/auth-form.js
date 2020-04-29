import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Redirect} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {method, displayName, handleSubmit, error} = props

  return (
    <div>
      {props.user.id && <Redirect to="/profile" />}
      <div className="authForm">
        {displayName === 'Log In' ? (
          <div>
            <h1>{displayName}</h1>
            <form onSubmit={handleSubmit} name={method}>
              <div>
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input name="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">
                  <small>Password</small>
                </label>
                <input name="password" type="password" />
              </div>
              <div className="submitButton">
                <button type="submit">{displayName}</button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </form>
          </div>
        ) : (
          // signup form
          <div>
            <h1>{displayName}</h1>
            <form onSubmit={handleSubmit} name={method}>
              <div>
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input name="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">
                  <small>Password</small>
                </label>
                <input name="password" type="password" />
              </div>
              <div>
                <label htmlFor="username">
                  <small>Name</small>
                </label>
                <input name="username" type="text" />
              </div>
              <div>
                <label htmlFor="imageUrl">
                  <small>Profile Picture</small>
                </label>
                <input name="imageUrl" type="text" />
              </div>
              <div className="submitButton">
                <button type="submit">{displayName}</button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    method: 'login',
    displayName: 'Log In',
    error: state.user.error,
    user: state.user
  }
}

const mapSignup = state => {
  return {
    method: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      if (evt.target.name === 'login') {
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value

        dispatch(auth({email, password}, formName))
      } else {
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        const name = evt.target.username.value
        const imageUrl = evt.target.imageUrl.value

        dispatch(auth({email, password, name, imageUrl}, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  method: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
