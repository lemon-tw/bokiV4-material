import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";

import { Switch } from "../../components/Atom/Switch/Switch";
import { X, Check } from "phosphor-react";

const meta: Meta<typeof Switch> = {
  title: "components/Atoms/Switch/Switch",
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

type Story = StoryObj<typeof Switch>;

export const NormalSwitch: Story = {
  args: {
    disabled: false,
    size: "large",
    color: "error",
  },
};

export const IconSwitch: Story = {
  args: {
    disabled: false,
    selectedIcon: <Check />,
    unselectedIcon: <X />,
    size: "small",
  },
};

export const ControlledSwitch: Story = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => updateArgs({ checked: e.target.checked })}
      />
    );
  },
  args: {
    disabled: false,
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "開關狀態",
    },
  },
};
