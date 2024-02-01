import { nextTick } from "vue";
import { defineStore } from "pinia";

interface AppState {
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean;
  /** 侧边栏折叠状态 */
  sideCollapse: boolean;
  /** vertical-mix模式下 侧边栏的固定状态 */
  mixSideFixed: boolean;
  /** 禁用主体内容的水平方向的滚动 */
  disableMainXScroll: boolean;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    reloadFlag: true,
    settingDrawerVisible: true,
    sideCollapse: false,
    mixSideFixed: false,
    disableMainXScroll: false,
  }),
  getters: {},
  actions: {
    /** 折叠/展开 侧边栏折叠状态 */
    toggleSideCollapse() {
      this.sideCollapse = !this.sideCollapse;
    },
    /** 设置主体是否禁用滚动 */
    setDisableMainXScroll(disable: boolean) {
      this.disableMainXScroll = disable;
    },
    async reloadPage(duration = 0) {
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true;
        }, duration);
      } else {
        this.reloadFlag = true;
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
      }, 100);
    },
  },
});
