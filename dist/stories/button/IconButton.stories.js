import { jsx as _jsx } from "react/jsx-runtime";
// import { fn } from "@storybook/test";
import { IconButton } from "../../components/Atom/Button/IconButton";
// import { ToggleIconButton } from "../../component/Atom/Button/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const meta = {
    title: "components/Button/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["filled", "standard", "tonal", "outlined"],
        },
        disabled: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        children: {
            control: { type: "text" },
        },
        selected: {
            table: { disable: true },
        },
        toggleIcon: {
            table: { disable: true },
        },
        color: {
            control: { type: "select" },
        },
    },
    args: {
    // onClick: fn(),
    },
};
export default meta;
export const Filled = {
    args: {
        variant: "filled",
        children: _jsx(SettingsOutlinedIcon, {}),
    },
};
export const standard = {
    args: {
        variant: "standard",
        children: _jsx(SettingsOutlinedIcon, {}),
    },
};
export const Tonal = {
    args: {
        variant: "tonal",
        children: _jsx(SettingsOutlinedIcon, {}),
    },
};
export const Outlined = {
    args: {
        variant: "outlined",
        children: _jsx(SettingsOutlinedIcon, {}),
    },
};
export const ToggleButton = {
    args: {
        variant: "filled",
        toggleIcon: _jsx(SettingsOutlinedIcon, {}),
        children: _jsx(SettingsIcon, {}),
    },
};
