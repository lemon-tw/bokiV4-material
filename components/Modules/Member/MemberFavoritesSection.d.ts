import { RoomsProjectsCardInfo } from '../../../types/roomsProjectsCardExtends';
type MemberFavoritesSectionProps = {
    info: RoomsProjectsCardInfo;
    favorites?: string[];
    onFavoritesChange?: (next: string[]) => void;
    onRequestRemoveFavorite?: (id: string) => void;
};
export declare const MemberFavoritesSection: ({ info, favorites, onFavoritesChange, onRequestRemoveFavorite }: MemberFavoritesSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
