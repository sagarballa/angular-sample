(function(){
	'use strict';
	
	angular.module('TodoApp').controller('AddTodoCtrl', addTodoCtrl);
	
	addTodoCtrl.$inject = ['TodoDataService', '$location'];
	function addTodoCtrl(TodoDataService, $location){
		var vm = this;
		vm.todo = {};
		vm.add = add;
		
		function add(){
			$location.path('/addTodo');
		}
		
	};
})();