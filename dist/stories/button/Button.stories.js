import { jsx as _jsx } from "react/jsx-runtime";
import { fn } from "@storybook/test";
import { Button } from "../../components/Atom/Button/Button";
import SendIcon from "@mui/icons-material/Send";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "components/Button/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["filled", "outlined", "text", "elevated", "tonal"],
        },
        disabled: { control: "boolean" },
        endIcon: {
            control: false, // 這裡你要自己加在 story 裡，不讓控制面板亂傳
        },
        sx: {
            control: "object",
        },
        color: {
            control: { type: "select" },
        },
    },
    args: {
        onClick: fn(),
    },
};
export default meta;
export const Filled = {
    args: {
        children: "Filled Button",
        variant: "filled",
        disabled: false,
    },
};
export const Outline = {
    args: {
        children: "Outline Button",
        variant: "outlined",
        endIcon: _jsx(SendIcon, {}),
    },
};
export const Text = {
    args: {
        children: "Text Button",
        variant: "text",
    },
};
export const Elevated = {
    args: {
        children: "Elevate Button",
        variant: "elevated",
    },
};
export const Tonal = {
    args: {
        children: "Tonal Button",
        variant: "tonal",
    },
};
export const Large = {
    args: {
        children: "Large Button",
        size: "large",
    },
};
