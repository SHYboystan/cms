import type { App } from "vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.variable.min.css";
import * as antIcons from "@ant-design/icons-vue";

export default function setupUi(app: App) {
  // 注册组件
  Object.keys(antIcons).forEach((key) => {
    app.component(key, antIcons[key]);
  });
  app.config.globalProperties.$antIcons = antIcons;
  app.use(Antd);
}
