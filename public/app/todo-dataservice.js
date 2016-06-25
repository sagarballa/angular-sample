(function(){
	'use strict';
	angular.module('TodoApp').service('TodoDataService', todoDataService);
	
	function todoDataService(){
		var todolist = [];
		var _id = 1;
		var service = {
			todolist : todolist,
			addTodo : addTodo,
			getTodo : getTodo,
			updateTodo : updateTodo
		};
		
		return service;
		
		function addTodo(todoItem) {
			todoItem.id = _id;
			todoItem.status = "open";
			todolist.push(todoItem);
			_id = _id + 1;
		};
		
		function getTodo(id){
			for(var index in todolist){
				if(todolist[index].id == id){
					return todolist[index];
				}
			}
			return null;
		};
		
		function updateTodo(todoItem) {
			angular.forEach(todolist, function(todo, index){
				if(todo.id === todoItem.id){
					todolist[index] = todoItem;
				}
			});
		};
		
	};
})();