import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fn } from "@storybook/test";
import { Switch } from "../../components/Atom/Switch/Switch";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";
const meta = {
    title: "components/Switch/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        selectedIcon: {
            control: false,
        },
        unselectedIcon: {
            control: false,
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
    },
    args: {
        onClick: fn(),
    },
};
export default meta;
export const NormalSwitch = {
    args: {
        disabled: false,
        size: "large",
        color: "error",
    },
};
export const IconSwitch = {
    args: {
        disabled: false,
        selectedIcon: _jsx(Done, {}),
        unselectedIcon: _jsx(Close, {}),
        size: "small",
    },
};
export const DoubleIconSwitch = {
    render: (args) => (_jsxs("div", { style: { display: "flex", gap: "2rem" }, children: [_jsx(Switch, { ...args }), _jsx(Switch, { ...args })] })),
    args: {
        disabled: false,
        selectedIcon: _jsx(Done, {}),
        unselectedIcon: _jsx(Close, {}),
        size: "small",
    },
};
