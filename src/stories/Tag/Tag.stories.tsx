import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../components/Atom/Tag/Tag"; // 路徑請依專案實際調整
import type { TagProps } from "../../types/tagExtends";
import { Bed, UsersThree, CornersOut, Prohibit, CheckCircle } from "phosphor-react";
import { BowlFoodIcon } from "@phosphor-icons/react";

const ICONS = {
    Bed: <Bed size={24} />,
    UsersThree: <UsersThree size={24} />,
    CornersOut: <CornersOut size={24} />,
    CheckCircle: <CheckCircle size={24} weight="fill" />,
    Prohibit: <Prohibit size={24} />,
    BowlFoodIcon: <BowlFoodIcon size={24} weight="fill" />,
    none: null,
};

const meta: Meta<TagProps> = {
    title: "components/Atoms/Tag/Tag",
    component: Tag,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
使用時傳入的 label 可以直接傳入 ReactNode
如果需要部分文字不同顏色或是其他效果可以直接在標籤修改style 或是 className
        `,
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        color: {
            control: { type: "radio" },
            options: ["primary", "neutral", "warning", "danger", "success"],
            labels: {
                primary: "Primary",
                neutral: "Neutral",
                warning: "Warning",
                danger: "Danger",
                success: "Success",
            },
        },
        size: {
            control: { type: "radio" },
            options: ["small", "medium", "large"],
            description: "設定 Tag 的尺寸大小",
        },
        variant: {
            control: { type: "radio" },
            options: ["solid", "outlined"],
        },
        onlyText: { control: "boolean" },
        icon: {
            options: Object.keys(ICONS),
            mapping: ICONS,
            control: {
                type: "radio",
                labels: {
                    Bed: "床鋪",
                    UsersThree: "住客",
                    CornersOut: "客房",
                    BowlFoodIcon: "早餐",
                    CheckCircle: "成功",
                    Prohibit: "禁止",
                    none: "無",
                },
            },
            description: "選擇標籤 icon",
        },
        disabled: { control: "boolean" },
    },
    args: {
        label: "Tag 標籤",
        color: "primary",
        variant: "solid",
        onlyText: false,
        disabled: false,
        icon: undefined,
        size: "medium",
    },
};

export default meta;

type Story = StoryObj<typeof Tag>;

// 單一 Tag 樣式
export const Default: Story = {
    args: {
        label: "Default",
        color: "primary",
        variant: "solid",
    },
    parameters: {
        docs: {
            source: {
                code: `
import Tag from '@lemon/material/Tag';

<Tag
  label="Default"
  color="primary"
  variant="solid"
/>
        `.trim(),
            },
        },
    },
};

export const HasBreakfast: Story = {
    args: {
        label: "含早餐",
        color: "success",
        variant: "solid",
        icon: <BowlFoodIcon weight="fill" />,
        onlyText: true
    },
    parameters: {
        docs: {
            source: {
                code: `
import Tag from '@lemon/material/Tag';
import { BowlFoodIcon } from "@phosphor-icons/react";

<Tag
  label: "含早餐",
  color: "success",
  variant: "solid",
  icon: <BowlFoodIcon weight="fill" />,
  onlyText: true
/>
        `.trim(),
            },
        },
    },
};

export const NoBreakfast: Story = {
    args: {
        label: "不含早餐",
        color: "neutral",
        variant: "solid",
        icon: <Prohibit />,
        onlyText: true
    },
    parameters: {
        docs: {
            source: {
                code: `
import Tag from '@lemon/material/Tag';
import { Prohibit } from "phosphor-react";

<Tag
  label: "不含早餐",
  color: "neutral",
  variant: "solid",
  icon: <Prohibit />,
  onlyText: true
/>
        `.trim(),
            },
        },
    },
};

const date = "2025/3/28"

function MixColorText() {
    return (<span>
        免費取消{" "}
        {/* 需要自定義不同顏色的直接寫 style 或是 className */}
        <span style={{ color: "#818181" }}>{date} 前</span>
    </span>
    );
}

export const MixColor: Story = {
    args: {
        label: <MixColorText />,
        color: "success",
        variant: "solid",
        icon: <CheckCircle weight="fill" />,
        onlyText: true
    },
    parameters: {
        docs: {
            description: {
                story: '使用時傳入的 label 可以直接傳入 ReactNode 如果需要部分文字不同顏色或是其他效果可以直接在標籤修改style 或是 className',
            },
            source: {
                code: `
import Tag from '@lemon/material/Tag';
import { CheckCircle } from "phosphor-react";

const date = "2025/3/28"

function MixColorText() {
  return (<span>
    免費取消{" "}
    {/* 需要自定義不同顏色的直接寫 style 或是 className */}
    <span style={{ color: "#818181" }}>{date} 前</span>
  </span>);
}

<Tag
  // label 屬性支援 ReactNode
  label: <MixColorIcon />,
  color: "success",
  variant: "solid",
  icon: <CheckCircle weight="fill" />,
  onlyText: true
/>
        `.trim(),
            },
        },
    },
};