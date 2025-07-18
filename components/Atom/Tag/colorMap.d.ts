export declare const COLOR_MAP: {
    readonly primary: "primary";
    readonly neutral: "secondary";
    readonly warning: "warning";
    readonly danger: "error";
    readonly success: "success";
};
export type TagColor = keyof typeof COLOR_MAP;
export declare const VARIANT_MAP: {
    readonly solid: "filled";
    readonly outlined: "outlined";
};
export type TagVariant = keyof typeof VARIANT_MAP;
