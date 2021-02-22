import { apiMiddleware } from './ducks/api'
import { articlesMiddleware } from './ducks/articles'

export default [
    apiMiddleware,
    articlesMiddleware,
]
