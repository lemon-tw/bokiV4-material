import { Dayjs } from 'dayjs';
import { PriceMap, PromoCode } from '../../../types/roomsProjectsCardExtends';
export interface CalendarProps {
    prices: PriceMap;
    promoCode?: PromoCode;
    memberRate?: number;
    isMember?: boolean;
    memberOnly?: boolean;
    initialMonth?: Dayjs;
    checkIn: Dayjs | null;
    setCheckIn: (date: Dayjs | null) => void;
    checkOut: Dayjs | null;
    setCheckOut: (date: Dayjs | null) => void;
}
export declare function CardCalendar({ prices, promoCode, memberRate, isMember, memberOnly, initialMonth, checkIn, setCheckIn, checkOut, setCheckOut, }: CalendarProps): import("react/jsx-runtime").JSX.Element;
