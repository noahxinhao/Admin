(function () {
  'use strict';

  angular.module('app.controllers').controller('currentCtrl', currentCtrl);

  currentCtrl.$inject = ['$scope', 'customerService','$timeout'];

  function currentCtrl($scope, customerService,$timeout) {
    var vm = this;

    customerService.currentCustomer().then(function (data) {
      vm.currentCustomerList = data;
      $timeout(function(){
        $('#customerTables').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      },1000)
    });
  }
})();
