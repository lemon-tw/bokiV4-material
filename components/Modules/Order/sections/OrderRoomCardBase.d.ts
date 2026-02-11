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
    statusLabel?: string;
    bookingCode: string;
    statusColor?: string;
    bookingCodeStrike?: boolean;
    imageSrc: string;
    hideImage?: boolean;
    imageAlt?: string;
    imageAction?: React.ReactNode;
    imageActionWrapperSx?: SxProps<Theme>;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    detailSections: OrderRoomDetailSection[];
    summaryRows?: {
        label: string;
        value: string;
        valueColor?: string;
    }[];
    actions?: OrderRoomAction[];
    onActionClick?: (actionId: string) => void;
    summaryTone?: "muted";
};
export declare const OrderRoomCardBase: React.FC<OrderRoomCardBaseProps>;
export default OrderRoomCardBase;
