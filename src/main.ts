import { createApp } from "vue";
import App from "./App.vue";
import Loading from "./components/loading/loading.vue";
import { setupAssets, setupUi, setupComponents } from "./plugins";
import { setupRouter } from "./router";
import { setupStore } from "./store";

async function setupApp() {
  setupAssets();

  const appLoading = createApp(Loading);
  appLoading.mount("#Loading");

  const app = createApp(App);
  setupUi(app);
  setupComponents(app);
  setupStore(app);
  await setupRouter(app);
  app.mount("#app");
}

setupApp();
