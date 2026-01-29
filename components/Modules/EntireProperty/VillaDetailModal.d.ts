import { default as React } from '../../../../node_modules/react';
import { PlanIncludes, RoomPlanSummary } from './EntirePropertyConfig';
type VillaDetailModalProps = {
    open: boolean;
    onClose: () => void;
    villaData: {
        title: string;
        images: {
            src: string;
            alt: string;
        }[];
        tags: string[];
        features: string[];
        subtitle: string[];
        description: string;
        descriptionFooter: string;
        roomPlanSummarys?: RoomPlanSummary[];
        planIncludes: PlanIncludes[];
        paidServices: string[];
        notes: string[];
    };
    heroIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onOpenGallery: () => void;
};
export declare const VillaDetailModal: React.FC<VillaDetailModalProps>;
export {};
