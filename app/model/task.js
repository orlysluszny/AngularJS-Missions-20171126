

todosApp.factory("Task", function() {
    
    function Task(name) {
        this.name = name;
        this.accomplished = false;
        this.show=false;
        }
    return Task;
  })