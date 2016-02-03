/**
 * Created by jacobdong on 15/11/25.
 */

(function () {
  'use strict';
  angular.module('app.constants')
    .constant('SIDEBAR_MENU_DATA', [
      {
        href: "javascript:void(0)",
        elementA: {
          label: "客户",
          icon: 'fa-user'
        },
        items: [
          {
            label: "正在催收",
            href: "#/app/current"
          },
          {
            label: "待催收",
            href: "#/app/biding"
          },
          {
            label: "催收完成",
            href: "#/app/complete"
          }
        ]
      },
      {
        href: "#/app/group",
        elementA: {
          label: "工作组",
          icon: 'fa-group'
        }
      },
      {
        href: "javascript:void(0)",
        elementA: {
          label: "个人信息",
          icon: 'fa-info-circle'
        },
        items: [
          {
            label: "考勤",
            href: "#/app/attendance",
          },
          {
            label: "业绩",
            href: "#/app/achievement",
          },
          {
            label: "个人信息设置",
            href: "#/app/setting"
          }
        ]
      },
      {
        href: "javascript:void(0)",
        elementA: {
          label: "消息",
          icon: 'fa-envelope-o'
        },
        items: [
          {
            label: "系统通知",
            href: "#/app/systemNotice"
          },
          {
            label: "协助请求",
            href: "#/app/assistRequest"
          },
          {
            label: "提醒事件",
            href: "#/app/eventReminder"
          }
        ]
      }
    ]);
})();
