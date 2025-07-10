export const COLOR_MAP = {
    primary: "primary",
    neutral: "secondary",
    warning: "warning",
    danger: "error",
    success: "success",
} as const;

export type TagColor = keyof typeof COLOR_MAP;

export const VARIANT_MAP = {
    solid: "filled",
    outlined: "outlined",
} as const;

export type TagVariant = keyof typeof VARIANT_MAP;
