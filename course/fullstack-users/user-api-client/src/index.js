const axios = require('axios');


function getReq(path) {
    return axios.get(path)
}

function postReq(path, name, surname, email, username, password) {
    return axios.post(path, { name, surname, email, username, password })
}

function putReq(path, name, surname, email, username, password, newUsername, newPassword) {
    return axios.put(path, { name, surname, email, username, password, newUsername, newPassword })
}

function deleteReq(path, username, password) {
    return axios.delete(path, { username, password })
}

const usersApi = {

    _url (){
        return  `${this.protocol}://${this.host}:${this.port}/api`
    },

    registerUser: function (name, surname, email, username, password) {
        return postReq(`${this._url()}/user`)
    },
    listUsers: function () {
        return getReq(`${this._url()}/users`)
    },
    searchUsers: function (query) {
        return getReq(`${this._url()}/users/${query}`)
    },
    retrieveUser: function (id) {
        return getReq(`${this._url()}/register/${id}`,)
    },
    updateUser: function (id, name, surname, email, username, password, newUsername, newPassword) {
        return putReq(`${this._url()}/user/${id}`)
    },
    deleteUser: function (id, username, password ) {
        return deleteReq(`${this._url()}/user/${id}`)
    }
}

module.exports = usersApi 