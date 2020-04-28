import axios from 'axios'
import {decreaseOpenSeats} from './hobbies'
//action types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const COMPLETE_ORDER = 'COMPLETE_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'

//action creator
// const getUser =
const addedItem = order => ({type: ADD_ITEM, order})
const removedItem = order => ({type: REMOVE_ITEM, order})
const completedOrder = order => ({type: COMPLETE_ORDER, order})
const createdOrder = order => ({type: CREATE_ORDER, order})

//THUNK CREATOR

//did we end up needing this or can we delete?
let initialState = {
  hobbies: []
}

// call checkout route on (userid/'guest', activeOrder)
// dispatch multiple actions
// action for checkout will remove activeOrder (on user reducer)
// take order & put on ordersArray of user
// route for creating new Order on user
// use post/ request with body as {userId: user.id}
// (2 api routes / 2 actions)
// also add actions and case to user reducer

//checkout thunk creator
export const completeOrder = (userId, activeOrder) => {
  return async function(dispatch) {
    try {
      if (userId) {
        const {data} = await axios.put(
          `/api/orders/${userId}/checkout`,
          activeOrder
        )
        dispatch(completedOrder(data))
        dispatch(decreaseOpenSeats(activeOrder.hobbies))
      } else {
        const {data} = await axios.put(
          `/api/orders/guest/checkout`,
          activeOrder
        )
        dispatch(completedOrder(data))
        dispatch(decreaseOpenSeats(activeOrder.hobbies))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

//create new blank order thunk creator
export const createOrder = (id = null) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.post('/api/orders', {userId: id})
      data.hobbies = []
      dispatch(createdOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addItem = (user, hobby) => {
  return async function(dispatch) {
    try {
      let res
      if (user.id && hobby.id) {
        res = await axios.put(
          `/api/orders/${user.id}/add/${hobby.id}`,
          user.activeOrder
        )
      } else {
        res = await axios.put(
          `/api/orders/guest/add/${hobby.id}`,
          user.activeOrder
        )
        if (res) {
          await axios.put(`/api/hobbies/${hobby.id}/decrease`)
        }
      }
      dispatch(addedItem(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeItem = (user, hobby) => {
  return async function(dispatch) {
    try {
      let res
      if (user.id && hobby.id) {
        res = await axios.put(
          `/api/orders/${user.id}/remove/${hobby.id}`,
          user.activeOrder
        )
      } else {
        res = await axios.put(
          `/api/orders/guest/remove/${hobby.id}`,
          user.activeOrder
        )
      }
      dispatch(removedItem(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}

//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user.activeOrder ? action.user.activeOrder : {}
    case REMOVE_USER:
      return initialState
    case ADD_ITEM:
      return action.order
    case REMOVE_ITEM:
      return action.order
    case CREATE_ORDER:
      return action.order
    default:
      return state
  }
}

/*
        - Render User Name on top
        - Render all current hobbies in active order
        - Delete an item with a button
        - Render price next to hobby
        - Render total price at bottom of cart
        - Include button to checkout and complete order

        - Guest Cart:
        - Merge guest cart into user cart when logging in?
     */
