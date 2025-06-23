import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../../components/Atom/Radio/Radio";
import { CustomRadioProps } from "../../types/radioExtends";

// 文件部分暫存
//   錯誤提示 ：可結合表單驗證顯示錯誤狀態。
//   尺寸調整 ：支援 size 屬性（small、medium）。
//   單顆獨立使用 ：Radio 也可不在 RadioGroup 內單獨使用。
//   支援鍵盤操作與無障礙（a11y）：可用鍵盤切換選項，支援 aria - label 等無障礙屬性。
//   自訂顏色與樣式 ：可透過 color、sx、styled API 或主題自訂外觀。
//   自訂圖示 ：可用 icon、checkedIcon 屬性替換預設圖示。


//   Storybook 設定
//   - 展示 Radio 的多種狀態與互動
//   - 支援受控與非受控模式
const meta: Meta<typeof Radio> = {
    title: "Components/Radio/Radio",
    component: Radio,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["primary"],
        },
        label: { control: "text" },
        disabled: { control: "boolean" },
        // checked: { control: "boolean" },
    },
    args: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

//   互動版 Template
//   - 受控元件，內部維護 checked 狀態
const InteractiveTemplate = (args: CustomRadioProps) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Radio
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
<Radio />`.trim(),
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
<Radio label="Standard 樣式"/>`.trim(),
            },
        },
    },
};

// 非受控元件範例
// - 直接使用 defaultChecked
export const Uncontrolled: Story = {
    render: (args) => <Radio {...args} defaultChecked={false} />,
};

// 非受控 + 標籤範例
export const UncontrolledWithLabel: Story = {
    render: (args) => <Radio {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
    parameters: {
        docs: {
            source: {
                code: `
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim(),
            },
        },
    },
};

// 禁用狀態
export const Disabled: Story = {
    render: (args) => <Radio {...args} disabled={true} label="Disabled 樣式" />,
    parameters: {
        docs: {
            source: {
                code: `
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>`.trim(),
            },
        },
    },
};
