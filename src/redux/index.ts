import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import rootReducer from './rootReducer'
import middleware from './rootMiddleware'


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
            ignoredActionPaths: ['payload.onSuccess', 'payload.onError'],
        },
    }).prepend(middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
