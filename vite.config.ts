import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
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
