import { BoxProps, MenuListProps } from '@mui/material';
type MemberMenuProps = MenuListProps & {
    containerSx?: BoxProps["sx"];
};
export declare const MemberMenu: ({ containerSx, ...rest }: MemberMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
