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
  });
