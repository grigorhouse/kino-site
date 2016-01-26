'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:MainCtrl
 * @description
 * # AuthCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('AuthCtrl',['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {
   $scope.signUp = function() {

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
