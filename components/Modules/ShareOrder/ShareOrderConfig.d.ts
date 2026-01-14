import { default as React } from '../../../../node_modules/react';
export type ShareChannel = {
    id: string;
    label: string;
    icon: React.ReactNode;
    iconBg?: string;
    iconBorder?: string;
};
export type SharePermissionOption = {
    value: string;
    label: string;
};
export type ShareStep = {
    step: number;
    title: string;
    permissionLabel?: string;
    permissionOptions?: SharePermissionOption[];
    selectedPermission?: string;
    emailLabel: string;
    emailPlaceholder: string;
    shareChannelLabel: string;
    shareChannels: ShareChannel[];
};
export type ShareVerifyStep = {
    step: number;
    title: string;
    code: string;
    notes: string[];
    emailLabel: string;
    emailPlaceholder: string;
    shareChannelLabel: string;
    shareChannels: ShareChannel[];
};
export type ShareOrderAnnouncement = {
    title: string;
    description: string;
    actionButton?: React.ReactNode;
};
export type ShareOrderMember = {
    id: string;
    name: string;
    avatarSrc?: string;
    roleLabel?: string;
    permissionLabel?: string;
    isOwner?: boolean;
};
export type ShareMemberSection = {
    title: string;
    currentCount: number;
    maxCount: number;
    joinedMembers: ShareOrderMember[];
    removedTitle: string;
    removedMembers: ShareOrderMember[];
};
export type ShareOrderProps = {
    orderNumber?: string;
    pageTitle?: string;
    announcement?: ShareOrderAnnouncement;
    shareStep?: ShareStep;
    verifyStep?: ShareVerifyStep;
    memberSection?: ShareMemberSection;
};
export declare const announcementActionButton: React.FunctionComponentElement<import('../../Atom/Button').CustomButtonProps>;
export declare const defaultOrderNumber = "#BK25226782424";
export declare const defaultPageTitle = "\u5206\u4EAB\u8A02\u55AE";
export declare const defaultAnnouncement: ShareOrderAnnouncement;
export declare const defaultShareStep: ShareStep;
export declare const defaultVerifyStep: ShareVerifyStep;
export declare const defaultMemberSection: ShareMemberSection;
