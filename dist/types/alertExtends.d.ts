import { AlertProps } from '@mui/material/Alert';
import { CustomColor } from './colorExtends';
export type custSeverity = "error" | "success" | "info" | "warning" | "gray" | "dark";
export interface CustomAlertProps extends Omit<AlertProps, "severity" | "color"> {
    severity?: custSeverity;
    color?: CustomColor;
    alertTitle?: string;
}
