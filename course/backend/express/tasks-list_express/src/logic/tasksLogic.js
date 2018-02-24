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

    markDone(id) {

    },

    /*  /// Remove task from tasklist */

    remove(id) {

        tasksData.delete(id)
    },

    listDone() {

    },

    listToDo() {

    },

    /* ///  Delete all tasks  /// */

    removeAll() {
        tasksData.deleteAll()
    },

    update(id, text) {

    }


}

module.exports = tasksLogic