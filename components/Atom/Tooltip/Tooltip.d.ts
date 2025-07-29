import { Theme } from '@mui/material/styles';
import { TooltipProps as MuiTooltipProps } from '@mui/material';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getTooltipStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
};
export declare const Tooltip: ({ ...props }: MuiTooltipProps) => import("react/jsx-runtime").JSX.Element;
