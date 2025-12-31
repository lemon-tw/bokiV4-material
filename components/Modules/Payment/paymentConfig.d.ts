import { default as React } from '../../../../node_modules/react';
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
export declare const paymentMethods: PaymentMethod[];
export declare const bookingPoliciesConfig: BookingPolicy[];
export declare const CreditCards: {
    name: string;
    imgSrc: string;
}[];
export declare const freePlanNotice: {
    title: string;
    lines: string[];
};
export declare const wabATMPlanNotice: {
    title: string;
    lines: string[];
};
export declare const bookingGuaranteeTerms: string[][];
export declare const cancelPolicyDefault: CancelPolicy;
export declare const cancelPolicyFree: CancelPolicy;
export declare const cancelPolicySafe: CancelPolicy;
export declare const userAccount: {
    code: string;
    account: string;
    remittanceAmount: string;
    timeLimit: string;
};
