import React from 'react'
import Input from './Input'

const InputLabel = ({ label, error, info, ...inputProps }) => {
  return (
    <p className="input-label">
      <label htmlFor={inputProps.id}>
        {label}
        <Input {...inputProps} />
      </label>
    </p>
  )
}

export default InputLabel
