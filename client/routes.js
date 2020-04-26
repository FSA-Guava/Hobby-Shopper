import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Login,
  Signup,
  UserProfile,
  AllHobbies,
  SingleHobby,
  Navbar,
  AdminComponent,
  HobbyForm
} from './components'

import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.logUser()
  }

  render() {
    const {isLoggedIn, isAdmin, isInstructor} = this.props

    return (
      <div>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/hobbies" component={AllHobbies} />
          {(isAdmin || isInstructor) && (
            <Route exact path="/hobbies/add" component={HobbyForm} />
          )}
          {(isAdmin || isInstructor) && (
            <Route exact path="/hobbies/:id/edit" component={HobbyForm} />
          )}
          <Route path="/hobbies/:id" component={SingleHobby} />
          {isLoggedIn && <Route path="/profile" component={UserProfile} />}
          {isLoggedIn &&
            isAdmin && <Route path="/admin" component={AdminComponent} />}
        </Switch>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
    isInstructor: state.user.isInstructor
  }
}

const mapDispatch = dispatch => {
  return {
    logUser() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  logUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
