import{j as m}from"./jsx-runtime-BO8uF4Og.js";import{R as c}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{B as n}from"./Calendar-C2bZlQ4a.js";import"./Alert-ClZS_Bwn.js";import"./Avatar-BQ2BYgfS.js";import"./ToggleButton-CCo_jApl.js";import"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-DpoTxBBn.js";import"./Typography-BZQ6nlo4.js";import{fn as u}from"./index-Cf3xVBfy.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-U-oX7qnb.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const oo={title:"Components/Atoms/Radio/RadioGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:u()}},d=o=>{const[l,p]=c.useState(o.value),i=s=>{p(s.target.value)};return m.jsx(n,{...o,value:l,onChange:i})},e={render:o=>m.jsx(d,{...o}),parameters:{docs:{source:{code:`
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

`.trim()}}}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const eo=["Standard"];export{e as Standard,eo as __namedExportsOrder,oo as default};
