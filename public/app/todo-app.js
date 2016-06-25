(function(){
	'use strict';
	
	angular.module('TodoApp', ['ngRoute', 'ui.bootstrap', 'angularValidator']);
	
	angular.module('TodoApp').config(routeConfig);
	
	angular.module('TodoApp').run(todoRun);
	
	function routeConfig($routeProvider) {
		$routeProvider.when('/todolist', {
			templateUrl: 'app/todolist/todolist.html',
			controller: 'TodoListCtrl',
			controllerAs : 'listCtrl'
		}); 
		
		$routeProvider.when('/addtodo', {
			templateUrl: 'app/todo/addtodo.html',
			controller: 'AddTodoCtrl' ,
			controllerAs : 'addCtrl'
		}); 
		
		$routeProvider.when('/edittodo/:id', {
			templateUrl: 'app/todo/edittodo.html',
			controller: 'EditTodoCtrl',
			controllerAs : 'editCtrl'
		}); 
		
		$routeProvider.otherwise({
			redirectTo: '/todolist'
		});
		
		
	}
	
	function todoRun($rootScope){
		
	}
})();