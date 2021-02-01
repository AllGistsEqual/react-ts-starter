import React from 'react'
import { decrement, increment } from '../../redux/demo/counter'
import { useTypedDispatch, useTypedSelector } from '../../redux'

const Counter = (): React.ReactElement => {
    const value = useTypedSelector(state => state.counter)
    const dispatch = useTypedDispatch()

    return (
        <>
            <input type="text" disabled value={value} />
            <button type="button" title="increment" onClick={() => dispatch(increment(1))}>
                +1
            </button>
            <button type="button" title="increment" onClick={() => dispatch(decrement(1))}>
                -1
            </button>
        </>
    )
}

export default Counter
