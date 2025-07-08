import { styled, Theme, alpha } from "@mui/material/styles";
import MuiTooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomRichTooltipProps } from "../../../types/tooltipExtends";
import { tooltipClasses } from "@mui/material";

export const getRichTooltipStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    bgColor: colorSet.elevated ?? fallback.elevated,
    fontColor: colorSet.iconFont ?? fallback.iconFont,
  };
};

const StyleRichTooltip = styled(
  ({ className, ...props }: CustomRichTooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => {
  const styleConfig = getRichTooltipStyles(theme);
  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: styleConfig.bgColor,
      color: styleConfig.fontColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400,
      padding: "10px",
      borderRadius: "12px",
      boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: styleConfig.bgColor,
      "&::before": {
        boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D",
      },
    },
  };
});

export const RichTooltip = ({
  title,
  content,
  actions,
  ...props
}: CustomRichTooltipProps) => {
  return (
    <StyleRichTooltip
      {...props}
      title={
        <Box>
          {title && (
            <Typography fontWeight={500} fontSize={14} fontFamily={"Noto Sans"}>
              {title}
            </Typography>
          )}
          {content && (
            <Typography fontSize={14} fontFamily={"Noto Sans"}>
              {content}
            </Typography>
          )}
          {actions && (
            <Box display="flex" gap={2}>
              {actions}
            </Box>
          )}
        </Box>
      }
    />
  );
};
