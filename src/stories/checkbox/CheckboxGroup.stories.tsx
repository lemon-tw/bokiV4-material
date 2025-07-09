import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "../../components/Atom/Checkbox/CheckboxGroup";

// Storybook 設定
const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/Atoms/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    parentLabel: { control: "text" },
    labels: { control: "object" },
  },
  args: {
    parentLabel: "水果全選",
    labels: ["Apple", "Banana", "Orange"],
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Standard: Story = {
  render: (args) => <CheckboxGroup {...args} />,
  parameters: {
    docs: {
      source: {
        code: `
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";

export default function Example() {
  return (
    <CheckboxGroup
      labels={["Apple", "Banana", "Orange"]}
      parentLabel="水果全選"
    />
  );
}
        `.trim(),
      },
    },
  },
};
