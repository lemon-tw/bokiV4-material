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
import { fn } from "@storybook/test";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox/Checkbox",
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
    onClick: fn(),
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
// export const Primary: Story = {
//     render: (args) => <InteractiveTemplate {...args} />,
// };

// 補上 parameters 調整storyBook呈現的程式碼範例
export const Primary: Story = {
  render: (args) => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox 
  color="primary" 
  label="" 
/>`.trim(),
      },
    },
  },
};

// export const Error: Story = {
//     render: (args) => <InteractiveTemplate {...args} color="error" />,
// };
export const Error: Story = {
  render: (args) => <InteractiveTemplate {...args} color="error" />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox 
  color="error"
  label="" 
/>`.trim(),
      },
    },
  },
};

// export const PrimaryWithLabel: Story = {
//     render: (args) => <InteractiveTemplate {...args} label="Standard 樣式" />,
// };

export const PrimaryWithLabel: Story = {
  render: (args) => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox 
  color="primary" 
  label="Standard 樣式"
/>`.trim(),
      },
    },
  },
};

// export const ErrorWithLabel: Story = {
//     render: (args) => <InteractiveTemplate {...args} color="error" label="Error 樣式" />,
// };

export const ErrorWithLabel: Story = {
  render: (args) => <InteractiveTemplate {...args} color="error" label="Error 樣式" />,
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox 
  color="primary" 
  label="Error 樣式"
/>`.trim(),
      },
    },
  },
};

// 非受控元件 Story
export const UncontrolledPrimary: Story = {
  render: (args) => <Checkbox {...args} defaultChecked={false} />,
};

export const UncontrolledError: Story = {
  render: (args) => <Checkbox {...args} color="error" defaultChecked={false} />,
};
export const UncontrolledPrimaryWithLabel: Story = {
  render: (args) => <Checkbox {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
};

export const UncontrolledErrorWithLabel: Story = {
  render: (args) => <Checkbox {...args} color="error" defaultChecked={false} label="非受控模式 - Error 樣式" />,
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
<Checkbox
  checked={allChecked}
  indeterminate={indeterminate}
  onChange={e => setChecked([e.target.checked, e.target.checked])}
  label="父層"
/>
<Checkbox
  checked={checked[0]}
  onChange={e => setChecked([e.target.checked, checked[1]])}
  label="子項目1"
/>
<Checkbox
  checked={checked[1]}
  onChange={e => setChecked([checked[0], e.target.checked])}
  label="子項目2"
/>
                `.trim(),
      },
    },
  },
};
