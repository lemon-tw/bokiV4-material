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
