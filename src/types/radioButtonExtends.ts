import { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

// 自訂 color 型別
export type CustomRadioColor = "primary";

export interface CustomRadioProps extends Omit<MuiRadioProps, 'color'> {
    color?: CustomRadioColor;
    label?: string;
}

// 自訂 RadioGroup Props
// 繼承 MUI RadioGroupProps
// 並加入 options（選項陣列）、color（顏色）、label（群組標籤）
export interface CustomRadioGroupProps extends Omit<MuiRadioGroupProps, 'color'> {
    options: { label: string; value: string }[];  // 選項陣列
    color?: 'primary';    // 與 RadioButton 保持一致的顏色選項
    label?: string;                                // 群組標籤（可選）
}

