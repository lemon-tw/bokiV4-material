type TicketTypeOption = {
    id: string;
    label: string;
    price: number;
    desc?: string;
};
type HsrDetail = {
    ticketTypes?: TicketTypeOption[];
    cabins?: {
        label: string;
        value: string;
    }[];
    tripTypes?: {
        label: string;
        value: string;
    }[];
    stations?: string[];
    dates?: string[];
    times?: string[];
    trains?: TrainOption[];
};
type TrainOption = {
    id: string;
    depart: string;
    arrive: string;
    duration: string;
    isHot?: boolean;
};
export declare const HighSpeedRailSelector: ({ detail, selectedDetail, setSelectedDetail, setTotalPrice, onProceedToPayment, }: {
    title?: string;
    detail?: HsrDetail;
    selectedDetail: {
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
            disabled?: number;
        };
        timeSlot?: {
            date: string;
            meal?: string;
            time?: string;
        } | null;
        hsr?: {
            cabin?: string;
            tripType?: string;
            from?: string;
            to?: string;
        };
    }[] | null | undefined;
    setSelectedDetail: React.Dispatch<React.SetStateAction<{
        count: {
            senior?: number;
            adult?: number;
            child?: number;
            quantity?: number;
            disabled?: number;
        };
        timeSlot?: {
            date: string;
            meal?: string;
            time?: string;
        } | null;
        hsr?: {
            cabin?: string;
            tripType?: string;
            from?: string;
            to?: string;
        };
    }[] | null | undefined>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    onProceedToPayment?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default HighSpeedRailSelector;
