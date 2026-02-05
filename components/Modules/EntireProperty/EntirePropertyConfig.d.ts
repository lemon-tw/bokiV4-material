import { default as React } from '../../../../node_modules/react';
export type RoomOption = {
    id: string;
    label: string;
    rooms: number;
    price?: number;
    originalPrice?: number;
    discountLabel?: string;
    discountRate?: number;
    priceLabel?: string;
};
export type RoomItem = {
    id: string;
    title: string;
    image: string;
    tags: string[];
    features: string[];
    options: RoomOption[];
    memberOnly?: boolean;
    loginRequired?: boolean;
};
export type RoomGroup = {
    id: string;
    title: string;
    accent: string;
    bg: string;
    icon: React.ReactNode;
    items: RoomItem[];
};
export type PlanIncludes = {
    label: string;
    value: string;
};
export type RoomPlanSummaryItem = {
    label: string;
    value: string;
};
export type RoomPlanSummary = {
    title: string;
    items: RoomPlanSummaryItem[];
};
export type VillaModalData = {
    title: string;
    images: {
        src: string;
        alt: string;
    }[];
    tags: string[];
    features: string[];
    roomPlanSummarys?: RoomPlanSummary[];
    subtitle: string[];
    description: string;
    descriptionFooter: string;
    planIncludes: PlanIncludes[];
    paidServices: string[];
    notes: string[];
    roomTypes: {
        id: string;
        name: string;
        photos: {
            src: string;
            alt: string;
        }[];
        detail: {
            beds: string;
            capacity: string;
            size: string;
            description: string;
            amenities: string[];
        };
    }[];
};
export type AddonUpsellPreset = {
    upsell: Array<{
        id: string;
        title: string;
        images: string[];
        description: string;
        memberOnly?: boolean;
        price: number;
        priceTag?: string;
        upsell?: {
            group: "time" | "stay";
            tiers?: {
                label: string;
                price: number;
            }[];
            originalPrice?: number;
        };
    }>;
    addon: Array<{
        id: string;
        title: string;
        images: string[];
        description: string;
        price: number;
        priceTag?: string;
        addon: {
            group: "multiDaysSelector";
            detail: {
                maxSelected: number;
                senior: {
                    minAge: number;
                    price: number;
                };
                adult: {
                    price: number;
                };
                child: {
                    maxAge: number;
                    price: number;
                };
                timeSlots: Record<string, string[]>;
            };
        };
    }>;
};
export declare const calcDiscountPrice: (originalPrice?: number, discountRate?: number) => number | undefined;
