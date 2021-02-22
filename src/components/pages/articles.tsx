import React, { useState, useEffect } from 'react'

type Article = {
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

const Articles = (): React.ReactElement => {
    const [data, setData] = useState(null as null | Article[])

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)) // loading...
            const result = await fetch('http://localhost:3031/articles/')
            setData(await result.json() as Article[])
        }
        fetchData()
    }, [])

    return (
        <>
            <header className="App-header">
                <h1>
                    Articles
                </h1>
            </header>
            <ul>
                {data && data.map(({title, author, date, excerpt}) => (
                    <li>
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
