export type MemberRole = "guest" | "socialGuest" | "member";
export type ImportantInfoContent = Record<string, {
    text: string;
    agreeLabel?: string;
}>;
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
