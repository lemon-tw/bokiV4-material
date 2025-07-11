import { default as React } from '../../../../node_modules/react';
import { MenuItemProps } from '@mui/material/MenuItem';
export interface MonthMenuItemProps extends MenuItemProps {
    selected?: boolean;
    autoFocus?: boolean;
    focusedView?: unknown;
    hasFocus?: unknown;
    timeViewsCount?: unknown;
}
export declare const MonthMenuItem: React.ForwardRefExoticComponent<Omit<MonthMenuItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>;
