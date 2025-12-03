import { Dayjs } from 'dayjs';
import { PriceMap } from '../../../../types/roomsProjectsCardExtends';
export interface CalendarGridProps {
    month: Dayjs;
    prices: PriceMap;
    checkIn: Dayjs | null;
    checkOut: Dayjs | null;
    hasPromoCode: boolean;
    memberOnly?: boolean;
    onSelect: (date: Dayjs) => void;
}
export declare function CalendarGrid({ month, prices, checkIn, checkOut, hasPromoCode, memberOnly, onSelect, }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
