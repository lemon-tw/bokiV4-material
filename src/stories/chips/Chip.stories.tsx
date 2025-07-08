import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Chip } from "../../components/Atom/Chip/Chip";
import { Avatar } from "../../components/Atom/Avatar/Avatar";
import { Taxi } from "phosphor-react";

const meta: Meta<typeof Chip> = {
  title: "components/Atoms/Chip/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    avatar: {
      table: { disable: true },
    },
    deleteIcon: {
      table: { disable: true },
    },
    icon: {
      table: { disable: true },
    },
    sx: {
      control: "object",
      description: "點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",
      raw: true,
    },
  },
  args: {
    // onClick: fn(),
  },
};

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Label: Story = {
  args: {
    label: "Label",
    // selected: true,
  },
};
export const IconAndDelete: Story = {
  args: {
    label: "Label",
    icon: <Taxi />,
    onDelete: handleDelete,
  },
};
export const WithAvatar: Story = {
  args: {
    label: "Label",
    selected: true,
    onClick: handleClick,
    onDelete: handleDelete,
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    ),
  },
  render: (args) => <Chip {...args} />, // ← 關鍵：把 args 全灌進去
};
