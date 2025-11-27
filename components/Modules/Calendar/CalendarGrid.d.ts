import { default as React } from '../../../../node_modules/react';
import { Dayjs } from 'dayjs';
import { CalendarDay, CalendarDayComputed, CalendarRangeValue, RoomCode, UsedDiscountType } from '../../../types/calendarExtends';
export interface CalendarGridProps {
    month: Dayjs;
    range: CalendarRangeValue;
    dayMap: Record<string, CalendarDay>;
    disablePast?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onSelect: (date: Dayjs) => void;
    renderPrice?: (day: CalendarDayComputed) => React.ReactNode;
    renderExtra?: (day: CalendarDayComputed) => React.ReactNode;
    onPrevMonth?: () => void;
    onNextMonth?: () => void;
    onTodayClick?: () => void;
    todayLabel?: React.ReactNode;
    monthOptions?: Dayjs[];
    onMonthSelect?: (month: Dayjs) => void;
    previewRange?: {
        start: Dayjs;
        end: Dayjs;
    } | null;
    previewNights?: number | null;
    onHoverDay?: (date: Dayjs | null) => void;
    showDoubleMonth?: boolean;
    showPrice?: boolean;
    selectedCodes?: UsedDiscountType | null;
    roomCodeValues?: RoomCode[];
}
export declare const CalendarGrid: React.FC<CalendarGridProps>;
