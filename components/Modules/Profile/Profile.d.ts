import { default as React } from '../../../../node_modules/react';
import { StepperProps } from '@mui/material';
import { default as profileConfig, CartItemConfig, ImportantInfoContent, MemberRole } from './profileConfig';
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
    arrivalTimeOptions?: typeof profileConfig.arrivalTimeOptions;
    specialRequirementOptions?: typeof profileConfig.specialRequirementOptions;
    invoiceIssueMethodOptions?: typeof profileConfig.invoiceIssueMethodOptions;
    importantInfoPanels?: typeof profileConfig.importantInfoPanels;
    importantInfoContent?: ImportantInfoContent;
    feeItems?: typeof profileConfig.feeItems;
    initialCartItems?: CartItem[];
    promoDiscount?: number;
    memberDiscount?: number;
    frequentGuests?: typeof profileConfig.frequentGuests;
    frequentCompanies?: typeof profileConfig.frequentCompanies;
}
export type CartItem = CartItemConfig;
export declare const Profile: React.FC<ProfileProps>;
