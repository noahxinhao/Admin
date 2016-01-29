(function () {
  'use strict';

  angular.module('app.controllers').controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$scope', 'SIDEBAR_MENU_DATA'];

  function mainCtrl($scope, SIDEBAR_MENU_DATA) {
    var vm = this;
    vm.sidebarMenu = SIDEBAR_MENU_DATA;
  }
})();
