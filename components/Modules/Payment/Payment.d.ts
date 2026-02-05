import { default as React } from '../../../../node_modules/react';
import { CartItem as CartItemType, MemberCoupon } from '../../Atom/Cart/Cart';
import { MemberRole } from '../Profile/profileConfig';
import { BookingPolicy, CancelPolicy, PaymentMethod, UserAccount } from './paymentConfig';
type PaymentProps = {
    /** 倒數起始秒數，預設 20 分鐘 */
    initialSeconds?: number;
    /** 倒數提示文案 */
    message?: string;
    /** 倒數結束時觸發 */
    onExpire?: () => void;
    /** 會員身分，影響 Cart 的呈現 */
    memberRole?: MemberRole;
    /** 購物車初始項目 */
    initialCartItems?: CartItemType[];
    /** 購物車費用項目 */
    feeItems?: {
        label: string;
        value: string;
    }[];
    /** 優惠折扣 */
    promoDiscount?: number;
    /** 會員折扣 */
    memberDiscount?: number;
    /** 訂房方案選項 */
    bookingPolicies?: BookingPolicy[];
    /** 可用付款方式 */
    paymentMethods?: PaymentMethod[];
    /** 保留通知文案 */
    freePlanNotice?: {
        title: string;
        lines: string[];
    };
    /** ATM 提醒文案 */
    wabATMPlanNotice?: {
        title: string;
        lines: string[];
    };
    /** 取消政策：預設 */
    cancelPolicyDefault?: CancelPolicy;
    /** 取消政策：免費 */
    cancelPolicyFree?: CancelPolicy;
    /** 取消政策：安心 */
    cancelPolicySafe?: CancelPolicy;
    /** 擔保說明 */
    bookingGuaranteeTerms?: string[];
    /** 信用卡圖示 */
    creditCards?: {
        name: string;
        imgSrc: string;
    }[];
    /** 付款帳戶資訊 */
    userAccount?: UserAccount;
    /** 會員專屬優惠券 */
    memberExclusiveCoupons?: MemberCoupon[];
};
export declare const Payment: React.FC<PaymentProps>;
export default Payment;
