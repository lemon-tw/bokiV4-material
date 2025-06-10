import { CustomFabProps } from '../../../types/buttonExtends';
import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
export declare const getFabStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    fontColor: any;
    overlay: any;
};
export declare const Fab: ({ color, ...props }: CustomFabProps) => import("react/jsx-runtime").JSX.Element;
