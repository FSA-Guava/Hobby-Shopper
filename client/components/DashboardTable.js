import React from 'react'
import ModelById from './ModelById'

export default class DashboardTable extends React.Component {
  constructor() {
    super()
    this.state = {
      modelSelected: {}
    }
    this.selectModel = this.selectModel.bind(this)
  }

  selectModel(model) {
    console.log(model)
    this.setState({modelSelected: model})
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {
              <th colSpan="3">
                {this.props.selected[0].toUpperCase() +
                  this.props.selected.slice(1)}
              </th>
            }
          </tr>
          <tr>
            {this.state.modelSelected.id
              ? Object.keys(this.state.modelSelected).map((header, index) => {
                  return <th key={index}>{header}</th>
                })
              : this.props.headers.map((header, index) => {
                  return <th key={index}>{header}</th>
                })}
          </tr>
        </thead>
        <tbody>
          {this.props.elements.map(category => {
            return (
              <tr key={category.id}>
                {this.props.selected === 'hobbies' && (
                  <td
                    className="editButton"
                    onClick={() =>
                      this.props.history.push(
                        `/${this.props.selected}/${category.id}/edit`
                      )
                    }
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  </td>
                )}
                {this.props.headers
                  .slice(this.props.selected === 'hobbies' ? 1 : 0)
                  .map(header => {
                    if (typeof category[header] !== 'object') {
                      return <td>{`${category[header]}`}</td>
                    } else if (category[header] !== null) {
                      return (
                        <ModelById
                          key={category[header] && category[header]}
                          selectModel={this.selectModel}
                          selected={this.props.selected}
                          model={category[header]}
                        />
                      )
                    } else {
                      return <td>null</td>
                    }
                  })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
