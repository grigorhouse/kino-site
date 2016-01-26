'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('MainCtrl',['$http', '$scope', '$rootScope', function ($http, $scope, $rootScope) {
    $scope.count = 10;
    $scope.start_point = 0;
    $scope.ended = false;
    $scope.inSearch = false;

    $scope.movies = [];

    $http.get('/movie?count='+$scope.count).then(function(res){
    	$scope.movies = res.data;
    });

    $rootScope.nav = {home: true};

    $scope.getMore = function() {      
      if(!$scope.ended && !$scope.inSearch){
        $scope.inSearch = true;
        $scope.count += 2;
        $http.get('/movie?count='+$scope.count).then(function(res){
          $scope.inSearch = false;
          if(res.data.length == $scope.count || res.data.length == $scope.count-1){
            $scope.movies = res.data;
          } else {
            $scope.ended = true;
          }
        });
      }
      
    }

  }]);
