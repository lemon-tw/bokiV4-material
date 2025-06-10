import { styled, alpha } from "@mui/material/styles";
import MuiIconButton from "@mui/material/IconButton";
import type {
  CustomIconButtonProps,
  CustomIconButtonVariant,
} from "../../../types/buttonExtends";
import { useState } from "react";
import {
  disableColor,
  palette as defaultPalette,
} from "../../../themes/defaultPalette";
import type { Theme } from "@mui/material/styles";

type SizeKey = "small" | "medium" | "large";

export const getIconButtonStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    disabledcolor: disableColor[0],
    filled: {
      bgColor: colorSet.custMain ?? fallback.custMain,
      fontColor: colorSet.onMain ?? fallback.onMain,
      overlay: colorSet.onMain ?? fallback.onMain,
      borderColor: "transparent",
    },
    standard: {
      bgColor: "transparent",
      fontColor: colorSet.iconFont ?? fallback.iconFont,
      overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
      borderColor: "transparent",
    },
    tonal: {
      bgColor: colorSet.tonal ?? fallback.tonal,
      fontColor: colorSet.iconFont ?? fallback.iconFont,
      overlay: colorSet.onTonal ?? fallback.onTonal,
      borderColor: "transparent",
    },
    outlined: {
      bgColor: "transparent",
      fontColor: colorSet.iconFont ?? fallback.iconFont,
      overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
      borderColor: colorSet.outline ?? fallback.outline,
    },
  };
};

export const getToggleIconButtonStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    disabledcolor: disableColor[0],
    filled: {
      bgColor: colorSet.surface ?? fallback.surface,
      fontColor: colorSet.custMain ?? fallback.custMain,
      overlay: colorSet.custMain ?? fallback.custMain,
      selectedBgColor: colorSet.custMain ?? fallback.custMain,
      selectedFontColor: colorSet.onMain ?? fallback.onMain,
      selectedOverlay: colorSet.onMain ?? fallback.onMain,
      borderColor: "transparent",
    },
    standard: {
      bgColor: "transparent",
      fontColor: colorSet.custMain ?? fallback.custMain,
      overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: colorSet.custMain ?? fallback.custMain,
      selectedOverlay: colorSet.custMain ?? fallback.custMain,
      borderColor: "transparent",
    },
    tonal: {
      bgColor: colorSet.surface ?? fallback.surface,
      fontColor: colorSet.onTonal ?? fallback.onTonal,
      overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
      selectedBgColor: colorSet.tonal ?? fallback.tonal,
      selectedFontColor: colorSet.onTonal ?? fallback.onTonal,
      selectedOverlay: colorSet.onTonal ?? fallback.onTonal,
      borderColor: "transparent",
    },
    outlined: {
      bgColor: "transparent",
      fontColor: colorSet.iconFont ?? fallback.iconFont,
      overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
      selectedBgColor: colorSet.neutral ?? fallback.neutral,
      selectedFontColor: colorSet.onMain ?? fallback.onMain,
      selectedOverlay: colorSet.onMain ?? fallback.onMain,
      borderColor: colorSet.outline ?? fallback.outline,
    },
  };
};

const StyleIconButton = styled(MuiIconButton)<{
  "data-variant": CustomIconButtonProps["variant"];
  "data-color"?: CustomIconButtonProps["color"];
}>(({
  "data-variant": variant,
  "data-color": color,
  size = "small",
  theme,
}) => {
  const styleConfig = getIconButtonStyles(theme, color);
  const safeVariant = (
    ["filled", "standard", "tonal", "outlined"] as const
  ).includes(variant as CustomIconButtonVariant)
    ? (variant as CustomIconButtonVariant)
    : "filled";
  const current = styleConfig[safeVariant];

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

  const baseStyle = () => ({
    backgroundColor: current.bgColor,
    color: current.fontColor,
    borderRadius: 6,
    ...sizeStyles,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: current.overlay, // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none", // 確保不影響互動
      zIndex: 1, // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: alpha(styleConfig.disabledcolor, 0.08),
      color: alpha(styleConfig.disabledcolor, 0.38),
    },
    "&:hover": {
      backgroundColor: current.bgColor,
    },
    "&:hover::before": {
      opacity: 0.08,
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12,
    },
  });

  switch (safeVariant) {
    case "filled":
      return {
        ...baseStyle(),
        "&:hover": {
          backgroundColor: current.bgColor,
        },
      };
    case "standard":
      return {
        ...baseStyle(),
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
      };
    case "tonal":
      return {
        ...baseStyle(),
        "&:hover": {
          backgroundColor: current.bgColor,
        },
      };
    case "outlined":
      return {
        ...baseStyle(),
        border: `1px solid ${current.borderColor}`,
        "&:hover": {
          backgroundColor: current.bgColor,
          border: `1px solid ${current.borderColor}`,
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
      };
  }
});

const StyleToggleIconButton = styled(MuiIconButton)<{
  "data-variant": CustomIconButtonProps["variant"];
  "data-color"?: CustomIconButtonProps["color"];
  clicked: boolean;
}>(({
  "data-variant": variant,
  "data-color": color,
  clicked: selected,
  size = "small",
  theme,
}) => {
  const styleConfig = getToggleIconButtonStyles(theme, color);
  const safeVariant = (
    ["filled", "standard", "tonal", "outlined"] as const
  ).includes(variant as CustomIconButtonVariant)
    ? (variant as CustomIconButtonVariant)
    : "filled";
  const current = styleConfig[safeVariant];

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

  const baseStyle = () => ({
    backgroundColor: selected ? current.selectedBgColor : current.bgColor,
    color: selected ? current.selectedFontColor : current.fontColor,
    borderRadius: 6,
    ...sizeStyles,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: selected ? current.selectedOverlay : current.overlay, // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none", // 確保不影響互動
      zIndex: 1, // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: alpha(styleConfig.disabledcolor, 0.12),
      color: alpha(styleConfig.disabledcolor, 0.38),
    },
    "&:hover": {
      backgroundColor: selected ? current.selectedBgColor : current.bgColor,
    },
    "&:hover::before": {
      opacity: 0.08,
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12,
    },
  });
  switch (safeVariant) {
    case "filled":
      return {
        ...baseStyle(),
      };
    case "standard":
      return {
        ...baseStyle(),
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
      };
    case "tonal":
      return {
        ...baseStyle(),
        "&.Mui-disabled": {
          backgroundColor: alpha(styleConfig.disabledcolor, 0.08),
          color: alpha(
            selected ? current.selectedFontColor : current.fontColor,
            0.38
          ),
        },
      };
    case "outlined":
      return {
        ...baseStyle(),
        border: selected ? "" : `1px solid ${current.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: selected
            ? alpha(styleConfig.disabledcolor, 0.12)
            : "transparent",
        },
        "&:hover": {
          border: selected ? "" : `1px solid ${current.borderColor}`,
        },
      };
  }
});

export const IconButton = ({
  variant,
  toggleIcon,
  children,
  color = "primary",
  ...rest
}: CustomIconButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelect = () => {
    console.log("toggleClick");
    setIsSelected(!isSelected);
  };
  if (toggleIcon) {
    return (
      <StyleToggleIconButton
        disableRipple
        data-color={color}
        data-variant={variant}
        {...rest}
        onClick={toggleSelect}
        clicked={isSelected}
      >
        {isSelected ? children : toggleIcon}
      </StyleToggleIconButton>
    );
  } else {
    return (
      <StyleIconButton
        disableRipple
        data-color={color}
        data-variant={variant}
        {...rest}
      >
        {children}
      </StyleIconButton>
    );
  }
};
