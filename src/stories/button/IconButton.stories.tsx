import { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { IconButton } from "../../components/Atom/Button/IconButton";
// import { ToggleIconButton } from "../../component/Atom/Button/IconButton";
import { Gear } from "phosphor-react";

const meta: Meta<typeof IconButton> = {
  title: "components/Atoms/Button/IconButton",
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
    children: <Gear />,
  },
};
export const standard: Story = {
  args: {
    variant: "standard",
    children: <Gear />,
  },
};
export const Tonal: Story = {
  args: {
    variant: "tonal",
    children: <Gear />,
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: <Gear />,
  },
};

export const ToggleButton: Story = {
  args: {
    variant: "filled",
    toggleIcon: <Gear />,
    children: <Gear weight="fill" />,
  },
};
