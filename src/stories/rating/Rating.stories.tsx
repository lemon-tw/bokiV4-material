// Rating.stories.tsx
import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "../../components/Atom/Rating/Rating"; // 路徑請依實際專案調整
import type { RatingProps } from "../../types/ratingExtends";
import { Heart, Star, AppleLogo, Trophy, SketchLogo } from "phosphor-react";

const ICONS = {
  Heart, Star, AppleLogo, Trophy, SketchLogo
};


const meta: Meta<RatingProps> = {
  title: "components/Atoms/Rating/Rating",
  component: Rating,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 5, step: 0.1 } },
    readOnly: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    precision: { control: { type: "number", min: 0.1, max: 1, step: 0.1 } },
    showValueLabel: { control: "boolean" },
    iconColor: { control: "color" },
    iconFilledColor: { control: "color" },
    icon: {
      options: Object.keys(ICONS),
      mapping: ICONS,              // 對應到實際的 React 元件
      control: {
        type: "radio",
        labels: { Star: "星星", Heart: "愛心", AppleLogo: "蘋果", Trophy: "獎盃", SketchLogo: "鑽石" }, // 這裡設定顯示的文字
      },
      description: "選擇評分用的 Icon",
    },
  },
  args: {
    value: 2.5,
    size: "medium",
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

  return <Rating {...args} value={value} onChange={handleChange} />;
};

export const CustomStar: Story = {
  render: (args) => <InteractiveTemplate
    {...args}
    iconColor={args.iconColor}
    iconFilledColor={args.iconFilledColor} />,
  name: "Default Icon",
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
  iconColor = "#9d9d9d",          // 預設未填滿顏色
  iconFilledColor = "#fad703"     // 預設填滿顏色
/>
                `.trim(),
      },
    },
  },
};


export const CustomHeart: Story = {
  render: (args) => <InteractiveTemplate {...args}
    icon={Heart}
    iconColor={args.iconColor}
    iconFilledColor={args.iconFilledColor} />,
  name: "Customization Icon",
  parameters: {
    docs: {
      source: {
        code: `
import { Rating } from '@lemon/material';
import { Heart } from 'phosphor-react'; // 自定義的ICON
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
  icon={Heart}
  iconColor = "#9d9d9d",          // 預設未填滿顏色
  iconFilledColor = "#fad703"     // 預設填滿顏色
/>
        `.trim(),
      },
    },
  },
};
