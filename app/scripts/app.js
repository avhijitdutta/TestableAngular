'use strict';

/**
 * @ngdoc overview
 * @name contactMgmtApp
 * @description
 * # contactMgmtApp
 *
 * Main module of the application.
 */
  angular.module('contactMgmtApp', ['ngRoute'])

 .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        title:'login-page'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title:'layout-top-nav'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        title:'register-page'
      })
      .when('/createContact/:id', {
        templateUrl: 'views/details.html',
        controller: 'CreatecontactCtrl',
        title:'sidebar-mini'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])

  .run(['$rootScope',function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });
  }]);