import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StopWatch } from './features/counter/StopWatch'
import './App.css'

function App() {

  return (
    <div>
      <StopWatch />
    </div>
  )
}

export default App
