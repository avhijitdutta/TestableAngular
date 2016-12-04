'use strict';

/**
 * @ngdoc service
 * @name contactMgmtApp.login
 * @description
 * # login
 * Service in the contactMgmtApp.
 */
angular.module('contactMgmtApp')
  .service('login', ['$http','$q',function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.registerUser=function (userData) {

    	console.log(userData);
    	// Simple POST request example:
		return $http({
		  method: 'POST',
		  data:userData,
		  url: 'http://tekspeaks.com/training/add-user.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		});
    };

    this.loginUser=function(loginData){
    	
    	return $http({
		  method: 'POST',
		  data:loginData,
		  url: 'http://tekspeaks.com/training/auth.php',
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		});
    }
    

  }]);
