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
    group: "guestCountSelector" | "quantitySelector" | "multiDaysSelector" | "airportTransfer" | "thsrTicket" | "halfBroadSelector" | "highSpeedRail";
    detail?: any;
}
export type ThsrLegType = "outbound" | "return";
export type ThsrLegSummary = {
    leg: ThsrLegType;
    from: string;
    to: string;
    fromLabel: string;
    toLabel: string;
    date: string;
    departTime: string;
    arriveTime: string;
    duration: string;
    trainNo: number;
    carClass?: "standard" | "business";
};
export type ThsrSelection = {
    tripType: "outbound" | "return" | "roundTrip";
    carType: "standard" | "business";
    passengers: {
        senior?: number;
        adult?: number;
        child?: number;
        concessional?: number;
    };
    legs: ThsrLegSummary[];
    totalPrice?: number;
};
export interface selectedItem {
    id: string;
    label?: string;
    price: number;
    exclusiveGroup?: string;
    detail?: {
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
            disabled?: number;
        };
        timeSlot?: {
            date: string;
            meal?: string;
            time?: string;
        } | null;
        hsr?: {
            cabin?: string;
            tripType?: string;
            from?: string;
            to?: string;
        };
        flight?: string;
    }[] | null;
    thsr?: ThsrSelection;
}
export interface AddonProceedToPaymentPayload {
    selected: selectedItem[];
    currentItem?: selectedItem | null;
}
interface ListValue {
    id: string;
    exclusiveGroup?: string;
    title: string;
    images: string[];
    description: string;
    memberOnly?: boolean;
    price: number;
    priceTag?: string;
    upsell?: upsellprops;
    addon?: {
        group: "guestCountSelector" | "quantitySelector" | "multiDaysSelector" | "airportTransfer" | "thsrTicket" | "halfBroadSelector" | "highSpeedRail";
        detail?: any;
    };
}
export interface UpsellButtonModuleprops {
    memberOnly?: boolean;
    isLogin?: boolean;
    id: string;
    title?: string;
    price: number;
    priceTag?: string;
    upsell?: upsellprops;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
    onRequestRemove?: (id: string, title?: string) => void;
    exclusiveGroup?: string;
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
    onRequestRemove?: (id: string, title?: string) => void;
    onProceedToPayment?: (payload: AddonProceedToPaymentPayload) => void;
}
export interface CardProps {
    item: ListValue;
    isLogin: boolean;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
    onRequestRemove?: (id: string, title?: string) => void;
    onProceedToPayment?: (payload: AddonProceedToPaymentPayload) => void;
}
export interface AddonUpsellProps {
    roomName: string;
    upsellList?: ListValue[];
    addonList?: ListValue[];
    isLogin: boolean;
    selected: selectedItem[];
    setSelected: React.Dispatch<React.SetStateAction<selectedItem[] | undefined>>;
    onBack?: () => void;
    variant?: "default" | "list";
    onProceedToPayment?: (payload: AddonProceedToPaymentPayload) => void;
}
export {};
