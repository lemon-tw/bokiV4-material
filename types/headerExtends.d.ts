import { ReactNode } from '../../node_modules/react';
import { AppBarProps } from '@mui/material/AppBar';
export interface HeaderProps {
    /** 品牌 Logo（可以是圖片 URL 或 React 元件） */
    logo?: string | ReactNode;
    /** 品牌名稱 */
    brandName?: string;
    /** 飯店名稱 */
    hotelName?: string;
    /** 品牌名稱點擊事件 */
    onBrandClick?: () => void;
    /** 公告內容陣列 */
    announcement?: Array<{
        title: string | ReactNode;
        article: string | ReactNode;
        visible: boolean;
    }>;
    /** 公告切換控制 */
    announcementControls?: {
        currentIndex: number;
        onPrevious: () => void;
        onNext: () => void;
        autoPlay?: boolean;
        autoPlayInterval?: number;
    };
    /** 導覽選單項目（僅顯示 icon） */
    navigationItems?: Array<{
        icon: ReactNode;
        href?: string;
        onClick?: () => void;
        active?: boolean;
        disabled?: boolean;
        tooltip?: string;
    }>;
    /** 館別選擇 */
    hotelHostSelector?: {
        currentHotelHost: string | null;
        hotelHosts: Array<{
            code: string;
            hotel: string;
        }>;
        onHotelHostChange: (hotelHost: string) => void;
    };
    /** 語系選擇 */
    languageSelector?: {
        currentLanguage: string;
        languages: Array<{
            code: string;
            label: string;
        }>;
        onLanguageChange: (language: string) => void;
    };
    /** 幣別選擇 */
    currencySelector?: {
        currentCurrency: string;
        currencies: Array<{
            code: string;
            label: string;
            symbol: string;
        }>;
        onCurrencyChange: (currency: string) => void;
    };
    /** 使用者相關 */
    user?: {
        isAuthenticated: boolean;
        name?: string;
        avatar?: string;
        onLogin?: () => void;
        onLogout?: () => void;
        onProfile?: () => void;
        menuItems?: Array<{
            label: string;
            icon?: ReactNode;
            onClick: () => void;
            divider?: boolean;
        }>;
    };
    /** 是否為集團首頁 */
    isGroup: boolean;
    /** 是否已登入 */
    isLogin: boolean;
    /** 載入狀態 */
    loading?: {
        user?: boolean;
        navigation?: boolean;
        hotelHost?: boolean;
        announcement?: boolean;
    };
    /** 響應式斷點設定 */
    breakpoints?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    /** AppBar 相關屬性 */
    position?: AppBarProps['position'];
    /** 是否響應式（行動版顯示漢堡選單） */
    responsive?: boolean;
    /** 自定義樣式 */
    sx?: AppBarProps['sx'];
    /** 自定義 className */
    className?: string;
    argTypes: {
        propName: {
            control: false;
            table: {
                disable: true;
            };
        };
    };
    parameters: {
        docs: {
            description: {
                component: '這裡只寫你想顯示的簡短說明';
            };
        };
    };
}
