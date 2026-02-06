import { default as React } from '../../../../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
export type OrderRoomDetailSection = {
    id: string;
    title: string;
    items?: string[];
    content?: React.ReactNode;
};
export type OrderRoomAction = {
    id: string;
    label: string;
    variant?: "filled" | "outlined" | "tonal";
    color?: "primary" | "error" | "secondary";
};
export type OrderRoomCardBaseProps = {
    index: number;
    statusLabel: string;
    bookingCode: string;
    statusColor?: string;
    imageSrc: string;
    imageAlt?: string;
    imageAction?: React.ReactNode;
    imageActionWrapperSx?: SxProps<Theme>;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    detailSections: OrderRoomDetailSection[];
    actions?: OrderRoomAction[];
    onActionClick?: (actionId: string) => void;
};
export declare const OrderRoomCardBase: React.FC<OrderRoomCardBaseProps>;
export default OrderRoomCardBase;
