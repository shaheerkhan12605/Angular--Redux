




var app=angular.module("myApp",['ngRoute']);

TodosReducer=function (state = [], action) {  
	    switch(action.type) {
	        case 'ADD_TODO':
	        console.log("ADD_TODO");
	            return [...state, action.payload];
	        case 'REMOVE_TODO':
	        console.log("Remove_TODO");

	            return [
	                ...state.slice(0, action.payload),
	                ...state.slice(action.payload + 1)
	            ];
	        default:
	            return state;
	    }
	}
	   	var createStore=Redux.createStore;
	   	var store=createStore(TodosReducer);


app.config(function($routeProvider){
	// debugger;
	$routeProvider.when('/',{
		template:"<app-page></app-page> "
	}).when('/home',{
		template:"<home></home>"
	});
});

 app.component('appPage', {

      templateUrl: '/nf/Redux/app.html',
      controller:'appController'
    });;

app.controller('appController',function($scope){
	
	$scope.submitTodo=function(){
		var action;
		console.log($scope.todo);
		
	    action=$scope.addTodo($scope.todo);
	    $scope.todo = '';
  		store.dispatch(action);
  	}

  	$scope.addTodo=function (todo){  
	    return {
	        type: 'ADD_TODO',
	        payload: todo
	    }
	}
	var render=function(){
		$scope.textred=store.getState();

		console.log(JSON.stringify(store.getState()));
	};
	
	store.subscribe(render);
	render();
	$scope.removeTodo=function(index){  
		console.log(index);
	    store.dispatch( {
	        type:'REMOVE_TODO',
	        payload: index
	    });
	}

	
});
app.controller('mainCtrl',function(){

});