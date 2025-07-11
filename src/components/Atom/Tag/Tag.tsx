// components/Atom/Tag/Tag.tsx
import React, { useMemo } from "react";
import Chip from "@mui/material/Chip";
import TAG_COLOR_STYLE from "./tagColorStyle";
import { TAG_SIZE_STYLE, TagSize } from "./tagSizeStyle";
import { COLOR_MAP, VARIANT_MAP, TagColor, TagVariant } from "./colorMap";
import type { TagProps } from "../../../types/tagExtends";

export const Tag: React.FC<TagProps> = ({
    color = "primary",
    variant = "solid",
    onlyText = false,
    size = "medium",
    sx,
    icon,
    ...rest
}) => {
    /* ---------- ① 把語意色彩 ➜ 轉成 MUI 能吃的色彩 ---------- */
    const muiColor = COLOR_MAP[color as TagColor];

    /* ---------- ② 把語意 variant ➜ 轉成 MUI variant ---------- */
    const muiVariant = VARIANT_MAP[variant as TagVariant];

    /* ---------- ③ 取得顏色樣式 ---------- */
    const styleColor = color as keyof typeof TAG_COLOR_STYLE;
    const currentColorStyle = TAG_COLOR_STYLE[styleColor][muiVariant];

    /* ---------- ④ 取得尺寸樣式 ---------- */
    const currentSizeStyle = TAG_SIZE_STYLE[size as TagSize];

    /* ---------- ⑤ 計算 Icon 顏色 ---------- */
    const iconColor = getIconColor(onlyText, muiColor);

    /* ---------- ⑥ 處理 Icon 元件 ---------- */
    const styledIcon = useMemo(() => {
        if (!icon) return undefined;

        if (React.isValidElement(icon)) {
            return React.cloneElement<React.SVGProps<SVGSVGElement>>(
                icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                {
                    style: {
                        color: iconColor,
                        fontSize: `${currentSizeStyle.iconSize}px`,
                        width: `${currentSizeStyle.iconSize}px`,
                        height: `${currentSizeStyle.iconSize}px`,
                        ...((icon.props as React.SVGProps<SVGSVGElement>).style || {}),
                    },
                }
            );
        }

        return icon;
    }, [icon, iconColor, currentSizeStyle.iconSize]);

    function getIconColor(onlyText: boolean, color: string) {
        if (!onlyText) return currentColorStyle.iconColor

        console.log(color);

        switch (color) {
            case "primary":
                return "#373737";
            case "secondary":
                return "#9C9C9C";
            case "warning":
                return "#FFB136";
            case "error":
                return "#FF4D4F";
            case "success":
                return "#20C997";

            default:
                return currentColorStyle.iconColor;
        }
    }

    return (
        <Chip
            clickable={false}
            {...rest}
            icon={styledIcon}
            color={muiColor}
            variant={muiVariant}
            sx={{
                // 合併顏色樣式
                ...currentColorStyle,
                // 套用自定義尺寸樣式
                fontSize: currentSizeStyle.fontSize,
                padding: currentSizeStyle.padding,
                // 處理 onlyText 的情況
                ...(onlyText
                    ? {
                        backgroundColor: "transparent",
                        color: color === "neutral" ? "#9C9C9C" : "#373737",
                        // color: color === "neutral" ? "#9C9C9C" : color === "primary" ? "#373737" : "transparent",
                        border: "none",
                        boxShadow: "none",
                        "&&:hover": { backgroundColor: "transparent" },
                        borderRadius: "8px",
                    }
                    : {}),
                // 確保 Icon 顏色正確應用
                "& .MuiChip-icon": {
                    color: iconColor,
                    fontSize: `${currentSizeStyle.iconSize}px`,
                },
                ...sx,
            }}
        />
    );
};
