(function(){
	'use strict';
	
	angular.module('TodoApp').controller('AddTodoCtrl', addTodoCtrl);
	
	addTodoCtrl.$inject = ['TodoDataService', '$location'];
	function addTodoCtrl(TodoDataService, $location){
		var vm = this;
		vm.todo = {};
		vm.submit = add;
		
		function add(){
			
			TodoDataService.addTodo(this.todo);
			
			$location.path('/todolist');
		}
		
	};
})();