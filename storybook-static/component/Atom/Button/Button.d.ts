import { CustomButtonProps } from '../../../types/buttonExtends';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { Theme } from '@mui/material/styles';
export declare const getButtonStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    disabledcolor: string;
    filled: {
        borderColor: string;
        bgColor: any;
        fontColor: any;
        overlay: any;
        focusBorderColor: string;
        shadowColor: any;
    };
    outlined: {
        borderColor: any;
        bgColor: string;
        fontColor: any;
        overlay: any;
        focusBorderColor: any;
        shadowColor: string;
    };
    text: {
        borderColor: string;
        bgColor: string;
        fontColor: any;
        overlay: any;
        focusBorderColor: string;
        shadowColor: string;
    };
    elevated: {
        borderColor: string;
        bgColor: any;
        fontColor: any;
        overlay: any;
        focusBorderColor: string;
        shadowColor: any;
    };
    tonal: {
        borderColor: string;
        bgColor: any;
        fontColor: any;
        overlay: any;
        focusBorderColor: string;
        shadowColor: any;
    };
};
export declare const Button: ({ variant, color, ...rest }: CustomButtonProps) => import("react/jsx-runtime").JSX.Element;
