import React, { useState, useMemo } from "react";
import type { RatingProps } from "../../../types/ratingExtends";
import { Star } from "phosphor-react";

const sizeMap = { small: 20, medium: 32, large: 40 };

export const Rating: React.FC<RatingProps & { icon?: React.ElementType }> = ({
  value,
  max = 5,
  precision = 0.1,
  size = "medium",
  readOnly = false,
  disabled = false,
  showValueLabel = true,
  onChange,
  icon: Icon = Star, // 預設為 Star
  iconColor = "#9d9d9d",          // 預設未填滿顏色
  iconFilledColor = "#fad703", // 預設填滿顏色
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const iconSize = sizeMap[size] || 32;
  const stars = useMemo(() => Array.from({ length: max }), [max]);

  // 計算每顆星的填滿比例
  const getFill = (i: number) => {
    const displayValue = hoverValue !== null ? hoverValue : value;
    const diff = displayValue - i;
    if (diff >= 1) return 1;
    if (diff > 0) return Math.round(diff / precision) * precision;
    return 0;
  };

  const handleMouseMove = (i: number, e: React.MouseEvent) => {
    if (readOnly || disabled) return;
    const { left, width } = (e.target as HTMLElement).getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    let newValue = i + percent;
    // 四捨五入到 precision
    newValue = Math.round(newValue / precision) * precision;
    setHoverValue(Math.max(precision, Math.min(max, newValue)));
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleClick = (i: number, e: React.MouseEvent) => {
    if (readOnly || disabled || !onChange) return;
    const { left, width } = (e.target as HTMLElement).getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    let newValue = i + percent;
    newValue = Math.round(newValue / precision) * precision;
    onChange(Math.max(precision, Math.min(max, newValue)));
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: readOnly || disabled ? "default" : "pointer",
      }}
      onMouseLeave={handleMouseLeave}
    >
      {stars.map((_, i) => {
        const fill = getFill(i);
        return (
          <span
            key={i}
            style={{
              position: "relative",
              width: iconSize,
              height: iconSize,
              display: "inline-block",
            }}
            onMouseMove={(e) => handleMouseMove(i, e)}
            onClick={(e) => handleClick(i, e)}
          >
            {/* 使用傳入的 Icon 元件，未填滿部分 */}
            <Icon
              size={iconSize}
              style={{ position: "absolute", left: 0, top: 0, color: iconColor }}
            />
            {/* 填滿部分 */}
            <span
              style={{
                width: `${fill * 100}%`,
                overflow: "hidden",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                pointerEvents: "none",
                display: "inline-block",
              }}
            >
              <Icon
                weight="fill"
                size={iconSize}
                style={{ color: iconFilledColor }}
              />
            </span>
          </span>
        );
      })}
      {/* 控制顯示數字的部分, 這邊設定顯示到小數點第一位 */}
      {showValueLabel && (
        <span style={{ marginLeft: 8, fontSize: iconSize * 0.7 }}>
          {((hoverValue ?? value) as number).toFixed(1)}
        </span>
      )}
    </span>
  );
};
