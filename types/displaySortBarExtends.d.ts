import { BoxProps } from '@mui/material';
export interface DisplaySortBarProps extends BoxProps {
    displayType?: "room" | "project";
    setDisplayType?: React.Dispatch<React.SetStateAction<"room" | "project">>;
    sortType?: "lowToHigh" | "highToLow" | "recommend";
    setSortType?: React.Dispatch<React.SetStateAction<"lowToHigh" | "highToLow" | "recommend">>;
    filterSection?: {
        id: string;
        label: string;
        options: string[];
    }[];
    filterItem?: string[];
    setFilterItem?: React.Dispatch<React.SetStateAction<string[]>>;
}
