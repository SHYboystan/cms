export const systemName = "CMSAdmin";

export const themeLayoutModeLabels: Record<ThemeKey.ThemeLayoutMode, string> = {
  vertical: "左侧菜单模式",
  horizontal: "顶部菜单模式",
  "vertical-mix": "左侧菜单混合模式",
  "horizontal-mix": "顶部菜单混合模式",
};

export const themeLayoutModeOptions: Common.OptionWithKey<ThemeKey.ThemeLayoutMode>[] =
  [
    {
      value: "vertical",
      label: themeLayoutModeLabels.vertical,
    },
    {
      value: "horizontal",
      label: themeLayoutModeLabels.horizontal,
    },
    {
      value: "vertical-mix",
      label: themeLayoutModeLabels["vertical-mix"],
    },
    {
      value: "horizontal-mix",
      label: themeLayoutModeLabels["horizontal-mix"],
    },
  ];

export const themeHorizontalMenuPositionLabels: Record<
  ThemeKey.ThemeHorizontalMenuPosition,
  string
> = {
  "flex-start": "居左",
  center: "居中",
  "flex-end": "居右",
};

export const themeHorizontalMenuPositionOptions: Common.OptionWithKey<ThemeKey.ThemeHorizontalMenuPosition>[] =
  [
    {
      value: "flex-start",
      label: themeHorizontalMenuPositionLabels["flex-start"],
    },
    {
      value: "center",
      label: themeHorizontalMenuPositionLabels.center,
    },
    {
      value: "flex-end",
      label: themeHorizontalMenuPositionLabels["flex-end"],
    },
  ];

export const themeTabModeLabels: Record<ThemeKey.ThemeTabMode, string> = {
  chrome: "谷歌风格",
  button: "按钮风格",
};

export const themeTabModeOptions: Common.OptionWithKey<ThemeKey.ThemeTabMode>[] =
  [
    {
      value: "chrome",
      label: themeTabModeLabels.chrome,
    },
    {
      value: "button",
      label: themeTabModeLabels.button,
    },
  ];

export const themeAnimateModeLabels: Record<ThemeKey.ThemeAnimateMode, string> =
  {
    "zoom-fade": "渐变",
    "zoom-out": "闪现",
    "fade-slide": "滑动",
    fade: "消退",
    "fade-bottom": "底部消退",
    "fade-scale": "缩放消退",
  };

export const themeAnimateModeOptions: Common.OptionWithKey<ThemeKey.ThemeAnimateMode>[] =
  [
    {
      value: "zoom-fade",
      label: themeAnimateModeLabels["zoom-fade"],
    },
    {
      value: "zoom-out",
      label: themeAnimateModeLabels["zoom-out"],
    },
    {
      value: "fade-slide",
      label: themeAnimateModeLabels["fade-slide"],
    },
    {
      value: "fade",
      label: themeAnimateModeLabels.fade,
    },
    {
      value: "fade-bottom",
      label: themeAnimateModeLabels["fade-bottom"],
    },
    {
      value: "fade-scale",
      label: themeAnimateModeLabels["fade-scale"],
    },
  ];
