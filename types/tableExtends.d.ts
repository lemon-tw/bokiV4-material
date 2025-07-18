import { default as Paper } from '@mui/material/Paper';
export interface Column<T> {
    id: keyof T;
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: T[keyof T]) => string | number | React.ReactNode;
    sortable?: boolean;
    width?: number | string;
}
export interface TableData {
    id: string;
    name: string;
    email: string;
    status: string;
    team: string;
    avatar: string;
    members: string[];
}
export interface TableProps extends React.ComponentProps<typeof Paper> {
    data: TableData[];
    columns: Column<TableData>[];
    renderHeader?: () => React.ReactNode;
    renderRow?: (props: {
        item: TableData;
        checked: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        index: number;
    }) => React.ReactNode;
    renderBatchActions?: (props: {
        selectedItems: TableData[];
        onAction: (action: string) => void;
    }) => React.ReactNode;
    onSelectionChange?: (selectedIds: string[]) => void;
    initialSelectedIds?: string[];
    loading?: boolean;
}
