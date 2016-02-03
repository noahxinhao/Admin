/**
 * Created by noahli on 16/2/2.
 */
(function () {
  'use strict';

  angular.module('app.directives')
    .directive('onSidebarRenderFinished', function ($timeout, $ocLazyLoad) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          if (scope.$last === true) {
            $timeout(function () {
              if (!$.AdminLTE) {
                $ocLazyLoad.load({
                  files: [
                    'js/adminlte/adminlte.js',
                    'js/adminlte/sidebar.right.js'
                  ]
                });
              }
            });
          }
        }
      };
    }).directive('onTableFinished', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          if (scope.$last === true) {
            //console.log(attr.onTableFinished);
            var eleId = "#" + attr.onTableFinished;
            $timeout(function () {
              if (eleId) {
                $(eleId).DataTable({
                  "paging": true,
                  "lengthChange": false,
                  "searching": false,
                  "ordering": true,
                  "info": true,
                  "autoWidth": false
                });
              }
            });
          }
        }
      };
    }).directive('renderTooltip', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          $(".textarea").wysihtml5();
        }
      };
    }).directive('currentPageReady', function ($ocLazyLoad, $timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          $(".connectedSortable").sortable({
            placeholder: "sort-highlight",
            connectWith: ".connectedSortable",
            handle: ".box-header, .nav-tabs",
            forcePlaceholderSize: true,
            zIndex: 999999
          });
          $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
        }
      };
    }).directive('pageLayOut', function ($ocLazyLoad, $timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          if ($.AdminLTE) {
            $.AdminLTE.layout.activate();
          }
        }
      };
    });

})();

