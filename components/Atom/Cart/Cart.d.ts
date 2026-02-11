import { default as React } from '../../../../node_modules/react';
import { MemberRole } from '../../Modules/Profile/profileConfig';
export type CartItem = {
    id: string;
    title: string;
    price: number;
    dateRange: string;
    guests: string;
    plan: string;
    roomCount?: number;
    discountLabel?: string;
    discountAmount?: number;
    addons?: {
        label: string;
        price: number;
    }[];
};
export type BookingSummaryItem = {
    label: string;
    value: string;
    color?: string;
    strong?: boolean;
};
export type CartProps = {
    cartItems: CartItem[];
    expandedCartItem: string | null;
    onToggleItem: (id: string) => void;
    onDeleteItem: (id: string) => void;
    onClear: () => void;
    onCheckout: () => void;
    onOpenAddonUpsell?: (id: string) => void;
    isCartExpanded: boolean;
    onCartExpandChange: (open: boolean) => void;
    isFeeExpanded: boolean;
    onFeeExpandChange: (open: boolean) => void;
    bookingSummaryItems: BookingSummaryItem[];
    feeItems: {
        label: string;
        value: string;
    }[];
    subtotalLabel?: string;
    totalText?: string;
    depositText?: string;
    payOnArrivalText?: string;
    subtotalValue: string;
    depositValue: string;
    payOnArrivalValue: string;
    memberRole?: MemberRole;
    memberCoupons?: MemberCoupon[];
    memberExclusiveCoupons?: MemberCoupon[];
    headerContent?: React.ReactNode;
    highlightItemId?: string;
    highlightLabel?: string;
    highlightLabelColor?: string;
    changeOriginalItem?: CartItem | null;
    changeUpdatedItem?: CartItem | null;
    hideAddonForHighlight?: boolean;
    changeSummaryItems?: {
        label: string;
        value: string;
        valueColor?: string;
        emphasize?: boolean;
        note?: string;
    }[];
    changeConfirmLabel?: string;
    onChangeConfirm?: () => void;
};
export type MemberCoupon = {
    code: string;
    title: string;
    discount: string;
    validRange: string;
    minSpend: string;
};
export declare const Cart: React.FC<CartProps>;
