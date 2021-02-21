
import React from 'react'

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
    const articles: Article[] = [
        /* eslint-disable max-len */
        {
            title: "Build A Bot (DiscordJS) - Javascript Chatbots made easy",
            author: "All Bits Equal",
            date: 1610956800000,
            tags: ["Discord", "Discord Bot", "Discord Js", "JavaScript", "Chatbots"],
            excerpt: "Discord bots can be written in Javascript or Python and getting your first bot up and running is a great way to practice your Vanilla JS…",
            urls: [
                {
                    page: "Medium",
                    url: "https://allbitsequal.medium.com/build-a-bot-discordjs-javascript-chatbots-made-easy-bb31f6738a85",
                },
            ],
        },
        {
            title: "Build A Bot (DiscordJS) — A scalable setup with command modules",
            author: "All Bits Equal",
            date: 1611561600000,
            tags: ["Discord", "Discord Bot", "Discord Js", "JavaScript", "Chatbots"],
            excerpt: "Today we will clean up our central index.js file, make it more readable and scaleable and move all our existing commands to a separate …",
            urls: [
                {
                    page: "Medium",
                    url: "https://allbitsequal.medium.com/build-a-bot-discordjs-a-scalable-setup-with-command-modules-7fecdda27b40",
                },
            ],
        },
        {
            title: "Build A Bot (DiscordJS) — A Bot Factory and Revealing Module Design Pattern",
            author: "All Bits Equal",
            date: 1612771200000,
            tags: ["Discord", "Discord Bot", "Discord Js", "JavaScript", "Chatbots"],
            excerpt: "Last time we made our commands more flexible and improved the structure of our code for better readability and scalability. This time we…",
            urls: [
                {
                    page: "Medium",
                    url: "https://allbitsequal.medium.com/build-a-bot-discordjs-a-bot-factory-and-revealing-module-design-pattern-ddb4158a1966",
                },
            ],
        },
        {
            title: "Build A Bot (DiscordJS) — Better Logging And A Persistent Bot Config",
            author: "All Bits Equal",
            date: 1613376000000,
            tags: ["Discord", "Discord Bot", "Discord Js", "JavaScript", "Chatbots"],
            excerpt: "Today we will spend a little bit of time on a prettier logger and then allow our bot to read and write his own config file on the server.",
            urls: [
                {
                    page: "Medium",
                    url: "https://allbitsequal.medium.com/build-a-bot-discordjs-better-logging-and-a-persistent-bot-config-6e3cd07bc91a",
                },
            ],
        },
        /* eslint-enable max-len */
    ]

    return (
        <>
            <header className="App-header">
                <h1>
                    Articles
                </h1>
            </header>
            <ul>
                {articles.map(({title, author, date, excerpt}) => (
                    <li>
                        <strong>{title}</strong><br />
                        <em>{`by ${author} - ${new Date(date).toUTCString()}`}</em><br />
                        <p>{excerpt}</p>
                    </li>
                ))}

            </ul>
        </>
    )
}

export default Articles
