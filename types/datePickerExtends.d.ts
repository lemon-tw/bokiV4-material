import { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from '../../node_modules/react';
import { Dayjs } from 'dayjs';
export interface CustomRangeDatePickerProps extends Omit<DateCalendarProps, "renderDay"> {
    start: Dayjs | null;
    end: Dayjs | null;
    setStart: (date: Dayjs | null) => void;
    setEnd: (date: Dayjs | null) => void;
    buttonHeight?: string;
    placeholder?: string;
    placeholderFontSize?: number;
    buttonSx?: SxProps<Theme>;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    showStartIconWhenEmpty?: boolean;
    variant?: "filled" | "outlined" | "text" | "elevated" | "tonal";
    mode?: "popover" | "inline";
    onApply?: () => void;
    onCancel?: () => void;
}
