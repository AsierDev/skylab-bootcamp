const axios = require('axios');

const URL = `http://localhost:5000/api`

function getReq(path) {
    return axios.get(path)
}

function postReq(path, body) {
    return axios.post(path, { body })
}

function putReq(path, body) {
    return axios.put(path, { body })
}

function deleteReq(path, body) {
    return axios.delete(path, { body })
}

const usersApi = {
    registerUser: function (body) {
        return postReq(`${URL}/user`, { name, surname, email, username, password })
    },
    listUsers: function () {
        return getReq(`${URL}/users`)
    },
    retrieveUser: function (id) {
        return getReq(`${URL}/register/${id}`,)
    },
    updateUser: function (id, body) {
        return putReq(`${URL}/user/${id}`, { name, surname, email, username, password, newUsername, newPassword })
    },
    deleteUser: function (id, body) {
        return deleteReq(`${URL}/user/${id}`, { username, password } )
    }
}

module.exports = { taskApi }