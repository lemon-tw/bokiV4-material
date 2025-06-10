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
    iconFont?: string;
    iconOverlay?: string;
    surface?: string;
    neutral?: string;
    fabBg?: string;
    fabFont?: string;
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
