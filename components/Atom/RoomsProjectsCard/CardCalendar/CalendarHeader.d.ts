import { Dayjs } from 'dayjs';
export interface CalendarHeaderProps {
    month: Dayjs;
    onPrev: () => void;
    onNext: () => void;
}
export declare function CalendarHeader({ month, onPrev, onNext }: CalendarHeaderProps): import("react/jsx-runtime").JSX.Element;
