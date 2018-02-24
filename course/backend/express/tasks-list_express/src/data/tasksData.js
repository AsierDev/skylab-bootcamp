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

        tasks = [] 
        // tasks.splice(0, tasks.length)
    }
}

module.exports = tasksData