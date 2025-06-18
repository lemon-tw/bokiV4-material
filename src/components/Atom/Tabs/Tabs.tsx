import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CustomTabsProps } from '../../../types/tabs';
import type { PaletteColor, Theme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import { disableColor, palette as defaultPalette } from '../../../themes/defaultPalette';

type CustomTabsColor = 'primary' | 'secondary'; // 依需求擴充
type CustomPaletteColor = PaletteColor & {
    custMain?: string;
    myDefault?: string;
};

// 底線是跟著整組tabs走的, 所以要拉出來單獨設定
const StyledTabs = styled(Tabs)(() => ({
}));

const getTabStyles = (theme: Theme, color: CustomTabsColor = "primary") => {
    const fallback = defaultPalette[color];
    const colorSet = (theme?.palette?.[color] as CustomPaletteColor) ?? fallback;

    return {
        padding: 0,
        margin: "0 8px",
        minWidth: 0, // 隨著內文等寬
        "&": {
            color: colorSet?.myDefault ?? fallback.fabFont,
        },
        "&.Mui-selected": {
            color: colorSet.fabFont ?? fallback.fabFont,
        },
        "&.Mui-disabled": {
            color: alpha(disableColor[0], 0.38),
        },
        "& svg": {
            fontSize: 30,
            color: theme.palette.grey[500],
        },
    };
};

const StyledTab = styled(Tab, {
    shouldForwardProp: (prop) => prop !== "color",
})<{ color?: CustomTabsColor }>(({ theme, color = "primary" }) =>
    getTabStyles(theme, color)
);

export const CustomTabs: React.FC<CustomTabsProps> = ({
    options,
    value,
    onChange,
    indicatorColor,
    variant = "standard",
    iconPosition,
    ...rest
}) => {
    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        onChange(newValue);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor={indicatorColor}
            variant={variant}
            {...rest}
            slotProps={{
                indicator: {
                    style: {
                        height: '3px', // 你要的厚度
                        borderRadius: '100px 100px 0 0', // 左右上角圓角
                        backgroundColor: '#1994FC', // 你要的顏色
                        // 不要設 width，讓 MUI 自動依照 Tab 內容寬度切換
                    }
                }
            }}
        >
            {options.map(option => (
                <StyledTab
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    disabled={option.disabled}
                    color={indicatorColor}
                    id={option.id}
                    aria-controls={option.id ? `${option.id}-tabpanel` : undefined}
                    icon={option.icon || undefined}
                    iconPosition={iconPosition || (option.icon ? 'start' : undefined)} // 這裡改成優先用 props.iconPosition
                />
            ))}
        </StyledTabs>
    );
};

