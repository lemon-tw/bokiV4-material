import { ChipProps } from '@mui/material/Chip';
export interface CustomChipProps extends ChipProps {
    selected?: boolean;
}
export interface DraggableChipListProps<T = any> {
    chips: T[];
    onChange: (newList: T[]) => void;
    getLabel: (item: T) => string;
    getKey: (item: T) => string;
    renderChip?: (item: T) => React.ReactNode;
    draggingStyle?: object;
}
