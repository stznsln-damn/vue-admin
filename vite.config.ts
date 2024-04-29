import { defineConfig } from "vite";
import server from "./build/server";
import plugins from "./build/plugins";
import { resolvePath } from "./build/util";

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    server,
    plugins,
    resolve: {
      alias: {
        "~": resolvePath("src"),
      },
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      VITE_APP_NAME: JSON.stringify("你好啊"),
    },
  };
});
