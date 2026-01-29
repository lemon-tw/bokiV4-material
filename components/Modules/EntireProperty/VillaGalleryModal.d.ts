import { default as React } from '../../../../node_modules/react';
type VillaRoomPhoto = {
    src: string;
    alt: string;
};
type VillaRoomType = {
    id: string;
    name: string;
    photos: VillaRoomPhoto[];
};
type VillaGalleryModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    roomTypes: VillaRoomType[];
    activeRoomId: string | null;
    onBack: () => void;
    onTagClick: (roomId: string) => void;
    onOpenPhoto: (roomId: string, index: number) => void;
    onSectionRef?: (roomId: string, node: HTMLDivElement | null) => void;
};
export declare const VillaGalleryModal: React.FC<VillaGalleryModalProps>;
export {};
