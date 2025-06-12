// CheckboxTree.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxTree } from "../../components/Atom/Checkbox/CheckboxTree";
import { useState } from "react";
import { TreeNode } from "../../types/checkboxExtends";

const meta: Meta<typeof CheckboxTree> = {
    title: "Components/Checkbox/CheckboxTree",
    component: CheckboxTree,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        data: { control: "object" },
    },
};

export default meta;

// 範例樹狀數據
const sampleData: TreeNode[] = [
    {
        id: "1",
        label: "父節點1",
        children: [
            { id: "1-1", label: "子節點1-1" },
            { id: "1-2", label: "子節點1-2" },
        ],
    },
    {
        id: "2",
        label: "父節點2",
        children: [
            {
                id: "2-1",
                label: "子節點2-1",
                children: [
                    { id: "2-1-1", label: "孫節點2-1-1" },
                    { id: "2-1-2", label: "孫節點2-1-2" },
                ]
            },
        ],
    },
];


// 互動式範本
const InteractiveTemplate: StoryObj<typeof CheckboxTree> = {
    render: function Render(args) { // 修正點：使用命名函式元件
        const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
        return (
            <CheckboxTree
                {...args}
                checkedKeys={checkedKeys}
                onChecked={setCheckedKeys}
            />
        );
    },
};

// 基本使用範例 
export const BasicUsage = {
    ...InteractiveTemplate,
    args: {
        data: sampleData,
    },
    parameters: {
        docs: {
            source: {
                code: `
<CheckboxTree
  data={sampleData}
  checkedKeys={checkedKeys}
  onChecked={setCheckedKeys}
/>`.trim(),
            },
        },
    },
};

// 初始選中狀態範例
export const InitiallyChecked = {
    ...InteractiveTemplate,
    args: {
        data: sampleData,
        checkedKeys: ["1-1", "2-1-1"],
    },
};
