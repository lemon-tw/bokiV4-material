import MuiAvatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
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

  const [imgSrc, setImgSrc] = useState(src || null);

  // 🔄 同步外部傳入的 src
  useEffect(() => {
    setImgSrc(src || null);
  }, [src]);

  const shouldUseFallback = !imgSrc && !children;
  const finalSrc = imgSrc || (shouldUseFallback ? fallbackSrc : undefined);

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
          onError: () => {
            setImgSrc(fallbackSrc);
          },
        },
      }}
      {...rest}
    >
      {!imgSrc && children}
    </MuiAvatar>
  );
};
