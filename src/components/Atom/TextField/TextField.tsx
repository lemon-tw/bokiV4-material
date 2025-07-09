import { useState } from "react";
import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import type { CustomTextFieldProps } from "../../../types/textFieldExtends";
import { styled, Theme } from "@mui/material/styles";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import InputAdornment from "@mui/material/InputAdornment";
import { WarningCircle, XCircle } from "phosphor-react";

export const getTextFieldStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    outLineColor: colorSet.custMain ?? fallback.custMain,
    hoverColor: colorSet.menuFont ?? fallback.menuFont,
  };
};

const StyleTextField = styled(MuiTextField)<{
  "data-color": CustomTextFieldProps["color"];
}>(({ "data-color": color = "primary", theme, error }) => {
  const styleConfig = getTextFieldStyles(theme, color);

  return {
    "& label.Mui-focused": {
      color: styleConfig.outLineColor,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "& fieldset": {},
      "&.Mui-focused fieldset": {
        borderColor: error
          ? defaultPalette.error.custMain
          : styleConfig.outLineColor,
      },
    },
    "& label.Mui-focused.Mui-error": {
      color: defaultPalette.error.custMain,
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      "& fieldset": {
        borderColor: defaultPalette.error.custMain,
      },
      "&:hover fieldset": {
        borderColor: "#d32f2f",
      },
      "&.Mui-focused fieldset": {
        borderColor: defaultPalette.error.custMain,
      },
    },
  };
});

export const TextField = ({
  color = "primary",
  error,
  slotProps,
  ...rest
}: CustomTextFieldProps) => (
  <StyleTextField
    data-color={color}
    error={error}
    slotProps={{
      input: {
        ...slotProps?.input,
        disableUnderline: true,
        endAdornment: error ? (
          <InputAdornment position="end">
            <WarningCircle weight="fill" color="#FF4D4F" size={"1.25rem"} />
          </InputAdornment>
        ) : null,
      },
    }}
    {...rest}
  ></StyleTextField>
);

export const ClearTextField = ({
  color = "primary",
  error,
  slotProps,
  ...rest
}: CustomTextFieldProps) => {
  const [internalValue, setInternalValue] = useState("");

  const isControlled = rest.value !== undefined;
  const currentValue = isControlled ? rest.value : internalValue;

  return (
    <StyleTextField
      value={currentValue}
      data-color={color}
      error={error}
      onChange={(e) => {
        if (!isControlled) setInternalValue(e.target.value);
        rest.onChange?.(e);
      }}
      slotProps={{
        input: {
          ...slotProps?.input,
          endAdornment: currentValue ? (
            <InputAdornment position="end">
              <XCircle
                size={"1.25rem"}
                onClick={() => {
                  if (!isControlled) {
                    setInternalValue("");
                  }
                  rest.onChange?.({ target: { value: "" } } as any);
                }}
              />
            </InputAdornment>
          ) : error ? (
            <InputAdornment position="end">
              <WarningCircle weight="fill" color="#FF4D4F" size={"1.25rem"} />
            </InputAdornment>
          ) : null,
        },
      }}
      {...rest}
    />
  );
};
