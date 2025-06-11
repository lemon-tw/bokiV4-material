import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
export interface CustomSwitchProps extends MuiSwitchProps {
    selectedIcon?: React.ReactElement;
    unselectedIcon?: React.ReactElement;
}
