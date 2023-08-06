import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, selectCount } from './StopWatchSlice'


export function StopWatch() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <>
            <div>
              <h1>
                Redux Stopwatch
              </h1>
        
              <div className='running-time'>
                {count}
              </div>
        
              <div>
                <button>+</button>
                <button onClick={() => dispatch(decrement())}>Start</button>
                <button>Stop</button>
                <button>Lap</button>
                <button>Reset</button>
                <button>-</button>
              </div>
            </div>
        </>
    )
}
