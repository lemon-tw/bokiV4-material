type MultiDaySelection = {
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
};
export declare const MultiDaysSelector: ({ title, detail, selectedDetail, setSelectedDetail, setTotalPrice, open, }: {
    title?: string;
    detail?: any;
    selectedDetail: MultiDaySelection[] | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<MultiDaySelection[] | null | undefined>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    open: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export {};
