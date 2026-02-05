import { default as React } from '../../../../node_modules/react';
import { MemberCoupon } from '../../Atom/Cart/Cart';
import { AddonUpsellPreset, RoomGroup, VillaModalData } from './EntirePropertyConfig';
export type EntirePropertyProps = {
    roomGroups: RoomGroup[];
    villaModalData: Record<string, VillaModalData>;
    addonUpsellPreset: AddonUpsellPreset;
    calendarDayMap?: Record<string, CalendarDay>;
    memberExclusiveCoupons?: MemberCoupon[];
};
export declare const EntireProperty: React.FC<EntirePropertyProps>;
export default EntireProperty;
