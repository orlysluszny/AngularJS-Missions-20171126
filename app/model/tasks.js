
todosApp.factory("tasks", function() {
    var tasks = [];

    function getAll() {
        return tasks;
    }

 
    function addTask(task) {
        tasks.push(task);
    }
 
 
    return {
        getAll: getAll,
        addTask: addTask
    }
})

