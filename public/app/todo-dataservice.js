(function(){
	'use strict';
	angular.module('TodoApp').service('TodoDataService', todoDataService);
	
	function todoDataService(){
		var todolist = [];
		
		var service = {
			todolist : todolist,
			addTodo : addTodo
		};
		
		return service;
		
		function addTodo(todoItem) {
			todolist.push(todoItem);
		};
	};
})();