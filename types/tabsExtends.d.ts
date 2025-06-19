import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
/** 自訂 Tab 項目型別 */
export interface CustomTabOption {
    /** 顯示在 Tab 上的文字 */
    label: string;
    /** 唯一值，代表此 Tab 對應的 value */
    value: string;
    /** 可選，Tab 上的 icon（React 元素或字串） */
    icon?: React.ReactElement | string;
    /** 是否禁用此 Tab */
    disabled?: boolean;
    /** 唯一識別碼（建議增加，作為 React key 使用） */
    id?: string;
}
/** 自訂 Tabs 元件 Props */
export interface CustomTabsProps extends Omit<MuiTabsProps, 'value' | 'onChange'> {
    /** Tab 選項陣列 */
    options: CustomTabOption[];
    /** 當前選中的 tab value */
    value: string;
    /** 切換 tab 時的 callback，回傳選中的 value */
    onChange: (value: string) => void;
    /** 指示線顏色，可選 primary 或 secondary */
    indicatorColor?: 'primary' | 'secondary';
    /** Tabs 版型，可選 standard 或 fullWidth */
    variant?: 'standard' | 'fullWidth';
    /** 無障礙 aria-label 屬性 */
    ariaLabel?: string;
    /** icon 與 label 的相對位置，可選 start/end/top/bottom */
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
}
