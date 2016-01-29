(function () {
  'use strict';

  angular.module('app.router').config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          "content": {
            templateUrl: 'templates/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
            //controllerAs: 'profile'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/dashboard');
  }
})();
