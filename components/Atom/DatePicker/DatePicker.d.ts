import { default as React } from '../../../../node_modules/react';
import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export type YearMonthDatePickerProps = Omit<React.ComponentProps<typeof MuiDatePicker>, "slots" | "viewRenderers" | "views" | "openTo">;
export declare function DatePicker(props: YearMonthDatePickerProps): import("react/jsx-runtime").JSX.Element;
