import { Router } from "vue-router";
import { PageEnum } from "~/enums/page";
import useUserStore from "~/store/modules/user";
import nProgress from "nprogress";

nProgress.configure({
  showSpinner: false,
});

export function setupRouterGuard(router: Router) {
  createAuthGuard(router);
  createProgressGuard(router);
}

// 鉴权
function createAuthGuard(router: Router) {
  router.beforeEach((to, from) => {
    const userStore = useUserStore();

    if (to.path !== PageEnum.LOGIN_PATH) {
      if (!userStore.token) {
        return {
          path: PageEnum.LOGIN_PATH,
          query: {
            redirect: to.fullPath,
          },
        };
      }
    }
  });
}

// 进度条
function createProgressGuard(router: Router) {
  router.beforeEach((to, from) => {
    nProgress.start();
    return true;
  });

  router.afterEach(() => {
    nProgress.done();
    return true;
  });
}
