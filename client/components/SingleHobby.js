import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// Import the thunk here!
import {fetchHobby, revisedHobby} from '../store/singleHobby'

const convertPrice = price => {
  let comma = price > 0 ? ',' : ''
  comma = price < 100 ? '0,' : comma
  return (
    String(price)
      .slice(0, -2)
      .replace('.', '') +
    comma +
    String(price)
      .slice(-2)
      .replace('.', '')
  )
}

export class SingleHobby extends React.Component {
  componentDidMount() {
    this.props.grabTheHobby()
  }

  render() {
    const {hobby} = this.props
    return (
      <div>
        <h1>THIS IS SINGLE HOBBY Page!</h1>
        <h3>{hobby.name}</h3>
        <img src={hobby.imageUrl} />
        <p>{hobby.description}</p>
        <ul>
          <li>Cost: {convertPrice(hobby.price)}</li>
          <li>Hobby Category: {hobby.subject}</li>
          <li>Rating: {hobby.rating}</li>
          {!hobby.openSeats ? (
            <li>This Hobby Class is full :sad:</li>
          ) : (
            <li>Available Seats: {hobby.openSeats}</li>
          )}
          {hobby.tags && hobby.tags.length ? (
            <li>This Hobby's Tags: {hobby.tags.join(' ')}</li>
          ) : (
            <li>There aren't any tags for this hobby</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapToState = state => {
  return {
    hobby: state.hobby
  }
}

const mapToDispatch = (dispatch, ownProps) => {
  // NOTE: IN JPFP, this is where props for dispatch were actually located (on ownProps.match.params)!
  const hobbyId = ownProps.match.params.id
  // const {data} = ownProps.match.params // <--- CHECK WITH GROUP!
  return {
    grabTheHobby: () => dispatch(fetchHobby(hobbyId))
    // updateTheHobby: () => dispatch(revisedHobby(hobbyId, data)),
  }
}

export default connect(mapToState, mapToDispatch)(SingleHobby)
