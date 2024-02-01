import { App, defineAsyncComponent } from "vue";
export default {
  install(app: App, obtions: any) {
    const requireModules = import.meta.glob("./common/**/*.vue");
    for (const path in requireModules) {
      const result: Array<any> | null = path.match(/\/([^/]+)\.vue$/);
      if (result) {
        const modulesContent: any = requireModules[path];
        app.component(result[1], defineAsyncComponent(modulesContent));
      }
    }
  },
};
