// src/components/atoms/Typography/Typography.tsx
import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
import { TypographyProps } from '../../../types/typography';

export const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'body1',
    color = 'textPrimary',
    align = 'inherit',
    gutterBottom = false,
    noWrap = false,
    component,
    sx,
    ...props
}) => {
    // 處理自定義色彩路徑
    const processedProps = React.useMemo(() => {
        const baseProps = {
            variant,
            align,
            gutterBottom,
            noWrap,
            ...props,
            ...(component && { component }),
        };

        // 如果是自定義色彩路徑（包含點號），使用 sx 屬性
        if (typeof color === 'string' && color.includes('.')) {
            return {
                ...baseProps,
                sx: {
                    color: color, // MUI 5 的 sx 支援主題色彩路徑
                    ...sx,
                },
            };
        }

        // 使用標準的 color 屬性
        return {
            ...baseProps,
            color,
            sx,
        };
    }, [color, variant, align, gutterBottom, noWrap, component, sx, props]);

    return (
        <MuiTypography {...processedProps}>
            {children}
        </MuiTypography>
    );
};

export default Typography;
