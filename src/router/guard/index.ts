import type { Router } from "vue-router";
import { userStore } from "@store/user";
export function createRouterGuard(router: Router) {
  const user = userStore();
  router.beforeEach(async (to, from, next) => {
    // 开始 loadingBar
    // 页面跳转权限处理
    if (to.path === "/login") {
      next();
    }
    if (!user.isLogin) {
      return next("/login");
    } else {
      next();
    }
  });
  router.afterEach((to) => {
    // 设置document title
    // useTitle(to.meta.title);
    // 结束 loadingBar
  });
}
