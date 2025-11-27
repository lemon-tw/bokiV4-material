import { Dayjs } from 'dayjs';
import { PriceMap } from '../../../types/roomsProjectsCardExtends';
export interface CalendarProps {
    prices: PriceMap;
    initialMonth?: Dayjs;
    checkIn: Dayjs | null;
    setCheckIn: (date: Dayjs | null) => void;
    checkOut: Dayjs | null;
    setCheckOut: (date: Dayjs | null) => void;
}
export declare function CardCalendar({ prices, initialMonth, checkIn, setCheckIn, checkOut, setCheckOut, }: CalendarProps): import("react/jsx-runtime").JSX.Element;
