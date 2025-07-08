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
    parentLabel: "父層",
    labels: ["子項目1", "子項目2"],
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
const CheckboxGroup = ({ labels, parentLabel = "全選" }) => {
    const [checked, setChecked] = React.useState(
        Array(labels.length).fill(false)
    );
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;
    const handleParentChange = (e) => {
        setChecked(Array(labels.length).fill(e.target.checked));
    };
    const handleChildChange = (idx) => (e) => {
        const newChecked = [...checked];
        newChecked[idx] = e.target.checked;
        setChecked(newChecked);
    };

    const parentLabel = "父層",
    const labels = ["子項目1", "子項目2"],

    return (
        <>
            <FormControlLabel
                label={parentLabel}
                control={
                    <Checkbox
                        checked={allChecked}
                        indeterminate={indeterminate}
                        onChange={handleParentChange}
                    />
                }
            />
            {labels.map((label, idx) => (
                <FormControlLabel
                    key={label}
                    label={label}
                    control={
                        <Checkbox
                            style={{ marginLeft: "48px" }}
                            checked={checked[idx]}
                            onChange={handleChildChange(idx)}
                        />
                    }
                />
            ))}
        </>
    );
};
                `.trim(),
      },
    },
  },
};
