import { default as MuiCheckbox } from '@mui/material/Checkbox';
import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getcbStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    fontColor: any;
    overlay: any;
};
export declare const Checkbox: ({ ...props }: typeof MuiCheckbox) => import("react/jsx-runtime").JSX.Element;
