'use strict';

/**
 * @ngdoc function
 * @name kinoSiteApp.service:authService
 * @description authorization for app
 * Service of the kinoSiteApp
 */
angular.module('kinoSiteApp')
  	.factory('authService',['$http', '$rootScope', function($http, $rootScope) {
  		var auth = {};
    	auth.checkAuth = function(){
    		$http.get('/check').then(function(res){
				if(res.data){
					$rootScope.logedIn = true;
				} else {
					$rootScope.logedIn = false;
				}
    		});
    	};

    	return auth;
	}]);
