import { useState } from 'react'
import FunctionComp from './components/FunctionComp'
import ClassComp from './components/ClassComp'
import './App.css'

function App() {
  const [flag, setFlag] = useState(true)

  const handleClick = () => {
    setFlag(!flag)
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Toggle</button>
      </div>
      {flag ? <ClassComp /> : <FunctionComp />}
    </div>
  )
}

export default App
