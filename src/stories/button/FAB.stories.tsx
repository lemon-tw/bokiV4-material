import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { Fab } from "../../components/Atom/Button/FAB";
import EditIcon from "@mui/icons-material/Edit";

const meta: Meta<typeof Fab> = {
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

type Story = StoryObj<typeof Fab>;

export const Surface: Story = {
  args: {
    size: "large",
    children: <EditIcon />,
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: <EditIcon />,
  },
};
export const Secondary: Story = {
  args: {
    color: "secondary",
    children: <EditIcon />,
  },
};

export const Tertiary: Story = {
  args: {
    color: "tertiary",
    children: <EditIcon />,
  },
};

export const Extended: Story = {
  args: {
    variant: "extended",
    color: "tertiary",
    children: [<EditIcon sx={{ mr: 1 }} />, "Extendeda"],
  },
};
