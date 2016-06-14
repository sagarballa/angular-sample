(function(){
	'use strict';
	
	angular.module('TodoApp').controller('TodoListCtrl', todoListCtrl);
	
	todoListCtrl.$inject = ['TodoDataService'];
	function todoListCtrl(TodoDataService){
		var vm = this;
		vm.todolist = TodoDataService.todolist;
		
		console.log("Test");
	};
})();