'use strict';

angular.module('contactMgmtApp').controller('loginCtrl', ['$scope','$location', function($scope,$location){
	
	$scope.user={
		email:'',
		password:'',
		remember:true
	};
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
	

	$scope.loginForm=function(loginForm){
		if(loginForm.$valid){
			console.log($scope.user);
			$location.path('/main');
		}else{
			console.warn('login data not valid');
		}
	};

}]);