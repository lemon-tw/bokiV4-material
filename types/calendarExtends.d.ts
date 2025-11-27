import { ComponentType, ReactNode } from '../../node_modules/react';
import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material/styles';
export interface CalendarDayStatus {
    hot?: boolean;
    unavailable?: boolean;
}
export interface CalendarDayBadge {
    key: string;
    label?: string;
    icon: ReactNode;
    /**
     * 當日期區塊進入選取或特殊狀態時可以改用的圖示
     */
    activeIcon?: ReactNode;
}
export interface CalendarDayMeta {
    badges?: CalendarDayBadge[];
    [key: string]: unknown;
}
export interface CalendarDay {
    /**
     * ISO 字串，例如 2024-03-19
     */
    date: string;
    /**
     * 顯示用價格，數字會自動千分位；若傳入字串則直接呈現
     */
    price?: number | string;
    /**
     * 狀態標記，例如熱賣或不可預訂
     */
    status?: CalendarDayStatus;
    /**
     * 可自行附帶額外資訊，會在 onDayRender 時傳回
     */
    meta?: CalendarDayMeta;
}
export interface CalendarLegendItem {
    key: string;
    label: ReactNode;
    color?: string;
    icon?: ReactNode;
}
export interface CalendarTabOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface CalendarRangeValue {
    start: Dayjs | null;
    end: Dayjs | null;
}
export interface CalendarDayComputed {
    date: Dayjs;
    key: string;
    isToday: boolean;
    isCurrentMonth: boolean;
    isWeekend: boolean;
    isSelectedStart: boolean;
    isSelectedEnd: boolean;
    isInRange: boolean;
    isDisabled: boolean;
    data?: CalendarDay;
    isPreview?: boolean;
    isPreviewStart?: boolean;
    isPreviewEnd?: boolean;
}
export type IconRenderer = ComponentType<{
    size?: number;
    color?: string;
}>;
export interface RoomCode {
    code: string;
    description: string;
    discountAmount: string;
    icon?: IconRenderer;
}
export type DiscountType = "rate" | "promo" | "voucher";
export interface UsedDiscountType {
    discountType: DiscountType;
    discountCode: string;
    Icon: IconRenderer;
}
export interface CalendarProps {
    tabs?: CalendarTabOption[];
    tabValue?: string;
    onTabChange?: (value: string) => void;
    infoText?: ReactNode;
    /**
     * 是否顯示雙月份；預設為雙月份
     */
    showDoubleMonth?: boolean;
    /**
     * 以 ISO 字串為 key 的日期資料
     */
    dayMap?: Record<string, CalendarDay>;
    defaultMonth?: Dayjs;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    disablePast?: boolean;
    value?: CalendarRangeValue;
    defaultValue?: CalendarRangeValue;
    onChange?: (value: CalendarRangeValue) => void;
    filterItems?: ReactNode[];
    legendItems?: CalendarLegendItem[];
    todayLabel?: ReactNode;
    clearLabel?: ReactNode;
    submitLabel?: ReactNode;
    onSubmit?: (value: CalendarRangeValue) => void;
    onClear?: () => void;
    allowSingleDay?: boolean;
    renderPrice?: (day: CalendarDayComputed) => ReactNode;
    renderExtra?: (day: CalendarDayComputed) => ReactNode;
    className?: string;
    roomCodes?: RoomCode[];
    sx?: SxProps<Theme>;
}
