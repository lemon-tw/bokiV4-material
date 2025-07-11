import { default as React } from '../../../../node_modules/react';
import { MenuItemProps } from '@mui/material/MenuItem';
export interface YearMenuItemProps extends MenuItemProps {
    selected?: boolean;
    autoFocus?: boolean;
    /** internal slot-only props – strip them before forwarding */
    focusedView?: unknown;
    hasFocus?: unknown;
    timeViewsCount?: unknown;
}
export declare const YearMenuItem: React.ForwardRefExoticComponent<Omit<YearMenuItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>;
