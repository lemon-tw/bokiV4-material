import { createTheme } from "@mui/material/styles";
import { palette, dark } from "./defaultPalette";

export const lemonTheme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    surface: palette.surface,
  },
});

export const darklemonTheme = createTheme({
  palette: {
    primary: dark.primary,
    secondary: dark.secondary,
    tertiary: dark.tertiary,
    surface: dark.surface,
  },
});
