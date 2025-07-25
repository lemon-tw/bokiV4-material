import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { CustomColor } from './colorExtends';
import { FabProps as MuiFabProps } from '@mui/material/Fab';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';
export type CustomButtonVariant = "filled" | "outlined" | "text" | "elevated" | "tonal";
export type CustomIconButtonVariant = "filled" | "standard" | "tonal" | "outlined";
export interface CustomButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
    variant?: CustomButtonVariant;
    color?: CustomColor;
}
export interface CustomFabProps extends Omit<MuiFabProps, "color"> {
    color?: CustomColor;
}
export interface CustomIconButtonProps extends Omit<MuiIconButtonProps, "variant" | "color"> {
    variant?: CustomIconButtonVariant;
    selected?: boolean;
    toggleIcon?: React.ReactElement;
    color?: CustomColor;
}
export interface CustomToggleButtonProps extends Omit<MuiToggleButtonProps, "color"> {
    color?: CustomColor;
}
