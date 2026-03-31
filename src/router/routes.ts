import type { RouteRecordRaw } from "vue-router";

// 路由表
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/HomeView.vue"),
  },
];
