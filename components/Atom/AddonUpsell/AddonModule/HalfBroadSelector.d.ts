type HalfBoardSelection = {
    count: {
        senior?: number;
        adult?: number;
        child?: number;
        quantity?: number;
    };
    timeSlot?: {
        date: string;
        meal?: string;
        time?: string;
    } | null;
};
export declare const HalfBroadSelector: ({ detail, selectedDetail, setSelectedDetail, setTotalPrice, open, }: {
    title?: string;
    detail?: any;
    selectedDetail: HalfBoardSelection[] | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<HalfBoardSelection[] | null | undefined>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    open: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export {};
