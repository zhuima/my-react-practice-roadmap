import React, { useState, useEffect } from 'react'

const FunctionComp = () => {
  const [time, setTime] = useState(new Date().toLocaleString())

  const [message, setMessage] = useState('Function Component')

  useEffect(() => {
    console.log('====================================')
    console.log('component will be mounted or updated')
    console.log('====================================')
    const interval = setInterval(showCurrDate, 1000)

    return () => {
      console.log('====================================')
      console.log('Cleanup of interval')
      console.log('====================================')
      clearInterval(interval)
    }
  }, [])

  const showCurrDate = () => {
    setTime(new Date().toLocaleString())
  }

  return (
    <div>
      <div>{time}</div>
      <button onClick={showCurrDate}>Show Date</button>
      <div>{message}</div>
      <button
        onClick={() => {
          setMessage('Message is Changed')
        }}
      >
        Change Message
      </button>
    </div>
  )
}

export default FunctionComp
