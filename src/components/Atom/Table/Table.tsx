import React, { useState, useEffect, useCallback } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { TableProps, TableData, Column } from "../../../types/tableExtends";

export const Table: React.FC<TableProps> = ({
    data,
    columns,                    // 新增：欄位定義
    renderHeader,
    renderRow,
    renderBatchActions,
    onSelectionChange,          // 新增：選取狀態變更回調
    initialSelectedIds = [],    // 新增：初始選取項目
    loading = false            // 新增：載入狀態
}) => {
    // 選取的 id 陣列 - 支援初始值
    const [selectedIds, setSelectedIds] = useState<string[]>(initialSelectedIds);

    // 當 initialSelectedIds 改變時，更新內部狀態
    useEffect(() => {
        setSelectedIds(initialSelectedIds);
    }, [initialSelectedIds]);

    // 計算選取狀態
    const allChecked = selectedIds.length === data.length && data.length > 0;
    const someChecked = selectedIds.length > 0 && selectedIds.length < data.length;

    // 選取狀態變更處理函式
    const handleSelectionChange = useCallback((newSelectedIds: string[]) => {
        setSelectedIds(newSelectedIds);
        onSelectionChange?.(newSelectedIds);
    }, [onSelectionChange]);

    // 全選/取消全選
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSelectedIds = e.target.checked ? data.map(item => item.id) : [];
        handleSelectionChange(newSelectedIds);
    };

    // 單列切換 - 修改為支援直接傳入 id 和 checked 狀態
    const handleRowSelect = (id: string, checked?: boolean) => (e?: React.ChangeEvent<HTMLInputElement>) => {
        // 如果 checked 參數有值，使用該值；否則使用 event 的 checked 狀態
        const isChecked = checked !== undefined ? checked : e?.target.checked || false;

        const newSelectedIds = isChecked
            ? [...selectedIds, id]
            : selectedIds.filter(pid => pid !== id);

        handleSelectionChange(newSelectedIds);
    };

    // 點擊 TableRow 時觸發狀態切換
    const handleRowClick = (id: string) => (e: React.MouseEvent<HTMLTableRowElement>) => {
        // 防止點擊 checkbox 時重複觸發
        if ((e.target as HTMLElement).closest('.MuiCheckbox-root')) {
            return;
        }

        // 計算當前狀態並切換
        const isCurrentlyChecked = selectedIds.includes(id);
        handleRowSelect(id, !isCurrentlyChecked)();
    };

    // 預設表頭渲染 - 使用 columns 動態生成
    const defaultHeader = () => (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={allChecked}
                        indeterminate={someChecked}
                        onChange={handleSelectAll}
                    />
                </TableCell>
                {columns.map((column) => (
                    <TableCell
                        key={String(column.id)}
                        align={column.align || 'left'}
                        style={{
                            minWidth: column.minWidth,
                            width: column.width
                        }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );

    // 特殊欄位渲染處理
    const renderCellContent = (item: TableData, column: Column<TableData>) => {
        const value = item[column.id];

        // 特殊處理：name 欄位包含 avatar
        if (column.id === 'name') {
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={item.avatar} sx={{ width: 24, height: 24 }} />
                    {column.format ? column.format(value) : value}
                </Box>
            );
        }

        // 特殊處理：members 陣列
        if (column.id === 'members') {
            const members = value as string[];
            return column.format ? column.format(members) : members.join('、');
        }

        // 一般欄位處理
        return column.format ? column.format(value) : value;
    };

    // 預設列渲染 - 使用 columns 動態渲染
    const defaultRow = (item: TableData, index: number) => {
        const checked = selectedIds.includes(item.id);
        console.log(index, "只是為了消除紅線");

        return (
            <TableRow
                key={item.id}
                hover
                onClick={handleRowClick(item.id)}
                sx={{ cursor: 'pointer' }}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={checked}
                        onChange={handleRowSelect(item.id)}
                    />
                </TableCell>
                {columns.map((column) => (
                    <TableCell
                        key={String(column.id)}
                        align={column.align || 'left'}
                    >
                        {renderCellContent(item, column)}
                    </TableCell>
                ))}
            </TableRow>
        );
    };

    // 選中的項目資料
    const selectedItems = data.filter(item => selectedIds.includes(item.id));

    // 載入狀態顯示
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            {/* 批次動作區 */}
            {renderBatchActions && renderBatchActions({
                selectedItems,
                onAction: console.log
            })}

            <TableContainer component={Paper}>
                <MuiTable>
                    {/* 表頭 */}
                    {renderHeader ? renderHeader() : defaultHeader()}

                    {/* 資料列 */}
                    <TableBody>
                        {data.map((item, idx) =>
                            renderRow
                                ? renderRow({
                                    item,
                                    checked: selectedIds.includes(item.id),
                                    onChange: handleRowSelect(item.id),
                                    index: idx
                                })
                                : defaultRow(item, idx)
                        )}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </>
    );
};

export default Table;
