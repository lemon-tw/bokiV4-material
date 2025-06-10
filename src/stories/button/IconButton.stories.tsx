import { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { IconButton } from "../../components/Atom/Button/IconButton";
// import { ToggleIconButton } from "../../component/Atom/Button/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const meta: Meta<typeof IconButton> = {
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

type Story = StoryObj<typeof IconButton>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: <SettingsOutlinedIcon />,
  },
};
export const standard: Story = {
  args: {
    variant: "standard",
    children: <SettingsOutlinedIcon />,
  },
};
export const Tonal: Story = {
  args: {
    variant: "tonal",
    children: <SettingsOutlinedIcon />,
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: <SettingsOutlinedIcon />,
  },
};

export const ToggleButton: Story = {
  args: {
    variant: "filled",
    toggleIcon: <SettingsOutlinedIcon />,
    children: <SettingsIcon />,
  },
};
