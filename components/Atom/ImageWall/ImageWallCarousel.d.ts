interface CarouselProps {
    itemData: {
        img: string;
        title?: string;
    }[];
    height?: number;
    isMobile?: boolean;
}
export declare function ImageCarousel({ itemData, height, isMobile, }: CarouselProps): import("react/jsx-runtime").JSX.Element;
export {};
