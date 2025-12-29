import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as u}from"./index-D4H_InIO.js";import"./lemonTheme-C4MvoXbo.js";import"./Profile-CyJOgG7d.js";import{F as l}from"./Calendar-DfT9bNPn.js";import"./BottomModal-C5GXhLgl.js";import{fn as i}from"./index-Cf3xVBfy.js";import"./DefaultPropsProvider-BlyGpf_x.js";import"./Tabs-BNkIb3QA.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const T={title:"Components/Atoms/Radio/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:i()}},d=e=>{const[s,m]=u.useState(e.value),p=c=>{m(c.target.value)};return n.jsx(l,{...e,value:s,onChange:p})},a={render:e=>n.jsx(d,{...e}),parameters:{docs:{source:{code:`
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
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const E=["Standard"];export{a as Standard,E as __namedExportsOrder,T as default};
