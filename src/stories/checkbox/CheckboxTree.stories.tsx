// CheckboxTree.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxTree } from "../../components/Atom/Checkbox/CheckboxTree";
import { useState, useEffect } from "react";
import { TreeNode } from "../../types/checkboxExtends";

const meta: Meta<typeof CheckboxTree> = {
  title: "Components/Atoms/Checkbox/CheckboxTree",
  component: CheckboxTree,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    checkedKeys: { control: "object" },
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
        ],
      },
    ],
  },
];

// 互動式範本
const InteractiveTemplate: StoryObj<typeof CheckboxTree> = {
  render: function Render(args) {
    // 修正點：使用 args.checkedKeys 作為初始值
    const [checkedKeys, setCheckedKeys] = useState<string[]>(args.checkedKeys || []);

    // 修正點：當 args.checkedKeys 變更時，同步到內部 state
    useEffect(() => {
      setCheckedKeys(args.checkedKeys || []);
    }, [args.checkedKeys]);

    return (
      <CheckboxTree
        {...args}
        checkedKeys={checkedKeys}
        onChecked={setCheckedKeys}
      />
    );
  },
};

// 基本互動範例
export const BasicUsage: StoryObj<typeof CheckboxTree> = {
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: [],
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from "react";
import { CheckboxTree } from "@/components/Atom/Checkbox/CheckboxTree";
import type { TreeNode } from "@/types/checkboxExtends";

/* 樹狀資料 */
const sampleData: TreeNode[] = [
  {
    id: "1",
    label: "父節點 1",
    children: [
      { id: "1-1", label: "子節點 1-1" },
      { id: "1-2", label: "子節點 1-2" },
    ],
  },
  {
    id: "2",
    label: "父節點 2",
    children: [
      {
        id: "2-1",
        label: "子節點 2-1",
        children: [
          { id: "2-1-1", label: "孫節點 2-1-1" },
          { id: "2-1-2", label: "孫節點 2-1-2" },
        ],
      },
    ],
  },
];

export default function Example() {
  /* 用 useState 管理受控勾選值 */
  const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);

  return (
    <CheckboxTree
      data={sampleData}        // 樹狀結構
      checkedKeys={checkedKeys} // 目前已選 id 陣列
      onChecked={setCheckedKeys} // 更新勾選回呼
    />
  );
}
        `.trim(),
      },
    },
  },
};

// 初始選中狀態範例
export const InitiallyChecked: StoryObj<typeof CheckboxTree> = {
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: ["2-1-1"],
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from "react";
import { CheckboxTree } from "@/components/Atom/Checkbox/CheckboxTree";
import type { TreeNode } from "@/types/checkboxExtends";

/* 樹狀資料 – 與上一例相同 */
const sampleData: TreeNode[] = [
  {
    id: "1",
    label: "父節點 1",
    children: [
      { id: "1-1", label: "子節點 1-1" },
      { id: "1-2", label: "子節點 1-2" },
    ],
  },
  {
    id: "2",
    label: "父節點 2",
    children: [
      {
        id: "2-1",
        label: "子節點 2-1",
        children: [
          { id: "2-1-1", label: "孫節點 2-1-1" },
          { id: "2-1-2", label: "孫節點 2-1-2" },
        ],
      },
    ],
  },
];

export default function Example() {
  /* 預設勾選二層孫節點 */
  const [checkedKeys, setCheckedKeys] = React.useState<string[]>([
    "2-1-1"
  ]);

  return (
    <CheckboxTree
      data={sampleData}
      checkedKeys={checkedKeys}
      onChecked={setCheckedKeys}
    />
  );
}
        `.trim(),
      },
    },
  },
};
