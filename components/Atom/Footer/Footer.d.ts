import { default as React } from '../../../../node_modules/react';
type FooterLink = {
    label: string;
    href: string;
    icon?: React.ReactNode;
};
type FooterContact = {
    label: string;
    value: string;
};
type SocialLink = {
    ariaLabel: string;
    href: string;
    icon: React.ReactNode;
};
export interface FooterProps {
    links?: FooterLink[];
    brandName?: string;
    contacts?: FooterContact[];
    address?: string;
    license?: string;
    socials?: SocialLink[];
    legalText?: string;
    isGroup?: boolean;
}
/**
 * 酒店頁尾元件，依示意支援桌機/平板/手機的 RWD 排版。
 */
export declare const Footer: React.FC<FooterProps>;
export {};
