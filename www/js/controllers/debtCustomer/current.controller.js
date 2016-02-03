(function () {
  'use strict';

  angular.module('app.controllers').controller('currentCtrl', currentCtrl);

  currentCtrl.$inject = ['$scope', 'customerService', '$ocLazyLoad', '$timeout'];

  function currentCtrl($scope, customerService, $ocLazyLoad, $timeout) {
    var vm = this;

    $ocLazyLoad.load({
      cache: true,
      files: ['js/adminlte/pages/current.page.js']
    });

    customerService.currentCustomer().then(function (data) {
      vm.currentCustomerList = data;


    });
  }
})();
