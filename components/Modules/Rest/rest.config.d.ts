import { RoomsProjectsCardInfo } from 'src/types/roomsProjectsCardExtends';
export declare const restInfo: RoomsProjectsCardInfo;
export declare const restAddonUpsellPreset: {
    upsell: {
        id: string;
        title: string;
        images: string[];
        description: string;
        memberOnly: boolean;
        price: number;
        priceTag: string;
        upsell: {
            group: string;
            tiers: {
                label: string;
                price: number;
            }[];
        };
    }[];
    addon: {
        id: string;
        title: string;
        images: string[];
        description: string;
        memberOnly: boolean;
        price: number;
        priceTag: string;
        addon: {
            group: string;
            detail: {
                maxSelected: number;
            };
        };
    }[];
};
