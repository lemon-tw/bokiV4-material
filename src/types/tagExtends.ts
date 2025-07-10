import { ReactElement } from "react";
import { ChipProps } from "@mui/material/Chip";
import type { TagColor, TagVariant } from "../components/Atom/Tag/colorMap";

export interface TagProps extends Omit<ChipProps, "color" | "variant" | "size"> {
    color?: TagColor;
    variant?: TagVariant;
    onlyText?: boolean;
    icon?: ReactElement;
    size?: "small" | "medium" | "large";
}

export interface Tag {
    id: string | number;
    label: string;
    color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success';
    variant?: 'filled' | 'outlined';
    icon?: ReactElement;
    onlyText?: boolean;
    clickable?: boolean;
}

export interface TagListProps {
    tags: Tag[];
}
