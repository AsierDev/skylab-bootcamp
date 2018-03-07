const axios = require('axios');

const URL = `http://localhost:5000/api`

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
    registerUser: function (name, surname, email, username, password) {
        return postReq(`${URL}/user`)
    },
    listUsers: function () {
        return getReq(`${URL}/users`)
    },
    searchUsers: function (query) {
        return getReq(`${URL}/users/${query}`)
    },
    retrieveUser: function (id) {
        return getReq(`${URL}/register/${id}`,)
    },
    updateUser: function (id, name, surname, email, username, password, newUsername, newPassword) {
        return putReq(`${URL}/user/${id}`)
    },
    deleteUser: function (id, username, password ) {
        return deleteReq(`${URL}/user/${id}`)
    }
}

module.exports = { usersApi }