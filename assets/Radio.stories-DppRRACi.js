import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as U}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{y as a}from"./Rest-tDr7TA7b.js";import"./Alert-C4O2UbhG.js";import"./Avatar-BVa3lbN8.js";import"./ToggleButton-B_1nB3DD.js";import"./DraggableChips-Cqssnqvp.js";import"./Modal-d6heRAo4.js";import"./BottomModal-BdGv5m3s.js";import"./Profile-BM3a8Z3E.js";import"./Typography-CFfHvyVk.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-BDoXRaCv.js";import"./FormControlLabel-BHAu7ubQ.js";import"./useFormControl-Dnc_EiuP.js";import"./CaretDown.es-BrMieepg.js";import"./mergeSlotProps-DNuNo-y4.js";import"./Trash.es-Dpr1aoed.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-mCjdN8F2.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-XM0U5i7f.js";import"./CalendarBlank.es-BbqdSJFW.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-CX9ULaaP.js";import"./AccordionSummary-C21DAd0r.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const he={title:"Components/Atoms/Radio/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},j=e=>{const[D,y]=U.useState(!1),L=T=>{y(T.target.checked)};return r.jsx(a,{...e,checked:D,onChange:L})},o={render:e=>r.jsx(j,{...e}),parameters:{docs:{source:{code:`
<Radio />`.trim()}}}},t={render:e=>r.jsx(j,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio label="Standard 樣式"/>`.trim()}}}},s={render:e=>r.jsx(a,{...e,defaultChecked:!1})},d={render:e=>r.jsx(a,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim()}}}},n={render:e=>r.jsx(a,{...e,disabled:!0,label:"Disabled 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>`.trim()}}}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio />\`.trim()
      }
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Radio {...args} defaultChecked={false} />
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var R,h,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Radio {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>\`.trim()
      }
    }
  }
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,C,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Radio {...args} disabled={true} label="Disabled 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>\`.trim()
      }
    }
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Se=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{n as Disabled,o as Standard,s as Uncontrolled,d as UncontrolledWithLabel,t as WithLabel,Se as __namedExportsOrder,he as default};
