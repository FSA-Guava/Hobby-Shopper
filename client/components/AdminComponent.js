import React, {Component} from 'react'
import {connect} from 'react-redux'
import DashboardTable from './DashboardTable'
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

    if (this.state.selected === 'hobbies') headers.unshift('Edit') //this is for addding a edit column
    return (
      <div className="adminComponent">
        <ul className="menu">
          {menuProps.map(menuItem => {
            return (
              <li key={menuItem} onClick={() => this.selectProp(menuItem)}>
                {`${menuItem}`}
              </li>
            )
          })}
        </ul>
        <DashboardTable
          elements={this.props[this.state.selected]}
          history={this.props.history}
          selected={this.state.selected}
          headers={headers}
        />
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
