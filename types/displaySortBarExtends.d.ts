import { BoxProps } from '@mui/material';
export interface FilterOption {
    groupId: string;
    value: string;
    label: string;
}
export type Item = {
    id: string;
    category: string[];
    [key: string]: string[] | string | undefined;
};
export type DisplayOption = {
    label: string;
    value: string;
};
export interface DisplaySortBarProps extends BoxProps {
    defaultDisplayType?: string;
    displayTypeValue?: string;
    displayTypeOptions?: DisplayOption[];
    onDisplayTypeChange?: (value: string) => void;
    variant?: "full" | "displayOnly";
    showSort?: boolean;
    showFilter?: boolean;
    defaultSortType?: "lowToHigh" | "highToLow" | "recommend";
    defaultFilterItems?: FilterOption[];
    showDisplayToggle?: boolean;
    showFilterChips?: boolean;
    filterItemsValue?: FilterOption[];
    onFilterItemsChange?: (items: FilterOption[]) => void;
    onFilterResult?: (result: {
        displayType: string;
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
    baseItems?: Item[];
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
