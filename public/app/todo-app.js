(function(){
	'use strict';
	
	angular.module('TodoApp', ['ui.router', 'ui.bootstrap', 'angularValidator']);
	
	angular.module('TodoApp').config(routeConfig);
	
	angular.module('TodoApp').run(todoRun);
	
	function routeConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('app', {
			url : '',
			abstract : true,
			views: {
				'header': {
					templateUrl: '/app/common/header.html'
				},
				'content': {
					templateUrl: '/app/common/content.html' 
				},
				'footer': {
					templateUrl: '/app/common/footer.html'
				}
			}
		});
		$stateProvider.state('app.todolist', {
			url : '/todolist', 
			views: {
				'content@' : {
					templateUrl: 'app/todolist/todolist.html',
					controller: 'TodoListCtrl',
					controllerAs : 'listCtrl'
				}
			}
		});

		$stateProvider.state('app.addtodo', {
			url : '/addtodo', 
			views: {
				'content@' : {
					templateUrl: 'app/todo/addtodo.html',
					controller: 'AddTodoCtrl' ,
					controllerAs : 'addCtrl'
				}
			}
		});
		
		$stateProvider.state('app.edittodo', {
			url : '/edittodo/:id', 
			views: {
				'content@' : {
					templateUrl: 'app/todo/edittodo.html',
					controller: 'EditTodoCtrl',
					controllerAs : 'editCtrl'
				}
			}
		});
		
		$urlRouterProvider.otherwise('/todolist');
	}
	
	function todoRun($rootScope){
		
	}
})();