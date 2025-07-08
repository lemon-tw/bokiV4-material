import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    costMain?: string;
    onMain?: string;
    shadow?: string;
    outline?: string;
    elevated?: string;
    tonal?: string;
    onTonal?: string;
    toggleButtonBg?: string;
    iconFont?: string;
    iconOverlay?: string;
    surface?: string;
    neutral?: string;
    fabBg?: string;
    fabFont?: string;
    myDefault?: string;
    menuFont?: string;
    tooltipBg?: string;
    alertColor?: {
      error?: string[];
      success?: string[];
      info?: string[];
      warning?: string[];
      gray?: string[];
      dark?: string[];
    };
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    surface: PaletteColor;
  }

  interface PaletteOptions {
    primary?: Partial<PaletteColor>;
    secondary?: Partial<PaletteColor>;
    tertiary?: Partial<PaletteColor>;
    surface?: Partial<PaletteColor>;
  }
}
