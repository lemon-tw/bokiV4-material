import { default as React, ReactNode } from '../../../../../node_modules/react';
export type HotelLayoutProps = {
    hotelName: string;
    noticeText?: string;
};
export type BookingFooterSectionProps = {
    serviceTime?: string;
    mainPhone?: string;
    contactPhone?: string;
    email?: string;
    address?: string;
    bannerText?: string;
    copyrightText?: string;
    imgUrl?: string;
};
export type SubBookingHeaderProps = {
    title: string;
    icon: ReactNode;
    color: string;
    mainFontColor: string;
    subColor: string;
    message: string;
    backgroundColor: string;
};
export declare const hotelLayoutProps: {
    hotelName: string;
};
export declare const bookingFooterDefaults: Required<BookingFooterSectionProps>;
export declare const subBookingHeader: {
    title: string;
    icon: React.FunctionComponentElement<import('@phosphor-icons/react').IconProps>;
    color: string;
    mainFontColor: string;
    subColor: string;
    message: string;
    backgroundColor: string;
};
export type BookingCancellationPolicy = {
    title: string;
    items: string[];
};
export declare const bookingCancellationPolicy: BookingCancellationPolicy;
export type BookingInfoField = {
    label: string;
    value: string;
};
export type BookingInvoiceInfo = {
    title: string;
    fields: BookingInfoField[];
};
export type BookingGuestContactInfo = {
    title: string;
    fields: BookingInfoField[];
    orderId: string;
};
export type BookingNoticeInfo = {
    title: string;
    noticeTitle: string;
    lines: string[];
};
export type BookingActionItem = {
    icon: ReactNode;
    descriptionLines: string[];
    buttonLabel: string;
    buttonHref?: string;
};
export type BookingActionsInfo = {
    introText: string;
    actions: BookingActionItem[];
};
export type PaymentInfoCardInfo = {
    title: string;
    methodLabel: string;
    date: string;
    statusLabel: string;
    statusColor?: string;
    statusBackground?: string;
    amount: string;
    amountColor?: string;
    footerText: string;
    footerAmount: string;
    footerAmountColor?: string;
};
export type PaymentSummaryItem = {
    label: string;
    value: string;
    color?: string;
};
export type PaymentRemittanceInfo = {
    remittanceTitle: string;
    changeMethodLabel: string;
    bankNameLabel: string;
    bankName: string;
    accountLabel: string;
    accountNumber: string;
    amountLabel: string;
    amount: string;
};
export type PaymentInfo = {
    greeting: string;
    orderNumber: string;
    mailBody: string;
    showInfo: boolean;
    mailFooter: string;
    remittanceInfo: PaymentRemittanceInfo;
    summaryTitle: string;
    summaryItems: PaymentSummaryItem[];
};
export declare const bookingInvoiceInfo: BookingInvoiceInfo;
export declare const bookingGuestContactInfo: BookingGuestContactInfo;
export declare const paymentRemittanceInfoDefaults: PaymentRemittanceInfo;
export declare const paymentInfoDefaults: PaymentInfo;
export type BookingItemField = {
    label: string;
    value: string | string[];
    color?: string;
    borderTop?: boolean;
    borderBottom?: boolean;
};
export type BookingItemCharge = {
    label: string;
    value: string;
    color?: string;
};
export type BookingItemDetails = {
    badge: string;
    title: string;
    plan?: string;
    subtitle?: string;
    status?: string;
    statusColor?: string;
    statusBackground?: string;
    fields: BookingItemField[];
    charges: BookingItemCharge[];
};
export type OrderContentInfo = {
    title: string;
    ctaLabel?: string;
    items: BookingItemDetails[];
    summaryTitle?: string;
    summaryCharges: BookingItemCharge[];
};
export declare const orderContentDefaults: OrderContentInfo;
