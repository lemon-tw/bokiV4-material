import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomSideModalProps } from '../../../types/modalExtends';
export declare const getSideModalStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    fontColor: any;
    bgColor: any;
    boxColor: any;
};
export declare const SideModal: ({ title, align, content, actions, anchor, ...props }: CustomSideModalProps) => import("react/jsx-runtime").JSX.Element;
