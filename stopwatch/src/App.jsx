import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Redux Stopwatch
        </h1>

        <div className='running-time'>
          00:01:49
        </div>

        <div>
          <button>+</button>
          <button>Start</button>
          <button>Stop</button>
          <button>Lap</button>
          <button>Reset</button>
          <button>-</button>
        </div>
      </div>
    </>
  )
}

export default App
