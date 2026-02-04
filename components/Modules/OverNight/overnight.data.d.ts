import { RoomsProjectsCardInfo } from 'src/types/roomsProjectsCardExtends';
export declare const overnightInfo: RoomsProjectsCardInfo;
export declare const upcomingTrips: {
    id: string;
    status: string;
    code: string;
    dateRange: string;
    note: string;
    rooms: string;
    price: number;
    image: string;
}[];
export declare const pendingCarts: {
    id: string;
    title: string;
    dateRange: string;
    rooms: string;
    image: string;
}[];
export declare const overnightAddonUpsellPreset: {
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
