import axios from 'axios'

//action tyoes
const GET_HOBBIES = 'GET_HOBBIES'

const ADD_HOBBY = 'ADD_HOBBY'

const REMOVE_HOBBY = 'REMOVE_HOBBY'

// adction creators

const gotHobbies = hobbies => ({
  type: GET_HOBBIES,
  hobbies
})

const addedHobby = hobby => ({
  type: ADD_HOBBY,
  hobby
})

// revisit: may not need to include id?
const removedHobby = id => ({
  type: REMOVE_HOBBY,
  id
})

//Thunks
export const fetchHobbies = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/hobbies')
      const hobbies = response.data
      dispatch(gotHobbies(hobbies))
    } catch (error) {
      console.log('Error retrieving hobbies')
    }
  }
}

export const fetchNewHobby = hobby => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/hobbies', hobby)
      dispatch(addedHobby(data))
    } catch (error) {
      console.log('Error creating hobby')
    }
  }
}

export const deleteHobby = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/hobbies/${id}`)
      dispatch(removedHobby(id))
    } catch (error) {
      console.log('Error removing hobby')
    }
  }
}

const initialState = []

export default function hobbiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOBBIES:
      return action.hobbies
    case ADD_HOBBY:
      return [...state, action.hobby]
    case REMOVE_HOBBY:
      return state.filter(hobby => hobby.id !== action.id)
    default:
      return state
  }
}
