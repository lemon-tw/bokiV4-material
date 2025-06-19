import{j as d}from"./jsx-runtime-BO8uF4Og.js";import{C as K}from"./Checkbox-F9rK6g2L.js";import{r as w}from"./index-D4H_InIO.js";import"./defaultPalette-DlcfKNQ6.js";import"./DefaultPropsProvider-BDoOoArL.js";import"./createSvgIcon-D0snID3m.js";import"./FormControlLabel-xMbLjCuT.js";import"./useSlot-C1rtH0nw.js";import"./SwitchBase-2tAMAaM_.js";import"./ButtonBase-B-HqQx1y.js";import"./Typography-DrcvgLn1.js";import"./index-S1Q5x8nm.js";import"./useTheme-DcF0HAVz.js";import"./extendSxProp-D1SuGYEU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BsSSm734.js";const p=({data:u,checkedKeys:a=[],onChecked:n})=>{const m=(t,e)=>{const r=l(t),s=e?[...new Set([...a,...r])]:a.filter(i=>!r.includes(i));n==null||n(s)},l=t=>{var r;let e=[t.id];return(r=t.children)==null||r.forEach(s=>{e=[...e,...l(s)]}),e},v=t=>{const e=l(t).slice(1),r=e.some(i=>a.includes(i)),s=e.every(i=>a.includes(i));return r&&!s},h=t=>t.map(e=>d.jsxs("div",{style:{marginLeft:"24px"},children:[d.jsx(K,{label:e.label,checked:a.includes(e.id),indeterminate:v(e),onChange:r=>m(e,r.target.checked)}),e.children&&h(e.children)]},e.id));return d.jsx("div",{children:h(u)})};p.__docgenInfo={description:"",methods:[],displayName:"CheckboxTree",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:"樹形結構資料"},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前選中節點 id 陣列（受控模式，可選）",defaultValue:{value:"[]",computed:!1}},indeterminateKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"當前 indeterminate 狀態的節點 id 陣列（可選）"},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"勾選狀態變更時的回呼函式"},onIndeterminateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:"indeterminate 狀態變更時的回呼函式（可選）"}}};const F={title:"Components/Checkbox/CheckboxTree",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"}}},x=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],T={render:function(a){const[n,m]=w.useState([]);return d.jsx(p,{...a,checkedKeys:n,onChecked:m})}},c={...T,args:{data:x},parameters:{docs:{source:{code:`
<CheckboxTree
  data={sampleData}
  checkedKeys={checkedKeys}
  onChecked={setCheckedKeys}
/>`.trim()}}}},o={...T,args:{data:x,checkedKeys:["1-1","2-1-1"]}};var y,g,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(g=c.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var C,b,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: ["1-1", "2-1-1"]
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const G=["BasicUsage","InitiallyChecked"];export{c as BasicUsage,o as InitiallyChecked,G as __namedExportsOrder,F as default};
