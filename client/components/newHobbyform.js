import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNewHobby} from '../store/hobbies'

const selectArr = new Array(25).fill(1)

export class HobbyForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      subject: '',
      tags: '',
      openSeats: 20
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.newHobby(this.state)
  }
  //this.props.newHobby
  render() {
    return (
      <div className="formDiv">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name of your Class"
          />
          <label htmlFor="description">Description: </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            type=""
            placeholder="What You’ll 
                    Teach"
          />
          <label htmlFor="price">Price: </label>
          <input onChange={this.handleChange} name="price" type="number" />
          <label htmlFor="imageUrl">Cover Photo: </label>
          <input
            onChange={this.handleChange}
            name="imageUrl"
            type="text"
            placeholder="Cover Photo"
          />
          <label htmlFor="subject">Subject: </label>
          <input
            onChange={this.handleChange}
            name="subject"
            type="text"
            placeholder="What kind of Hobby is it?"
          />
          <label htmlFor="tags">Tags:</label>
          <input
            onChange={this.handleChange}
            name="tags"
            type="text"
            placeholder="Key search terms"
          />
          <label htmlFor="tags">Number of Seats:</label>
          <select onChange={this.handleChange} name="openSeats">
            {selectArr.map((val, index) => {
              return (
                <option key={index} value={index + 5}>
                  {index + 5}
                </option>
              )
            })}
            <option key={30} value={30}>
              30
            </option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newHobby: hobby => dispatch(fetchNewHobby(hobby))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HobbyForm)
