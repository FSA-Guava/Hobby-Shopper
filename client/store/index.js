import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// reducers
import user from './user'
import hobbiesReducer from './hobbies'
import singleHobbyReducer from './singleHobby'
import cartReducer from './cart'
import adminReducer from './admin'

const reducer = combineReducers({
  user,
  dashboard: adminReducer,
  cart: cartReducer,
  hobbies: hobbiesReducer,
  hobby: singleHobbyReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
// What is this doing below?
export * from './user'
