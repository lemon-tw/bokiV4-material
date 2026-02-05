import { default as React } from '../../../../node_modules/react';
import { StepperProps } from '@mui/material';
import { CartItemConfig, FrequentGuest, ImportantInfoContent, MemberRole } from './profileConfig';
import { MemberCoupon } from '../../Atom/Cart/Cart';
export type ProfileStep = {
    label: string;
};
export type memberBenefitBanner = {
    title: string;
    subTitle: string;
    scorePoint: number;
    descriptionBefore: string;
    descriptionAfter: string;
    ctaLabel: string;
};
export interface ProfileProps extends Omit<StepperProps, "children"> {
    steps?: ProfileStep[];
    activeStep?: number;
    memberRole?: MemberRole;
    memberBenefitBanner?: memberBenefitBanner;
    arrivalTimeOptions?: {
        value: string;
        label: string;
    }[];
    specialRequirementOptions?: string[];
    invoiceIssueMethodOptions?: {
        value: string;
        label: string;
    }[];
    importantInfoPanels?: {
        id: string;
        title: string;
        required?: boolean;
    }[];
    importantInfoContent?: ImportantInfoContent;
    feeItems?: {
        label: string;
        value: string;
    }[];
    initialCartItems?: CartItem[];
    promoDiscount?: number;
    memberDiscount?: number;
    frequentGuests?: FrequentGuest[];
    frequentCompanies?: {
        id: string;
        name: string;
        taxId: string;
    }[];
    memberExclusiveCoupons?: MemberCoupon[];
}
export type CartItem = CartItemConfig;
export declare const Profile: React.FC<ProfileProps>;
