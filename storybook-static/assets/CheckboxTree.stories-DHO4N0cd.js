import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{C as v}from"./Checkbox-91P-jMj5.js";import{r as j}from"./index-D4lIrffr.js";import"./defaultPalette-oHICA1rp.js";import"./useForkRef-DKvbwOfq.js";import"./DefaultPropsProvider-C_D9gtOx.js";import"./FormControlLabel-C9S6ue6v.js";import"./useSlot-DDFSxm4c.js";import"./SwitchBase-v29BblHh.js";import"./createSimplePaletteValueFilter-BFDY_7o5.js";import"./useEnhancedEffect-BJR13lql.js";import"./index-D-5puQfV.js";import"./useTheme-Bv91CFUT.js";const p=({data:h,checkedKeys:a=[],onChecked:s})=>{const l=(t,e)=>{const r=m(t),n=e?[...new Set([...a,...r])]:a.filter(c=>!r.includes(c));s==null||s(n)},m=t=>{var r;let e=[t.id];return(r=t.children)==null||r.forEach(n=>{e=[...e,...m(n)]}),e},K=t=>{const e=m(t).slice(1),r=e.some(c=>a.includes(c)),n=e.every(c=>a.includes(c));return r&&!n},u=t=>t.map(e=>d.jsxs("div",{style:{marginLeft:"24px"},children:[d.jsx(v,{label:e.label,checked:a.includes(e.id),indeterminate:K(e),onChange:r=>l(e,r.target.checked)}),e.children&&u(e.children)]},e.id));return d.jsx("div",{children:u(h)})};p.__docgenInfo={description:"",methods:[],displayName:"CheckboxTree",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:""},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:""}}};const O={title:"Components/Checkbox/CheckboxTree",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"}}},T=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],f={render:function(a){const[s,l]=j.useState([]);return d.jsx(p,{...a,checkedKeys:s,onChecked:l})}},o={...f,args:{data:T},parameters:{docs:{source:{code:`
<CheckboxTree
  data={sampleData}
  checkedKeys={checkedKeys}
  onChecked={setCheckedKeys}
/>`.trim()}}}},i={...f,args:{data:T,checkedKeys:["1-1","2-1-1"]}};var y,k,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var C,b,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    data: sampleData,
    checkedKeys: ["1-1", "2-1-1"]
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const V=["BasicUsage","InitiallyChecked"];export{o as BasicUsage,i as InitiallyChecked,V as __namedExportsOrder,O as default};
