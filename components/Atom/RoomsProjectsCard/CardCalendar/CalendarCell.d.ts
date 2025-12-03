import { Dayjs } from 'dayjs';
import { PriceDetail } from '../../../../types/roomsProjectsCardExtends';
export interface CalendarCellProps {
    date: Dayjs;
    price?: PriceDetail;
    isInMonth: boolean;
    checkIn: Dayjs | null;
    checkOut: Dayjs | null;
    hasPromoCode: boolean;
    memberOnly?: boolean;
    onSelect: (date: Dayjs) => void;
}
export declare function CalendarCell({ date, price, isInMonth, checkIn, checkOut, hasPromoCode, memberOnly, onSelect, }: CalendarCellProps): import("react/jsx-runtime").JSX.Element;
