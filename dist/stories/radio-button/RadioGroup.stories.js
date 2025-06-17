import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { RadioGroup } from '../../components/Atom/RadioButton/RadioGroup';
import { fn } from "@storybook/test";
const meta = {
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
const InteractiveTemplate = (args) => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return _jsx(RadioGroup, { ...args, value: value, onChange: handleChange });
};
export const Standard = {
    render: (args) => _jsx(InteractiveTemplate, { ...args }),
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
