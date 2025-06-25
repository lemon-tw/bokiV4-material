import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
export interface CustomSwitchProps extends Omit<MuiSwitchProps, "size"> {
    size?: "small" | "medium" | "large";
    /** 設定以選取的狀態中thumb 的icon */
    selectedIcon?: React.ReactElement;
    /** 設定以非選取的狀態中thumb 的icon */
    unselectedIcon?: React.ReactElement;
}
