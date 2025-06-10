import { styled } from "@mui/material/styles";
import MuiCheckbox from "@mui/material/Checkbox";
import type { Theme } from "@mui/material/styles";
import { palette as defaultPalette } from "../../../themes/defaultPalette";

export const getcbStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    bgColor: colorSet.fabBg ?? fallback.fabBg,
    fontColor: colorSet.fabFont ?? fallback.fabFont,
    overlay: colorSet.fabFont ?? fallback.fabFont,
  };
};

const StyleCheckbox = styled(MuiCheckbox)<{}>(({ theme }) => {
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none" as const,
    // borderRadius: "50%",
    color: "green",
  };
});

export const Checkbox = ({ ...props }: typeof MuiCheckbox) => {
  return <StyleCheckbox disableRipple {...props} />;
};
