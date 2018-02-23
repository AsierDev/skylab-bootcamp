//require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

let users = []

app.get('/api/users', (req, res) => res.json(ok('Users listing succeeded.', users.map(({ username }) => ({ username })))))

const jsonBodyParser = bodyParser.json()

app.post('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User registration failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) return res.json(ko('User registration failed.', 'Username already exists.'))

    users.push({ username, password })

    res.json(ok('User registration succeeded.'))
})


app.put('/api/users', jsonBodyParser, (req, res) => {
    const { username, oldPassword, newPassword } = req.body

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) {

        users.map(user => {
            if (username === user.username && user.password === oldPassword) {
                user.password = newPassword
                return res.json(changePasswordOk('Password updated!'))
            }
        })

        users.map(user => {
            if (username === user.username && user.password !== oldPassword) {
                return res.json(changePasswordKo('Password doesnt match!'))
            }
        })

    } else {
        return res.json('Username not found')
    }

})

app.delete('/api/users', jsonBodyParser, (req, res) => {

    const { username, password } = req.body

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) {

        users.map(user => {
            if (username === user.username && user.password === password) {
                users = users.filter(_user => _user !== user)

            }
            return res.json("user borrado")
        })

        users.map(user => {
            if (username === user.username && user.password !== password) {
                return res.json(changePasswordKo('Password doesnt match!'))
            }
        })

    } else {
        return res.json('Username not found')
    }

})

function changePasswordOk(message) {
    const res = { status: 'OK', message }

    return res

}

function changePasswordKo(message) {
    const res = { status: 'KO', message }

    return res

}


function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

const port = process.argv[2]

app.listen(port, () => console.log(`Users API running on port ${port}`))




