import { default as React } from '../../../../node_modules/react';
import { Dayjs } from 'dayjs';
import { CalendarDayComputed } from '../../../types/calendarExtends';
export interface CalendarDayCellProps {
    day: CalendarDayComputed;
    onSelect: (date: Dayjs) => void;
    renderPrice?: (day: CalendarDayComputed) => React.ReactNode;
    renderExtra?: (day: CalendarDayComputed) => React.ReactNode;
    onHover?: (date: Dayjs | null) => void;
    previewNights?: number;
}
export declare const CalendarDayCell: React.FC<CalendarDayCellProps>;
