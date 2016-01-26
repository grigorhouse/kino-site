'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('SettingsCtrl',['$scope','$http','$rootScope', function ($scope,$http, $rootScope) {
    $scope.category = {
    	'title': '',
    };

    $rootScope.nav = {settings: true};

    $scope.movie = {
    	'title': '',
    	'description': '',
    	'image': '',
    	'categories': []
    };

    var refreshCategories = function(){
    	$http.get('/category').then(function(res){
	    	$scope.movie.categories = res.data;
	    });
    };

    refreshCategories();

    $scope.categories = [{}];

    $scope.addMovie = function() {
    	console.log($scope.movie);
    	var data = new FormData(document.getElementById('movie-form'));
        var request = new XMLHttpRequest();
        request.open("POST", "/movie");
        request.send(data);

        $scope.movie.title = '';
        $scope.movie.description = '';
        $scope.category.title = '';
        $scope.categories = [{}];
    };

    $scope.addCategory = function() {
    	$http.post('/category', $scope.category).then(function(res){
    		refreshCategories();
    		$scope.category.title = '';
    	});
    };

    $scope.incCategories = function() {
    	$scope.categories.push({});
    	console.log($scope.categories);
    }

  }]);
