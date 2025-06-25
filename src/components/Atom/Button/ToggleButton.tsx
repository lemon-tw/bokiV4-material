import { styled, Theme, alpha } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomToggleButtonProps } from "../../../types/buttonExtends";

export const getToggleButtonStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;
  return {
    fontColor: colorSet.onMain ?? fallback.onMain,
    bgColor: colorSet.toggleButtonBg ?? fallback.toggleButtonBg,
  };
};

const StyledToggleButton = styled(MuiToggleButton)<{
  "data-color"?: CustomToggleButtonProps["color"];
}>(({ theme, "data-color": color = "primary", size = "medium" }) => {
  const toggleButtonStyles = getToggleButtonStyles(theme, color);

  type SizeKey = "small" | "medium" | "large";

  const sizeStyles = {
    small: {
      height: "44px",
      width: "44px",
      "& svg": {
        fontSize: 32,
      },
    },
    medium: {
      height: "54px",
      width: "54px",
      "& svg": {
        fontSize: 38,
      },
    },
    large: {
      height: "64px",
      width: "64px",
      "& svg": {
        fontSize: 44,
      },
    },
  }[size as SizeKey];

  return {
    color: toggleButtonStyles.fontColor,
    backgroundColor: alpha(toggleButtonStyles.bgColor, 0.75),
    ...sizeStyles,
    "&:hover": {
      backgroundColor: toggleButtonStyles.bgColor,
    },
    "&.Mui-selected": {
      backgroundColor: toggleButtonStyles.bgColor,
      color: toggleButtonStyles.fontColor,
    },
    "&.Mui-selected:hover": {
      backgroundColor: toggleButtonStyles.bgColor,
    },
    "&.Mui-disabled": {
      color: toggleButtonStyles.fontColor,
      backgroundColor: alpha(toggleButtonStyles.bgColor, 0.38),
    },
  };
});

export const ToggleButton = ({
  color = "primary",
  ...rest
}: CustomToggleButtonProps) => {
  return <StyledToggleButton {...rest}></StyledToggleButton>;
};
