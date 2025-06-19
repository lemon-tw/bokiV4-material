import { AvatarProps } from '@mui/material/Avatar';
type Gender = "male" | "female" | "unknown";
export type AvatarSize = "small" | "medium" | "large" | "extraLarge";
export interface CustomAvatarProps extends AvatarProps {
    types?: Gender;
    size?: AvatarSize;
}
export {};
