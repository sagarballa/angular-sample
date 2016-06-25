(function(){
	'use strict';
	
	angular.module('TodoApp').controller('EditTodoCtrl', editTodoCtrl);
	
	editTodoCtrl.$inject = ['TodoDataService', '$location', '$stateParams'];
	
	function editTodoCtrl(TodoDataService, $location, $stateParams){
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
			var id = $stateParams.id;
			var todo = TodoDataService.getTodo(id);
			return todo;
		}
		
	}
})();