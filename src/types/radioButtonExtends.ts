import { RadioProps as MuiRadioProps } from '@mui/material/Radio';

// 自訂 color 型別
export type CustomRadioColor = "primary" | "secondary";

export interface CustomRadioProps
    extends Omit<MuiRadioProps, 'color'> {
    color?: CustomRadioColor;
    label?: string;
}
