'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  .controller('SettingsCtrl',['$scope','$http','$rootScope', '$location',
        function ($scope,$http, $rootScope, $location) {

    if(!$rootScope.logedIn){
        $location.url('/');
    }
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
    $scope.cats_selected = [];

    $scope.addMovie = function() {
        var selected = false;
        for(var i in $scope.cats_selected){
            if($scope.cats_selected[i]){
               selected = true;
               break; 
            }
        }

        if(!selected){
            $scope.formError = 'You must select at least on category!';
            return false;
        } else {
            $scope.formError = false;
        }

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
    }

  }]);
