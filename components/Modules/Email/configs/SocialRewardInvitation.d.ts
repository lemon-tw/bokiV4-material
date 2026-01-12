import { default as React } from '../../../../../node_modules/react';
import { ActionBannerButtonInfo } from '../sections/ActionBanner';
import { PaymentInfo } from './BookingMailConfig';
export type SocialRewardInvitationBenefit = {
    icon: React.ReactNode;
    text: string;
};
export type MembershipTerms = {
    url: string;
    prefixText?: string;
    linkText: string;
    suffixText?: string;
};
export type SocialRewardInvitationInfo = {
    badgeIcon: React.ReactNode;
    title: string;
    introText: string;
    benefits: SocialRewardInvitationBenefit[];
    membershipTerms?: MembershipTerms;
    button: ActionBannerButtonInfo;
    footerLines: string[];
    signature: string;
};
export declare const socialRewardInvitationMailInfo: PaymentInfo;
export declare const socialRewardInvitationInfo: SocialRewardInvitationInfo;
