import { PluginOption } from "vite";

import VueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import I18n from "@intlify/unplugin-vue-i18n/vite";
import { resolvePath } from "./utils";

const plugins: PluginOption[] = [
  VueJsx(),
  Unocss(),
  I18n({
    include: [resolvePath("./src/_locales/**")],
  }),
  AutoImport({
    dts: "./types/auto-imports.d.ts",
    imports: [
      "vue",
      "pinia",
      "@vueuse/core",
      "vue-i18n",
      "vue-router",
      {
        "lodash-es": [["*", "_"]],
      },
    ],
  }),
];

export default plugins;
