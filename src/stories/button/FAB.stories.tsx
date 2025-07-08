import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { Fab } from "../../components/Atom/Button/FAB";
import { PencilLine } from "phosphor-react";

const meta: Meta<typeof Fab> = {
  title: "components/Atoms/Button/Fab",
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

type Story = StoryObj<typeof Fab>;

export const Surface: Story = {
  args: {
    size: "large",
    children: <PencilLine />,
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: <PencilLine />,
  },
};
export const Secondary: Story = {
  args: {
    color: "secondary",
    children: <PencilLine />,
  },
};

export const Tertiary: Story = {
  args: {
    color: "tertiary",
    children: <PencilLine />,
  },
};

export const Extended: Story = {
  args: {
    variant: "extended",
    color: "tertiary",
    children: [<PencilLine style={{ margin: 1 }} />, "Extended"],
  },
};
