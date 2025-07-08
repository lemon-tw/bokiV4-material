import { styled, Theme, useTheme } from "@mui/material/styles";
import MuiSwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import { palette as defaultPalette } from "../../../themes/defaultPalette";
import { CustomBottomModalProps } from "../../../types/modalExtends";
import IconButton from "@mui/material/IconButton";
import { X } from "phosphor-react";

type BottomModalProps = SwipeableDrawerProps & CustomBottomModalProps;

export const getBottomModalStyles = (
  theme: Theme,
  color: keyof typeof defaultPalette = "primary"
) => {
  const fallback = defaultPalette[color];
  const colorSet = (theme?.palette?.[color] as any) ?? fallback;

  return {
    fontColor: colorSet.menuFont ?? fallback.menuFont,
    bgColor: colorSet.elevated ?? fallback.elevated,
    boxColor: colorSet.onMain ?? fallback.onMain,
  };
};

const StyleBottomModal = styled(
  ({ title, content, align, ...muiDrawerProps }: BottomModalProps) => (
    <MuiSwipeableDrawer {...muiDrawerProps} />
  ),
  {
    shouldForwardProp: (prop) =>
      prop !== "title" && prop !== "content" && prop !== "align",
  }
)<{ anchor?: CustomBottomModalProps["anchor"] }>(({ anchor, theme }) => {
  const styleConfig = getBottomModalStyles(theme);
  return {
    "& .MuiDrawer-paper": {
      backgroundColor: styleConfig.bgColor,
      borderRadius:
        anchor === "top"
          ? "0 0 16px 16px"
          : anchor === "bottom"
            ? "16px 16px 0 0"
            : "0",
    },
  };
});

export const BottomModal = ({
  title,
  align,
  content,
  actions,
  anchor = "bottom",
  ...props
}: CustomBottomModalProps) => {
  const theme = useTheme(); // 取得 MUI 主題
  const styleConfig = getBottomModalStyles(theme); // 👈 在這裡計算
  return (
    <StyleBottomModal anchor={anchor} {...props}>
      {/* 關閉按鈕 */}
      <IconButton
        aria-label="close"
        onClick={(e) => props.onClose?.(e)}
        sx={{
          fontSize: "30px",
          position: "absolute",
          right: 16,
          top: 16,
        }}
      >
        <X />
      </IconButton>

      {/* 全部內容區：滾動用 */}

      {/* 標題區 */}
      {title && (
        <Box sx={{ display: "flex", justifyContent: align }}>
          <DialogTitle
            sx={{
              p: 0,
              m: "25px",
              textAlign: align,
              fontSize: align === "start" ? "20px" : "24px",
              fontWeight: align === "start" ? 500 : 600,
              gap: "20px",
            }}
            color={styleConfig.fontColor}
          >
            {title}
          </DialogTitle>
        </Box>
      )}
      <Box
        sx={{
          backgroundColor: styleConfig.boxColor,
          overflowY: "auto",
          maxHeight: "calc(100% - 92px)", // 留給底部 actions 空間
          boxShadow: "0px 2px 10px 0px #0000000D",
          p: "24px 24px 92px 24px", // 上方留空間給標題
        }}
      >
        {/* 內容 */}
        {content}
      </Box>

      {/* 動作區：固定底部 */}
      {actions && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: align === "center" ? "center" : "flex-end",
            p: "10px",
            boxShadow: "0px -12px 10px 0px #0000000D",
            height: "92px",
            gap: "10px",
            backgroundColor: styleConfig.boxColor, // or theme.palette.background.paper
          }}
        >
          {actions}
        </Box>
      )}
    </StyleBottomModal>
  );
};
