(function () {
  "use strict";

  angular.module('app.services').service('customerService', customerService);

  customerService.$inject = ['$http', '$q', 'URL_CONSTANT'];
  function customerService($http, $q, URL_CONSTANT) {

    var self = this;
    this.currentCustomer = currentCustomer;

    function currentCustomer() {
      return $q(function (resolve, reject) {
        $http.get(URL_CONSTANT.CUSTOMER.CURRENT).success(function (resp) {
          if (!resp) {
            return reject();
          }
          resolve(resp);
        });
      });
    }
  }
})();
