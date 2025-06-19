import React from "react";
import type { FractionalStarProps } from "../../../types/ratingExtends";

export const FractionalStar: React.FC<FractionalStarProps> = ({
    fillPercent,
    size = 32,
    color = "#FFD700",
    emptyColor = "#FFFFFF",
    id,
}) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
        <defs>
            <linearGradient id={id}>
                <stop offset={`${fillPercent}%`} stopColor={color} />
                <stop offset={`${fillPercent}%`} stopColor={emptyColor} />
            </linearGradient>
        </defs>
        <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={`url(#${id})`}
            stroke={color}
        />
    </svg>
);
