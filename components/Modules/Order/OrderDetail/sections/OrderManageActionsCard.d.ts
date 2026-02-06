import { default as React } from '../../../../../../node_modules/react';
import { OrderManageAction } from '../OrderDetailConfig';
type OrderManageActionsCardProps = {
    actions: OrderManageAction[];
    onActionClick?: (actionId: string) => void;
};
export declare const OrderManageActionsCard: React.FC<OrderManageActionsCardProps>;
export default OrderManageActionsCard;
