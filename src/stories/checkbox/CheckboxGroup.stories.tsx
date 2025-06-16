import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "../../components/Atom/Checkbox/CheckboxGroup";

// Storybook 設定
const meta: Meta<typeof CheckboxGroup> = {
    title: "Components/Checkbox/CheckboxGroup",
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
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    labels,
    parentLabel = "全選",
}) => {
    // 用陣列管理子項目勾選狀態
    const [checked, setChecked] = React.useState<boolean[]>(
        Array(labels.length).fill(false)
    );

    // 父層狀態計算
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;

    // 父層切換
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(Array(labels.length).fill(e.target.checked));
    };

    // 子層切換
    const handleChildChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = [...checked];
        newChecked[idx] = e.target.checked;
        setChecked(newChecked);
    };

    return (
        <ul style={{ listStyle: "none" }}>
            <li>
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
            </li>
            {labels.map((label, idx) => (
                <li key={label}>
                    <FormControlLabel
                        label={label}
                        control={
                            <Checkbox
                                style={{ marginLeft: "48px" }}
                                checked={checked[idx]}
                                onChange={handleChildChange(idx)}
                            />
                        }
                    />
                </li>
            ))}
        </ul>
    );
};
`.trim(),
            },
        },
    },
};
