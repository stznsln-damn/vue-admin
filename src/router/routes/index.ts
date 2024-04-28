import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("~/pages/Home"),
  },
  {
    path: "/login",
    component: () => import("~/pages/Login"),
  },
];
