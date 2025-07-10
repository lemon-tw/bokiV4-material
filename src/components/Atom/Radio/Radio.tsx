import React from "react";
import MuiRadio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { CustomRadioProps } from "../../../types/radioExtends";
import type { PaletteColor } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import {
  disableColor,
  palette as defaultPalette,
} from "../../../themes/defaultPalette";
import type { Theme } from "@mui/material/styles";

// 擴充 palette 顏色型別，支援自訂顏色屬性
type CustomPaletteColor = PaletteColor & {
  custMain?: string;
  myDefault?: string;
};

// 依據 color 取得 palette 色票，並設定不同狀態的樣式
const getRadioStyles = (
  theme: Theme,
  color: CustomRadioProps["color"] = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as CustomPaletteColor) ?? fallback;

  return {
    // 預設狀態
    "&": {
      color: colorSet?.myDefault ?? fallback.myDefault,
    },
    // 勾選狀態
    "&.Mui-checked": {
      color: colorSet.custMain ?? fallback.custMain,
    },
    // 滑鼠 hover 狀態
    "&:hover": {
      backgroundColor: alpha(colorSet.custMain ?? fallback.custMain, 0.08),
    },
    // 禁用狀態
    "&.Mui-disabled": {
      color: alpha(disableColor[0], 0.38),
    },
    // 鍵盤 focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${colorSet.custMain ?? fallback.custMain}`,
      outlineOffset: 2,
    },
  };
};

// 依據 color 取得 palette 色票，並設定不同狀態的樣式
const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "data-color",
})<{ color?: CustomRadioProps["color"] }>(({ theme, color = "primary" }) =>
  getRadioStyles(theme, color)
);

// Radio 元件，支援 label 與自訂顏色
export const Radio: React.FC<CustomRadioProps> = ({
  color = "primary",
  label,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={<StyledRadio data-color={color} {...rest} />}
      // 若有 label 則用 FormControlLabel 包裹，否則只渲染 radio
      label={label || undefined}
    />
  );
};

export default Radio;
