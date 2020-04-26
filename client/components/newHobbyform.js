import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNewHobby} from '../store/hobbies'
import {fetchHobby, revisedHobby, deleteHobby} from '../store/singleHobby'
import axios from 'axios'

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
    this.getTheHobby = this.getTheHobby.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const editPath = this.props.location.pathname.match('edit')
    if (editPath) {
      // this function will fill the form with hobby info
      this.getTheHobby(this.props.match.params.id)
    }
    console.log(
      'singleHobby on props from componentDidMount>>>',
      this.props.singleHobby
    )
  }

  async getTheHobby(id) {
    try {
      this.props.getHobby(id) // resets the store's state
      const {data} = await axios.get(`/api/hobbies/${id}`)
      delete data.rating // this will delete the ratings prop from extracted data
      this.setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const editPath = this.props.location.pathname.match('edit')
    if (editPath) {
      // this function will fill the form with hobby info
      this.props.updateHobby(this.props.match.params.id, this.state)
    } else {
      this.props.newHobby(this.state)
    }
  }

  handleDelete() {
    this.props.removeHobby(this.state.id)
  }

  render() {
    console.log('state>>>', this.state)
    return (
      <div className="formDiv">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name of your Class"
            value={this.state.name}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            type=""
            placeholder="What You’ll
                    Teach"
            value={this.state.description}
          />
          <label htmlFor="price">Price: </label>
          <input
            onChange={this.handleChange}
            name="price"
            type="number"
            value={this.state.price}
          />
          <label htmlFor="imageUrl">Cover Photo: </label>
          <input
            onChange={this.handleChange}
            name="imageUrl"
            type="text"
            placeholder="Cover Photo"
            value={this.state.imageUrl}
          />
          <label htmlFor="subject">Subject: </label>
          <input
            onChange={this.handleChange}
            name="subject"
            type="text"
            placeholder="What kind of Hobby is it?"
            value={this.state.subject}
          />
          <label htmlFor="tags">Tags:</label>
          <input
            onChange={this.handleChange}
            name="tags"
            type="text"
            placeholder="Key search terms"
            value={this.state.tags}
          />
          <label htmlFor="openSeats">Number of Seats:</label>
          <select
            onChange={this.handleChange}
            name="openSeats"
            value={this.state.openSeats}
            selected
          >
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
        <div>
          {this.props.location.pathname.match('edit') && (
            <button onClick={() => this.handleDelete()} type="button">
              Delete Hobby
            </button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    singleHobby: state.hobby
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newHobby: hobby => dispatch(fetchNewHobby(hobby)),
    getHobby: id => dispatch(fetchHobby(id)),
    updateHobby: (id, state) => dispatch(revisedHobby(id, state)),
    removeHobby: id => dispatch(deleteHobby(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HobbyForm)
