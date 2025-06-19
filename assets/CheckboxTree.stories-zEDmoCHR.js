import{j as d}from"./jsx-runtime-BO8uF4Og.js";import{C as v}from"./Checkbox-CIve5fGA.js";import{r as j}from"./index-D4H_InIO.js";import"./defaultPalette-CxKQFA3H.js";import"./DefaultPropsProvider-CH6vpq24.js";import"./createSvgIcon-CKKfgglB.js";import"./FormControlLabel-ChbeLmLf.js";import"./useSlot-BSCrVW2G.js";import"./SwitchBase-DBj-x1-U.js";import"./ButtonBase-Ch0mnvyj.js";import"./Typography-CXiYWeAC.js";import"./index-B7CLo2zY.js";import"./extendSxProp-InUS46pb.js";import"./mergeSlotProps-B5qGw4vV.js";const p=({data:h,checkedKeys:a=[],onChecked:s})=>{const l=(t,e)=>{const r=m(t),n=e?[...new Set([...a,...r])]:a.filter(c=>!r.includes(c));s==null||s(n)},m=t=>{var r;let e=[t.id];return(r=t.children)==null||r.forEach(n=>{e=[...e,...m(n)]}),e},K=t=>{const e=m(t).slice(1),r=e.some(c=>a.includes(c)),n=e.every(c=>a.includes(c));return r&&!n},u=t=>t.map(e=>d.jsxs("div",{style:{marginLeft:"24px"},children:[d.jsx(v,{label:e.label,checked:a.includes(e.id),indeterminate:K(e),onChange:r=>l(e,r.target.checked)}),e.children&&u(e.children)]},e.id));return d.jsx("div",{children:u(h)})};p.__docgenInfo={description:"",methods:[],displayName:"CheckboxTree",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:""},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChecked:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:""}}};const V={title:"Components/Checkbox/CheckboxTree",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object"}}},T=[{id:"1",label:"父節點1",children:[{id:"1-1",label:"子節點1-1"},{id:"1-2",label:"子節點1-2"}]},{id:"2",label:"父節點2",children:[{id:"2-1",label:"子節點2-1",children:[{id:"2-1-1",label:"孫節點2-1-1"},{id:"2-1-2",label:"孫節點2-1-2"}]}]}],f={render:function(a){const[s,l]=j.useState([]);return d.jsx(p,{...a,checkedKeys:s,onChecked:l})}},o={...f,args:{data:T},parameters:{docs:{source:{code:`
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const z=["BasicUsage","InitiallyChecked"];export{o as BasicUsage,i as InitiallyChecked,z as __namedExportsOrder,V as default};
