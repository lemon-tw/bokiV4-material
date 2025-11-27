import { Dayjs } from 'dayjs';
import { PriceMap } from '../../../../types/roomsProjectsCardExtends';
export interface CalendarGridProps {
    month: Dayjs;
    prices: PriceMap;
    checkIn: Dayjs | null;
    checkOut: Dayjs | null;
    onSelect: (date: Dayjs) => void;
}
export declare function CalendarGrid({ month, prices, checkIn, checkOut, onSelect, }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
