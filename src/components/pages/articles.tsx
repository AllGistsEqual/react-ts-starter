import React from 'react'
import { useArticlesData } from './Articles.hooks'
import NavBar from '../organisms/NavBar'

const Articles = (): React.ReactElement => {
    const data = useArticlesData()

    return (
        <>
            <header className="App-header">
                <h1>
                    Articles
                </h1>
            </header>
            <NavBar />
            <ul>
                {data && data.map(({title, author, date, excerpt}) => (
                    <li key={`article_${date}`}>
                        <strong>{title}</strong><br />
                        <em>{`by ${author} - ${new Date(date).toUTCString()}`}</em><br />
                        <p>{excerpt}</p>
                    </li>
                )) || <li>loading</li>}

            </ul>
        </>
    )
}

export default Articles
