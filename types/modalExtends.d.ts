import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
export interface CustomModalProps extends Omit<MuiDialogProps, "title" | "icon" | "content"> {
    /** 依設備控制Modal的尺寸 */
    deviceType?: "desktop" | "tablet" | "mobile";
    size?: "small" | "medium" | "large" | "extraLarge";
    /** Modal的Title */
    title?: string;
    /** Modal的Icon */
    icon?: React.ReactNode;
    /** Modal的內容，可以是字串或ReactNode */
    content?: string | React.ReactNode;
    /** Modal的底部按鈕 */
    actions?: React.ReactNode;
    /** Modal內容對其位置 */
    align?: "start" | "center";
}
