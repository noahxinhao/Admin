(function (moment) {
  "use strict";
  moment.locale('zh-cn');
})(moment);

(function () {
  'use strict';

  angular.module('app.router', []);
  angular.module('app.constants', []);
  angular.module('app.services', []);
  angular.module('app.filters', []);
  angular.module('app.controllers', []);
  angular.module('app.directives', []);
  angular.module('app.components', []);

  angular.module('app', [
    'ngResource',
    'ngAnimate',
    'ui.router',
    'angular-loading-bar',

    'app.router',
    'app.constants',
    'app.services',
    'app.controllers',
    'app.filters',
    'app.directives',
    'app.components'
  ]);
})();
