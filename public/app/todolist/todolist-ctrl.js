(function(){
	'use strict';
	
	angular.module('TodoApp').controller('TodoListCtrl', todoListCtrl);
	
	todoListCtrl.$inject = ['TodoDataService', '$location'];
	function todoListCtrl(TodoDataService, $location){
		var vm = this;
		vm.todolist = TodoDataService.todolist;
		vm.add = add;
		vm.edit = edit;
		
		function add(){
			$location.path('/addtodo');
		}
		
		function edit(todo) {
			$location.path('/edittodo/' + todo.id);
		}
	}
})();