import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../../components/Atom/RadioButton/RadioGroup';
import type { CustomRadioGroupProps } from '../../types/radioButtonExtends';
import { fn } from "@storybook/test";

const meta: Meta<typeof RadioGroup> = {
    title: 'Components/RadioButton/RadioGroup',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary'],
        },
        label: { control: 'text' },
        value: { control: 'text' },
    },
    args: {
        color: 'primary',
        label: '性別選擇',
        options: [
            { label: '男性', value: 'male' },
            { label: '女性', value: 'female' },
            { label: '其他', value: 'other' },
        ],
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const InteractiveTemplate = (args: CustomRadioGroupProps) => {
    const [value, setValue] = React.useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <RadioGroup {...args} value={value} onChange={handleChange} />;
};

export const Standard: Story = {
    render: (args) => <InteractiveTemplate {...args} />,
    parameters: {
        docs: {
            source: {
                code: `
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">性別選擇</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<RadioButton />} label="男性" />
    <FormControlLabel value="male" control={<RadioButton />} label="女性" />
    <FormControlLabel value="other" control={<RadioButton />} label="其他" />
  </RadioGroup>
</FormControl>
`.trim(),
            },
        },
    },
};


{/* <FormControlLabel
    value="disabled"
    disabled
    control={<Radio />}
    label="不便透露"
/> */}