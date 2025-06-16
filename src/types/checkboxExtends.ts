import { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

// 自訂 color 型別
export type CustomColor = "primary" | "error";

// 擴充後的 Checkbox Props
export interface CustomCheckboxProps
    extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;             // 自訂顏色
    // label?: React.ReactNode;         // label 建議加在這裡
    label?: string;
}

export interface IndeterminateNode {
    id: string;
    label?: string;
    parentId?: string;
    // 其他你需要追蹤的屬性
}
// 樹節點 indeterminate 狀態 id 陣列
export interface IndeterminateState {
    indeterminateNodes: IndeterminateNode[];
}

// 樹節點數據類型定義
export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[]; //子節點陣列（可選）
}

// 元件屬性類型定義
// export interface CheckboxTreeProps {
//     data: TreeNode[]; // data - 樹形結構數據
//     checkedKeys?: string[]; // 當前選中節點ID陣列（受控模式）
//     onChecked?: (keys: string[]) => void; // [onChecked] - 選中狀態變更回調函數
// }

export interface CheckboxTreeProps {
    data: TreeNode[];
    checkedKeys?: string[];
    indeterminateKeys?: string[]; // 新增 indeterminate 狀態 id 陣列
    onChecked?: (keys: string[]) => void;
    onIndeterminateChange?: (keys: string[]) => void; // 若需回傳 indeterminate 狀態變更
}

export interface CheckboxGroupProps {
    labels: string[]; // 子項目標籤
    parentLabel?: string; // 父層標籤
}
