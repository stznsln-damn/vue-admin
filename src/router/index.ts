import { createRouter, createWebHashHistory } from "vue-router";
import { setupRouterGuard } from "./guard";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

// 路由守卫
setupRouterGuard(router);

export default router;
