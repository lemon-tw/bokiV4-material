import { default as React } from '../../../../node_modules/react';
import { MemberCoupon } from '../../Atom/Cart/Cart';
import { CalendarDay } from '../../../types/calendarExtends';
import { AddonUpsellProps } from '../../../types/addonUpsellExtends';
import { RoomsProjectsCardInfo } from '../../../types/roomsProjectsCardExtends';
type RestAddonPreset = {
    upsell: NonNullable<AddonUpsellProps["upsellList"]>;
    addon: NonNullable<AddonUpsellProps["addonList"]>;
};
export type RestProps = {
    info: RoomsProjectsCardInfo;
    addonUpsellPreset: RestAddonPreset;
    calendarDayMap?: Record<string, CalendarDay>;
    memberExclusiveCoupons?: MemberCoupon[];
};
export declare const Rest: React.FC<RestProps>;
export default Rest;
