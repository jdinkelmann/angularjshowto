'use strict';


var todoApp = angular.module('todoApp',['ngRoute']);

todoApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise('/');
});



