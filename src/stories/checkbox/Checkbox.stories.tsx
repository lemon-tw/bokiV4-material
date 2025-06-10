import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Checkbox } from "../../components/Atom/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/123",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {},
};
