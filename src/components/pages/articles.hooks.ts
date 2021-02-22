import { useEffect } from 'react'
import { requestArticlesData, Article } from '../../redux/ducks/articles'
import { useReduxDispatch, useReduxSelector } from '../../redux'


export const useArticlesData = (): Article[] | null => {
    const data = useReduxSelector(state => {
        return state.articles.data || null
    })
    const dispatch = useReduxDispatch()

    useEffect(() => {
        if (!data) {
            dispatch(requestArticlesData())
        }
    }, [dispatch, data])

    return data
}
