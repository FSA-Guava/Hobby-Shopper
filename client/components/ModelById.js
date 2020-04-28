import React from 'react'

export default function ModelById(props) {
  return (
    <td>
      {`[`}
      {Array.isArray(props.model)
        ? props.model.map((model, index) => {
            return `${model.id}${index < props.model.length - 1 ? ', ' : ''}`
          })
        : props.model.id}
      {`]`}
    </td>
  )
}
