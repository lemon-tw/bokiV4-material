import { CustomTextFieldProps } from '../../../types/textFieldExtends';
import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getTextFieldStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    outLineColor: any;
};
export declare const TextField: ({ color, error, ...rest }: CustomTextFieldProps) => import("react/jsx-runtime").JSX.Element;
