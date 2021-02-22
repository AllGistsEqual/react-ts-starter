/* eslint-disable no-param-reassign */
import { Middleware } from 'redux'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { apiRequest } from './api'

export type Article = {
    title: string
    author: string
    date: number
    tags: string[]
    excerpt: string
    urls: {
        page: string
        url: string
    }[]
}

export type RequestStatus = 'idle' | 'pending'

type InitialState = {
    data: Article[] | null
    status: RequestStatus
}

const initialState: InitialState = {
    data: null,
    status: 'idle'
}

export const requestArticlesData = createAction(
    '[ARTICLE] request data'
)
export const setArticlesStatus = createAction(
    '[ARTICLE] set status',
    (status: RequestStatus) => ({ payload: { status } })
)
export const storeArticlesData = createAction(
    '[ARTICLE] store data',
    (data: Article[]) => ({ payload: { data } })
)
export const cancelArticlesRequest = createAction(
    '[ARTICLE] cancel failed request',
    (error: string) => ({ payload: { error } })
)

export const articlesMiddleware: Middleware = ({ dispatch, getState }) => next => action => {
    next(action)

    if (requestArticlesData.match(action)) {
        const state = getState()
        if (!(state.article && state.article.status === 'pending')) {
            dispatch(apiRequest({
                url: '/articles',
                method: 'GET',
                onSuccess: data => storeArticlesData(data),
                onError: error => cancelArticlesRequest(error)
            }))
            dispatch(setArticlesStatus('pending'))
        }
    }

    if (cancelArticlesRequest.match(action)) {
        const { error } = action.payload
        console.log("Error while requesting articles: ", error) // eslint-disable-line no-console
        dispatch(setArticlesStatus('idle'))
    }
}

const articleReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setArticlesStatus, (state, action) => {
            const { status } = action.payload
            state.status = status
        })
        .addCase(storeArticlesData, (state, action) => {
            const { data } = action.payload
            state.data = data
            state.status = 'idle'
        })
})

export default articleReducer
