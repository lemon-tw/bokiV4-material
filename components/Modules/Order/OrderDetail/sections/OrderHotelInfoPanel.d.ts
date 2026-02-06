import { default as React } from '../../../../../../node_modules/react';
import { OrderHotelInfo } from '../OrderDetailConfig';
type OrderHotelInfoPanelProps = {
    hotelInfo: OrderHotelInfo;
    onHotelInfoClick?: () => void;
};
export declare const OrderHotelInfoPanel: React.FC<OrderHotelInfoPanelProps>;
export default OrderHotelInfoPanel;
