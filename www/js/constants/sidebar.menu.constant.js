/**
 * Created by jacobdong on 15/11/25.
 */

(function () {
  'use strict';
  angular.module('app.constants')
    .constant('SIDEBAR_MENU_DATA', [
      {
        href: "#",
        elementA: {
          label: "数据监控",
          icon: 'fa-dashboard'
        },
        items: [
          {
            label: "潜在客户",
            href: "#/app/customers/potential",
          }
        ]
      },
      {
        href: "#",
        elementA: {
          label: "数据监控",
          icon: 'fa-th'
        },
        note: {
          bgClass: "bg-red",
          text: "3"
        },
        items: [
          {
            label: "潜在客户",
            href: "#/app/customers/potential",
            items: [
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              },
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              },
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              }
            ]
          }
        ]
      },
      {
        href: "#",
        elementA: {
          label: "数据监控",
          icon: 'fa-calendar'
        },
        note: {
          bgClass: "bg-green",
          text: "new"
        }
      },
      {
        href: "#",
        elementA: {
          label: "数据监控",
          icon: 'fa-pie-chart'
        },
        note: {
          bgClass: "bg-yellow",
          text: "3"
        },
        items: [
          {
            label: "潜在客户",
            href: "#/app/customers/potential",
            items: [
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              },
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              },
              {
                label: "潜在客户",
                href: "#/app/customers/potential",
                items: []
              }
            ]
          }
        ]
      }
    ]);
})();
