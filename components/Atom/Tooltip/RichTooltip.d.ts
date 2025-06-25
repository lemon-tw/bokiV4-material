import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomRichTooltipProps } from '../../../types/tooltipExtends';
export declare const getRichTooltipStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    fontColor: any;
};
export declare const RichTooltip: ({ title, description, actions, ...props }: CustomRichTooltipProps) => import("react/jsx-runtime").JSX.Element;
