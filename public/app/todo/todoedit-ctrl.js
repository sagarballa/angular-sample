(function(){
	'use strict';
	
	angular.module('TodoApp').controller('EditTodoCtrl', editTodoCtrl);
	
	editTodoCtrl.$inject = ['TodoDataService', '$location', '$routeParams'];
	
	function editTodoCtrl(TodoDataService, $location, $routeParams){
		var vm = this;
		vm.todo = getTodo();
		vm.update = update;
		vm.cancel = cancel;
		
		function update(){
			TodoDataService.updateTodo(vm.todo);
			
			$location.path('/todolist');
		}
		
		function cancel(){
			$location.path('/todolist');
		}
		
		function getTodo() {
			var id = $routeParams.id;
			var todo = TodoDataService.getTodo(id);
			return todo;
		}
		
	}
})();