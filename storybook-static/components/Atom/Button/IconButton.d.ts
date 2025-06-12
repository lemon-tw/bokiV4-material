import { CustomIconButtonProps } from '../../../types/buttonExtends';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { Theme } from '@mui/material/styles';
export declare const getIconButtonStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    disabledcolor: string;
    filled: {
        bgColor: any;
        fontColor: any;
        overlay: any;
        borderColor: string;
    };
    standard: {
        bgColor: string;
        fontColor: any;
        overlay: any;
        borderColor: string;
    };
    tonal: {
        bgColor: any;
        fontColor: any;
        overlay: any;
        borderColor: string;
    };
    outlined: {
        bgColor: string;
        fontColor: any;
        overlay: any;
        borderColor: any;
    };
};
export declare const getToggleIconButtonStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    disabledcolor: string;
    filled: {
        bgColor: any;
        fontColor: any;
        overlay: any;
        selectedBgColor: any;
        selectedFontColor: any;
        selectedOverlay: any;
        borderColor: string;
    };
    standard: {
        bgColor: string;
        fontColor: any;
        overlay: any;
        selectedBgColor: string;
        selectedFontColor: any;
        selectedOverlay: any;
        borderColor: string;
    };
    tonal: {
        bgColor: any;
        fontColor: any;
        overlay: any;
        selectedBgColor: any;
        selectedFontColor: any;
        selectedOverlay: any;
        borderColor: string;
    };
    outlined: {
        bgColor: string;
        fontColor: any;
        overlay: any;
        selectedBgColor: any;
        selectedFontColor: any;
        selectedOverlay: any;
        borderColor: any;
    };
};
export declare const IconButton: ({ variant, toggleIcon, children, color, ...rest }: CustomIconButtonProps) => import("react/jsx-runtime").JSX.Element;
