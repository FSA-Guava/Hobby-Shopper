import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// Import the thunk here!

export class SingleHobby extends React.Component {
  componentDidMount() {
    this.props.grabTheHobby()
  }

  render() {
    const {hobby} = this.props
    return (
      <div>
        <h1>THIS IS SINGLE HOBBY Component!</h1>
        <h3>{hobby.name}</h3>
        <img src={hobby.imageUrl} />
        <p>{hobby.description}</p>
        <ul>
          <li>Cost: {hobby.price}</li>
          <li>Hobby Category: {hobby.subject}</li>
          <li>Rating: {hobby.rating}</li>
          <li>Available Seats: {hobby.openSeats}</li>
        </ul>
        <ul>
          <li>This Hobby's Tags: {hobby.tags}</li>
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
  return {
    grabTheHobby: () => dispatch(/*INSERT THUNK HERE!*/)
  }
}

export default connect(mapToState, mapToDispatch)(SingleHobby)
