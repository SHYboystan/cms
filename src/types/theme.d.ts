/** 主题相关类型 */
declare namespace Theme {
  /** 主题配置 */
  interface Setting {
    /** 布局样式 */
    layout: Layout;
    /** 主题颜色 */
    themeColor: string;
    /** 主题颜色列表 */
    themeColorList: string[];
    /** 其他颜色 */
    otherColor: OtherColor;
    /** 固定头部和多页签 */
    fixedHeaderAndTab: boolean;
    /** 头部样式 */
    header: Header;
    /** 标多页签样式 */
    tab: Tab;
    /** 侧边栏样式 */
    side: Side;
    /** 菜单样式 */
    menu: Menu;
    /** 底部样式 */
    footer: Footer;
    /** 页面样式 */
    page: Page;
  }
  /** 布局样式 */
  interface Layout {
    /** 最小宽度 */
    minWidth: number;
    /** 布局模式 */
    mode: "vertical" | "horizontal" | "vertical-mix" | "horizontal-mix";
    /** 布局模式列表 */
    modeList: Common.OptionWithKey<ThemeKey.ThemeLayoutMode>[];
  }

  /** 其他主题颜色 */
  interface OtherColor {
    /** 信息 */
    info: string;
    /** 成功 */
    success: string;
    /** 警告 */
    warning: string;
    /** 错误 */
    error: string;
  }

  /** 头部样式 */
  interface Header {
    /** 头部反转色 */
    inverted: boolean;
    /** 头部高度 */
    height: number;
    /** 面包屑样式 */
    crumb: Crumb;
  }
  /** 面包屑样式 */
  interface Crumb {
    /** 面包屑可见 */
    visible: boolean;
    /** 显示图标 */
    showIcon: boolean;
  }

  /** 标多页签样式 */
  export interface Tab {
    /** 多页签可见 */
    visible: boolean;
    /** 多页签高度 */
    height: number;
    /** 多页签风格 */
    mode: ThemeKey.ThemeTabMode;
    /** 多页签风格列表 */
    modeList: Common.OptionWithKey<ThemeKey.ThemeTabMode>[];
    /** 开启多页签缓存 */
    isCache: boolean;
  }

  /** 侧边栏样式 */
  interface Side {
    /** 侧边栏反转色 */
    inverted: boolean;
    /** 侧边栏宽度 */
    width: number;
    /** 侧边栏折叠时的宽度 */
    collapsedWidth: number;
    /** vertical-mix模式下侧边栏宽度 */
    mixWidth: number;
    /** vertical-mix模式下侧边栏折叠时的宽度 */
    mixCollapsedWidth: number;
    /** vertical-mix模式下侧边栏的子菜单的宽度 */
    mixChildMenuWidth: number;
  }

  /** 菜单样式 */
  interface Menu {
    /** 水平模式的菜单的位置 */
    horizontalPosition: ThemeKey.ThemeHorizontalMenuPosition;
    /** 水平模式的菜单的位置列表 */
    horizontalPositionList: Common.OptionWithKey<ThemeKey.ThemeHorizontalMenuPosition>[];
  }

  /** 底部样式 */
  interface Footer {
    /* 底部是否可见 */
    visible: boolean;
    /** 是否固定底部 */
    fixed: boolean;
    /** 底部是否居右(顶部混合菜单模式有效) */
    right: boolean;
    /** 底部高度 */
    height: number;
    /** 底部反转色 */
    inverted: boolean;
  }

  /** 页面样式 */
  interface Page {
    /** 页面是否开启动画 */
    animate: boolean;
    /** 动画类型 */
    animateMode: ThemeKey.ThemeAnimateMode;
    /** 动画类型列表 */
    animateModeList: Common.OptionWithKey<ThemeKey.ThemeAnimateMode>[];
  }
}
