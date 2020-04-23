import axios from 'axios'
import history from '../history'

/**
 * UTILITIES
 */
const setActiveOrder = user => {
  user.orders.map(order => {
    if (order.isActive) {
      user.activeOrder = order
    }
  })

  user.orders = user.orders.filter(order => !order.isActive)

  return user
}

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    let user
    if (res.data) {
      //checking if the user exists, if it exists we set its active branch as a property and we take it out of the orders array
      user = setActiveOrder(res.data)
    }
    dispatch(getUser(user || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (formBody, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, formBody)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(setActiveOrder(res.data)))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
