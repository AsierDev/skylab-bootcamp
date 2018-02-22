const express = require('express')

const app = express()

app.get('/', (req,res) => res.send('Hello, Get!'))

app.post('/', (req,res) => res.send('Hello, Post!'))

app.put('/', (req,res) => res.send('Hello, Put!'))

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))