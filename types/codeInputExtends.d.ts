import { PopoverProps } from '@mui/material';
import { RoomCode, UsedDiscountType } from './calendarExtends';
export type PromoDetail = {
    memberOnly: boolean;
    code: string;
    title: string;
    discountAmount: string;
    validPeriod: string;
    stayPeriod: string;
    minSpend: string;
    description: string;
};
export interface CodeInputProps extends PopoverProps {
    /** 房型代碼 */
    roomCode?: RoomCode[];
    setRoomCode?: React.Dispatch<React.SetStateAction<RoomCode[] | undefined>>;
    /** 是否顯示專案代碼 */
    showRate: boolean;
    /** 是否顯示住宿券代碼 */
    showVoucher: boolean;
    /**是否登入 */
    isLogin: boolean;
    setCode: React.Dispatch<React.SetStateAction<UsedDiscountType | null>>;
    promoDetail: PromoDetail[];
}
export interface PromoCodeProps {
    promoDetail: PromoDetail[];
    isLogin: boolean;
    setPromoField: React.Dispatch<React.SetStateAction<string>>;
}
export interface PromoModalProps {
    open: boolean;
    onClose: () => void;
    promoDetail: PromoDetail[];
    isLogin: boolean;
    setPromoField: React.Dispatch<React.SetStateAction<string>>;
}
