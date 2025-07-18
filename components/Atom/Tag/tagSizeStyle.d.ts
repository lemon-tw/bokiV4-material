export declare const TAG_SIZE_STYLE: {
    readonly small: {
        readonly fontSize: "12px";
        readonly padding: "4px 8px";
        readonly lineHeight: "16px";
        readonly iconSize: 16;
    };
    readonly medium: {
        readonly fontSize: "14px";
        readonly lineHeight: "18px";
        readonly padding: "4px 8px";
        readonly iconSize: 20;
    };
    readonly large: {
        readonly fontSize: "16px";
        readonly lineHeight: "20px";
        readonly padding: "6px 12px";
        readonly iconSize: 20;
    };
};
export type TagSize = keyof typeof TAG_SIZE_STYLE;
