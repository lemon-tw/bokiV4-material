import { styled, Theme, alpha } from "@mui/material/styles";
import MuiMenuItem from "@mui/material/MenuItem";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomMenuItemProps } from "../../../types/menuExtends";

export const getChipStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    fontColor: colorSet.menuFont ?? fallback.menuFont,
    selectedBg: colorSet.tonal ?? fallback.tonal,
    selectedFont: colorSet.onTonal ?? fallback.onTonal,
  };
};

const StyledMenuItem = styled(
  MuiMenuItem,
  {}
)<CustomMenuItemProps>(({ theme }) => {
  const styleConfig = getChipStyles(theme);

  return {
    fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
    color: styleConfig.fontColor,
    "&:hover": {
      backgroundColor: alpha(styleConfig.fontColor, 0.08),
    },
    "&.Mui-selected": {
      backgroundColor: styleConfig.selectedBg,
      color: styleConfig.selectedFont,
    },

    "& .MuiTouchRipple-root": {
      display: "none",
    },
  };
});

export const MenuItem = ({ ...rest }: CustomMenuItemProps) => (
  <StyledMenuItem {...rest} />
);
