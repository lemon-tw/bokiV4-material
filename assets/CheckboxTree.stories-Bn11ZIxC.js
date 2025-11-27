import{j as k}from"./jsx-runtime-BO8uF4Og.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{ab as m}from"./Calendar-DbyfRCKY.js";import{r as a}from"./index-D4H_InIO.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const g={title:"Components/Atoms/Checkbox/CheckboxTree",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"},checkedKeys:{control:"object"}}},h=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],p={render:function(e){const[b,c]=a.useState(e.checkedKeys||[]);return a.useEffect(()=>{c(e.checkedKeys||[])},[e.checkedKeys]),k.jsx(m,{...e,checkedKeys:b,onChecked:c})}},n={...p,args:{data:h,checkedKeys:[]},parameters:{docs:{source:{code:`
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
        `.trim()}}}},t={...p,args:{data:h,checkedKeys:["2-1-1"]},parameters:{docs:{source:{code:`
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
        `.trim()}}}};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: []
  },
  parameters: {
    docs: {
      source: {
        code: \`
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
        \`.trim()
      }
    }
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,l,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: ["2-1-1"]
  },
  parameters: {
    docs: {
      source: {
        code: \`
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
        \`.trim()
      }
    }
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const D=["BasicUsage","InitiallyChecked"];export{n as BasicUsage,t as InitiallyChecked,D as __namedExportsOrder,g as default};
