import { ImageListProps } from '@mui/material/ImageList';
export interface ExtendedImageListProps extends Omit<ImageListProps, "variant"> {
    showImg?: 1 | 4 | 5 | 7;
    height?: number;
    onclick?: () => void;
    itemData: Array<{
        img: string;
        title?: string;
    }>;
    variant?: "grid" | "single" | "carousel";
}
