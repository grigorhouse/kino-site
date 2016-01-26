'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $scope.movie = {};

    $http.get('/movie/'+$routeParams.movie_id).then(function(res){
    	$scope.movie = res.data;
    });
  }]);
