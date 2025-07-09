import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { CustomColor } from './colorExtends';
/** 自訂 Checkbox 元件 Props */
export interface CustomCheckboxProps extends Omit<MuiCheckboxProps, "color"> {
    /** 顏色（primary 或 error） */
    color?: CustomColor;
    /** 顯示在 Checkbox 旁的標籤文字 */
    label?: string;
}
/** 樹狀結構中 indeterminate 狀態的節點資料型別 */
export interface IndeterminateNode {
    /** 節點唯一識別碼 */
    id: string;
    /** 節點顯示文字（可選） */
    label?: string;
    /** 父節點 id（可選） */
    parentId?: string;
}
/** 樹狀結構 indeterminate 狀態的節點陣列 */
export interface IndeterminateState {
    /** 處於 indeterminate 狀態的節點資料陣列 */
    indeterminateNodes: IndeterminateNode[];
}
/** 樹狀結構的單一節點型別 */
export interface TreeNode {
    /** 節點唯一識別碼 */
    id: string;
    /** 節點顯示文字 */
    label: string;
    /** 子節點（可選） */
    children?: TreeNode[];
}
/** Checkbox 樹元件的 Props */
export interface CheckboxTreeProps {
    /** 樹形結構資料 */
    data: TreeNode[];
    /** 當前選中節點 id 陣列（受控模式，可選） */
    checkedKeys?: string[];
    /** 當前 indeterminate 狀態的節點 id 陣列（可選） */
    indeterminateKeys?: string[];
    /** 勾選狀態變更時的回呼函式 */
    onChecked?: (keys: string[]) => void;
    /** indeterminate 狀態變更時的回呼函式（可選） */
    onIndeterminateChange?: (keys: string[]) => void;
}
/** Checkbox 群組元件的 Props */
export interface CheckboxGroupProps {
    /** 子項目標籤陣列 */
    labels: string[];
    /** 父層標籤（可選） */
    parentLabel?: string;
}
