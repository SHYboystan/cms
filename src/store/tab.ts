import { defineStore } from "pinia";
import { router } from "@/router";

type tabItem = {
  // 图标
  icon: string;
  // 页面名称
  name: string;
  // 页面路径
  path: string;
};

interface TabState {
  tabs: tabItem[];
}

export const useTab = defineStore("tab", {
  state: (): TabState => ({
    tabs: [],
  }),
  getters: {},
  actions: {
    addTab(tab: tabItem) {
      if (this.tabs.some((v) => v.path === tab.path)) {
        return;
      }
      this.tabs.push(tab);
    },
    removeTab(path, nowPath) {
      if (!path) {
        return;
      }
      this.tabs = this.tabs.filter((v) => v.path !== path);
      setTimeout(() => {
        if (path === nowPath) {
          const lastPath = this.tabs.slice(-1)[0];
          router.push({ path: lastPath.path });
        }
      }, 10);
    },
    removeOtherTab(path) {
      this.tabs = this.tabs.filter((v) => v.path === path);
      router.push({ path });
    },
    removeLeftTab(path, nowPath) {
      const currentIndex = this.tabs.findIndex((v) => v.path === path);
      if (currentIndex > 0) {
        this.tabs = this.tabs.slice(currentIndex, this.tabs.length);
        if (!this.tabs.some((v) => v.path === nowPath)) {
          router.push({ path: this.tabs[0].path });
        }
      }
    },
    removeRightTab(path, nowPath) {
      const currentIndex = this.tabs.findIndex((v) => v.path === path);
      if (currentIndex < this.tabs.length) {
        this.tabs = this.tabs.slice(0, currentIndex - 1);
        if (!this.tabs.some((v) => v.path === nowPath)) {
          router.push({ path: this.tabs[0].path });
        }
      }
    },
  },
});
