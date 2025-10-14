import { HeaderProps } from '../../../types/headerExtends';
/**
 * Header 元件
 * 提供網站頂部導覽功能，包含品牌識別、導覽選單、公告輪播、語系/幣別選擇、使用者功能等
 */
export declare const Header: <T extends string = string>({ logo, brandName, hotelName, onBrandClick, announcement, announcementControls, navigationItems, hotelHostSelector, languageSelector, currencySelector, user, currentHotelHost, isGroup, loading, onBackToGroup, breakpoints, position, responsive, sx, className, }: HeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Header;
