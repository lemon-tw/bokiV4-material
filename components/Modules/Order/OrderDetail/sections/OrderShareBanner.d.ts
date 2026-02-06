import { default as React } from '../../../../../../node_modules/react';
import { OrderShareInfo } from '../OrderDetailConfig';
type OrderShareBannerProps = {
    info: OrderShareInfo;
    onShare?: () => void;
};
export declare const OrderShareBanner: React.FC<OrderShareBannerProps>;
export default OrderShareBanner;
