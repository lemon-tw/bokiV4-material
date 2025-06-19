import { AlertProps } from '@mui/material/Alert';
export type custSeverity = "error" | "success" | "info" | "warning" | "gray" | "dark";
export type CustomColor = "surface" | "primary" | "secondary" | "tertiary";
export interface CustomAlertProps extends Omit<AlertProps, "severity" | "color"> {
    severity?: custSeverity;
    color?: CustomColor;
    alertTitle?: string;
}
