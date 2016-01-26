'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:MainCtrl
 * @description
 * # AuthCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('AuthCtrl',['$http', '$scope', '$rootScope', '$location', function ($http, $scope, $rootScope, $location) {
   $scope.signUp = function() {
      $http.post('/user',$scope.user);
   };

   $scope.logIn = function() {
      $rootScope.logedIn = true;
      $http.post('/login', $scope.login);
      $location.url('/');
   };

   $rootScope.nav = {login: true};

   $scope.roles = [
   	{
   		id: 0,
   		title: 'customer'
   	},
   	{
   		id: 1,
   		title: 'admin'
   	}
   ];
  }]);
