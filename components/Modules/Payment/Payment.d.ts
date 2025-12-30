import { default as React } from '../../../../node_modules/react';
import { MemberRole } from '../Profile/profileConfig';
type PaymentProps = {
    /** 倒數起始秒數，預設 20 分鐘 */
    initialSeconds?: number;
    /** 倒數提示文案 */
    message?: string;
    /** 倒數結束時觸發 */
    onExpire?: () => void;
    /** 會員身分，影響 Cart 的呈現 */
    memberRole?: MemberRole;
};
export declare const Payment: React.FC<PaymentProps>;
export default Payment;
