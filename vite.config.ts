import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/cms", // 设置打包之后引入路径的问题
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "/src/http/mock",
      localEnabled: true,
    }),
  ],
  build: {
    assetsDir: "static",
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/style/theme.less";`,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@store": resolve(__dirname, "src/store"),
    },
  },
});
