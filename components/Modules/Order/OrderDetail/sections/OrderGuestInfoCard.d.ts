import { default as React } from '../../../../../../node_modules/react';
import { OrderGuestInfo } from '../OrderDetailConfig';
type OrderGuestInfoCardProps = {
    guestInfo: OrderGuestInfo;
    onEditArrival?: () => void;
};
export declare const OrderGuestInfoCard: React.FC<OrderGuestInfoCardProps>;
export default OrderGuestInfoCard;
