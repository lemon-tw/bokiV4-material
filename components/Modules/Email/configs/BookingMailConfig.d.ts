import { ReactNode } from '../../../../../node_modules/react';
import { ActionBannerButtonInfo } from '../sections/ActionBanner';
export type HotelLayoutProps = {
    hotelName: string;
    noticeText?: string;
    hotelPhone?: string;
};
export declare const hotelLayoutProps: HotelLayoutProps;
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
export type BookingCancellationPolicy = {
    title: string;
    items: string[];
};
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
    subtitle?: string;
    fields: BookingInfoField[];
    orderId: string;
    guestTitle?: string;
    guestFields?: BookingInfoField[];
};
export declare const bookingGuestContactInfo: BookingGuestContactInfo;
export type BookingNoticeInfo = {
    title: string;
    noticeTitle: string;
    lines: string[];
};
export type BookingAddOnOfferItem = {
    title: string;
    priceText: string;
    imageUrl: string;
    ctaLabel: string;
    ctaHref?: string;
};
export type BookingAddOnOffersInfo = {
    title: string;
    dateRangeText: string;
    offers: BookingAddOnOfferItem[];
};
export type PreArrivalTipItem = {
    title: string;
    details: string[];
};
export type PreArrivalTipsInfo = {
    title: string;
    tips: PreArrivalTipItem[];
};
export type TransportationInfoLine = {
    text: string;
    prefix?: string;
    linkText?: string;
    linkHref?: string;
};
export type TransportationInfoSection = {
    icon: ReactNode;
    title: string;
    lines: TransportationInfoLine[];
};
export type TransportationInfoInfo = {
    title: string;
    sections: TransportationInfoSection[];
};
export type NearbyAttractionItem = {
    name: string;
    distanceText: string;
    timeText: string;
    linkHref: string;
};
export type NearbyAttractionsInfo = {
    title: string;
    items: NearbyAttractionItem[];
};
export type WeeklyWeatherForecastDay = {
    dayLabel: string;
    icon: ReactNode;
    highTemp: string;
    lowTemp: string;
};
export type WeeklyWeatherForecastInfo = {
    location: string;
    title: string;
    subtitle: string;
    days: WeeklyWeatherForecastDay[];
    footnote: string;
    footnoteLinkText?: string;
    footnoteLinkHref?: string;
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
export type PaymentInfoItem = {
    date: string;
    statusLabel: string;
    statusColor?: string;
    statusBackground?: string;
    amount: string;
    amountColor?: string;
};
export type PaymentInfoCardBody = {
    methodLabel: string;
    detail: PaymentInfoItem[];
};
export type PaymentInfoStateCard = {
    icon: ReactNode;
    message: string;
    backgroundColor: string;
};
export type PaymentInfoCardInfo = {
    title: string;
    cardBody: PaymentInfoCardBody[];
    footerText: string;
    footerAmount: string;
    footerAmountColor?: string;
    updateLabel?: string;
    updateAmount?: string;
    updateAmountColor?: string;
    state?: PaymentInfoStateCard;
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
export type descriptions = {
    title: string;
    descriptions: string;
};
export type StatusDescription = {
    mainTitle: string;
    descriptions: descriptions[];
};
export type PaymentNoticeInfo = {
    title?: string;
    lines?: string[];
};
export type PaymentInfo = {
    greeting: string;
    orderNumber: string;
    introText?: string;
    mailBody: string;
    hotelFacilitiesNote?: string;
    showInfo: boolean;
    mailFooter: string;
    remittanceInfo?: PaymentRemittanceInfo;
    summaryTitle?: string;
    summaryItems?: PaymentSummaryItem[];
    statusDescriptions?: StatusDescription;
    fontSize?: string;
    fontWeight?: number;
    actionButton?: ActionBannerButtonInfo;
    noticeInfo?: BookingNoticeInfo;
    disclaimerText?: string;
};
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
    size?: string;
};
export type BookingItemStatus = 1 | 2 | 3 | 4;
export declare const bookingItemStatusLabelMap: Record<BookingItemStatus, string>;
export declare const getBookingItemStatusLabel: (status?: BookingItemStatus | string) => string;
export type BookingItemDetails = {
    badge: string;
    title: string;
    plan?: string;
    subtitle?: string;
    status?: BookingItemStatus | string;
    statusColor?: string;
    statusBackground?: string;
    fields?: BookingItemField[];
    charges?: BookingItemCharge[];
};
export type OrderContentInfo = {
    title: string;
    ctaLabel?: string[];
    items: BookingItemDetails[];
    summaryTitle?: string;
    summaryCharges?: BookingItemCharge[];
};
