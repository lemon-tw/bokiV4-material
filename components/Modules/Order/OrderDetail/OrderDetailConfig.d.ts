import { ReactNode } from '../../../../../node_modules/react';
import { HotelInfo } from '../OrderConfirmationConfig';
export type OrderStatusInfo = {
    title: string;
    subtitle: string;
    statusIcon?: ReactNode;
};
export type OrderShareInfo = {
    title: string;
    description: string;
    actionLabel: string;
    actionNode?: ReactNode;
};
export type OrderSummaryInfo = {
    orderNumber: string;
    orderCode: string;
    paymentStatus: string;
    paymentNote?: string;
    orderTime: string;
};
export type OrderAnnouncementInfo = {
    hotelName: string;
    timestamp: string;
    content: string;
};
export type RoomDetailSection = {
    id: string;
    title: string;
    items: string[];
};
export type RoomAction = {
    id: string;
    label: string;
    variant?: "filled" | "outlined" | "tonal";
    color?: "primary" | "error" | "secondary";
};
export type OrderRoomInfo = {
    id: string;
    statusLabel: string;
    bookingCode: string;
    imageSrc: string;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    detailSections: RoomDetailSection[];
    actions: RoomAction[];
};
export type AmountLineItem = {
    label: string;
    value: string;
    emphasize?: boolean;
};
export type OrderAmountSummary = {
    items: AmountLineItem[];
    totalLabel: string;
    totalValue: string;
    footnote?: string;
    depositItems?: AmountLineItem[];
};
export type OrderPaymentItem = {
    date: string;
    method: string;
    amount: string;
    status?: string;
};
export type OrderPaymentInfo = {
    title: string;
    items: OrderPaymentItem[];
    summaryText?: string;
};
export type OrderInvoiceInfo = {
    title: string;
    items: AmountLineItem[];
};
export type OrderGuestInfo = {
    title: string;
    items: AmountLineItem[];
    arrivalTime?: {
        label: string;
        value: string;
    };
};
export type OrderPolicySection = {
    id: string;
    title: string;
    content: string;
    updatedAt?: string;
};
export type OrderHotelInfo = HotelInfo & {
    socials?: {
        id: string;
        icon: ReactNode;
        href?: string;
    }[];
    actionLabel?: string;
};
export type OrderManageAction = {
    id: string;
    label: string;
    icon?: ReactNode;
    color?: string;
};
export type OrderDetailProps = {
    statusInfo: OrderStatusInfo;
    shareInfo?: OrderShareInfo;
    summaryInfo: OrderSummaryInfo;
    announcement?: OrderAnnouncementInfo;
    rooms: OrderRoomInfo[];
    amountSummary: OrderAmountSummary;
    paymentInfo: OrderPaymentInfo;
    invoiceInfo: OrderInvoiceInfo;
    guestInfo: OrderGuestInfo;
    policies: OrderPolicySection[];
    hotelInfo: OrderHotelInfo;
    manageActions: OrderManageAction[];
    onRoomActionClick?: (roomId: string, actionId: string) => void;
};
