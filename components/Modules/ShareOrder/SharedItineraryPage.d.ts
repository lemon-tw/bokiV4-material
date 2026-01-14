import { default as React } from '../../../../node_modules/react';
import { Announcement, HotelInfo, OrderSummary, RoomInfo } from '../Order/OrderConfirmationConfig';
import { ShareMemberSection } from './ShareOrderConfig';
type SharedItineraryPageProps = {
    orderSummary?: OrderSummary;
    announcement?: Announcement;
    roomInfo?: RoomInfo;
    hotelInfo?: HotelInfo;
    memberSection?: ShareMemberSection;
};
export declare const SharedItineraryPage: React.FC<SharedItineraryPageProps>;
export {};
