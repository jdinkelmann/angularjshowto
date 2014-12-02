'use strict';

/**
 * @ngdoc service
 * @name angularjshowtoApp.todoservice
 * @description
 * # todoservice
 * Factory in the angularjshowtoApp.
 */
todoApp
  .factory('todoservice', function () {
    // Service logic
    // ...

    var todos = [];

    // Public API here
    return {
      getTodos: function () {
        return todos;
      },
      addTodo: function(todo) {
         todos.push(todo);
      }

    };
  });
