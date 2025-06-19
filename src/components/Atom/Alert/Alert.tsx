import { alpha, styled, Theme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { CustomAlertProps, custSeverity } from "../../../types/alertExtends";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { GoCheckCircle } from "react-icons/go";
import { FiAlertTriangle } from "react-icons/fi";
import { PiInfo } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";

export const getAlertStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color].alertColor;
  const colorSet = (theme?.palette?.[color].alertColor as any) ?? fallback;
  return {
    bgColor: colorSet ?? fallback,
    iconColor: colorSet ?? fallback,
  };
};

const iconMap: Record<custSeverity, React.ReactNode> = {
  success: <GoCheckCircle />,
  info: <PiInfo />,
  warning: <FiAlertTriangle />,
  error: <MdErrorOutline />,
  gray: <BiErrorAlt />,
  dark: <BiErrorAlt />,
};

const StyledAlert = styled(MuiAlert)<{
  "data-severity"?: CustomAlertProps["severity"];
  "data-color"?: CustomAlertProps["color"];
}>(({
  "data-severity": severity = "success",
  theme,
  "data-color": color = "primary",
}) => {
  const alertStyles = getAlertStyles(theme, color);

  return {
    fontSize: "16px",
    backgroundColor: alertStyles.bgColor[severity][0],
    color: severity == "dark" ? "#FFFFFF" : "#373737",
    "& .MuiAlert-icon": {
      color: alertStyles.bgColor[severity][1],
    },
    "& .MuiAlert-message": {
      color: severity == "dark" ? "#FFFFFF" : "#373737",
    },
  };
});

export const Alert = ({
  severity = "success",
  color = "primary",
  iconMapping,
  icon,
  alertTitle,
  ...rest
}: CustomAlertProps) => {
  return (
    <StyledAlert
      data-severity={severity}
      data-color={color}
      icon={icon ?? iconMap[severity]}
      {...rest}
    >
      {alertTitle && (
        <AlertTitle sx={{ color: severity == "dark" ? "#FFFFFF" : "#1E1E1E" }}>
          {alertTitle}
        </AlertTitle>
      )}
      {rest.children}
    </StyledAlert>
  );
};
