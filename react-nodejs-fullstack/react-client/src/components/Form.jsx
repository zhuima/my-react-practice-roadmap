import React from 'react'
import InputLabel from './InputLabel'
import './index.css'

const isNullOrUndefined = (prop) => prop === null || prop === undefined
const isEmptyString = (prop) => isNullOrUndefined(prop) || prop === ''
const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1).toUpperCase()

const titleFormName = (name) => {
  if (isEmptyString(name)) {
    return ''
  }
  return name
    .split(/(?=[A-Z])|\s/)
    .map((s) => capitalize(s))
    .join(' ')
}

const Form = ({ entity }) => {
  return (
    <form className="form">
      {Object.keys(entity).map((key, value) => {
        if (key === 'id') {
          return <input type="hidden" name="id" key="id" value={value} />
        } else {
          return (
            <InputLabel
              id={key}
              key={key}
              label={titleFormName(key)}
              type={typeof value === 'boolean' ? 'checkbox' : 'text'}
              value={value}
            />
          )
        }
      })}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
