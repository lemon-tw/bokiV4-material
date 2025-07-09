import Paper from "@mui/material/Paper";

export interface Column<T> {
    id: keyof T;
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: T[keyof T]) => string | number | React.ReactNode;
    sortable?: boolean;        // 新增：是否可排序
    width?: number | string;   // 新增：固定寬度
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
    columns: Column<TableData>[];  // 新增：欄位定義
    // 自定義表頭
    renderHeader?: () => React.ReactNode;
    // 自定義列渲染
    renderRow?: (props: {
        item: TableData;
        checked: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        index: number;
    }) => React.ReactNode;
    // 自定義批次動作區
    renderBatchActions?: (props: {
        selectedItems: TableData[];
        onAction: (action: string) => void;
    }) => React.ReactNode;
    // 新增：選取狀態變更回調
    onSelectionChange?: (selectedIds: string[]) => void;
    // 新增：初始選取項目
    initialSelectedIds?: string[];
    // 新增：載入狀態
    loading?: boolean;
}
