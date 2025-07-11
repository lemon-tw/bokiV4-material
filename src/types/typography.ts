// src/components/atoms/Typography/types.ts
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { ReactNode } from 'react';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant' | 'color'> {
    /** 文字內容 */
    children: ReactNode;

    /** 文字變體 */
    variant?:
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'subtitle1' | 'subtitle2'
    | 'body1' | 'body2'
    | 'caption' | 'button' | 'overline'
    | 'inherit';

    /** 文字顏色 - 支援您的自定義主題色彩 */
    color?:
    // MUI 原生顏色
    | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
    | 'textPrimary' | 'textSecondary' | 'inherit'
    // 您的自定義主題色彩路徑
    | 'primary.custMain' | 'primary.onMain' | 'primary.iconFont' | 'primary.menuFont'
    | 'secondary.custMain' | 'secondary.onMain' | 'secondary.iconFont' | 'secondary.menuFont'
    | 'tertiary.custMain' | 'tertiary.onMain' | 'tertiary.iconFont' | 'tertiary.menuFont'
    | 'surface.custMain' | 'surface.onMain' | 'surface.iconFont' | 'surface.menuFont';

    /** 文字對齊方式 */
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';

    /** 是否在底部添加間距 */
    gutterBottom?: boolean;

    /** 是否不換行並使用省略號 */
    noWrap?: boolean;

    /** 自定義 HTML 標籤 */
    component?: React.ElementType;

    /** 自定義樣式 */
    sx?: MuiTypographyProps['sx'];
}
