const express = require('express')

const bodyParser = require('body-parser')

const fs = require('fs')

const app = express()

const staff = require('./staff.json')

app.get('/api/staff', bodyParser.json(), (req, res) => {

        let filterData = staff.filter((data) => {
            if(data.name === req.query.q) {
                return data
            }
        })

        res.send(filterData)
})

const port = process.argv[2]

app.listen(port,() => console.log(`Server running on port: ${port}`))

// Abrir el server así: node index.js 6060    (any port)
// Hacer una petición por get así: localhost:6060/api/staff?q=Asier


