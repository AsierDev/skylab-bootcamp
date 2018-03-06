const axios = require('axios');

const URL = `http://localhost:5000/api`

function getReq(path) {
    return axios.get(path)
}

function postReq(path, body) {
    return axios.post(path, { body })
}

function putReq(path) {
    return axios.put(path)
}

function deleteReq(path) {
    return axios.delete(path)
}

const usersApi = {
    registerUser: function () {
        return postReq(`${URL}/user`, { name, surname, email, username, password  })
    },
    editUser: function () {
        return getReq(`${URL}/users/done`)
    },
    createUser: function (text) {
        return postReq(`${URL}/users/`, text)
    },
    markDone: function (id) {
        return putReq(`${URL}/users/${id}`)
    },
    deleteUser: function (id) {
        return deleteReq(`${URL}/users/${id}`)
    }
}

module.exports = { taskApi }