import { ImageListProps } from '@mui/material/ImageList';
export interface CustomImageListProps extends Omit<ImageListProps, "variant"> {
    showImg?: 1 | 4 | 5 | 7;
    height?: number;
    totalButtonClick?: () => void;
    itemData: Array<{
        img: string;
        title?: string;
    }>;
    variant?: "grid" | "single" | "carousel";
}
