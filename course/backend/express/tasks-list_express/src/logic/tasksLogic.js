const tasksData = require('../data/tasksData')



const tasksLogic = {

    /* /// create task /// */

    create(text) {

        try {
            tasksData.retrieve(id)
        } catch (error) {
            
            return tasksData.create(text)
        }
    },

    /* /// List every task /// */

    list() {
       
      return tasksData.list()     
        
    },

    /* /// Mark task as done  ///  */

    markDone(id) {
        
        tasksData.markDone(id)

    },

    /* /// Remove task from tasklist */

    remove(id) {

        tasksData.delete(id)
    },

    /* /// List tasks already done /// */

    listDone() {
       return tasksData.listDone()
    },

    /* /// List tasks pending to do /// */

    listToDo() {
       return tasksData.listToDo()
    },

    /* ///  Delete all tasks  /// */

    removeAll() {
        tasksData.deleteAll()
    },

    /* /// Update task /// */

    update(id, text) {
        // const task = tasksData.retrieve(id)

        tasksData.update(id, text)
    }


}

module.exports = tasksLogic