import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { CustomColor } from "./colorExtends";
export type CustomTextFieldProps = Omit<MuiTextFieldProps, "color"> & {
  color?: CustomColor;
};
