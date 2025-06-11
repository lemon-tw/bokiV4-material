import { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

// 自訂 color 型別
export type CustomColor = "primary" | "error";

// 擴充後的 Checkbox Props
export interface CustomCheckboxProps
    extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;             // 自訂顏色
    label?: React.ReactNode;         // label 建議加在這裡
}