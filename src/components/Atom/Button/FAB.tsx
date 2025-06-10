import { styled } from "@mui/material/styles";
import MuiFab from "@mui/material/Fab";
import type { CustomFabProps } from "../../../types/buttonExtends";
import type { Theme } from "@mui/material/styles";
import { palette as defaultPalette } from "../../../themes/defaultPalette";

export const getFabStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    bgColor: colorSet.fabBg ?? fallback.fabBg,
    fontColor: colorSet.fabFont ?? fallback.fabFont,
    overlay: colorSet.fabFont ?? fallback.fabFont,
  };
};

const StyleFab = styled(MuiFab)<{
  "data-color": CustomFabProps["color"];
}>(({ "data-color": color, size = "medium", variant, theme }) => {
  const styleConfig = getFabStyles(theme, color);

  type SizeKey = "small" | "medium" | "large";

  const sizeStyles = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24,
      },
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24,
      },
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36,
      },
    },
  }[size as SizeKey];

  const isExtended = variant === "extended";

  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none" as const,
    position: "relative",
    backgroundColor: styleConfig.bgColor,
    color: styleConfig.fontColor,
    borderRadius: isExtended ? "6px" : "50%",
    ...(isExtended ? {} : sizeStyles),
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: styleConfig.overlay,
      borderRadius: isExtended ? "6px" : "50%",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out",
    },
    "&:hover, &:focus-visible, &:active, &:focus": {
      backgroundColor: styleConfig.bgColor,
    },
    "&:hover::before": {
      opacity: 0.08,
    },
    "&:focus-visible::before, &:active::before": {
      opacity: 0.12,
    },
  };
});

export const Fab = ({ color = "surface", ...props }: CustomFabProps) => {
  return (
    <StyleFab data-color={color} size="medium" disableFocusRipple {...props} />
  );
};
