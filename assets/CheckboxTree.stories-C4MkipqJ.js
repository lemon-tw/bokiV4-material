import{j as d}from"./jsx-runtime-BO8uF4Og.js";import{C as v}from"./Checkbox-Ca9a4XMf.js";import{r as y}from"./index-D4H_InIO.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-DQLz_w2O.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./FormControlLabel-CrI_EDe_.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-C85nDkcq.js";import"./index-C1j4tvSs.js";import"./useTheme-BbNP3OZZ.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./extendSxProp-DpymScOI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Checkbox-BV9M0_qO.js";import"./SwitchBase-kKEgFl4o.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-xXEST84h.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./createSvgIcon-C6ONGP5B.js";import"./mergeSlotProps-Cns_3EyO.js";const m=({data:p,checkedKeys:a=[],onChecked:c})=>{const s=(n,e)=>{const t=k(n),r=e?[...new Set([...a,...t])]:a.filter(N=>!t.includes(N));c==null||c(r)},l=n=>!n.children||n.children.length===0?a.includes(n.id):n.children.every(e=>l(e)),h=n=>{if(!n.children||n.children.length===0)return!1;const e=n.children.map(r=>({checked:l(r),indeterminate:h(r)}));if(e.some(r=>r.indeterminate))return!0;const t=e.filter(r=>r.checked).length;return t>0&&t<e.length},k=n=>{var t;let e=[n.id];return(t=n.children)==null||t.forEach(r=>{e=[...e,...k(r)]}),e},u=n=>n.map(e=>d.jsxs("div",{style:{marginLeft:"24px"},children:[d.jsx(v,{label:e.label,checked:l(e),indeterminate:h(e),onChange:t=>s(e,t.target.checked)}),e.children&&u(e.children)]},e.id));return d.jsx("div",{children:u(p)})};m.__docgenInfo={description:"",methods:[],displayName:"CheckboxTree",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:"樹形結構資料"},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前選中節點 id 陣列（受控模式，可選）",defaultValue:{value:"[]",computed:!1}},indeterminateKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前 indeterminate 狀態的節點 id 陣列（可選）"},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"勾選狀態變更時的回呼函式"},onIndeterminateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"indeterminate 狀態變更時的回呼函式（可選）"}}};const Z={title:"Components/Atoms/Checkbox/CheckboxTree",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"},checkedKeys:{control:"object"}}},K=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],E={render:function(a){const[c,s]=y.useState(a.checkedKeys||[]);return y.useEffect(()=>{s(a.checkedKeys||[])},[a.checkedKeys]),d.jsx(m,{...a,checkedKeys:c,onChecked:s})}},i={...E,args:{data:K,checkedKeys:[]},parameters:{docs:{source:{code:`
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
        `.trim()}}}},o={...E,args:{data:K,checkedKeys:["2-1-1"]},parameters:{docs:{source:{code:`
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
        `.trim()}}}};var b,x,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,g,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const $=["BasicUsage","InitiallyChecked"];export{i as BasicUsage,o as InitiallyChecked,$ as __namedExportsOrder,Z as default};
