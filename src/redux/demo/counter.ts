import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

const counterSlice = createSlice({
    name: '[DEMO] counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
        decrement: (state, action: PayloadAction<number>) => state - action.payload,
    },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
