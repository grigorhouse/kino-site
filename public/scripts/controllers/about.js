'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('AboutCtrl',[ '$rootScope', function ($rootScope) {
    $rootScope.nav = {categories: true};
  }]);
