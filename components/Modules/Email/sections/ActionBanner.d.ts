import { default as React } from '../../../../../node_modules/react';
export type ActionBannerButtonInfo = {
    label: string;
    href?: string;
    backgroundColor?: string;
    textColor?: string;
    maxWidth?: string | undefined;
};
export type ActionBannerTrip = {
    imageUrl: string;
    roomType: string;
    people: string;
};
export type ActionBannerInfo = {
    textAlign: "left" | "center" | "right";
    bold?: boolean;
    fontSize?: number;
    title?: string;
    subtitle?: string;
    body?: string;
    button: ActionBannerButtonInfo;
    trip?: ActionBannerTrip;
};
export type ActionBannerButtonProps = {
    info: ActionBannerButtonInfo;
};
export type ActionBannerProps = {
    info: ActionBannerInfo;
};
export declare const ActionBannerButton: React.FC<ActionBannerButtonProps>;
export declare const ActionBanner: React.FC<ActionBannerProps>;
export default ActionBanner;
