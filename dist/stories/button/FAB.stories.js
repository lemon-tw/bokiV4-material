import { jsx as _jsx } from "react/jsx-runtime";
// import { fn } from "@storybook/test";
import { Fab } from "../../components/Atom/Button/FAB";
import EditIcon from "@mui/icons-material/Edit";
const meta = {
    title: "components/Button/Fab",
    component: Fab,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["surface", "primary", "secondary", "tertiary"],
        },
        disabled: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        sx: {
            control: "object",
        },
        children: {
            table: { disable: true },
        },
    },
    args: {
    // onClick: fn(),
    },
};
export default meta;
export const Surface = {
    args: {
        size: "large",
        children: _jsx(EditIcon, {}),
    },
};
export const Primary = {
    args: {
        color: "primary",
        children: _jsx(EditIcon, {}),
    },
};
export const Secondary = {
    args: {
        color: "secondary",
        children: _jsx(EditIcon, {}),
    },
};
export const Tertiary = {
    args: {
        color: "tertiary",
        children: _jsx(EditIcon, {}),
    },
};
export const Extended = {
    args: {
        variant: "extended",
        color: "tertiary",
        children: [_jsx(EditIcon, { sx: { mr: 1 } }), "Extendeda"],
    },
};
