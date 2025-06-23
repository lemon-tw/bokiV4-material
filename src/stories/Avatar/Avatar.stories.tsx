import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Avatar } from "../../components/Atom/Avatar/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
    },
    children: {
      control: "text",
      description: "頭像內部的顯示內容，可以是string、icon",
    },
    types: {
      control: "select",
      options: ["male", "female", "unknown"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    sx: {
      control: "object",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const defaultAvarta: Story = {
  args: {},
};

export const InitialAvata: Story = {
  args: {
    alt: "A",
    children: "A",
    sx: {
      bgcolor: "green",
    },
  },
};
export const ImageAvata: Story = {
  args: {
    alt: "image",
    src: "https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png",
  },
};
export const IconAvata: Story = {
  args: {
    alt: "icon",
    children: <Done />,
    sx: {
      bgcolor: "primary.main",
    },
  },
};
export const groupAvata: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Done />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim(),
      },
    },
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>
        <Done />
      </Avatar>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
      <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
      <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
    </AvatarGroup>
  ),
  args: {
    max: 4,
    total: 8,
  },
  argTypes: {
    src: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    types: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
  },
};
