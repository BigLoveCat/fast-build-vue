// guards.ts
import type { Router } from 'vue-router';

export function setupRouterGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    const token = localStorage.getItem('token');

    if (to.meta.requiresAuth && !token) {
      next('/login');
    } else {
      next();
    }
  });

  router.afterEach(() => {
    // 可以做埋点、关闭 loading
    // console.log("路由切换完成");
  });
}
