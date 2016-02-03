(function () {
  'use strict';

  angular.module('app.controllers').controller('detailCtrl', detailCtrl);
  angular.module('app.controllers').controller('ModalInstanceCtrl', ModalInstanceCtrl);

  detailCtrl.$inject = ['$scope', '$timeout', '$uibModal'];
  ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];

  function detailCtrl($scope, $timeout, $uibModal) {
    var vm = this;
    vm.openModal = function (size) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/modals/debt-goods-modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          //items: function () {
          //  return $scope.items;
          //}
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }

  function ModalInstanceCtrl($scope, $uibModalInstance) {
    //$scope.items = items;
    $scope.selected = {
      //item: $scope.items[0]
    };

    $scope.ok = function () {
      //$uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
