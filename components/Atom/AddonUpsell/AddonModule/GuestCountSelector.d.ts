type GuestSelectionDetail = {
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
export declare const GuestCountSelector: ({ title, detail, selectedDetail, setSelectedDetail, setTotalPrice, setOpenIndex, dayIndex, mealIndex, inMultiDay, currentDate, onTotalChange, currentMeal, open, showSectionTitle, }: {
    title?: string;
    detail?: any;
    selectedDetail: GuestSelectionDetail[] | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<GuestSelectionDetail[] | null | undefined>>;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
    setOpenIndex?: React.Dispatch<React.SetStateAction<number>>;
    dayIndex?: number;
    mealIndex?: number;
    inMultiDay?: boolean;
    currentDate?: string;
    onTotalChange?: (dayKey: string, total: number) => void;
    currentMeal?: string;
    open?: boolean;
    showSectionTitle?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export {};
