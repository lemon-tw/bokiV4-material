import { BoxProps } from '@mui/material';
export interface RoomInfo {
    id: string;
    name: string;
    images: string[];
    bedType?: string;
    maxGuests?: number;
    size?: string;
    description?: string;
    amenities?: string[];
    view?: string;
    remainingRooms?: number;
}
export interface ProjectInfo {
    id: string;
    name: string;
    memberOnly: boolean;
    images: string[];
    tag?: string | string[];
    freeCancelUntil?: string;
    includeBreakfast?: boolean;
    description?: string;
    includes?: string[];
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
export interface mainCardProps extends BoxProps {
    displayType?: "room" | "project";
    photo?: string;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    mainTitle?: string;
    projectFeature?: {
        projectTag?: string[];
        withBreakfast?: boolean;
        cancelDeadline?: React.ReactNode;
        paidService?: boolean;
    };
    remainingRooms?: number;
    bedType?: string;
    maxGuests?: number;
    roomSize?: string;
    view?: string;
    roomTagLabels?: string[];
    cancelText?: React.ReactNode;
    priceTagLabel?: string;
    fullImg?: boolean;
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
