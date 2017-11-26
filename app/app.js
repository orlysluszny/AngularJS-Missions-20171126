var todosApp = angular.module("todosApp", ["ngRoute"]);

todosApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/", {
        templateUrl: "app/todos/todos.html",
        controller: "app/todos/todosCtrl"
    })
 })
 
 