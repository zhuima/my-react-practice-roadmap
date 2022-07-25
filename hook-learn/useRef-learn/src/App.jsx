import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')
  const inputEle = useRef('')
  const prevVal = useRef('')

  console.log(inputEle)

  const resetInput = () => {
    setName('')
    inputEle.current.focus()
  }

  useEffect(() => {
    prevVal.current = counter
  }, [counter])

  return (
    <div className="App">
      <h2 align="center">{name}</h2>

      <input
        ref={inputEle}
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={resetInput}>button</button>

      <h3>Random counter: {counter}</h3>
      <p>previous counter: {prevVal.current}</p>
      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
        generate
      </button>
    </div>
  )
}

export default App
