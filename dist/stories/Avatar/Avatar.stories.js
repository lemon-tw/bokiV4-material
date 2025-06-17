import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fn } from "@storybook/test";
import { Avatar } from "../../components/Atom/Avatar/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";
const meta = {
    title: "components/Avatar/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        src: {
            control: "text",
        },
        children: {
            control: "text",
        },
        types: {
            control: "select",
            options: ["male", "female", "unknown"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large", "extraLarge"],
        },
        sx: {
            control: "object",
        },
    },
    args: {
        onClick: fn(),
    },
};
export default meta;
export const defaultAvarta = {
    args: {},
};
export const InitialAvarta = {
    args: {
        alt: "A",
        children: "A",
        sx: {
            bgcolor: "green",
        },
    },
};
export const ImageAvarta = {
    args: {
        alt: "image",
        src: "https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png",
    },
};
export const IconAvarta = {
    args: {
        alt: "icon",
        children: _jsx(Done, {}),
        sx: {
            bgcolor: "primary.main",
        },
    },
};
export const groupAvarta = {
    render: (args) => (_jsxs(AvatarGroup, { max: 4, total: 8, children: [_jsx(Avatar, { src: "https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png" }), _jsx(Avatar, { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" }), _jsx(Avatar, { src: "https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" }), _jsx(Avatar, { src: "https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" })] })),
    args: {},
};
