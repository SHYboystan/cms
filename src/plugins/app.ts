import type { App } from "vue";
import globalComponents from "../components/index";

export default function setupComponents(app: App) {
  globalComponents.install(app, {});
}
