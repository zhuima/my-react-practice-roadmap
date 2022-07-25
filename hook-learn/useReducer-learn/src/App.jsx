import { useState, useReducer } from 'react'
import './App.css'

const initialState = 0

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'change-state':
      return state + action.payload.amount
    case 'reset':
      return 0
    default:
      return state
  }
}

function App() {
  // const [count, setCount] = useState(0)

  // const increment = () => setCount(count + 1)

  // const decrement = () => setCount(count - 1)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Counter Value: {state}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button
        onClick={() =>
          dispatch({ type: 'change-state', payload: { amount: 5 } })
        }
      >
        Add 5
      </button>
    </div>
  )
}

export default App
