import { BoxProps } from '@mui/material';
import { JSX } from '../../node_modules/react';
export interface RoomInfo {
    id: string;
    name: string;
    images: string[];
    bedType?: string;
    maxGuests?: number;
    size?: string;
    description?: string;
    amenities?: string[];
    view?: string[];
    remainingRooms?: number;
}
export interface ProjectInfo {
    id: string;
    name: string;
    memberOnly: boolean;
    memberDiscount?: number | string;
    earnedPoints?: number | string;
    images: string[];
    tag?: string[];
    freeCancelUntil?: string;
    includeBreakfast?: boolean;
    description?: string;
    includes?: {
        name: string;
        qty?: string;
    }[];
    addons?: string[];
}
export interface PriceInfo {
    amount: number;
    currency: string;
    per: string;
}
export interface RoomProjectLink {
    roomId: string;
    projectId: string;
    price: PriceInfo;
}
export interface RoomsProjectsCardInfo {
    rooms: RoomInfo[];
    projects: ProjectInfo[];
    links: RoomProjectLink[];
}
export type DetailTarget = {
    type: "room";
    id: string;
} | {
    type: "project";
    id: string;
} | null;
export interface mainCardProps extends BoxProps {
    id: string;
    displayType: "room" | "project";
    photo?: string;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    mainTitle?: string;
    projectFeature?: {
        projectTag?: string[];
        withBreakfast?: boolean;
        cancelDeadline?: string | null;
        paidService?: boolean;
    };
    remainingRooms?: number;
    bedType?: string;
    maxGuests?: number;
    roomSize?: string;
    view?: string[];
    roomTagLabels?: string[];
    cancelText?: React.ReactNode;
    priceTagLabel?: string;
    fullImg?: boolean;
    handleDetailCardOpen: (target: DetailTarget) => void;
    taglabel: (label: React.ReactNode | undefined, icon: React.ReactElement, disabled?: boolean) => JSX.Element;
}
export interface DetailCardProps {
    open: boolean;
    handleDetailCardClose: () => void;
    room: RoomInfo | null;
    project: ProjectInfo | null;
    buildCancelText: (cancelDeadline?: string | null) => JSX.Element;
    taglabel: (label: React.ReactNode | undefined, icon: React.ReactElement, disabled?: boolean) => JSX.Element;
    isLogin: boolean;
    loginLink: string;
}
export interface roomsProjectsCardProps extends BoxProps {
    info: RoomsProjectsCardInfo;
    favorites?: string[];
    onToggleFavorite?: (id: string) => void;
    displayMode?: "room" | "project";
    defaultExpanded?: boolean;
    searchRoomNumber?: number;
    isLogin: boolean;
    loginLink: string;
    fullImg: boolean;
}
