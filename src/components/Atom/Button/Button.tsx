import { alpha, styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import type {
  CustomButtonProps,
  CustomButtonVariant,
} from "../../../types/buttonExtends";
import {
  disableColor,
  palette as defaultPalette,
} from "../../../themes/defaultPalette";
import type { Theme } from "@mui/material/styles";

export const getButtonStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    disabledcolor: disableColor[0],
    filled: {
      borderColor: "transparent",
      bgColor: colorSet.custMain ?? fallback.custMain, //theme傳進來的顏色/fallback的顏色
      fontColor: colorSet.onMain ?? fallback.onMain,
      overlay: colorSet.onMain ?? fallback.onMain,
      focusBorderColor: "transparent",
      shadowColor: colorSet.shadow ?? fallback.shadow,
    },
    outlined: {
      borderColor: colorSet.outline ?? fallback.outline,
      bgColor: "transparent",
      fontColor: colorSet.custMain ?? fallback.custMain,
      overlay: colorSet.custMain ?? fallback.custMain,
      focusBorderColor: colorSet.custMain ?? fallback.custMain,
      shadowColor: "transparent",
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: colorSet.custMain ?? fallback.custMain,
      overlay: colorSet.custMain ?? fallback.custMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent",
    },
    elevated: {
      borderColor: "transparent",
      bgColor: colorSet.elevated ?? fallback.elevated,
      fontColor: colorSet.custMain ?? fallback.custMain,
      overlay: colorSet.custMain ?? fallback.custMain,
      focusBorderColor: "transparent",
      shadowColor: colorSet.shadow ?? fallback.shadow,
    },
    tonal: {
      borderColor: "transparent",
      bgColor: colorSet.tonal ?? fallback.tonal,
      fontColor: colorSet.onTonal ?? fallback.onTonal,
      overlay: colorSet.onTonal ?? fallback.onTonal,
      focusBorderColor: "transparent",
      shadowColor: colorSet.shadow ?? fallback.shadow,
    },
  };
};

const StyledButton = styled(MuiButton)<{
  "data-variant"?: CustomButtonProps["variant"];
  "data-color"?: CustomButtonProps["color"];
}>(({
  "data-variant": variant,
  size = "medium",
  theme,
  "data-color": color = "primary",
}) => {
  const buttonStyles = getButtonStyles(theme, color);
  const ValidVariants = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal",
  ] as const;

  const safeVariant: CustomButtonVariant = ValidVariants.includes(
    variant as CustomButtonVariant
  )
    ? (variant as CustomButtonVariant)
    : "filled";

  const current = buttonStyles[safeVariant];

  type SizeKey = "small" | "medium" | "large";

  const sizeStyles = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px",
    },
    large: {
      fontSize: "20px",
      height: "70px",
    },
  }[size as SizeKey];

  const baseStyle = (styleConfig: typeof current) => ({
    textTransform: "none" as const,
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    borderRadius: 6,
    fontWeight: 500,
    padding: "10px 24px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: styleConfig.overlay, // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none", // 確保不影響互動
      zIndex: 1, // 蓋在 button 上但不蓋文字
    },
    "&:hover::before": {
      opacity: 0.08,
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12,
    },
    "&.Mui-disabled": {
      color: alpha(buttonStyles.disabledcolor, 0.38),
    },
    ...sizeStyles,
  });

  switch (safeVariant) {
    case "filled":
      return {
        ...baseStyle(current),
        backgroundColor: current.bgColor,
        color: current.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${alpha(current.shadowColor, 0.15)}, 0px 1px 2px 0px ${alpha(current.shadowColor, 0.3)}`,
        },
        "&:active": {
          boxShadow: "none",
        },
        "&.Mui-disabled": {
          backgroundColor: alpha(buttonStyles.disabledcolor, 0.12),
        },
      };
    case "outlined":
      return {
        ...baseStyle(current),
        border: `1px solid ${current.borderColor}`,
        color: current.fontColor,
        backgroundColor: current.bgColor,
        "&:focus-visible": {
          border: `1px solid ${current.fontColor}`,
        },
        "&:active": {
          border: `1px solid ${current.borderColor}`,
        },
      };
    case "text":
      return {
        ...baseStyle(current),
        backgroundColor: current.bgColor,
        color: current.fontColor,
        "&:focus-visible::before": {
          backgroundColor: alpha(current.overlay, 0.12),
        },
      };
    case "elevated":
      return {
        ...baseStyle(current),
        backgroundColor: current.bgColor,
        color: current.fontColor,
        boxShadow: `0px 1px 3px 1px ${alpha(current.shadowColor, 0.15)}, 0px 1px 2px 0px ${alpha(current.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${alpha(current.shadowColor, 0.15)}, 0px 1px 2px 0px ${alpha(current.shadowColor, 0.3)}`,
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${alpha(current.shadowColor, 0.15)}, 0px 1px 2px 0px ${alpha(current.shadowColor, 0.3)}`,
        },
        "&.Mui-disabled": {
          backgroundColor: alpha(buttonStyles.disabledcolor, 0.12),
        },
      };
    case "tonal":
      return {
        ...baseStyle(current),
        backgroundColor: current.bgColor,
        color: current.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${alpha(current.shadowColor, 0.15)}, 0px 1px 2px 0px ${alpha(current.shadowColor, 0.3)}`,
        },
        "&:active": {
          boxShadow: "none",
        },
        "&.Mui-disabled": {
          backgroundColor: alpha(buttonStyles.disabledcolor, 0.12),
        },
      };
  }
});

export const Button = ({
  variant = "filled",
  color = "primary",
  ...rest
}: CustomButtonProps) => {
  return (
    <StyledButton
      disableElevation
      disableRipple
      {...rest}
      data-color={color} // ✅ 你自定義的，用來控制樣式
      data-variant={variant} // ✅ 你自定義的，用來控制樣式
    />
  );
};
