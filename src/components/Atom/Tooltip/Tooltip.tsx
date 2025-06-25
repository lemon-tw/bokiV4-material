import { styled, Theme, alpha } from "@mui/material/styles";
import MuiTooltip from "@mui/material/Tooltip";
import {
  palette as defaultPalette,
  disableColor,
} from "../../../themes/defaultPalette";
// import { CustomSwitchProps } from "../../../types/switchExtends";
import { TooltipProps as MuiTooltipProps, tooltipClasses } from "@mui/material";

export const getTooltipStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    bgColor: colorSet.tooltipBg ?? fallback.tooltipBg,
  };
};

const StyleTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => {
  const styleConfig = getTooltipStyles(theme);
  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: styleConfig.bgColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400,
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: styleConfig.bgColor,
    },
  };
});

export const Tooltip = ({ ...props }: MuiTooltipProps) => {
  return <StyleTooltip {...props} />;
};
