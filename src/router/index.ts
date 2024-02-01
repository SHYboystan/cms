import type { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
  RouterHistory,
  RouterOptions,
} from "vue-router";
import { createRouterGuard } from "./guard";

const VITE_HASH_ROUTE = "Y";
const VITE_BASE_URL = "";

const constantRoutes: AuthRoute.Route[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("../views/login/login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/",
    name: "root",
    redirect: "/dashboard",
  },
];

export const routes: AuthRoute.Route[] = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "仪表盘",
      icon: "AndroidFilled",
    },
    redirect: "/dashboard/analysis",
    children: [
      {
        name: "analysis",
        path: "analysis",
        meta: {
          title: "分析页面",
          icon: "AppleFilled",
        },
        component: () => import("../views/dashboard/dashboard.vue"),
      },
      {
        path: "workplace",
        name: "workplace",
        meta: {
          title: "工作台",
          icon: "WindowsFilled",
        },
        component: () => import("../views/workplace/index.vue"),
      },
    ],
  },
  {
    name: "doc",
    path: "/doc",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "文档",
      icon: "ChromeFilled",
    },
    redirect: "/doc/vue",
    children: [
      {
        name: "vue",
        path: "vue",
        meta: {
          title: "vue文档",
          icon: "GithubFilled",
        },
        component: () => import("../views/doc/vue/index.vue"),
      },
      {
        path: "vite",
        name: "vite",
        meta: {
          title: "vite文档",
          icon: "AliwangwangFilled",
        },
        component: () => import("../views/doc/vite/index.vue"),
      },
      {
        path: "pinia",
        name: "pinia",
        meta: {
          title: "pinia文档",
          icon: "AliwangwangFilled",
        },
        component: () => import("../views/doc/pinia/index.vue"),
      },
      {
        path: "ant",
        name: "ant",
        meta: {
          title: "ant文档",
          icon: "WeiboSquareFilled",
        },
        component: () => import("../views/doc/ant/index.vue"),
      },
    ],
  },
  {
    name: "example",
    path: "/example",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "组件示例",
      icon: "TaobaoCircleFilled",
    },
    redirect: "/example/card",
    children: [
      {
        name: "card",
        path: "card",
        meta: {
          title: "卡片",
          icon: "Html5Filled",
        },
        component: () => import("../views/example/card/index.vue"),
      },
      {
        name: "upload",
        path: "upload",
        meta: {
          title: "文件上传",
          icon: "Html5Filled",
        },
        component: () => import("../views/example/upload/index.vue"),
      },
      {
        name: "calender",
        path: "calender",
        meta: {
          title: "日历",
          icon: "Html5Filled",
        },
        component: () => import("../views/example/calender/index.vue"),
      },
      {
        name: "tag",
        path: "tag",
        meta: {
          title: "标签选择器",
          icon: "Html5Filled",
        },
        component: () => import("../views/example/tag-choose/index.vue"),
      },
      {
        path: "table",
        name: "table",
        meta: {
          title: "表格",
          icon: "WechatFilled",
        },
        component: () => import("../views/example/table/index.vue"),
      },
    ],
  },
  {
    name: "plugins",
    path: "/plugins",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "插件示例",
      icon: "AppstoreFilled",
    },
    redirect: "/plugins/card",
    children: [
      {
        path: "charts",
        name: "charts",
        meta: {
          title: "图表",
          icon: "TableOutlined",
        },
        component: () => import("../views/example/table/index.vue"),
      },
    ],
  },
  {
    name: "error",
    path: "/error",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "异常页",
      icon: "AlertFilled",
    },
    redirect: "/error/500",
    children: [
      {
        name: "500",
        path: "500",
        meta: {
          title: "500",
          icon: "Html5Filled",
        },
        component: () => import("../views/error-page/error-500.vue"),
      },
      {
        path: "404",
        name: "404",
        meta: {
          title: "404",
          icon: "WechatFilled",
        },
        component: () => import("../views/error-page/error-404.vue"),
      },
      {
        path: "403",
        name: "403",
        meta: {
          title: "403",
          icon: "WechatFilled",
        },
        component: () => import("../views/error-page/error-403.vue"),
      },
    ],
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../layout/index.vue"),
    meta: {
      title: "关于",
      icon: "InfoCircleFilled",
    },
    redirect: "/about/me",
    children: [
      {
        path: "介绍",
        name: "介绍",
        meta: {
          title: "介绍",
          icon: "ProfileOutlined",
        },
        component: () => import("../views/about/index.vue"),
      },
    ],
  },
];

const routerOptions: { routes: AuthRoute.Route[]; history: RouterHistory } = {
  routes: routes.concat(constantRoutes),
  // history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL)
  history: createWebHashHistory(),
};

export const router = createRouter(<RouterOptions>routerOptions);

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}
