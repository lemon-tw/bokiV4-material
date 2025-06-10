import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
export type CustomButtonVariant =
  | "filled"
  | "outlined"
  | "text"
  | "elevated"
  | "tonal";
export type CustomColor = "surface" | "primary" | "secondary" | "tertiary";
export type CustomIconButtonVariant =
  | "filled"
  | "standard"
  | "tonal"
  | "outlined";

export interface CustomButtonProps
  extends Omit<MuiButtonProps, "variant" | "color"> {
  variant?: CustomButtonVariant;
  color?: CustomColor;
}

import { FabProps as MuiFabProps } from "@mui/material/Fab";
export interface CustomFabProps extends Omit<MuiFabProps, "color"> {
  color?: CustomColor;
}

import { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";
export interface CustomIconButtonProps
  extends Omit<MuiIconButtonProps, "variant" | "color"> {
  variant?: CustomIconButtonVariant;
  selected?: boolean;
  toggleIcon?: React.ReactElement;
  color?: CustomColor;
}
