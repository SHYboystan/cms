import { computed } from "vue";
import { useAppStore } from "@store/app";
import { useThemeStore } from "@store/theme";
type HeaderProps = {
  /** 显示logo */
  showLogo: boolean;
  /** 显示头部菜单 */
  showHeaderMenu: boolean;
  /** 显示菜单折叠按钮 */
  showMenuCollapse: boolean;
};
type LayoutHeaderProps = Record<ThemeKey.ThemeLayoutMode, HeaderProps>;

export function useLayout() {
  const theme = useThemeStore();
  const app = useAppStore();

  const layoutHeaderProps: LayoutHeaderProps = {
    vertical: {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
    "vertical-mix": {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: false,
    },
    horizontal: {
      showLogo: true,
      showHeaderMenu: true,
      showMenuCollapse: false,
    },
    "horizontal-mix": {
      showLogo: true,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
  };

  const headerProps = computed(() => layoutHeaderProps[theme.layout.mode]);
  const sideVisible = computed(() => theme.layout.mode !== "horizontal");
  const sideWidth = computed(() => {
    const { width, mixWidth, mixChildMenuWidth } = theme.side;
    const isVerticalMix = theme.layout.mode === "vertical-mix";
    let w = isVerticalMix ? mixWidth : width;
    if (isVerticalMix && app.mixSiderFixed) {
      w += mixChildMenuWidth;
    }
    return w;
  });
  const sideCollapsedWidth = computed(() => {
    const { collapsedWidth, mixCollapsedWidth, mixChildMenuWidth } = theme.side;
    const isVerticalMix = theme.layout.mode === "vertical-mix";
    let w = isVerticalMix ? mixCollapsedWidth : collapsedWidth;
    if (isVerticalMix && app.mixSiderFixed) {
      w += mixChildMenuWidth;
    }
    return w;
  });

  return {
    headerProps,
    sideVisible,
    sideWidth,
    sideCollapsedWidth,
  };
}
