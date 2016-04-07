/**
 * Created by jingyu3 on 2016/4/7.
 */
angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        todoList.addTodo = function() {
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
        };

        todoList.count = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.clear = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });