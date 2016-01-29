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
          label: "客户",
          icon: 'fa-user'
        },
        items: [
          {
            label: "正在催收",
            href: "#/app/customers/potential",
          },
          {
            label: "待催收",
            href: "#/app/customers/potential",
          },
          {
            label: "催收完成",
            href: "#/app/customers/potential",
          }
        ]
      },
      {
        href: "#",
        elementA: {
          label: "工作组",
          icon: 'fa-group'
        }
      },
      {
        href: "#",
        elementA: {
          label: "个人信息",
          icon: 'fa-info-circle'
        },
        items: [
          {
            label: "考勤",
            href: "#/app/customers/potential",
          },
          {
            label: "业绩",
            href: "#/app/customers/potential",
          },
          {
            label: "提醒事件",
            href: "#/app/customers/potential",
          }
        ]
      },
      {
        href: "#",
        elementA: {
          label: "设置",
          icon: 'fa-gears'
        },
        items: [
          {
            label: "个人信息设置",
            href: "#/app/customers/potential"
          },
          {
            label: "个人信息设置",
            href: "#/app/customers/potential"
          }
        ]
      },
      {
        href: "#",
        elementA: {
          label: "系统消息",
          icon: 'fa-bell-o'
        },
        note: {
          bgClass: "bg-green",
          text: "new"
        }
      },
      {
        href: "#",
        elementA: {
          label: "消息",
          icon: 'fa-envelope-o'
        },
        items: [
          {
            label: "系统通知",
            href: "#/app/customers/potential"
          },
          {
            label: "协助请求",
            href: "#/app/customers/potential"
          }
        ]
      }
    ]);
})();
