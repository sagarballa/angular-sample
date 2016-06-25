(function(){
	'use strict';
	
	angular.module('TodoApp').controller('AddTodoCtrl', addTodoCtrl);
	
	addTodoCtrl.$inject = ['TodoDataService', '$location'];
	
	function addTodoCtrl(TodoDataService, $location){
		var vm = this;
		vm.todo = {};
		vm.add = add;
		vm.cancel = cancel;
		
		function add(){
			
			TodoDataService.addTodo(vm.todo);
			
			$location.path('/todolist');
		}
		
		function cancel(){
			$location.path('/todolist');
		}
	
	}
})();