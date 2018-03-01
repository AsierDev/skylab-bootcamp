const bodyParser = require('body-parser')

const taskLogic = require('../logic/userLogic')

const { Router } = require('express')

const router = Router()

const jsonBodyParser = bodyParser.json()


router.post('/users', jsonBodyParser, (req, res) => {
    const { user } = req.body

    userLogic.create(user)

})

module.exports = router
