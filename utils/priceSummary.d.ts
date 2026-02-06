export type PriceSummaryInput = {
    totalPrice: number;
    roomCount?: number;
    nights?: number;
    currency?: string;
    taxLabel?: string;
};
export declare const formatRoomNightPriceSummary: ({ totalPrice, roomCount, nights, currency, taxLabel, }: PriceSummaryInput) => string;
