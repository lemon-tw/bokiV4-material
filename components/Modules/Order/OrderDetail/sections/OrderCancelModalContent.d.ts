import { default as React } from '../../../../../../node_modules/react';
import { CancelOrderModalData } from '../OrderDetailConfig';
type OrderCancelModalContentProps = {
    data: CancelOrderModalData;
    agreed: boolean;
    onAgreeChange: (next: boolean) => void;
};
export declare const OrderCancelModalContent: React.FC<OrderCancelModalContentProps>;
export default OrderCancelModalContent;
