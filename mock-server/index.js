/* eslint-disable */
const express = require('express')

const app = express()
const port = 3031

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

const dataRoutes = [
    {
        path: '/articles',
        json: './data/articles.json'
    },
]

dataRoutes.forEach(({ path, json }) => {
    app.get(path, (req, res) => {
        const data = require(json)
        res.json(data)
    })
})


app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`)
})
