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
    backgroundColor?: string;
};
export type Announcement = {
    title: string;
    timestamp: string;
    lines: string[];
};
export type RoomInfo = {
    statusLabel: string;
    bookingCode: string;
    startDate: string;
    endDate: string;
    nights: number;
    segmentCount: number;
    roomCount: number;
    priceLabel: string;
    imageSrc: string;
};
export declare const formatDateWithWeekday: (value?: string) => string;
export declare const getRoomStayNights: (roomInfo: Pick<RoomInfo, "startDate" | "endDate" | "nights">) => number | undefined;
export declare const formatRoomDateRange: (hasNightCount: boolean, roomInfo: Pick<RoomInfo, "startDate" | "endDate" | "nights">) => string;
export declare const getCalendarDateRange: (roomInfo: Pick<RoomInfo, "startDate" | "endDate">) => string | undefined;
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
