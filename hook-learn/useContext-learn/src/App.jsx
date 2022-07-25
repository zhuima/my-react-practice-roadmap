import { useState, createContext } from 'react'
import Person from './components/Person'
import './App.css'

export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  let user = 'zhuima'

  return (
    <div className="App">
      <UserContext.Provider value={'Hello'}>
        <ChannelContext.Provider value={'zhuima'}>
          <Person />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
