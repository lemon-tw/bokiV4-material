export type MemberRole = 'guest' | 'socialGuest' | 'member';
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
export type memberCoupon = {
    code: string;
    title: string;
    discount: string;
    validRange: string;
    minSpend: string;
};
export declare const memberExclusiveCoupon: {
    code: string;
    title: string;
    discount: string;
    validRange: string;
    minSpend: string;
}[];
export type FrequentCompany = {
    id: string;
    title: string;
    taxId: string;
};
export type FrequentGuest = {
    id: string;
    lastName: string;
    firstName: string;
    salute: string;
    dialCode: string;
    phone: string;
    email: string;
    country: string;
    city: string;
    idType: string;
    idNumber: string;
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
    defaultUser: FrequentGuest;
    frequentGuests: FrequentGuest[];
    frequentCompanies: FrequentCompany[];
    promoDiscount: number;
    memberDiscount: number;
};
export default profileConfig;
