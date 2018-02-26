require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

const tasks = []
let taskId = 0

/* /// INDEX /// */

app.get('/', (req, res) => {
   
    res.render('index')
})

/* /// create task /// */

app.post('/', formBodyParser, (req, res) => {
    const {task}  = req.body

    taskId++
    tasks.push({ 
        id: taskId,
        text: task, 
        done: false })

    res.redirect('/listTodo')

})



/* /// List tasks pending to do /// */

app.get('/listTodo', (req, res) => {

   res.render('listTodo',{tasks})


})



/* /// List tasks already done /// */

app.get('/', (req, res) => {
    res.json('Tasks done listed correctly')

    listDone()
})

function listDone() {
    const doneList = []

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].done === true) doneList.push(tasks[i])
    }

    if (doneList < 1 || tasks.length < 1) throw Error('There are no tasks to show')

    return doneList
}

/* /// Mark task as done  ///  */

app.put('/:id', (req, res) => {
    const { params: { id } } = req

    markDone(id)

    res.json('Task marked as done')

})

function markDone(id) {
    const index = tasks.findIndex(task => task.taskId === Number(id))

    if (index < 0) throw Error('task does not exist.')

    if (tasks[index].done === true) throw Error('Task is already done')

    tasks[index].done = true

}

/*  /// Remove task from tasklist */

app.delete('/:id', (req, res) => {
    const { params: { id } } = req

    remove(id)

    res.json('Task removed correctly')

})

function remove(id) {
    const index = tasks.findIndex(task => task.taskId === Number(id))

    if (index < 0) throw Error('task does not exist.')

    tasks.splice(index, 1)
}




const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))