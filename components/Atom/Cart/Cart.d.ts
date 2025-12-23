import { default as React } from '../../../../node_modules/react';
export type CartItem = {
    id: string;
    title: string;
    price: number;
    dateRange: string;
    guests: string;
    plan: string;
    discountLabel?: string;
    discountAmount?: number;
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
    rewardText?: string;
    rewardValue?: string;
};
export declare const Cart: React.FC<CartProps>;
