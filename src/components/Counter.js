import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/reducer'

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter