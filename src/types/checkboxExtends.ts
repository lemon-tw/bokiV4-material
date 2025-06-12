import { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

// 自訂 color 型別
export type CustomColor = "primary" | "error";

// 擴充後的 Checkbox Props
export interface CustomCheckboxProps
    extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;             // 自訂顏色
    // label?: React.ReactNode;         // label 建議加在這裡
    label: string;
}

// 樹節點數據類型定義
export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[]; //子節點陣列（可選）
}

// 元件屬性類型定義
export interface CheckboxTreeProps {
    data: TreeNode[]; // data - 樹形結構數據
    checkedKeys?: string[]; // 當前選中節點ID陣列（受控模式）
    onChecked?: (keys: string[]) => void; // [onChecked] - 選中狀態變更回調函數
}