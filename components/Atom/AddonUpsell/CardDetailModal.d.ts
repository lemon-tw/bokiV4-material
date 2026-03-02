import { CardProps } from 'src/types/addonUpsellExtends';
type CardDetailModalProps = {
    open: boolean;
    onClose: () => void;
    item: CardProps["item"];
};
export declare const CardDetailModal: ({ open, onClose, item, }: CardDetailModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default CardDetailModal;
