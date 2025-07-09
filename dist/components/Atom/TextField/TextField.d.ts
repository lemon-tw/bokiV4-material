import { CustomTextFieldProps } from '../../../types/textFieldExtends';
import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getTextFieldStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    outLineColor: any;
    hoverColor: any;
};
export declare const TextField: ({ color, error, slotProps, ...rest }: CustomTextFieldProps) => import("react/jsx-runtime").JSX.Element;
export declare const ClearTextField: ({ color, error, slotProps, ...rest }: CustomTextFieldProps) => import("react/jsx-runtime").JSX.Element;
