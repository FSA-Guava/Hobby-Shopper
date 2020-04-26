import axios from 'axios'

//action types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

//action creator
// const getUser =
const addedItem = order => ({type: ADD_ITEM, order})
const removedItem = order => ({type: REMOVE_ITEM, order})

//THUNK CREATOR
let initialState = {
  hobbies: []
}

export const addItem = (user, hobby) => {
  return async function(dispatch) {
    try {
      console.log('user', user)
      console.log('hobby', hobby)
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
      console.log('user', user)
      console.log('hobby', hobby)
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

//initialState
// initialState: { }

//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user.activeOrder
    case REMOVE_USER:
      return {}
    case ADD_ITEM:
      return action.order
    case REMOVE_ITEM:
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
