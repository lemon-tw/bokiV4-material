import { MenuItemProps } from '@mui/material';
export interface MonthMenuItemProps extends MenuItemProps {
    selected?: boolean;
    autoFocus?: boolean;
    focusedView?: unknown;
    hasFocus?: unknown;
    timeViewsCount?: unknown;
}
export declare const MonthMenuItem: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<MonthMenuItemProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLLIElement>>;
