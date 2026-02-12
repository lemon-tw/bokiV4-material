import { ThsrSelection } from 'src/types/addonUpsellExtends';
export declare const ThsrTicket: ({ setOpen, onConfirm, initialSelection, }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm?: (selection: ThsrSelection) => void;
    initialSelection?: ThsrSelection | null;
}) => import("react/jsx-runtime").JSX.Element;
