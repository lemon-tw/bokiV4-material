import { ReactNode } from '../../node_modules/react';
import { AppBarProps } from '@mui/material/AppBar';
/**
 * Announcement 物件介面
 */
export interface Announcement {
    id: string;
    title: string | ReactNode;
    article: string | ReactNode;
    visible: boolean;
    priority: number;
    startDate: string;
    endDate: string;
    type: 'promotion' | 'membership' | 'service' | 'facility' | 'room' | 'experience';
    targetHotels?: string[];
}
/**
 * 館別選單 Props
 * T 代表動態推導出的館別 code（string union）
 */
export interface HotelHostSelectorProps<T extends string = string> {
    currentHotelHost: T;
    hotelHosts: Array<{
        code: T;
        hotel: string;
    }>;
    onHotelHostChange: (code: T) => void;
}
/**
 * 語系選單 Props
 */
export interface LanguageSelectorProps {
    currentLanguage: string;
    languages: Array<{
        code: string;
        label: string;
    }>;
    onLanguageChange: (code: string) => void;
}
/**
 * 幣別選單 Props
 */
export interface CurrencySelectorProps {
    currentCurrency: string;
    currencies: Array<{
        code: string;
        label: string;
        symbol: string;
        isDefault?: boolean;
        exchangeRate?: number;
    }>;
    onCurrencyChange: (code: string) => void;
}
/**
 * 導覽選單項目
 */
export interface HeaderNavItem {
    icon: ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
}
/**
 * 使用者區塊 Props
 */
export interface UserMenuItem {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    divider?: boolean;
}
export interface UserProps {
    isAuthenticated: boolean;
    name?: string;
    avatar?: string;
    onLogin?: () => void;
    onLogout?: () => void;
    onProfile?: () => void;
    menuItems?: UserMenuItem[];
}
/**
 * HeaderComponent 共用屬性（不含 selector）
 */
export interface HeaderSharedProps<T extends string = string> {
    logo?: string;
    brandName?: string;
    hotelName?: string;
    onBrandClick?: () => void;
    announcement?: Announcement[];
    announcementControls?: {
        currentIndex: number;
        onPrevious: () => void;
        onNext: () => void;
        autoPlay?: boolean;
        autoPlayInterval?: number;
    };
    navigationItems?: HeaderNavItem[];
    languageSelector?: LanguageSelectorProps;
    currencySelector?: CurrencySelectorProps;
    user?: UserProps;
    loading?: {
        user?: boolean;
        navigation?: boolean;
        hotelHost?: boolean;
        announcement?: boolean;
    };
    breakpoints?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    position?: AppBarProps['position'];
    responsive?: boolean;
    sx?: AppBarProps['sx'];
    className?: string;
}
/**
 * HeaderProps：條件型別定義
 * T 代表動態從 JSON 推導的館別 code union
 */
export type HeaderProps<T extends string = string> = ({
    /** 集團首頁模式 */
    currentHotelHost: 'group';
    isGroup?: true;
    hotelHostSelector: HotelHostSelectorProps<T>;
    onBackToGroup?: () => void;
} & HeaderSharedProps<T>) | ({
    /** 單館模式 */
    currentHotelHost: Exclude<T, 'group'>;
    isGroup?: false;
    hotelHostSelector?: never;
    /** 新增 - 允許提供一個切回 group 的 callback */
    onBackToGroup?: () => void;
} & HeaderSharedProps<T>);
