import axios from 'axios'
import {bindActionCreators} from 'redux'

// action types
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_ALL_INSTRUCTORS = 'GET_ALL_INSTRUCTORS'
const GET_ALL_ADMINS = 'GET_ALL_ADMINS'
const GET_ALL_HOBBIES = 'GET_ALL_HOBBIES'
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'

// action creators
const getAllUsers = users => {
  return {
    type: GET_ALL_USERS,
    users
  }
}

const getAllInstructors = users => {
  const instructors = users.filter(user => user.isInstructor)
  return {
    type: GET_ALL_INSTRUCTORS,
    instructors
  }
}

const getAllAdmins = users => {
  const admins = users.filter(user => user.isAdmin)
  return {
    type: GET_ALL_ADMINS,
    admins
  }
}

const getAllHobbies = hobbies => {
  return {
    type: GET_ALL_HOBBIES,
    hobbies
  }
}

const getAllOrders = orders => {
  return {
    type: GET_ALL_ORDERS,
    orders
  }
}

// thunk creators
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getAllUsers(data))
      dispatch(getAllInstructors(data))
      dispatch(getAllAdmins(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchHobbies = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/hobbies')
      dispatch(getAllHobbies(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(getAllOrders(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// initial state
const initialState = {
  users: [],
  instructors: [],
  admins: [],
  hobbies: [],
  orders: []
}

// reducer
export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users
      }
    case GET_ALL_INSTRUCTORS:
      return {
        ...state,
        instructors: action.instructors
      }
    case GET_ALL_ADMINS:
      return {
        ...state,
        admins: action.admins
      }
    case GET_ALL_HOBBIES:
      return {
        ...state,
        hobbies: action.hobbies
      }
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.orders
      }
    default:
      return state
  }
}
