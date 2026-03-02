import{j as m}from"./jsx-runtime-BO8uF4Og.js";import{R as c}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{B as n}from"./Rest-DPHg0exl.js";import"./Alert-BXVqmw5v.js";import"./Avatar-BwnX3fSq.js";import"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-BTC8HJGy.js";import"./Modal-BHwqZrHA.js";import"./BottomModal-CQgISz-Y.js";import"./Profile-CwMu8OsX.js";import"./Typography-BcGPB_gl.js";import{fn as u}from"./index-Cf3xVBfy.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-Dvesi0jg.js";import"./FormControlLabel-S5Kd-VCb.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-Dpzk0ddK.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-CX_v8mKZ.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-Kbwq-I49.js";import"./AccordionSummary-D8DSbU2C.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const eo={title:"Components/Atoms/Radio/RadioGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:u()}},d=o=>{const[p,l]=c.useState(o.value),i=s=>{l(s.target.value)};return m.jsx(n,{...o,value:p,onChange:i})},e={render:o=>m.jsx(d,{...o}),parameters:{docs:{source:{code:`
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const to=["Standard"];export{e as Standard,to as __namedExportsOrder,eo as default};
