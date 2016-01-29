(function () {
  'use strict';

  angular.module('app.router').config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/system/login.html',
      })
      .state('app', {
        url: '/app',
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .state('app.current', {
        url: '/current',
        views: {
          "content": {
            templateUrl: 'templates/debtCustomer/current.html',
            controller: "currentCtrl",
            controllerAs: "current"
          }
        }
      })
      .state('app.biding', {
        url: '/biding',
        views: {
          "content": {
            templateUrl: 'templates/debtCustomer/biding.html'
          }
        }
      })
      .state('app.complete', {
        url: '/complete',
        views: {
          "content": {
            templateUrl: 'templates/debtCustomer/complete.html'
          }
        }
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
