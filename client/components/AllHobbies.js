import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import the thunk so we can get it into the dispatch
import {fetchHobbies, fetchNewHobby, deleteHobby} from '../store/hobbies'

class AllHobbies extends React.Component {
  componentDidMount() {
    this.props.getHobbies()
  }

  render() {
    const {hobbies} = this.props
    return (
      <div>
        <h1>Here's the ALL Hobbies Page!</h1>
        {Array.isArray(hobbies) &&
          hobbies.map(hobby => {
            return (
              <div key={hobby.id}>
                <ul>
                  <Link to={`/hobbies/${hobby.id}`}>
                    <h3 name={hobby.name}>Hobby Name: {hobby.name}</h3>
                    <img src={hobby.imageUrl} />
                  </Link>
                </ul>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapToState = state => {
  return {
    hobbies: state.hobbies
  }
}

const mapToDispatch = dispatch => {
  // set a key that refers to the thunk.
  return {
    getHobbies: () => dispatch(fetchHobbies()),
    getHobby: hobby => dispatch(fetchNewHobby(hobby)),
    removeHobby: id => dispatch(deleteHobby(id))
  }
}

export default connect(mapToState, mapToDispatch)(AllHobbies)
