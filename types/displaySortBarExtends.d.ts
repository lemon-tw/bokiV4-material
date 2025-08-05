import { BoxProps } from '@mui/material';
export interface FilterOption {
    groupId: string;
    value: string;
    label: string;
}
export type Item = {
    id: string;
    category?: string[];
    [key: string]: string[] | string | undefined;
};
export interface DisplaySortBarProps extends BoxProps {
    defaultDisplayType?: "room" | "project";
    defaultSortType?: "lowToHigh" | "highToLow" | "recommend";
    defaultFilterItems?: FilterOption[];
    onFilterResult?: (result: {
        displayType: "room" | "project";
        sortType: "lowToHigh" | "highToLow" | "recommend";
        filterItems: FilterOption[];
    }) => void;
    filterSection?: {
        id: string;
        label: string;
        options: {
            groupId: string;
            label: string;
            value: string;
        }[];
    }[];
    baseItems: Item[];
}
export interface FilterModalProps {
    filterOpen: boolean;
    filterhandleClose: () => void;
    filterSection?: {
        id: string;
        label: string;
        options: {
            groupId: string;
            label: string;
            value: string;
        }[];
    }[];
    setFilterItems?: React.Dispatch<React.SetStateAction<FilterOption[]>>;
    pendingFilters: FilterOption[];
    setPendingFilters: React.Dispatch<React.SetStateAction<FilterOption[]>>;
    baseItems: Item[];
}
