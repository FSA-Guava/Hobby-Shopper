import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import the thunk so we can get it into the dispatch

class AllHobbies extends React.Component {
  componentDidMount() {
    this.props.getHobbies()
  }

  render() {
    const hobbies = this.props
    return (
      <div>
        <h1>Here's the ALL Hobbies Page!</h1>
        {Array.isArray(hobbies) &&
          hobbies.map(hobby => {
            return (
              <div key={hobby.id}>
                <Link to={`/hobbies/${hobby.id}`}>
                  <ul name={hobby.name}>What You'll Learn: {hobby.name}</ul>
                  <img src={hobby.imageUrl} />
                </Link>
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
    getHobbies: () => {
      dispatch(/*INSERT THUNK HERE*/)
    }
  }
}

// NOTE...this may be exported via connect later.
export default connect(mapToState, mapToDispatch)(AllHobbies)
