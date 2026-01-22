import { ElementType } from '../../../../node_modules/react';
import { RoomsProjectsCardInfo } from 'src/types/roomsProjectsCardExtends';
import { PointsEntry, PointsEntryStatus } from 'src/types/pointsTableExtends';
export type MemberProfile = {
    name: string;
    email: string;
    avatarSrc: string;
    tierLabel: string;
    tierName: string;
    pointsLabel: string;
    pointsValue: string;
};
export type MemberMenuItem = {
    id: string;
    label: string;
    icon: ElementType;
    isActive?: boolean;
};
export type MemberMenuSection = {
    title: string;
    items: MemberMenuItem[];
};
export type TripMember = {
    id: string;
    name: string;
    avatarSrc?: string;
};
export type TripStatus = {
    label: string;
    color: string;
    backgroundColor: string;
};
export type OrderStatusKey = "pending" | "pending-waitlist" | "cancelled" | "void" | "checked-out";
export type OrderStatusOption = {
    label: string;
    value: OrderStatusKey;
};
export type TripCardData = {
    id: string;
    orderNumber: string;
    scope: "joined" | "mine";
    status: TripStatus;
    ownerLabel: string;
    hotelName: string;
    dateRange: string;
    segmentLabel: string;
    roomCount: number;
    paymentStatusLabel: string;
    paymentStatusColor: string;
    priceLabel?: string;
    imageSrc: string;
    members: TripMember[];
    extraMembers?: number;
    actionLabel: string;
};
export type TripGroup = {
    year: number;
    month: string;
    trips: TripCardData[];
};
export type OrderCardData = {
    id: string;
    orderNumber: string;
    statusKey: OrderStatusKey;
    statusLabel: string;
    statusColor: string;
    hotelName: string;
    dateRange: string;
    segmentLabel: string;
    roomCount: number;
    paymentStatusLabel: string;
    paymentStatusColor: string;
    priceLabel?: string;
    imageSrc: string;
    actionLabel: string;
    primaryActionLabel?: string;
};
export type OrderGroup = {
    year: number;
    month: string;
    orders: OrderCardData[];
};
export type MemberLevelTier = "basic" | "silver" | "gold" | "platinum" | "diamond";
export type MemberLevelOverview = {
    title: string;
    cardTitle: string;
    levelLabel: string;
    levelColor: string;
    cardBackground: string;
    progressLabel: string;
    nextLevelLabel: string;
    currentSpend: number;
    targetSpend: number;
};
export type MemberLevelDetail = {
    tier: MemberLevelTier;
    cardTitle: string;
    levelLabel: string;
    levelColor: string;
    cardBackground: string;
    eligibility: string[];
    perks: string[];
    renewal: string[];
};
export type MemberLevelRuleSection = {
    title: string;
    items: string[];
};
export type MemberLevelConfig = {
    currentTier: MemberLevelTier;
    defaultTier: MemberLevelTier;
    overview: MemberLevelOverview;
    tiers: MemberLevelDetail[];
    rules: MemberLevelRuleSection[];
};
export type PointsTabKey = "all" | PointsEntryStatus;
export type PointsTabOption = {
    label: string;
    value: PointsTabKey;
};
export type MemberPointsSummaryCard = {
    key: string;
    title: string;
    value: number;
    unitLabel: string;
    note?: string;
};
export type MemberPointsConfig = {
    summaryCards: MemberPointsSummaryCard[];
    tabs: PointsTabOption[];
    entries: PointsEntry[];
};
export type MemberCouponStatus = "available" | "expired" | "used";
export type MemberCoupon = {
    id: string;
    code: string;
    title: string;
    discountLabel: string;
    periodLabel: string;
    minSpendLabel: string;
    status: MemberCouponStatus;
};
export type MemberCouponTabKey = MemberCouponStatus;
export type MemberCouponTabOption = {
    label: string;
    value: MemberCouponTabKey;
};
export type MemberCouponConfig = {
    tabs: MemberCouponTabOption[];
    coupons: MemberCoupon[];
};
export type HotelMessageTabKey = "active" | "checked-out";
export type HotelMessageStatusKey = "pending" | "unread" | "read";
export type HotelMessageTabOption = {
    label: string;
    value: HotelMessageTabKey;
};
export type HotelMessageStatusOption = {
    label: string;
    value: HotelMessageStatusKey;
};
export type HotelMessageTag = {
    label: string;
    color: string;
    backgroundColor: string;
    icon?: ElementType;
};
export type HotelMessage = {
    id: string;
    stayStatus: HotelMessageTabKey;
    status: HotelMessageStatusKey;
    leftLabel: string;
    leftValue: string;
    leftValueColor?: string;
    tags: HotelMessageTag[];
    message: string;
    timeLabel: string;
    unreadCount?: number;
};
export type MemberDashboardProps = {
    profile?: MemberProfile;
    menuSections?: MemberMenuSection[];
    tripGroups?: TripGroup[];
    orderGroups?: OrderGroup[];
    hotelMessages?: HotelMessage[];
    favoriteProjectsInfo?: RoomsProjectsCardInfo;
    memberLevelConfig?: MemberLevelConfig;
    memberPointsConfig?: MemberPointsConfig;
    memberCouponConfig?: MemberCouponConfig;
};
export declare const defaultMemberProfile: MemberProfile;
export declare const defaultMemberMenuSections: MemberMenuSection[];
export declare const defaultMemberLevelConfig: MemberLevelConfig;
export declare const defaultMemberPointsConfig: MemberPointsConfig;
export declare const defaultMemberCouponConfig: MemberCouponConfig;
export declare const defaultTripGroups: TripGroup[];
export declare const sortOptions: {
    label: string;
    value: string;
}[];
export declare const tabOptions: {
    label: string;
    value: string;
}[];
export declare const orderStatusOptions: OrderStatusOption[];
export declare const defaultOrderGroups: OrderGroup[];
export declare const hotelMessageTabs: HotelMessageTabOption[];
export declare const hotelMessageStatusOptions: HotelMessageStatusOption[];
export declare const hotelMessageSortOptions: {
    label: string;
    value: string;
}[];
export declare const hotelMessageCategoryOptions: {
    label: string;
    value: string;
}[];
export declare const defaultHotelMessages: HotelMessage[];
export declare const defaultFavoriteProjectsInfo: RoomsProjectsCardInfo;
