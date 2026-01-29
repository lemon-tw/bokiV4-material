import { default as React } from '../../../../node_modules/react';
type VillaRoomDetail = {
    beds: string;
    capacity: string;
    size: string;
    description: string;
    amenities: string[];
};
type VillaPhotoModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    galleryTitle: string;
    photo?: {
        src: string;
        alt: string;
    };
    detail: VillaRoomDetail;
    onPrev: () => void;
    onNext: () => void;
    onBackToGallery: () => void;
};
export declare const VillaPhotoModal: React.FC<VillaPhotoModalProps>;
export {};
