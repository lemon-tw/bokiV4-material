import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as c}from"./index-D4H_InIO.js";import"./lemonTheme-Cff-IwOP.js";import"./Cart-Bggd5MJL.js";import"./Profile-LD9QASci.js";import"./ToggleButton-nmKaFVRX.js";import{E as l}from"./Calendar-De-M7FAW.js";import"./BottomModal-CO6eF4lz.js";import{fn as u}from"./index-Cf3xVBfy.js";import"./DefaultPropsProvider-BaK2E95z.js";import"./CheckCircle.es-CCP3thZb.js";import"./index-Bm8UbI65.js";import"./index-Dgl_MXap.js";import"./getThemeProps-CgMh0Kv1.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-QawvxuqF.js";import"./Copy.es-Dlh5z7f2.js";const V={title:"Components/Atoms/Radio/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:u()}},d=e=>{const[m,s]=c.useState(e.value),p=i=>{s(i.target.value)};return n.jsx(l,{...e,value:m,onChange:p})},a={render:e=>n.jsx(d,{...e}),parameters:{docs:{source:{code:`
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
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const q=["Standard"];export{a as Standard,q as __namedExportsOrder,V as default};
