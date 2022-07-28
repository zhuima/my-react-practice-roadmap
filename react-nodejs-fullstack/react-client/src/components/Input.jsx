import React, { useState, useRef, useEffect } from 'react'

// 自己封装了一层
const Input = ({
  id,
  value = '',
  type = 'text',
  readOnly = false,
  required = false,
}) => {
  const input = useRef(null)

  useEffect(() => {
    if (input.current) {
      const sValue = value.toString()

      if (type === 'checkbox') {
        input.current.checked = sValue === 'true'
        input.current.value = 'true'
      } else {
        input.current.value = sValue
      }
    }
  }, [type, value])
  return (
    <input
      ref={input}
      id={id}
      name={id}
      type={type}
      readOnly={readOnly}
      required={required}
      disabled={readOnly}
    />
  )
}

export default Input
