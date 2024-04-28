import { App } from "vue";

import router from "~/router";
import i18n from "./i18n";
import { setupDirectives } from "~/directives";
import { setupStore } from "~/store";

export default function setupApp(app: App) {
  setupStore(app);
  setupDirectives(app);

  app.use(i18n);
  app.use(router);
}
