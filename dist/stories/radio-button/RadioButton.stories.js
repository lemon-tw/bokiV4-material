import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { RadioButton } from "../../components/Atom/RadioButton/RadioButton";
// 文件部分暫存
//   錯誤提示 ：可結合表單驗證顯示錯誤狀態。
//   尺寸調整 ：支援 size 屬性（small、medium）。
//   單顆獨立使用 ：Radio 也可不在 RadioGroup 內單獨使用。
//   支援鍵盤操作與無障礙（a11y）：可用鍵盤切換選項，支援 aria - label 等無障礙屬性。
//   自訂顏色與樣式 ：可透過 color、sx、styled API 或主題自訂外觀。
//   自訂圖示 ：可用 icon、checkedIcon 屬性替換預設圖示。
//   Storybook 設定
//   - 展示 RadioButton 的多種狀態與互動
//   - 支援受控與非受控模式
const meta = {
    title: "Components/RadioButton/RadioButton",
    component: RadioButton,
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
//   互動版 Template
//   - 受控元件，內部維護 checked 狀態
const InteractiveTemplate = (args) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (_jsx(RadioButton, { ...args, checked: checked, onChange: handleChange }));
};
//   標準受控範例
export const Standard = {
    render: (args) => _jsx(InteractiveTemplate, { ...args }),
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton />`.trim(),
            },
        },
    },
};
// 受控 + 標籤範例
export const WithLabel = {
    render: (args) => _jsx(InteractiveTemplate, { ...args, label: "Standard \u6A23\u5F0F" }),
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton label="Standard 樣式"/>`.trim(),
            },
        },
    },
};
// 非受控元件範例
// - 直接使用 defaultChecked
export const Uncontrolled = {
    render: (args) => _jsx(RadioButton, { ...args, defaultChecked: false }),
};
// 非受控 + 標籤範例
export const UncontrolledWithLabel = {
    render: (args) => _jsx(RadioButton, { ...args, defaultChecked: false, label: "\u975E\u53D7\u63A7\u6A21\u5F0F - Standard \u6A23\u5F0F" }),
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim(),
            },
        },
    },
};
// 禁用狀態
export const Disabled = {
    render: (args) => _jsx(RadioButton, { ...args, disabled: true, label: "Disabled \u6A23\u5F0F" }),
    parameters: {
        docs: {
            source: {
                code: `
<RadioButton 
  disabled={true}
  label="Disabled 樣式"
/>`.trim(),
            },
        },
    },
};
