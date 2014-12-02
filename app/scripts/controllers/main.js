'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of theTodoApp
 */
todoApp
  .controller('MainCtrl', function ($scope) {
        $scope.welcome = "Welcome to the Brighton Area Software Society";
        $scope.introduction = "Introduction to AngularJS - Jason Dinkelmann";

        $scope.taskForm = {};
        $scope.taskList = [];


        $scope.addTask = function() {
            // get the task from the model
            var title = $scope.taskForm.title;
            var date = $scope.taskForm.dueDate;

            $scope.taskList.push({
                title: title,
                dueDate: date
            });
        }
  });
