import React, {Component} from 'react'
import {connect} from 'react-redux'

export class GetAllData extends Component {
  componentDidMount() {
    //get everythinh
  }

  render() {
    return <div />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GetAllData)
