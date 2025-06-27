import { styled, Theme, useTheme } from "@mui/material/styles";
import MuiDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomModalProps } from "../../../types/modalExtends";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const getModalStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    fontColor: colorSet.menuFont ?? fallback.menuFont,
  };
};

const SIZE = {
  desktop: {
    small: "440px",
    medium: "600px",
    large: "800px",
    extraLarge: "1200px",
  },
  tablet: {
    small: "320px",
    medium: "458px",
    large: "640px",
    extraLarge: "640px",
  },
  mobile: "320px",
} as const;

const StyleModal = styled(MuiDialog)<{
  size?: CustomModalProps["size"];
  deviceType?: CustomModalProps["deviceType"];
}>(({ size = "medium", deviceType = "desktop" }) => {
  const Size = SIZE[deviceType];
  const modalwidth = typeof Size === "string" ? Size : Size[size];
  return {
    // width: Size,
    "& .MuiDialog-paper": {
      borderRadius: 12,
      width: modalwidth,
      padding: "24px 36px",
    },
  };
});

export const Modal = ({
  icon,
  title,
  content,
  actions,
  size,
  align = "center",
  deviceType = "desktop",
  ...props
}: CustomModalProps) => {
  const theme = useTheme(); // 取得 MUI 主題
  const styleConfig = getModalStyles(theme); // 👈 在這裡計算
  return (
    <StyleModal size={size} deviceType={deviceType} {...props} maxWidth="lg">
      <IconButton
        aria-label="close"
        onClick={(e) => props.onClose?.(e, "escapeKeyDown")}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
        }}
      >
        <CloseIcon />
      </IconButton>
      {icon && (
        <DialogTitle
          color={styleConfig.fontColor}
          sx={{
            fontSize: "48px",
            height: "80px",
            p: 0,
            textAlign: align,
          }}
        >
          {icon}
        </DialogTitle>
      )}
      {title && (
        <DialogTitle
          sx={{ p: 0, textAlign: align, fontSize: "20px", fontWeight: 600 }}
          color={styleConfig.fontColor}
        >
          {title}
        </DialogTitle>
      )}
      {content && (
        <DialogContent sx={{ p: 0 }}>
          <DialogContentText
            color={styleConfig.fontColor}
            sx={{ textAlign: align, fontSize: "14px", fontWeight: 400 }}
          >
            {content}
          </DialogContentText>
        </DialogContent>
      )}
      {actions && (
        <DialogActions
          sx={{
            justifyContent: align === "center" ? "center" : "flex-end",
            p: 0,
          }}
        >
          {actions}
        </DialogActions>
      )}
    </StyleModal>
  );
};
