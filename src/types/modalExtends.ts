import { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
export interface CustomModalProps
  extends Omit<MuiDialogProps, "title" | "icon" | "content"> {
  /** 依設備控制Modal的尺寸 */
  deviceType?: "desktop" | "tablet" | "mobile";
  size?: "small" | "medium" | "large" | "extraLarge";
  /** Modal的Title */
  title?: string;
  /** Modal的Icon */
  icon?: React.ReactNode;
  /** Modal的內容，可以是字串或ReactNode */
  content?: string | React.ReactNode;
  /** Modal的底部按鈕 */
  actions?: React.ReactNode;
  /** Modal內容對其位置 */
  align?: "start" | "center";
}

import { DrawerProps as MuiDrawerprops } from "@mui/material/Drawer";
export interface CustomSideModalProps
  extends Omit<MuiDrawerprops, "content" | "anchor"> {
  title?: string;
  /** Modal內容對其位置 */
  align?: "start" | "center";
  /** Modal的內容，可以是字串或ReactNode */
  content?: string | React.ReactNode;
  /** Modal的底部按鈕 */
  actions?: React.ReactNode;
  /** SideModal只有左右 */
  anchor?: "left" | "right";
}
import { SwipeableDrawerProps as MuiSwipeableDrawerprops } from "@mui/material/SwipeableDrawer";
export interface CustomBottomModalProps
  extends Omit<MuiSwipeableDrawerprops, "content" | "anchor"> {
  title?: string;
  /** Modal內容對其位置 */
  align?: "start" | "center";
  /** Modal的內容，可以是字串或ReactNode */
  content?: string | React.ReactNode;
  /** Modal的底部按鈕 */
  actions?: React.ReactNode;
  /** BottomModal只有上下 (上為額外增加) */
  anchor?: "top" | "bottom";
}
