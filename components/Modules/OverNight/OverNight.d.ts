import { default as React } from '../../../../node_modules/react';
import { MemberCoupon } from '../../Atom/Cart/Cart';
import { AddonUpsellProps } from '../../../types/addonUpsellExtends';
import { RoomsProjectsCardInfo } from '../../../types/roomsProjectsCardExtends';
type OverNightTrip = {
    id: string;
    status: string;
    code: string;
    dateRange: string;
    note: string;
    rooms: string;
    price: number;
    image: string;
};
type PendingCart = {
    id: string;
    title: string;
    dateRange: string;
    rooms: string;
    image: string;
};
type OverNightAddonPreset = {
    upsell: NonNullable<AddonUpsellProps["upsellList"]>;
    addon: NonNullable<AddonUpsellProps["addonList"]>;
};
export type OverNightProps = {
    info: RoomsProjectsCardInfo;
    upcomingTrips: OverNightTrip[];
    pendingCarts: PendingCart[];
    addonUpsellPreset: OverNightAddonPreset;
    calendarDayMap?: Record<string, CalendarDay>;
    memberExclusiveCoupons?: MemberCoupon[];
};
export declare const OverNight: React.FC<OverNightProps>;
export {};
