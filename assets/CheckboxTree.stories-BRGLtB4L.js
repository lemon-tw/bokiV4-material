import{j as k}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-B7Qis2N-.js";import{z as m}from"./Rest-BC3fsDfS.js";import"./Alert-C3r4vYPZ.js";import"./Avatar-pRnr6DU5.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./Modal-BPmM9JPO.js";import"./BottomModal-imHOmNSj.js";import"./Profile-CdAcNaFX.js";import"./Typography-BZQ6nlo4.js";import{r as o}from"./index-D4H_InIO.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-z4MSENyy.js";import"./FormControlLabel-D0F9NOZF.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const ne={title:"Components/Atoms/Checkbox/CheckboxTree",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"},checkedKeys:{control:"object"}}},p=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],h={render:function(e){const[b,r]=o.useState(e.checkedKeys||[]);return o.useEffect(()=>{r(e.checkedKeys||[])},[e.checkedKeys]),k.jsx(m,{...e,checkedKeys:b,onChecked:r})}},t={...h,args:{data:p,checkedKeys:[]},parameters:{docs:{source:{code:`
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
        `.trim()}}}},n={...h,args:{data:p,checkedKeys:["2-1-1"]},parameters:{docs:{source:{code:`
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
        `.trim()}}}};var c,a,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const re=["BasicUsage","InitiallyChecked"];export{t as BasicUsage,n as InitiallyChecked,re as __namedExportsOrder,ne as default};
