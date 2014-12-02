'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of theTodoApp
 */
todoApp
  .controller('MainCtrl', function ($scope, todoservice) {
        $scope.welcome = "Welcome to the Brighton Area Software Society";
        $scope.introduction = "Introduction to AngularJS - Jason Dinkelmann";

        $scope.taskForm = {};
        $scope.taskList = todoservice.getTodos();


        $scope.addTask = function() {
            // get the task from the model
            if(!$scope.taskForm.title || $scope.taskForm.title === '') { return; }




            todoservice.addTodo({
                title: $scope.taskForm.title,
                dueDate: $scope.taskForm.dueDate
            });

            $scope.taskForm.dueDate = '';
            $scope.taskForm.title = '';
        }
  });
