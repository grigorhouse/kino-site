'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('OutCtrl',[ '$location', '$rootScope', function ($location, $rootScope) {
  	$rootScope.logedIn = false;
    $location.url('/login');
  }]);
