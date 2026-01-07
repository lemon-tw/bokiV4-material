export declare const AirportTransfer: ({ title, price, detail, selectedDetail, setSelectedDetail, setTotalPrice, }: {
    title?: string;
    price: number;
    detail?: any;
    selectedDetail: {
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
        };
        timeSlot?: {
            date: string;
            time?: string;
        } | null;
        flight?: string;
    }[] | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<{
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
        };
        timeSlot?: {
            date: string;
            time?: string;
        } | null;
        flight?: string;
    }[] | null | undefined>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}) => import("react/jsx-runtime").JSX.Element;
