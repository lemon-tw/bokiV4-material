import { default as React } from '../../../../../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
import { OrderRoomInfo } from '../OrderDetailConfig';
type OrderRoomCardProps = {
    room: OrderRoomInfo;
    index: number;
    onActionClick?: (roomId: string, actionId: string) => void;
    imageAction?: React.ReactNode;
    imageActionWrapperSx?: SxProps<Theme>;
};
export declare const OrderRoomCard: React.FC<OrderRoomCardProps>;
export default OrderRoomCard;
