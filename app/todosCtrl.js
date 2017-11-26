
todosApp.controller("todosCtrl", function ($scope, Task, tasks, $log, $http, $location) {
    $scope.counter=0;
    tasks = [];
    $scope.tasks = tasks;

    $scope.funcadd = function () {
        tasks.push(new Task($scope.name));
        $scope.name = "";
        $scope.counter++;
    }

    $scope.mycounter=function(task) {
        if (task.accomplished) {
            $scope.counter--;
        
        }else {
            $scope.counter++;
        }
 
    }

    $scope.deletetask = function(task){
        var taskIndex = $scope.tasks.indexOf(task);
        if (!task.accomplishe){
        alert("attention-not completed task!!")
    }
        $scope.tasks.splice(taskIndex, 1);
    }

       $scope.filterComplete = function (task) {
        if ($scope.selecttask == undefined || $scope.selecttask === "") {
            return true;
          } 
   
          if ($scope.selecttask==="complete" && task.accomplished) {
            return true;
        }
        if ($scope.selecttask==="open" && !task.accomplished) {
            return true;
        }
        else {
            return false;
        }
    }

});