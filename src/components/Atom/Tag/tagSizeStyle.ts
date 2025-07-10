// components/Atom/Tag/tagSizeStyle.ts
export const TAG_SIZE_STYLE = {
    small: {
        fontSize: "12px",
        padding: "4px 8px",
        lineHeight: "16px",
        iconSize: 16,
    },
    medium: {
        fontSize: "14px",
        lineHeight: "18px",
        padding: "4px 8px",
        iconSize: 20,
    },
    large: {
        fontSize: "16px",
        lineHeight: "20px",
        padding: "6px 12px",
        iconSize: 20,
    },
} as const;

export type TagSize = keyof typeof TAG_SIZE_STYLE;
