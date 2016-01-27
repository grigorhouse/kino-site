'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('OutCtrl',[ '$location', '$rootScope', '$http', function ($location, $rootScope, $http) {
  	  $http.get('/logout').then(function(res){
        $rootScope.logedIn = false;
        $location.url('/login');
      });
  }]);
