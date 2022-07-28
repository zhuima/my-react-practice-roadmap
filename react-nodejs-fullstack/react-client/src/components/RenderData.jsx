import React from 'react'
import './render-data.css'

const ReactData = ({ data }) => {
  return (
    <div className="render-data">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default ReactData
