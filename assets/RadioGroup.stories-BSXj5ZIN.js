import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as c}from"./index-D4H_InIO.js";import"./lemonTheme-Bb89J2P2.js";import{E as l}from"./Calendar-BaGtf-Ws.js";import"./Cart-D-pvBHLo.js";import"./Profile-SZVm7_dG.js";import"./ToggleButton-C9hjwxNF.js";import"./BottomModal-eKP2Btm8.js";import"./Typography-BwE3U6T_.js";import{fn as u}from"./index-Cf3xVBfy.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-BiUdnq83.js";import"./CheckCircle.es-D_AxlQm-.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Users.es-oVc931zI.js";import"./Warning.es-TWNjRQ8R.js";const B={title:"Components/Atoms/Radio/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:u()}},d=e=>{const[m,p]=c.useState(e.value),s=i=>{p(i.target.value)};return n.jsx(l,{...e,value:m,onChange:s})},a={render:e=>n.jsx(d,{...e}),parameters:{docs:{source:{code:`
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
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const D=["Standard"];export{a as Standard,D as __namedExportsOrder,B as default};
