import MuiAvatar from "@mui/material/Avatar";
import { CustomAvatarProps, AvatarSize } from "../../../types/avartarExtends";
import defaults from "./default.png";
import male from "./male.png";
import female from "./female.png";

const sizeMap: Record<AvatarSize, number> = {
  extraLarge: 64,
  large: 40,
  medium: 32,
  small: 24,
};

export const Avatar = ({
  types = "unknown",
  src,
  children,
  size = "large",
  sx,
  ...rest
}: CustomAvatarProps) => {
  const fallbackSrc =
    types === "male" ? male : types === "female" ? female : defaults;

  const shouldUseFallback = !src && !children; // 沒圖片也沒 children → 顯示 fallback 頭像圖

  const finalSrc = src || (shouldUseFallback ? fallbackSrc : undefined);

  return (
    <MuiAvatar
      src={finalSrc}
      sx={{
        width: sizeMap[size],
        height: sizeMap[size],
        fontSize: sizeMap[size] * 0.4,
        ...sx,
      }}
      slotProps={{
        img: {
          onError: (e) => {
            e.currentTarget.src = fallbackSrc;
          },
        },
      }}
      {...rest}
    >
      {!src && children}
    </MuiAvatar>
  );
};
