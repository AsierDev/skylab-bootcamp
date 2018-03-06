const userModel = require('../../../models/UserModel') 



function handleList() {
    User.find(({}), { _id: 0, passsword: 0 })
        .then(users => res.json(success(users)))
        .catch(err => res.json(fail(err)))
}

module.exports = handleList