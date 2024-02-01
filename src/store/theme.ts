import { defineStore } from "pinia";
import { themeSetting } from "@/settings/theme";
import { updateTheme } from "@/layout/components/SettingsDrawer/updateTheme";

export const useThemeStore = defineStore("theme-store", {
  state: () => themeSetting,
  getters: {
    /** 页面动画模式 */
    pageAnimateMode(state) {
      return state.page.animate ? state.page.animateMode : undefined;
    },
  },
  actions: {
    /** 设置系统主题颜色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor;
      updateTheme(themeColor);
    },
    /** 设置侧边栏反转色 */
    setSiderInverted(isInverted: boolean) {
      this.side.inverted = isInverted;
    },
    /** 设置头部反转色 */
    setHeaderInverted(isInverted: boolean) {
      this.header.inverted = isInverted;
    },
    /** 设置底部反转色 */
    setFooterInverted(inverted: boolean) {
      this.footer.inverted = inverted;
    },
    /** 设置布局模式 */
    setLayoutMode(mode: ThemeKey.ThemeLayoutMode) {
      console.log(mode, "当前主题");
      this.layout.mode = mode;
    },
  },
});
