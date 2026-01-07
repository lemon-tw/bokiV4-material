import { default as React } from '../../../../node_modules/react';
import { HotelLayoutProps, BookingFooterSectionProps } from './configs/BookingMailConfig';
type BookingEmailLayoutProps = {
    children: React.ReactNode;
    hotelLayoutProps: HotelLayoutProps;
    footerInfo?: BookingFooterSectionProps;
};
export declare const BookingEmailLayout: React.FC<BookingEmailLayoutProps>;
export default BookingEmailLayout;
