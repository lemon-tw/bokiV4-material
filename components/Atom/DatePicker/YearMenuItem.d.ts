import { MenuItemProps } from '@mui/material';
export interface YearMenuItemProps extends MenuItemProps {
    selected?: boolean;
    autoFocus?: boolean;
    /** internal slot-only props – strip them before forwarding */
    focusedView?: unknown;
    hasFocus?: unknown;
    timeViewsCount?: unknown;
}
export declare const YearMenuItem: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<YearMenuItemProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
