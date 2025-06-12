// RadioButton.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "../../components/Atom/RadioButton/RadioButton";
import { CustomRadioProps } from "../../types/radioButtonExtends";
import { fn } from "@storybook/test";


//   Storybook 設定
//   - 展示 RadioButton 的多種狀態與互動
//   - 支援受控與非受控模式
const meta: Meta<typeof RadioButton> = {
    title: "Components/RadioButton/RadioButton",
    component: RadioButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["primary", "secondary"],
        },
        label: { control: "text" },
        disabled: { control: "boolean" },
    },
    args: {
        color: "primary",
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;


//   互動版 Template
//   - 受控元件，內部維護 checked 狀態
const InteractiveTemplate = (args: CustomRadioProps) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <RadioButton
            {...args}
            checked={checked}
            onChange={handleChange}
        />
    );
};


//   標準受控範例
export const Standard: Story = {
    render: (args) => <InteractiveTemplate {...args} />,
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton 
  color="primary" 
  label="" 
/>`.trim(),
            },
        },
    },
};

// 受控 + 標籤範例
export const WithLabel: Story = {
    render: (args) => <InteractiveTemplate {...args} label="Standard 樣式" />,
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton 
  color="primary" 
  label="Standard 樣式"
/>`.trim(),
            },
        },
    },
};

// 非受控元件範例
// - 直接使用 defaultChecked
export const Uncontrolled: Story = {
    render: (args) => <RadioButton {...args} defaultChecked={false} />,
};

// 非受控 + 標籤範例
export const UncontrolledWithLabel: Story = {
    render: (args) => <RadioButton {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
};

// 禁用狀態
export const Disabled: Story = {
    render: (args) => <RadioButton {...args} disabled={true} label="Disabled 樣式" />,
};
