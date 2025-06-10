import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lemonTheme, darklemonTheme } from "../src/themes/lemonTheme";
import "@fontsource/noto-sans-tc/500.css";
import "@fontsource/noto-sans/500.css";

const themeMap = {
  lemon: lemonTheme,
  dark: darklemonTheme,
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "lemon",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "lemon", title: "Lemon" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const withMuiTheme = (Story, context) => {
  const selectedTheme = themeMap[context.globals.theme] ?? lemonTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
