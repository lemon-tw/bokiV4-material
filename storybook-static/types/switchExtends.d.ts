import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
export interface CustomSwitchProps extends Omit<MuiSwitchProps, "size"> {
    size?: "small" | "medium" | "large";
    selectedIcon?: React.ReactElement;
    unselectedIcon?: React.ReactElement;
}
