import { RatingProps as MuiRatingProps } from '@mui/material/Rating';
export interface RatingProps extends Omit<MuiRatingProps, 'icon' | 'emptyIcon' | 'onChange' | 'value'> {
    /** 目前評分值（支援小數） */
    value: number;
    /** 最大分數（預設 5 顆星） */
    max?: number;
    /** 精度（如 0.1、0.5、1） */
    precision?: number;
    /** 尺寸，可選 small、medium、large */
    size?: 'small' | 'medium' | 'large';
    /** 是否只讀 */
    readOnly?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 分數變動時的 callback */
    onChange?: (value: number) => void;
    /** 是否顯示分數數字（可選） */
    showValueLabel?: boolean;
    /** aria-label（可選，無障礙） */
    ariaLabel?: string;
}
