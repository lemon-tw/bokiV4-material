import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Switch } from "../../components/Atom/Switch/Switch";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";

const meta: Meta<typeof Switch> = {
  title: "components/Switch",
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
    selectedIcon: <Done />,
    unselectedIcon: <Close />,
    size: "small",
  },
};
