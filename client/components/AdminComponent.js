import React, {Component} from 'react'
import {connect} from 'react-redux'

// import thunks here:
import {fetchUsers, fetchHobbies, fetchOrders} from '../store/admin'

export class AdminComponent extends Component {
  constructor() {
    super()
    this.state = {
      selected: 'orders'
    }
    this.selectProp = this.selectProp.bind(this)
  }

  componentDidMount() {
    this.props.getData()
  }

  selectProp(propName) {
    this.setState({
      selected: propName
    })
  }

  render() {
    // this.props
    const menuProps = Object.keys(this.props).filter(
      key =>
        key !== 'match' &&
        key !== 'location' &&
        key !== 'history' &&
        key !== 'staticContext' &&
        key !== 'getData'
    )
    const headers =
      this.props[this.state.selected] && this.props[this.state.selected][0]
        ? Object.keys(this.props[this.state.selected][0])
        : []

    headers.unshift('Edit') //this is for addding a edit column
    return (
      <div>
        <ul className="menu">
          {menuProps.map(menuItem => {
            return (
              <li key={menuItem} onClick={() => this.selectProp(menuItem)}>
                {`${menuItem}`}
              </li>
            )
          })}
        </ul>
        <table>
          <thead>
            <tr>
              <th colSpan="3">
                {this.state.selected[0].toUpperCase() +
                  this.state.selected.slice(1)}
              </th>
            </tr>
            <tr>
              {headers.map((header, index) => {
                return <th key={index}>{header}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.props[this.state.selected].map(category => {
              console.log('THIS IS CATEGORY>>>>>>', category)
              return (
                <tr key={category.id}>
                  <td
                    className="editButton"
                    onClick={() =>
                      this.props.history.push(
                        `/${this.state.selected}/${category.id}/edit`
                      )
                    }
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  </td>
                  {headers.slice(1).map(header => {
                    if (typeof category[header] !== 'object') {
                      return <td>{`${category[header]}`}</td>
                    } else {
                      return <td>{JSON.stringify(category[header])}</td>
                    }
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    admins: state.dashboard.admins,
    users: state.dashboard.users,
    instructors: state.dashboard.instructors,
    hobbies: state.dashboard.hobbies,
    orders: state.dashboard.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(fetchHobbies())
      dispatch(fetchUsers())
      dispatch(fetchOrders())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent)
