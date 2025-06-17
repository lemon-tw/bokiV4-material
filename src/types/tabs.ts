import type { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
// 單一元件使用, 但通常都是配合 Tabs 一起使用
// import type { TabProps as MuiTabProps } from '@mui/material/Tab';  

// 自訂 Tab 項目型別
export interface CustomTabOption {
    label: string;
    value: string;
    icon?: React.ReactElement | string; // 這裡建議明確指定型別
    disabled?: boolean;
    id?: string; // 建議增加
}

// 自訂 Tabs Props
export interface CustomTabsProps extends Omit<MuiTabsProps, 'value' | 'onChange'> {
    options: CustomTabOption[];     // 選項陣列
    value: string;                  // 當前選中的 tab value
    onChange: (value: string) => void; // 切換 tab 時的 callback
    indicatorColor?: 'primary' | 'secondary'; // 指示線顏色
    variant?: 'standard' | 'fullWidth';
    ariaLabel?: string;
    iconPosition?: 'start' | 'end' | 'top' | 'bottom'; // 新增
}
