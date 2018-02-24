const bodyParser = require('body-parser')

const tasksLogic = require('../logic/tasksLogic')

const { Router } = require('express')

const router = Router()

const jsonBodyParser = bodyParser.json()

const { success, fail } = require('../api/api-utils')

/* /// create task /// */

router.post('/task', jsonBodyParser, (req, res) => {
    const { text } = req.body

    try {
        tasksLogic.create(text)

        res.json(success('Task has been created'))
    } catch (err) {
        res.json(fail("Task creation has failed", err.message))
    }
})

/* /// List every task /// */

router.get('/tasks', (req, res) => res.json(success("Tasks listed correctly", tasksLogic.list())))

/*  /// Remove task from tasklist */

router.delete('/task/:id', (req, res) => {
    const { params: { id } } = req
    
        tasksLogic.remove(id)

        res.json(success('Task removed correctly'))
   
})

/* ///  Delete all tasks  /// */

router.delete('/tasks', (req, res) => {
    tasksLogic.removeAll()

    res.json(success('Tasks removed correctly'))

})

/* /// Mark task as done  ///  */

router.put('/task/:id', (req, res) => {
    const { params: { id } } = req

    tasksLogic.markDone(id)

    res.json(success('Task marked as done'))
} )




module.exports = router