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
    paymentStatusColor?: string;
    actionNode?: ReactNode;
    orderCodeActionNode?: ReactNode;
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
    statusLabel?: string;
    statusColor?: string;
    bookingCode: string;
    bookingCodeStrike?: boolean;
    imageSrc: string;
    hideImage?: boolean;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    detailSections: RoomDetailSection[];
    actions: RoomAction[];
    summaryRows?: {
        label: string;
        value: string;
        valueColor?: string;
    }[];
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
    methodValue?: string;
    amount: string;
    status?: string;
    statusColor?: string;
    statusBgColor?: string;
    amountColor?: string;
};
export type OrderPaymentInfo = {
    title: string;
    items: OrderPaymentItem[];
    summaryText?: string;
    summaryLabel?: string;
    summaryStatus?: {
        label: string;
        value: string;
        color?: string;
    };
    methodLabel?: string;
    note?: {
        text: string;
        tone?: "warning" | "info";
    };
    emptyMessage?: string;
};
export type OrderInvoiceInfo = {
    title: string;
    items: AmountLineItem[];
};
export type OrderAddonUpsellPreset = {
    upsell: NonNullable<import('../../../../types/addonUpsellExtends').AddonUpsellProps["upsellList"]>;
    addon: NonNullable<import('../../../../types/addonUpsellExtends').AddonUpsellProps["addonList"]>;
};
export type OrderGuestInfo = {
    title: string;
    items: (AmountLineItem & {
        valueNode?: ReactNode;
    })[];
    arrivalTime?: {
        label: string;
        value: string;
    };
    hideArrivalAction?: boolean;
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
export type CancelOrderExtra = {
    title: string;
    lines: string[];
};
export type CancelOrderNotice = {
    text: string;
    tone: "warning" | "success";
};
export type CancelOrderRoom = {
    id: string;
    imageSrc: string;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    extras?: CancelOrderExtra[];
    cancelNotice?: CancelOrderNotice;
};
export type CancelOrderSummaryItem = {
    label: string;
    value: string;
    color?: string;
};
export type CancelOrderPolicy = {
    title: string;
    intro?: string;
    items: string[];
    note?: string;
};
export type CancelOrderModalData = {
    currentTime: string;
    orderNumber: string;
    statusLabel: string;
    rooms: CancelOrderRoom[];
    summary: CancelOrderSummaryItem[];
    policy: CancelOrderPolicy;
    acknowledgeLabel: string;
    keepActionLabel: string;
    cancelActionLabel: string;
};
export type ChangeDateNotice = {
    text: string;
    highlight?: string;
};
export type ChangeDateItem = {
    bookingCode: string;
    imageSrc: string;
    roomName: string;
    planName: string;
    dateRange: string;
    guestText: string;
    extras?: CancelOrderExtra[];
    policyTitle: string;
    policyHighlight: string;
    policyNote: string;
};
export type ChangeDateRights = {
    title: string;
    content: string;
};
export type ChangeDateModalData = {
    currentTime: string;
    notice: ChangeDateNotice;
    itemTitle: string;
    item: ChangeDateItem;
    rights: ChangeDateRights;
    acknowledgeLabel: string;
    cancelLabel: string;
    confirmLabel: string;
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
    cancelOrderModal?: CancelOrderModalData;
    roomCancelModalByRoomId?: Record<string, CancelOrderModalData>;
    roomChangeModalByRoomId?: Record<string, ChangeDateModalData>;
    hideAnnouncement?: boolean;
    hideAmountSummary?: boolean;
    hideInvoiceInfo?: boolean;
    cancelledState?: {
        statusInfo: OrderStatusInfo;
        summaryInfo?: Partial<OrderSummaryInfo>;
        roomStatusLabel?: string;
        hideShareInfo?: boolean;
    };
    onCancelConfirmed?: () => void;
    onRoomCancelConfirmed?: (roomId: string) => void;
    onRoomChangeConfirmed?: (roomId: string) => void;
    onRoomActionClick?: (roomId: string, actionId: string) => void;
    addonUpsellPreset?: OrderAddonUpsellPreset;
};
