import { ThsrSelection } from 'src/types/addonUpsellExtends';
export declare const ThsrTicket: ({ setOpen, onConfirm, initialSelection, onPriceChange, }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm?: (selection: ThsrSelection) => void;
    initialSelection?: ThsrSelection | null;
    onPriceChange?: (price: number) => void;
}) => import("react/jsx-runtime").JSX.Element;
