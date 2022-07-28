import { useState } from 'react'
import { Link, Routes, Route, HashRouter as Router } from 'react-router-dom'
import AddEditNote from './components/AddEditNote'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ul>
                <li>
                  <Link to="edit-note">Edit Note</Link>
                </li>
              </ul>
            }
          />
          <Route path="/edit-note" element={<AddEditNote />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
