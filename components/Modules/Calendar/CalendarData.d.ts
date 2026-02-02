import { Dayjs } from 'dayjs';
import { CalendarDay } from '../../../types/calendarExtends';
export declare const promoDetails: {
    code: string;
    description: string;
    discountAmount: string;
    discount: number;
    memberOnly: boolean;
    minSpend: string;
    stayPeriod: string;
    title: string;
    validPeriod: string;
}[];
export declare const roomCodes: {
    code: string;
    description: string;
    discountAmount: string;
    icon: import('@phosphor-icons/react').Icon;
}[];
export declare const sampleTabs: {
    value: string;
    label: string;
}[];
export declare const badgePresets: {
    key: string;
    label: string;
    Icon: import('@phosphor-icons/react').Icon;
    iconColor: string;
}[];
type SampleDayMapOptions = {
    start?: Dayjs;
    end?: Dayjs;
    basePrice?: number;
    priceStep?: number;
};
export declare const buildSampleDayMap: ({ start, end, basePrice, priceStep, }?: SampleDayMapOptions) => Record<string, CalendarDay>;
export {};
