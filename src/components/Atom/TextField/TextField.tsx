import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import type { CustomTextFieldProps } from "../../../types/textFieldExtends";
import { styled, Theme } from "@mui/material/styles";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import InputAdornment from "@mui/material/InputAdornment";
import { WarningCircle } from "phosphor-react";

export const getTextFieldStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    outLineColor: colorSet.custMain ?? fallback.custMain,
  };
};

const StyleTextField = styled(MuiTextField)<{
  "data-color": CustomTextFieldProps["color"];
}>(({ "data-color": color = "primary", theme }) => {
  const styleConfig = getTextFieldStyles(theme, color);

  return {
    color: "rebeccapurple",
  };
});

export const TextField = ({
  color = "primary",
  error,
  ...rest
}: CustomTextFieldProps) => (
  <StyleTextField
    data-color={color}
    error={error}
    slotProps={{
      input: {
        endAdornment: error ? (
          <InputAdornment position="end">
            <WarningCircle weight="fill" color="#FF4D4F" />
          </InputAdornment>
        ) : null,
      },
    }}
    {...rest}
  ></StyleTextField>
);
