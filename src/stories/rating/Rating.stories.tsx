// Rating.stories.tsx
import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../../components/Atom/Rating/Rating'; // 路徑請依實際專案調整
import type { RatingProps } from '../../types/ratingExtends';

const meta: Meta<RatingProps> = {
    title: 'components/Rating/Rating',
    component: Rating,
    parameters: { layout: 'centered' },
    tags: ["autodocs"],
    argTypes: {
        value: { control: { type: 'number', min: 0, max: 5, step: 0.1 } },
        readOnly: { control: 'boolean' },
        disabled: { control: 'boolean' },
        size: { control: { type: 'radio' }, options: ['small', 'medium', 'large'] },
        precision: { control: { type: 'number', min: 0.1, max: 1, step: 0.1 } },
        showValueLabel: { control: 'boolean' },
    },
    args: {
        value: 2.5,
        size: 'medium',
        readOnly: false,
        disabled: false,
        precision: 0.1,
        showValueLabel: true,
        onChange: () => { },
    },
};

export default meta;

type Story = StoryObj<typeof Rating>;

const InteractiveTemplate = (args: RatingProps) => {
    const [value, setValue] = useState<number>(args.value ?? 2);

    useEffect(() => {
        setValue(args.value ?? 2);
    }, [args.value]);

    const handleChange = (newValue: number) => {
        setValue(newValue);
        args.onChange?.(newValue);
    };

    return (
        <Rating
            {...args}
            value={value}
            onChange={handleChange}
        />
    );
};

export const CustomStar: Story = {
    render: (args) => <InteractiveTemplate {...args} />,
    parameters: {
        docs: {
            source: {
                code: `
import { Rating } from '@lemon/material';
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState(2.5);

useEffect(() => {
  setValue(args.value ?? 2.5);
}, [args.value]);

<Rating
  value={value}
  onChange={setValue}
  precision={0.1}
  size="medium"
  showValueLabel
/>
                `.trim(),
            },
        },
    },
};
