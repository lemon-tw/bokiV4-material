import { default as React } from '../../../../node_modules/react';
import { HeaderProps } from '../../../types/headerExtends';
declare module "../../../types/menuExtends" {
    interface CustomMenuProps {
        items: Array<{
            label: string;
            onClick: () => void;
            disabled?: boolean;
            divider?: boolean;
        }>;
    }
}
/**
 * Header 元件
 * 提供網站頂部導覽功能，包含品牌識別、導覽選單、公告輪播、語系/幣別選擇、使用者功能等
 */
export declare const Header: React.FC<HeaderProps>;
export default Header;
