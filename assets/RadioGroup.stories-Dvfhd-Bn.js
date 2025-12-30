import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as c}from"./index-D4H_InIO.js";import"./lemonTheme-DTEuxFv-.js";import"./Cart-DZe6QWu1.js";import"./Profile-CxjCQvFg.js";import{E as l}from"./Calendar-C_2atKOb.js";import"./BottomModal-CaYchdaY.js";import{fn as u}from"./index-Cf3xVBfy.js";import"./DefaultPropsProvider-3G7JM2kB.js";import"./dividerClasses-BcBmjACM.js";import"./Copy.es-DOCeV2_b.js";import"./getThemeProps-BLlXvYWn.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-CaH5NR6b.js";const k={title:"Components/Atoms/Radio/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:u()}},d=e=>{const[s,m]=c.useState(e.value),p=i=>{m(i.target.value)};return n.jsx(l,{...e,value:s,onChange:p})},a={render:e=>n.jsx(d,{...e}),parameters:{docs:{source:{code:`
const data=[
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: '其他', value: 'other' },
]

<RadioGroup
  label="性別選擇"
  options={data}
  value={value}
  onChange={handleChange}
/>

`.trim()}}}};var o,t,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
const data=[
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: '其他', value: 'other' },
]

<RadioGroup
  label="性別選擇"
  options={data}
  value={value}
  onChange={handleChange}
/>

\`.trim()
      }
    }
  }
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const A=["Standard"];export{a as Standard,A as __namedExportsOrder,k as default};
