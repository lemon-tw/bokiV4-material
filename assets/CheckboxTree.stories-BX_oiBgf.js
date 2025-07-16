import{j as d}from"./jsx-runtime-BO8uF4Og.js";import{C as K}from"./Checkbox-BCPvQphS.js";import{r as w}from"./index-D4H_InIO.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-C83d1A0S.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./FormControlLabel-DW3rN0lc.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-BWf5NxIe.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-D9Rxpb2u.js";import"./index-zquPRXLs.js";import"./useTheme-Bh-_xkMb.js";import"./useEnhancedEffect-BUbyLjya.js";import"./extendSxProp-BVuH4Y-a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Checkbox-DccUR4pF.js";import"./SwitchBase-BOZ4B0C3.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-CP1Oo1Bo.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./createSvgIcon-DPKGROsd.js";import"./mergeSlotProps-DQ9n5Pzv.js";const p=({data:u,checkedKeys:a=[],onChecked:s})=>{const m=(t,e)=>{const r=l(t),n=e?[...new Set([...a,...r])]:a.filter(i=>!r.includes(i));s==null||s(n)},l=t=>{var r;let e=[t.id];return(r=t.children)==null||r.forEach(n=>{e=[...e,...l(n)]}),e},v=t=>{const e=l(t).slice(1),r=e.some(i=>a.includes(i)),n=e.every(i=>a.includes(i));return r&&!n},h=t=>t.map(e=>d.jsxs("div",{style:{marginLeft:"24px"},children:[d.jsx(K,{label:e.label,checked:a.includes(e.id),indeterminate:v(e),onChange:r=>m(e,r.target.checked)}),e.children&&h(e.children)]},e.id));return d.jsx("div",{children:h(u)})};p.__docgenInfo={description:"",methods:[],displayName:"CheckboxTree",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:"樹形結構資料"},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前選中節點 id 陣列（受控模式，可選）",defaultValue:{value:"[]",computed:!1}},indeterminateKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前 indeterminate 狀態的節點 id 陣列（可選）"},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"勾選狀態變更時的回呼函式"},onIndeterminateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"indeterminate 狀態變更時的回呼函式（可選）"}}};const W={title:"Components/Atoms/Checkbox/CheckboxTree",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"}}},x=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],T={render:function(a){const[s,m]=w.useState([]);return d.jsx(p,{...a,checkedKeys:s,onChecked:m})}},o={...T,args:{data:x},parameters:{docs:{source:{code:`
<CheckboxTree
  data={sampleData}
  checkedKeys={checkedKeys}
  onChecked={setCheckedKeys}
/>`.trim()}}}},c={...T,args:{data:x,checkedKeys:["1-1","2-1-1"]}};var y,g,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData
  },
  parameters: {
    docs: {
      source: {
        code: \`
<CheckboxTree
  data={sampleData}
  checkedKeys={checkedKeys}
  onChecked={setCheckedKeys}
/>\`.trim()
      }
    }
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var C,b,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: ["1-1", "2-1-1"]
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const X=["BasicUsage","InitiallyChecked"];export{o as BasicUsage,c as InitiallyChecked,X as __namedExportsOrder,W as default};
