import { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import { Dayjs } from 'dayjs';
export interface CustomRangeDatePickerProps extends Omit<DateCalendarProps, "renderDay"> {
    start: Dayjs | null;
    end: Dayjs | null;
    setStart: (date: Dayjs | null) => void;
    setEnd: (date: Dayjs | null) => void;
    buttonHeight?: string;
}
