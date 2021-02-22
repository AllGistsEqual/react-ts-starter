import { combineReducers } from '@reduxjs/toolkit'
import articleReducer from './ducks/articles'

const rootReducer = combineReducers({
    articles: articleReducer,
})

export default rootReducer
