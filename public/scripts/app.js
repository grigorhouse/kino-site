'use strict';

/**
 * @ngdoc overview
 * @name kinoSiteApp
 * @description
 * # kinoSiteApp
 *
 * Main module of the application.
 */
angular
  .module('kinoSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie/:movie_id', {
        templateUrl: 'views/single-movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/login', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
