import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomMenuItemProps } from '../../../types/menuExtends';
export declare const getChipStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    fontColor: any;
    selectedBg: any;
    selectedFont: any;
};
export declare const MenuItem: ({ ...rest }: CustomMenuItemProps) => import("react/jsx-runtime").JSX.Element;
