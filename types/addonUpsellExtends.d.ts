type UpsellGroup = "time" | "stay";
interface TimeTier {
    label: string;
    price: number;
}
interface upsellprops {
    group: UpsellGroup;
    tiers?: TimeTier[];
    originalPrice?: number;
}
interface addonprops {
    group: "guestCountSelector" | "quantitySelector" | "multiDaysSelector" | "airportTransfer" | "halfBroadSelector";
    detail?: any;
}
export interface selectedItem {
    id: string;
    label?: string;
    price: number;
    detail?: {
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
        };
        timeSlot?: {
            date: string;
            meal?: string;
            time?: string;
        } | null;
        flight?: string;
    }[] | null;
}
interface ListValue {
    id: string;
    title: string;
    images: string[];
    description: string;
    memberOnly?: boolean;
    price: number;
    priceTag?: string;
    upsell?: upsellprops;
    addon?: {
        group: "guestCountSelector" | "quantitySelector" | "multiDaysSelector" | "airportTransfer" | "halfBroadSelector";
        detail?: any;
    };
}
export interface UpsellButtonModuleprops {
    memberOnly?: boolean;
    isLogin?: boolean;
    id: string;
    price: number;
    priceTag?: string;
    upsell?: upsellprops;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
}
export interface AddonButtonModuleprops {
    memberOnly?: boolean;
    isLogin?: boolean;
    id: string;
    title?: string;
    price: number;
    priceTag?: string;
    addon?: addonprops;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
}
export interface CardProps {
    item: ListValue;
    isLogin: boolean;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
}
export interface AddonUpsellProps {
    roomName: string;
    upsellList?: ListValue[];
    addonList?: ListValue[];
    isLogin: boolean;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
    onBack?: () => void;
}
export {};
