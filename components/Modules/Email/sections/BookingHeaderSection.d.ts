import { default as React } from '../../../../../node_modules/react';
import { HotelLayoutProps } from '../configs/BookingMailConfig';
/**
 * 郵件用灰底標頭，只渲染頂部的灰色條並顯示提示文字。
 */
type BookingHeaderSectionProps = {
    headerInfo?: HotelLayoutProps;
};
export declare const BookingHeaderSection: React.FC<BookingHeaderSectionProps>;
export default BookingHeaderSection;
