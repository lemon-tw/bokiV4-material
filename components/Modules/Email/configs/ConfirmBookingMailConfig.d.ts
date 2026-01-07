import { default as React } from '../../../../../node_modules/react';
import { BookingActionsInfo, BookingCancellationPolicy, BookingFooterSectionProps, BookingGuestContactInfo, BookingInvoiceInfo, BookingNoticeInfo, OrderContentInfo, PaymentInfo, PaymentInfoCardInfo, PaymentRemittanceInfo } from './BookingMailConfig';
export type { BookingActionsInfo, BookingCancellationPolicy, BookingFooterSectionProps, BookingGuestContactInfo, BookingInfoField, BookingInvoiceInfo, BookingItemCharge, BookingItemDetails, BookingItemField, HotelLayoutProps, BookingNoticeInfo, OrderContentInfo, PaymentInfo, PaymentRemittanceInfo, PaymentSummaryItem, SubBookingHeaderProps, } from './BookingMailConfig';
export declare const hotelLayoutProps: {
    hotelName: string;
};
export declare const bookingFooterDefaults: Required<BookingFooterSectionProps>;
export declare const confirmBookingSubBookingHeader: {
    title: string;
    icon: React.FunctionComponentElement<import('@phosphor-icons/react').IconProps>;
    color: string;
    mainFontColor: string;
    subColor: string;
    message: string;
    backgroundColor: string;
};
export declare const bookingCancellationPolicy: BookingCancellationPolicy;
export declare const bookingInvoiceInfo: BookingInvoiceInfo;
export declare const confirmBookingPaymentInfoCard: PaymentInfoCardInfo;
export declare const confirmBookingGuestContactInfo: BookingGuestContactInfo;
export declare const confirmBookingNoticeInfo: BookingNoticeInfo;
export declare const ConfirmBookingActionsInfo: BookingActionsInfo;
export declare const confirmBookingRemittanceInfoDefaults: PaymentRemittanceInfo;
export declare const confirmBookingPaymentInfoDefaults: PaymentInfo;
export declare const confirmBookingOrderContentDefaults: OrderContentInfo;
