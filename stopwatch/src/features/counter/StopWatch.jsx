import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './StopWatchSlice'


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
                <button onClick={() => dispatch(increment())}>+</button>
                <button>Start</button>
                <button>Stop</button>
                <button>Lap</button>
                <button>Reset</button>
                <button onClick={() => dispatch(decrement())}>-</button>
              </div>
            </div>
        </>
    )
}
