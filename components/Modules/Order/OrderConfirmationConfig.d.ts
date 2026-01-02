import { default as React } from '../../../../node_modules/react';
export type OrderSummary = {
    actionButton?: React.ReactNode;
    statusKey: string;
    orderNumber: string;
    lastDigits: string;
    paymentStatus: string;
    paymentNote: string;
    orderTime: string;
    payStateColor: string;
    resStateColor: string;
};
export type Announcement = {
    title: string;
    timestamp: string;
    lines: string[];
};
export type RoomInfo = {
    statusLabel: string;
    bookingCode: string;
    dateRange: string;
    nights: number;
    segmentCount: number;
    roomCount: number;
    priceLabel: string;
    imageSrc: string;
};
export type HotelInfo = {
    name: string;
    checkIn: string;
    checkOut: string;
    phone: string;
    address: string;
    mapEmbedUrl: string;
};
export type OrderConfirmationProps = {
    email?: string;
    orderSummary?: OrderSummary;
    announcement?: Announcement;
    roomInfo?: RoomInfo;
    hotelInfo?: HotelInfo;
    statusIcon?: React.ReactNode;
};
export type OrderConfirmationPresetKey = "successPayment" | "pendingPayment" | "waitlistPaid" | "cancelledPendingRefund" | "voidUnpaid";
export declare const shareActionButton: React.FunctionComponentElement<import('../../Atom/Button').CustomButtonProps>;
export declare const payActionButton: React.FunctionComponentElement<import('../../Atom/Button').CustomButtonProps>;
export declare const cancelActionButton: React.FunctionComponentElement<import('../../Atom/Button').CustomButtonProps>;
export declare const againActionButton: React.FunctionComponentElement<import('../../Atom/Button').CustomButtonProps>;
export declare const orderConfirmationPresets: Record<OrderConfirmationPresetKey, Required<OrderConfirmationProps>>;
export declare const orderConfirmationPresetOptions: OrderConfirmationPresetKey[];
export declare const defaultOrderSummary: OrderSummary;
export declare const defaultAnnouncement: Announcement;
export declare const defaultRoomInfo: RoomInfo;
export declare const defaultHotelInfo: HotelInfo;
export declare const defaultStatusIcon: React.ReactNode;
export declare const defaultEmail: string;
export declare const defaultPaymentNote: string;
export declare const defaultStatusLabel: string;
