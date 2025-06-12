// ✅ palette 色盤定義

export const palette = {
  primary: {
    main: "#1994FC", //為了MUI theme的設定 無用
    custMain: "#1994FC", //這才是主色調
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#D1EAFE",
    fabFont: "#1994FC",
    myDefault: "#7a7d80"
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "1994FC"
  },
  secondary: {
    main: "#1994FC",
    custMain: "#DBE9FF",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF"
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",

    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
  },
  // 
  error: {
    main: "#FF4D4F",
    custMain: "#FF4D4F",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#F5F5F6",
    fabFont: "#FF4D4F",
    myDefault: "#FF4D4F"
  }
};
export const dark = {
  primary: {
    main: "#1994FC", //為了MUI theme的設定 無用
    custMain: "#000000", //這才是主色調
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#D1EAFE",
    fabFont: "#1994FC",
    myDefault: "#1994FC",
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "#1994FC",
  },
  secondary: {
    main: "#1994FC",
    custMain: "#DBE9FF",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",

    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF",
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",

    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",

    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
  },
};
//| key            | 使用情境與元件
// | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------
// | `custMain`        | - `Button`: filled.bg、text.font、tonal.selectedBg - `IconButton`: standard.font - `ToggleIconButton`: standard/selected font, selectedBg
// | `onMain`      | - `Button`: filled.font、overlay - `IconButton`: filled.font/overlay - `ToggleIconButton`: selected font、overlay
// | `shadow`      | - `Button`: filled/elevated/tonal boxShadow
// | `outline`     | - `Button`: outlined.border - `IconButton`: outlined.border - `Toggle`: outlined.border
// | `elevated`    | - `Button`: elevated.bg
// | `tonal`       | - `Button`: tonal.bg - `IconButton`: tonal.bg - `ToggleIconButton`: tonal.selectedBg
// | `onTonal`     | - `Button`: tonal.font、overlay - `IconButton`: tonal.font/overlay - `ToggleIconButton`: tonal font、overlay
// | `iconFont`    | - `IconButton`: standard/outlined.font - `ToggleIconButton`: outlined.font
// | `iconOverlay` | - `IconButton`: hover overlay - `ToggleIconButton`: hover overlay
// | `surface`     | - `ToggleIconButton`: filled/tonal 未選取狀態背景
// | `neutral`     | - `ToggleIconButton`: outlined.selectedBg
// | `fabBg`       | - `Fab`: 背景色
// | `fabFont`     | - `Fab`: icon 色與 overlay 色

// ✅ 全局用 disabled 色
export const disableColor = ["#373737"];
