import{j as k}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-Bb89J2P2.js";import{y as m}from"./Calendar-BaGtf-Ws.js";import"./Cart-D-pvBHLo.js";import"./Profile-SZVm7_dG.js";import"./ToggleButton-C9hjwxNF.js";import"./BottomModal-eKP2Btm8.js";import"./Typography-BwE3U6T_.js";import{r}from"./index-D4H_InIO.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-BiUdnq83.js";import"./CheckCircle.es-D_AxlQm-.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Users.es-oVc931zI.js";import"./Warning.es-TWNjRQ8R.js";const z={title:"Components/Atoms/Checkbox/CheckboxTree",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"},checkedKeys:{control:"object"}}},p=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],h={render:function(e){const[b,c]=r.useState(e.checkedKeys||[]);return r.useEffect(()=>{c(e.checkedKeys||[])},[e.checkedKeys]),k.jsx(m,{...e,checkedKeys:b,onChecked:c})}},n={...h,args:{data:p,checkedKeys:[]},parameters:{docs:{source:{code:`
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
        `.trim()}}}},t={...h,args:{data:p,checkedKeys:["2-1-1"]},parameters:{docs:{source:{code:`
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
        `.trim()}}}};var a,o,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const F=["BasicUsage","InitiallyChecked"];export{n as BasicUsage,t as InitiallyChecked,F as __namedExportsOrder,z as default};
