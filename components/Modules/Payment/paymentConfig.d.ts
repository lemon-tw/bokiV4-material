export type BookingPolicy = {
    id: string;
    title: string;
    payLabel: string;
    accentColor: string;
    icon: React.ReactElement;
};
export type CancelPolicy = {
    title: string;
    lines: string[];
    footer?: string;
};
export type PaymentMethod = {
    id: string;
    label: string;
    icon?: React.ReactElement;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
};
export type UserAccount = {
    code: string;
    account: string;
    remittanceAmount: string;
    timeLimit: string;
};
