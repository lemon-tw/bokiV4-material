import { styled, Theme } from "@mui/material/styles";
import MuiChip from "@mui/material/Chip";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomChipProps } from "../../../types/chipsExtends";
import ClearIcon from "@mui/icons-material/Clear";

export const getChipStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    bgColor: colorSet.custMain ?? fallback.custMain,
    fontColor: colorSet.iconFont ?? fallback.iconFont,
    overlay: colorSet.iconOverlay ?? fallback.iconOverlay,
    selectedbgColor: colorSet.tonal ?? fallback.tonal,
    selectedFontColor: colorSet.onTonal ?? fallback.onTonal,
    selectedOverlay: colorSet.onTonal ?? fallback.onTonal,
    iconColor: colorSet.custMain ?? fallback.custMain,
  };
};

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== "selected", // selected 不往下傳，其他都照傳
})<CustomChipProps>(({ theme, selected = false, avatar }) => {
  const hasAvatar = !!avatar;
  const styleConfig = getChipStyles(theme);

  return {
    borderRadius: hasAvatar ? 30 : 8,
    color: selected ? styleConfig.selectedFontColor : styleConfig.fontColor,
    backgroundColor: selected ? styleConfig.selectedbgColor : "transparent",
    position: "relative",
    border: selected ? "0px" : "",
    ".MuiChip-icon": {
      color: styleConfig.iconColor,
    },
    "&.MuiChip-clickable:hover, &.MuiChip-clickable:focus": {
      backgroundColor: selected ? styleConfig.selectedbgColor : "transparent",
    },
    "&::before": {
      pointerEvents: "none",
      content: '""',
      borderRadius: hasAvatar ? 30 : selected ? 8 : 7,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: selected
        ? styleConfig.selectedOverlay
        : styleConfig.overlay,
      opacity: 0,
      zIndex: 1,
    },
    "&:hover::before": {
      opacity: 0.08,
    },
    "&.Mui-focusVisible::before": {
      opacity: 0.12,
    },
    "&.MuiChip-clickable:active": {
      boxShadow: "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026", // ⬅ 你可以自訂這邊的陰影效果
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
  };
});

export const Chip = ({
  selected = false,
  avatar,
  deleteIcon = <ClearIcon />,
  ...rest
}: CustomChipProps) => (
  <StyledChip
    {...rest}
    selected={selected}
    avatar={avatar}
    deleteIcon={deleteIcon}
    variant="outlined"
  />
);
