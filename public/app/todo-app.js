(function(){
	'use strict';
	
	angular.module('TodoApp', ['ngRoute', 'ui.bootstrap']);
	
	angular.module('TodoApp').config(routeConfig);
	
	function routeConfig($routeProvider) {
		$routeProvider.when('/todolist', {
			templateUrl: 'app/todolist/todolist.html',
			controller: 'TodoListCtrl',
			controllerAs : 'todolistCtrl'
		}); 
		
		$routeProvider.when('/addtodo', {
			templateUrl: 'app/addtodo/todo.html',
			controller: 'AddTodoCtrl',
			controllerAs : 'todoCtrl'
		}); 
		
		$routeProvider.otherwise({
			redirectTo: '/todolist'
		});
	};
})();