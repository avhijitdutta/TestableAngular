'use strict';

/**
 * @ngdoc service
 * @name contactMgmtApp.login
 * @description
 * # login
 * Service in the contactMgmtApp.
 */
angular.module('contactMgmtApp')
  .service('login', ['$http','$q',function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.registerUser=function (userData) {

    	console.log(userData);

    	// Simple POST request example:
		$http({
		  method: 'POST',
		  data:userData,
		  url: 'http://jsonplaceholder.typicode.com/posts'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});
    }
    

  }]);
