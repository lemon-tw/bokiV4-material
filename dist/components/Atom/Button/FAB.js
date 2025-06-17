import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import MuiFab from "@mui/material/Fab";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
export const getFabStyles = (theme, color = "primary") => {
    const fallback = defaultPalette[color];
    const colorSet = theme?.palette?.[color] ?? fallback;
    return {
        bgColor: colorSet.fabBg ?? fallback.fabBg,
        fontColor: colorSet.fabFont ?? fallback.fabFont,
        overlay: colorSet.fabFont ?? fallback.fabFont,
    };
};
const StyleFab = styled(MuiFab)(({ "data-color": color, size = "medium", variant, theme }) => {
    const styleConfig = getFabStyles(theme, color);
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
    }[size];
    const isExtended = variant === "extended";
    return {
        fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
        fontWeight: 500,
        textTransform: "none",
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
export const Fab = ({ color = "surface", ...props }) => {
    return (_jsx(StyleFab, { "data-color": color, size: "medium", disableFocusRipple: true, ...props }));
};
