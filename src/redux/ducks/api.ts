import { Middleware, Action } from 'redux'
import { createAction } from '@reduxjs/toolkit'

const API_HOST = 'http://localhost:3031'

export type SuccessAction<T> = (data: T) => Action
export type ErrorAction = (message: string) => Action

export type ApiBaseRequest = {
    url: string
    headers?: Record<string, string>
}

export type ApiGetRequest = ApiBaseRequest & {
    method: 'GET'
}

export type ApiPostRequest = ApiBaseRequest & {
    method: 'POST'
    data: Record<string, unknown>
}

export type ApiPutRequest = ApiBaseRequest & {
    method: 'PUT'
    data: Record<string, unknown>
}

export type ApiDeleteRequest = ApiBaseRequest & {
    method: 'DELETE'
}

export type ApiRequest = ApiGetRequest | ApiPostRequest | ApiPutRequest | ApiDeleteRequest

export type ApiRequestPayload<T = never> = ApiRequest & {
    onSuccess: SuccessAction<T>
    onError: ErrorAction
}


export const apiRequest = createAction(
    "[API] Request",
    (api: ApiRequestPayload<any>) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        payload: { ...api },
    })
)

export const apiSuccess = createAction(
    "[API] Success",
    (onSuccess: SuccessAction<unknown>, data: unknown) => ({
        payload: { onSuccess, data },
    })
)

export const apiError = createAction(
    "[API] Error",
    (onError: ErrorAction, message: string) => ({
        payload: { onError, message },
    })
)


export const apiMiddleware: Middleware = ({ dispatch }) => next => action => {
    next(action)

    if (apiRequest.match(action)) {
        const {
            url,
            method,
            headers,
            onSuccess,
            onError,
        }: ApiRequestPayload<any> = action.payload // eslint-disable-line @typescript-eslint/no-explicit-any


        fetch(`${API_HOST}${url}`, {
            method,
            headers
        })
            .then(response => response.json())
            .then(reponseData => dispatch(apiSuccess(onSuccess, reponseData)))
            .catch(error => { dispatch(apiError(onError, error.message))
            })
        return
    }

    if (apiSuccess.match(action)) {
        const { onSuccess, data } = action.payload
        dispatch(onSuccess(data))
    }

    if (apiError.match(action)) {
        const { onError, message } = action.payload
        dispatch(onError(message))
    }
}
