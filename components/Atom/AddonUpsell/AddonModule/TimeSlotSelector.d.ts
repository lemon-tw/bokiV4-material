export declare const GuestCountSelector: ({ title, detail, setDisabledAddToCart, selectedDetail, setSelectedDetail, setTotalPrice, editMode, }: {
    title?: string;
    detail?: any;
    setDisabledAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDetail: {
        count: string;
    } | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<{
        count: string;
    } | null | undefined>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    editMode: boolean;
}) => import("react/jsx-runtime").JSX.Element;
