import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { History } from 'history' // TODO: check for updates to switch to more recent version of history
import counterReducer from './demo/counter'

const rootReducer = (history: History) =>
    combineReducers({
        counter: counterReducer,
        router: connectRouter(history),
    })

export default rootReducer
