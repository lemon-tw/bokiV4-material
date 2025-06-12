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
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Atom/Checkbox/Checkbox";
import { CustomCheckboxProps } from "../../types/checkboxExtends"

const meta: Meta<typeof Checkbox> = {
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

type Story = StoryObj<typeof Checkbox>;

// 互動版 Template
const InteractiveTemplate = (args: CustomCheckboxProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={handleChange}
    />
  );
};

// 受控元件 Story
// 補上 parameters 調整storyBook呈現的程式碼範例
export const Standard: Story = {
  render: (args) => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox />`.trim(),
      },
    },
  },
};

export const WithLabel: Story = {
  render: (args) => <InteractiveTemplate {...args} label="Standard 樣式" />,
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
export const Uncontrolled: Story = {
  render: (args) => <Checkbox {...args} defaultChecked={false} />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox defaultChecked={false}/>`.trim(),
      },
    },
  },
};

export const UncontrolledWithLabel: Story = {
  render: (args) => <Checkbox {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
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
export const Indeterminate: Story = {
  render: (args) => <Checkbox {...args} indeterminate={true} label="indeterminate" />,
};


// indeterminate Template
const IndeterminateGroupTemplate = () => {
  const [checked, setChecked] = React.useState([true, false]);
  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean);
  const indeterminate = someChecked && !allChecked;

  return (
    <ul>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        onChange={e => setChecked([e.target.checked, e.target.checked])}
        label="父層"
      />
      <li style={{ marginLeft: "48px" }}>
        <Checkbox
          checked={checked[0]}
          onChange={e => setChecked([e.target.checked, checked[1]])}
          label="子項目1"
        />
      </li>
      <li style={{ marginLeft: "48px" }}>
        <Checkbox
          checked={checked[1]}
          onChange={e => setChecked([checked[0], e.target.checked])}
          label="子項目2"
        />
      </li>
    </ul>
  );
};

// indeterminate story
export const IndeterminateGroup: Story = {
  render: () => <IndeterminateGroupTemplate />,
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
