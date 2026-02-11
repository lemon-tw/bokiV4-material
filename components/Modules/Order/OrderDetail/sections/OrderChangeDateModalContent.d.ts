import { default as React } from '../../../../../../node_modules/react';
import { ChangeDateModalData } from '../OrderDetailConfig';
type OrderChangeDateModalContentProps = {
    data: ChangeDateModalData;
    agreed: boolean;
    onAgreeChange: (next: boolean) => void;
};
export declare const OrderChangeDateModalContent: React.FC<OrderChangeDateModalContentProps>;
export default OrderChangeDateModalContent;
