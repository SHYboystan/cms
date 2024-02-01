import { ConfigProvider } from "ant-design-vue";
export async function updateTheme(color) {
  ConfigProvider.config({
    theme: {
      primaryColor: color,
      errorColor: "#ff4d4f",
      warningColor: "#faad14",
      successColor: "#52c41a",
      infoColor: "#eeeeee",
    },
  });
}
