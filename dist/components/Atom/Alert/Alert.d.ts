import { Theme } from '@mui/material/styles';
import { CustomAlertProps } from '../../../types/alertExtends';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getAlertStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    iconColor: any;
};
export declare const Alert: ({ severity, color, iconMapping, icon, alertTitle, ...rest }: CustomAlertProps) => import("react/jsx-runtime").JSX.Element;
