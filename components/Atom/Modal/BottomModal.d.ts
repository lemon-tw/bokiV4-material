import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomBottomModalProps } from '../../../types/modalExtends';
export declare const getBottomModalStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    fontColor: any;
    bgColor: any;
    boxColor: any;
};
export declare const BottomModal: ({ title, align, content, actions, anchor, ...props }: CustomBottomModalProps) => import("react/jsx-runtime").JSX.Element;
