export type OrderSummary = {
    orderNumber: string;
    lastDigits: string;
    paymentStatus: string;
    paymentNote: string;
    orderTime: string;
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
};
export declare const defaultOrderSummary: OrderSummary;
export declare const defaultAnnouncement: Announcement;
export declare const defaultRoomInfo: RoomInfo;
export declare const defaultHotelInfo: HotelInfo;
