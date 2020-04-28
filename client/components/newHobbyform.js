import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNewHobby} from '../store/hobbies'
import {fetchHobby, revisedHobby, deleteHobby} from '../store/singleHobby'
import axios from 'axios'

const selectArr = new Array(30).fill(1)

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

export class HobbyForm extends Component {
  constructor() {
    super()
    this.state = {
      model: {
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        subject: '',
        tags: '',
        openSeats: 20
      },
      wasDeleted: false,
      wasUpdated: false,
      wasCreated: false,
      isEditing: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getTheHobby = this.getTheHobby.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
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
      data.tags = data.tags.join(', ')
      this.setState({model: data})
    } catch (error) {
      console.log(error)
    }
  }

  toCurrency(number) {
    const formatter = new Intl.NumberFormat('sv-SE', {
      style: 'decimal'
    })

    return formatter.format(number)
  }

  toggleEditing() {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleChange(event) {
    if (event.target.name === 'price') {
      event.target.value = Number(event.target.value.replace(/[.,]/g, ''))
    }
    const newState = {...this.state}
    newState.model[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault()

    const editPath = this.props.location.pathname.match('edit')
    if (editPath) {
      // this function will fill the form with hobby info
      this.props.updateHobby(this.props.match.params.id, this.state.model)
      this.setState({wasUpdated: true})
    } else {
      this.props.newHobby(this.state.model)
      this.setState({wasCreated: true})
    }
  }

  handleDelete() {
    this.props.removeHobby(this.state.model.id)
    this.setState({wasDeleted: true})
  }

  render() {
    return this.state.wasDeleted ? (
      <div>
        <h1>The resource was successfully deleted!</h1>
        <button
          onClick={() => this.props.history.push('/hobbies')}
          type="button"
        >
          Return to All Hobbies
        </button>
      </div>
    ) : this.state.wasUpdated ? (
      <div>
        <h1>The resource was successfully updated!</h1>
        <button
          onClick={() =>
            this.props.history.push(`/hobbies/${this.props.match.params.id}`)
          }
          type="button"
        >
          See your changes here!
        </button>
      </div>
    ) : this.state.wasCreated ? (
      <div>
        <h1>The resource was successfully created!</h1>
        <button
          onClick={() =>
            this.props.history.push(`/hobbies/${this.props.singleHobby.id}`)
          }
          type="button"
        >
          See your new resource here!
        </button>
      </div>
    ) : (
      <div className="formDiv">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name of your Class"
            value={this.state.model.name}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            type=""
            placeholder="What You’ll
                    Teach"
            value={this.state.model.description}
          />
          <label htmlFor="price">Price: </label>
          {this.state.isEditing ? (
            <input
              type="number"
              name="price"
              value={this.state.model.price}
              onChange={this.handleChange}
              onBlur={this.toggleEditing}
            />
          ) : (
            <input
              type="text"
              name="price"
              value={convertPrice(this.state.model.price)}
              onFocus={this.toggleEditing.bind(this)}
              readOnly
            />
          )}
          <label htmlFor="imageUrl">Cover Photo: </label>
          <input
            onChange={this.handleChange}
            name="imageUrl"
            type="text"
            placeholder="Cover Photo"
            value={this.state.model.imageUrl}
          />
          <label htmlFor="subject">Subject: </label>
          <input
            onChange={this.handleChange}
            name="subject"
            type="text"
            placeholder="What kind of Hobby is it?"
            value={this.state.model.subject}
          />
          <label htmlFor="tags">Tags:</label>
          <input
            onChange={this.handleChange}
            name="tags"
            type="text"
            placeholder="Key search terms"
            value={this.state.model.tags}
          />
          <label htmlFor="openSeats">Number of Seats:</label>
          <select
            onChange={this.handleChange}
            name="openSeats"
            value={this.state.model.openSeats}
            selected
          >
            {selectArr.map((val, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              )
            })}
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
