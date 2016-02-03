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
        templateUrl: 'templates/system/main.html',
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
      .state('app.detail', {
        url: '/debt/detail',
        views: {
          "content": {
            templateUrl: 'templates/debtCustomer/detail.html',
            controller: 'detailCtrl',
            controllerAs: 'detail'
          }
        }
      })
      .state('app.group', {
        url: '/group',
        views: {
          "content": {
            templateUrl: 'templates/group/working-group.html'
          }
        }
      })
      .state('app.attendance', {
        url: '/attendance',
        views: {
          "content": {
            templateUrl: 'templates/user/attendance.html'
          }
        }
      }).state('app.achievement', {
        url: '/achievement',
        views: {
          "content": {
            templateUrl: 'templates/user/achievement.html'
          }
        }
      })
      .state('app.setting', {
        url: '/setting',
        views: {
          "content": {
            templateUrl: 'templates/user/setting.html'
          }
        }
      })
      .state('app.assistRequest', {
        url: '/assistRequest',
        views: {
          "content": {
            templateUrl: 'templates/notice/assist-request.html'
          }
        }
      })
      .state('app.eventReminder', {
        url: '/eventReminder',
        views: {
          "content": {
            templateUrl: 'templates/notice/event-reminder.html'
          }
        }
      })
      .state('app.systemNotice', {
        url: '/systemNotice',
        views: {
          "content": {
            templateUrl: 'templates/notice/system-notice.html'
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

    $urlRouterProvider.otherwise('/login');
  }
})();
