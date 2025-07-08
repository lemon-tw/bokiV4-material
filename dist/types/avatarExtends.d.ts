import { AvatarProps } from '@mui/material/Avatar';
type Gender = "male" | "female" | "unknown";
export type AvatarSize = "small" | "medium" | "large" | "extraLarge";
export interface CustomAvatarProps extends AvatarProps {
    types?: Gender;
    size?: AvatarSize;
    /** MUI 的 style 擴充點，用於客製化元件樣式 */
    children?: React.ReactNode;
}
export {};
