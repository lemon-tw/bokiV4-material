import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../components/Atom/Button/Button";
import SendIcon from "@mui/icons-material/Send";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
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

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: "Filled Button",
    variant: "filled",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outlined",
    endIcon: <SendIcon />,
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
  },
};

export const Elevated: Story = {
  args: {
    children: "Elevate Button",
    variant: "elevated",
  },
};

export const Tonal: Story = {
  args: {
    children: "Tonal Button",
    variant: "tonal",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};
