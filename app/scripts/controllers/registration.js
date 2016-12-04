'use strict';

/**
 * @ngdoc function
 * @name contactMgmtApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the contactMgmtApp
 */
angular.module('contactMgmtApp')
  .controller('RegistrationCtrl', ['$scope','login',function ($scope,login) {

	    $scope.user={
	    	name:'',
			email:'',
			password:'',
		};
		
		$scope.registrationSubmit=function(formValue){
			if(formValue.$valid){
				login.registerUser($scope.user).then(function(argument) {
					console.log(argument);
				}, function(error) {
      				console.error(error)
    			});
    			
			}else{
				console.warn('login data not valid');
			}
		};
  }]);
