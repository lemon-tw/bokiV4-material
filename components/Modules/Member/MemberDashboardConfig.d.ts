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
export type OrderScope = "joined" | "mine";
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
    scope?: OrderScope;
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
export type MemberAccountTabKey = "profile" | "account" | "member";
export type MemberAccountTabOption = {
    label: string;
    value: MemberAccountTabKey;
};
export type MemberAccountPersonalInfo = {
    lastName: string;
    firstName: string;
    title: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    country: string;
    city: string;
    documentType: string;
    documentNumber: string;
    birthday: string;
    note: string;
};
export type MemberAccountDeviceInfo = {
    carrierCode: string;
    invoiceNotice: boolean;
};
export type MemberAccountTgoInfo = {
    memberId: string;
    orderNotice: boolean;
};
export type MemberAccountSubscriptionInfo = {
    memberNewsletter: boolean;
    promoOffers: boolean;
};
export type MemberAccountPreferenceInfo = {
    language: string;
    currency: string;
};
export type MemberAccountSecurityInfo = {
    email: string;
    emailStatusLabel: string;
    passwordMask: string;
    passwordRules: MemberAccountPasswordRule[];
};
export type MemberAccountPasswordRule = {
    id: "length" | "letters" | "upperLowerNumber";
    label: string;
};
export type MemberAccountSocialBinding = {
    id: "facebook" | "line" | "google";
    label: string;
    status: "connected" | "disconnected";
    value?: string;
    iconSrc: string;
    iconBgColor?: string;
};
export type MemberSettingsTabKey = "guests" | "companies";
export type MemberSettingsTabOption = {
    label: string;
    value: MemberSettingsTabKey;
};
export type MemberCommonGuest = {
    id: string;
    lastName: string;
    firstName: string;
    title: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    country: string;
    city: string;
    documentType: string;
    documentNumber: string;
    note: string;
};
export type MemberSettingsEmptyState = {
    title: string;
    imageSrc: string;
    actionLabel: string;
};
export type MemberCommonCompany = {
    id: string;
    name: string;
    taxId: string;
};
export type MemberSettingsConfig = {
    tabs: MemberSettingsTabOption[];
    titleOptions: MemberAccountOption[];
    phoneCodeOptions: MemberAccountOption[];
    countryOptions: MemberAccountOption[];
    cityOptions: MemberAccountOption[];
    documentTypeOptions: MemberAccountOption[];
    emptyState: MemberSettingsEmptyState;
    companyEmptyState: MemberSettingsEmptyState;
    guests: MemberCommonGuest[];
    companies: MemberCommonCompany[];
};
export type MemberAccountOption = {
    label: string;
    value: string;
};
export type MemberAccountConfig = {
    tabs: MemberAccountTabOption[];
    titleOptions: MemberAccountOption[];
    phoneCodeOptions: MemberAccountOption[];
    countryOptions: MemberAccountOption[];
    cityOptions: MemberAccountOption[];
    documentTypeOptions: MemberAccountOption[];
    languageOptions: MemberAccountOption[];
    currencyOptions: MemberAccountOption[];
    personalInfo: MemberAccountPersonalInfo;
    deviceInfo: MemberAccountDeviceInfo;
    tgoInfo: MemberAccountTgoInfo;
    subscriptionInfo: MemberAccountSubscriptionInfo;
    preferenceInfo: MemberAccountPreferenceInfo;
    accountInfo: MemberAccountSecurityInfo;
    socialBindings: MemberAccountSocialBinding[];
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
    memberAccountConfig?: MemberAccountConfig;
    memberSettingsConfig?: MemberSettingsConfig;
    sortOptions?: {
        label: string;
        value: string;
    }[];
    tabOptions?: {
        label: string;
        value: string;
    }[];
    orderStatusOptions?: OrderStatusOption[];
    hotelMessageTabs?: HotelMessageTabOption[];
    hotelMessageStatusOptions?: HotelMessageStatusOption[];
    hotelMessageSortOptions?: {
        label: string;
        value: string;
    }[];
    hotelMessageCategoryOptions?: {
        label: string;
        value: string;
    }[];
};
