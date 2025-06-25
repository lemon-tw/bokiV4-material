import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomToggleButtonProps } from '../../../types/buttonExtends';
export declare const getToggleButtonStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    fontColor: any;
    bgColor: any;
};
export declare const ToggleButton: ({ color, ...rest }: CustomToggleButtonProps) => import("react/jsx-runtime").JSX.Element;
