import axios from 'axios'

// action types
const GET_HOBBY = 'GET_HOBBY'

// NOTE: is this for admins & instructors only?
const UPDATE_HOBBY = 'UPDATE_HOBBY'

// action creators
const gotHobby = hobby => ({type: GET_HOBBY, hobby})
const updatedHobby = hobby => ({type: UPDATE_HOBBY, hobby})

// thunk creators
export const fetchHobby = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/hobbies/${id}`)
      dispatch(gotHobby(data))
    } catch (error) {
      console.log('ERROR getting single hobby')
    }
  }
}

export const revisedHobby = (id, state) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/hobbies/${id}`, state)
      dispatch(updatedHobby(data))
    } catch (error) {
      console.log('ERROR updating this hobby')
    }
  }
}

// initial state
const initialState = {}

// reducer
export default function singleHobbyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOBBY:
      return action.hobby
    case UPDATE_HOBBY:
      return action.hobby
    default:
      return state
  }
}
