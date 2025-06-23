import { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

/** 自訂 color 型別，目前僅支援 primary */
export type CustomRadioColor = "primary";

/** 自訂 Radio 單選按鈕 Props */
export interface CustomRadioProps extends Omit<MuiRadioProps, 'color'> {
    /** 顏色（目前僅支援 primary） */
    color?: CustomRadioColor;
    /** 顯示在單選按鈕旁的標籤文字 */
    label?: string;
}

/** 自訂 RadioGroup 群組 Props */
export interface CustomRadioGroupProps extends Omit<MuiRadioGroupProps, 'color'> {
    /**
     * 單選選項陣列，每個選項需有 label（顯示文字）與 value（值）
     * @example [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
     */
    options: { label: string; value: string }[];
    /** 群組內所有單選按鈕的顏色（目前僅支援 primary） */
    color?: 'primary';
    /** 群組標籤（顯示於群組上方，可選） */
    label?: string;
}
