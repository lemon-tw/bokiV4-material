import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
export type CustomColor = "primary" | "error";
export interface CustomCheckboxProps extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;
    label: string;
}
export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
}
export interface CheckboxTreeProps {
    data: TreeNode[];
    checkedKeys?: string[];
    onChecked?: (keys: string[]) => void;
}
