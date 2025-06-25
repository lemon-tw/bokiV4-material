import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomModalProps } from '../../../types/modalExtends';
export declare const getModalStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    fontColor: any;
};
export declare const Modal: ({ icon, title, content, actions, size, align, deviceType, ...props }: CustomModalProps) => import("react/jsx-runtime").JSX.Element;
