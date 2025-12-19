export type ImportantInfoContent = Record<string, {
    text: string;
    agreeLabel?: string;
}>;
export declare const importantInfoContent: ImportantInfoContent;
export type CartItemConfig = {
    id: string;
    title: string;
    price: number;
    dateRange: string;
    guests: string;
    plan: string;
    discountLabel?: string;
    discountAmount?: number;
};
declare const profileConfig: {
    arrivalTimeOptions: {
        value: string;
        label: string;
    }[];
    specialRequirementOptions: string[];
    specialRequirementPanels: {
        id: string;
        index: number;
        title: string;
    }[];
    invoiceIssueMethodOptions: {
        value: string;
        label: string;
    }[];
    importantInfoPanels: {
        id: string;
        title: string;
        required: boolean;
    }[];
    importantInfoContent: ImportantInfoContent;
    feeItems: {
        label: string;
        value: string;
    }[];
    cartItems: CartItemConfig[];
    promoDiscount: number;
    memberDiscount: number;
};
export default profileConfig;
