import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
// import { Checkbox } from "../../components/Atom/Checkbox/Checkbox";
// const meta: Meta<typeof Checkbox> = {
//   title: "components/123",
//   component: Checkbox,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
//   argTypes: {},
//   args: {
//     onClick: fn(),
//   },
// };
// export default meta;
// type Story = StoryObj<typeof Checkbox>;
// export const Primary: Story = {
//   args: {},
// };
import React from "react";
import { Checkbox } from "../../components/Atom/Checkbox/Checkbox";
const meta = {
    title: "Components/Checkbox/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["primary", "error"],
        },
        label: { control: "text" },
        disabled: { control: "boolean" },
        indeterminate: { control: "boolean" },
    },
    args: {
        color: "primary",
    },
};
export default meta;
// 互動版 Template
const InteractiveTemplate = (args) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (_jsx(Checkbox, { ...args, checked: checked, onChange: handleChange }));
};
// 受控元件 Story
// 補上 parameters 調整storyBook呈現的程式碼範例
export const Standard = {
    render: (args) => _jsx(InteractiveTemplate, { ...args }),
    parameters: {
        docs: {
            source: {
                code: `
<Checkbox />`.trim(),
            },
        },
    },
};
export const WithLabel = {
    render: (args) => _jsx(InteractiveTemplate, { ...args, label: "Standard \u6A23\u5F0F" }),
    parameters: {
        docs: {
            source: {
                code: `
<Checkbox label="Standard 樣式"/>`.trim(),
            },
        },
    },
};
// 非受控元件 Story
export const Uncontrolled = {
    render: (args) => _jsx(Checkbox, { ...args, defaultChecked: false }),
    parameters: {
        docs: {
            source: {
                code: `
<Checkbox defaultChecked={false}/>`.trim(),
            },
        },
    },
};
export const UncontrolledWithLabel = {
    render: (args) => _jsx(Checkbox, { ...args, defaultChecked: false, label: "\u975E\u53D7\u63A7\u6A21\u5F0F - Standard \u6A23\u5F0F" }),
    parameters: {
        docs: {
            source: {
                code: `
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  `.trim(),
            },
        },
    },
};
// indeterminate
export const Indeterminate = {
    render: (args) => _jsx(Checkbox, { ...args, indeterminate: true, label: "indeterminate" }),
};
// indeterminate Template
const IndeterminateGroupTemplate = () => {
    const [checked, setChecked] = React.useState([true, false]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const indeterminate = someChecked && !allChecked;
    return (_jsxs("ul", { children: [_jsx(Checkbox, { checked: allChecked, indeterminate: indeterminate, onChange: e => setChecked([e.target.checked, e.target.checked]), label: "\u7236\u5C64" }), _jsx("li", { style: { marginLeft: "48px" }, children: _jsx(Checkbox, { checked: checked[0], onChange: e => setChecked([e.target.checked, checked[1]]), label: "\u5B50\u9805\u76EE1" }) }), _jsx("li", { style: { marginLeft: "48px" }, children: _jsx(Checkbox, { checked: checked[1], onChange: e => setChecked([checked[0], e.target.checked]), label: "\u5B50\u9805\u76EE2" }) })] }));
};
// indeterminate story
export const IndeterminateGroup = {
    render: () => _jsx(IndeterminateGroupTemplate, {}),
    parameters: {
        docs: {
            source: {
                code: `
<ul>
  <li>
    <FormControlLabel
      label="全選"
      control={
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleParentChange}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目1"
      control={
        <Checkbox
          checked={checked[0]}
          onChange={handleChildChange(0)}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目2"
      control={
        <Checkbox
          checked={checked[1]}
          onChange={handleChildChange(1)}
        />
      }
    />
  </li>
</ul>
`.trim(),
            },
        },
    },
};
