import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomChipProps } from '../../../types/chipsExtends';
export declare const getChipStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    fontColor: any;
    overlay: any;
    selectedbgColor: any;
    selectedFontColor: any;
    selectedOverlay: any;
    iconColor: any;
};
export declare const Chip: ({ selected, avatar, deleteIcon, ...rest }: CustomChipProps) => import("react/jsx-runtime").JSX.Element;
