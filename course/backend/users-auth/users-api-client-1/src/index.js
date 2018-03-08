const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body, token) {
        return rp({
            method,
            headers: {
                'User-Agent' : 'client'
            },
            auth:{
                'bearer' : token
            },
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true,
        })
    },

    list(token) {
        return this._call('get', 'users', undefined, token)
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    remove(id, username, password) {
        return this._call('delete', `user/${id}`, { username, password })
    },

    retrieve(id) {
        return this._call('get', `user/${id}`)
    },

    update(id, name, surname, email, newUsername, newPassword, username, password) {
        return this._call('put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password })
    },
    login(username, password) {
        return this._call('post', 'login', { username, password })
    }
}

module.exports = api