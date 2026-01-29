import { Dayjs } from 'dayjs';
import { PriceMap, PromoCode } from '../../../types/roomsProjectsCardExtends';
export type MiniAvailabilityCalendarProps = {
    /**
     * 預設月份
     */
    initialMonth?: Dayjs;
    /**
     * 預設入住/退房
     */
    initialCheckIn?: Dayjs | null;
    initialCheckOut?: Dayjs | null;
    /**
     * 價格資料（可覆寫假資料）
     */
    prices?: PriceMap;
    /**
     * 基準價格（用於假資料）
     */
    baseAmount?: number;
    /**
     * 優惠代碼（可覆寫假資料）
     */
    promoCode?: PromoCode;
    memberRate?: number;
    isMember?: boolean;
    memberOnly?: boolean;
    /**
     * 外層樣式覆寫
     */
    sx?: object;
    /**
     * 選取日期變更時回傳
     */
    onRangeChange?: (value: {
        checkIn: Dayjs | null;
        checkOut: Dayjs | null;
        totalPrice: number;
    }) => void;
};
export declare const MiniAvailabilityCalendar: ({ initialMonth, initialCheckIn, initialCheckOut, prices, baseAmount, promoCode, memberRate, isMember, memberOnly, sx, onRangeChange, }: MiniAvailabilityCalendarProps) => import("react/jsx-runtime").JSX.Element;
