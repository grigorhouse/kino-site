'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', '$http','$rootScope',
   function ($scope, $routeParams, $http, $rootScope) {
    $scope.movie = {};
    $scope.logedIn = $rootScope.logedIn;

    $http.get('/movie/'+$routeParams.movie_id).then(function(res){
    	$scope.movie = res.data;
    });

    $scope.changeStatus = function() {
    	$scope.movie.public = !$scope.movie.public;
    	$http.put('/movie/'+$routeParams.movie_id, $scope.movie).then(function(res){
	    	
	    });
    };

    $scope.deleteMovie = function () {
    	if(confirm('You realy want to delete this movie')){
    		$http.delete('/movie/'+$routeParams.movie_id);
    	}    	
    }

  }]);
