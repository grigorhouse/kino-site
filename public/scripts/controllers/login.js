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
      if($scope.user.password !== $scope.password_2){
         $scope.hasError = true;
         $scope.beError = 'Passwords are not equal.';
         return false;
      }
      $http.post('/user',$scope.user).then(function(res){
         if(!res.data.error){
            $location.url('/');
         } else {
            $scope.hasError = true;
            $scope.beError = res.data.error;
         }
      });
   };

   $scope.logIn = function() {

      $http.post('/login', $scope.login).then(function(res){
          if(!res.data.error){
              $rootScope.logedIn = true;
              $location.url('/');
          } else {
              $scope.hasLogError = true;
              $scope.beError = res.data.error;
          }

      });
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
