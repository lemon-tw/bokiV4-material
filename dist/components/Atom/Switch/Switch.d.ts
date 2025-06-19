import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomSwitchProps } from '../../../types/switchExtends';
export declare const getSwitchStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    thumbColor: any;
    actthumbColor: any;
    unselectbgColor: any;
    unselectColor: any;
    unselectthumbColor: any;
};
export declare const Switch: ({ selectedIcon, unselectedIcon, size, ...props }: CustomSwitchProps) => import("react/jsx-runtime").JSX.Element;
