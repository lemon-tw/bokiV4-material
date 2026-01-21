import { default as React } from '../../../../node_modules/react';
import { MemberMenuSection, MemberProfile } from './MemberDashboardConfig';
type MemberSidebarProps = {
    profile: MemberProfile;
    profileSubInfo: React.ReactNode;
    profileFooter: React.ReactNode;
    menuTopAction: React.ReactNode;
    menuSections: MemberMenuSection[];
    pendingOrderCount: number;
    messageUnreadCount: number;
    isLogin: boolean;
    onMenuItemClick: (id: string) => void;
    onLogout: () => void;
};
export declare const MemberSidebar: ({ profile, profileSubInfo, profileFooter, menuTopAction, menuSections, pendingOrderCount, messageUnreadCount, isLogin, onMenuItemClick, onLogout, }: MemberSidebarProps) => import("react/jsx-runtime").JSX.Element;
export {};
