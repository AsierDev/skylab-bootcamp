const tasks = []

let taskId = 0

const tasksData = {

/* /// create task /// */

    create(text) {
        taskId += 1
        tasks.push({ taskId, text, done:false })
    },

/* /// List every task /// */

    list() { return tasks },

    retrieve(id) {
        const task = tasks.find(task => task.taskId === id)
    },

    update(id, text, done) {

    },

    /*  /// Remove task from tasklist */

    delete(id) {
        const index  = tasks.findIndex(x => x.taskId === Number(id))

        if (index < 0) throw Error ('task does not exist.')
        
        tasks.splice(index, 1)
    },

    /* ///  Delete all tasks  /// */

    deleteAll() {

        tasks.splice(0, tasks.length)

    },

    /* /// Mark task as done  ///  */

    markDone(id) {
        const index = tasks.findIndex(x => x.taskId === Number(id))

        if (index < 0) throw Error('task does not exist.')

        if (tasks[index].done === true) throw Error('Task is already done')

        tasks[index].done = true
        
    }
}

module.exports = tasksData