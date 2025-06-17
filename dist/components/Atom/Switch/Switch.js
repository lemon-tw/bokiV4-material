import { jsx as _jsx } from "react/jsx-runtime";
import { styled, alpha } from "@mui/material/styles";
import MuiSwitch from "@mui/material/Switch";
import { palette as defaultPalette, disableColor, } from "../../../themes/defaultPalette";
import { renderToStaticMarkup } from "react-dom/server";
const jsxToBackgroundImage = (icon, color = "#000000") => {
    if (!icon)
        return undefined;
    let rawSvg = renderToStaticMarkup(icon);
    // 1. 移除多餘 React / MUI 屬性
    rawSvg = rawSvg
        .replace(/class=".*?"/g, "")
        .replace(/focusable=".*?"/g, "")
        .replace(/aria-hidden=".*?"/g, "")
        .replace(/data-testid=".*?"/g, "");
    // 2. 確保有 xmlns
    if (!rawSvg.includes("xmlns")) {
        rawSvg = rawSvg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    // 3. 填上黑色
    if (!rawSvg.includes("fill=")) {
        rawSvg = rawSvg.replace("<path", '<path fill="' + color + '"');
    }
    const encoded = encodeURIComponent(rawSvg);
    return `url("data:image/svg+xml;utf8,${encoded}")`;
};
export const getSwitchStyles = (theme, color = "primary") => {
    const fallback = defaultPalette[color];
    const colorSet = theme?.palette?.[color] ?? fallback;
    return {
        bgColor: colorSet.custMain ?? fallback.custMain,
        thumbColor: colorSet.onMain ?? fallback.onMain,
        actthumbColor: colorSet.fabBg ?? fallback.fabBg,
        unselectbgColor: colorSet.surface ?? fallback.surface,
        unselectColor: colorSet.outline ?? fallback.outline,
        unselectthumbColor: colorSet.iconFont ?? fallback.iconFont,
    };
};
const SIZE = {
    small: { w: 40, h: 24 },
    medium: { w: 52, h: 32 }, // ⇦ 原始 52×32 | thumb24 checked
    large: { w: 80, h: 50 },
};
const StyleSwitch = styled(MuiSwitch)(({ theme, selectedIcon, unselectedIcon, custsize: size = "medium" }) => {
    const styleConfig = getSwitchStyles(theme);
    const selectedIconBg = jsxToBackgroundImage(selectedIcon, styleConfig.bgColor);
    const disableSelectedIconBg = jsxToBackgroundImage(selectedIcon, alpha(disableColor[0], 0.12)
    // "000000"
    );
    const unselectedIconBg = jsxToBackgroundImage(unselectedIcon, styleConfig.unselectbgColor);
    const Size = SIZE[size];
    const thumb = Size.h - 8;
    return {
        width: Size.w,
        height: Size.h,
        padding: 0,
        borderRadius: 100,
        overflow: "visible",
        "& .MuiSwitch-thumb": {
            position: "relative",
            margin: unselectedIcon ? (Size.h - thumb) / 2 : (Size.h - Size.h / 2) / 2,
            boxShadow: "none",
            width: unselectedIcon ? thumb : Size.h / 2,
            height: unselectedIcon ? thumb : Size.h / 2,
            transitionDuration: "300ms",
            color: styleConfig.unselectColor,
            "&::before": {
                content: "''",
                position: "absolute",
                width: thumb - 8, // ✅ 固定寬高
                height: thumb - 8,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: unselectedIconBg,
            },
        },
        "& .MuiSwitch-track": {
            boxSizing: "border-box",
            borderRadius: 100,
            backgroundColor: styleConfig.unselectbgColor,
            border: `2px solid ${styleConfig.unselectColor}`,
            opacity: 1,
        },
        "& .MuiSwitch-switchBase": {
            padding: 0,
            //   margin: 4,
            transitionDuration: "300ms",
            "&.Mui-disabled": {
                "& .MuiSwitch-thumb": {
                    color: alpha(disableColor[0], 0.38),
                },
                "& + .MuiSwitch-track": {
                    border: `2px solid ${alpha(disableColor[0], 0.12)}`,
                    opacity: 1,
                },
            },
            "&:active": {
                "& .MuiSwitch-thumb": {
                    margin: 0,
                    width: Size.h - 4,
                    height: Size.h - 4,
                },
            },
            "&:hover ": {
                backgroundColor: alpha(disableColor[0], 0.08),
                margin: -4,
                width: Size.h + 8,
                height: Size.h + 8,
                "& .MuiSwitch-thumb": {
                    color: styleConfig.unselectthumbColor,
                },
            },
            "&.Mui-checked": {
                transform: `translateX( ${Size.w - Size.h}px)`,
                "&:hover ": {
                    backgroundColor: alpha(styleConfig.bgColor, 0.08),
                },
                "& .MuiSwitch-thumb": {
                    color: styleConfig.thumbColor,
                    margin: (Size.h - thumb) / 2,
                    width: thumb,
                    height: thumb,
                },
                "& .MuiSwitch-thumb:before": {
                    backgroundImage: selectedIconBg,
                },
                "& + .MuiSwitch-track": {
                    backgroundColor: styleConfig.bgColor,
                    opacity: 1,
                    border: 0,
                },
                "&.Mui-disabled": {
                    "+ .MuiSwitch-track": {
                        backgroundColor: disableColor[0],
                        opacity: 0.12,
                    },
                    "& .MuiSwitch-thumb:before": {
                        transitionDuration: "300ms",
                        backgroundImage: disableSelectedIconBg,
                    },
                },
                "&.Mui-focusVisible .MuiSwitch-thumb, &:hover .MuiSwitch-thumb": {
                    color: styleConfig.actthumbColor,
                },
                "&:active": {
                    "& .MuiSwitch-thumb": {
                        width: Size.h - 4,
                        height: Size.h - 4,
                    },
                },
            },
        },
    };
});
export const Switch = ({ selectedIcon, unselectedIcon, size, ...props }) => {
    return (_jsx(StyleSwitch, { selectedIcon: selectedIcon, unselectedIcon: unselectedIcon, custsize: size, ...props }));
};
