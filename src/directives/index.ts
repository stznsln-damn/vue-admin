import { App } from "vue";
import authDirective from "./permission";

export function setupDirectives(app: App) {
  app.directive("auth", authDirective);
}
