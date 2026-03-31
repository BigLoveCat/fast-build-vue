import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { setupRouterGuards } from "./guards";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // HTML5 History 模式
  routes,
  scrollBehavior() {
    return { top: 0 }; // 页面切换滚动到顶部
  },
});

// ✅ 注册守卫
setupRouterGuards(router);

export default router;
