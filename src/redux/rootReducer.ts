import { combineReducers } from '@reduxjs/toolkit'
import articleReducer from './ducks/articles'
import router from './router'

const rootReducer = combineReducers({
    router,
    articles: articleReducer,
})

export default rootReducer
