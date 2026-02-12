import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as W}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{w as t}from"./Rest-Bw1LHVd7.js";import"./Alert-9_z-GEVK.js";import"./Avatar-kr3oDakC.js";import"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import"./Typography-BcGPB_gl.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const he={title:"Components/Atoms/Checkbox/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},y=e=>{const[I,L]=W.useState(!1),T=U=>{L(U.target.checked)};return r.jsx(t,{...e,checked:I,onChange:T})},o={render:e=>r.jsx(y,{...e}),parameters:{docs:{source:{code:`
<Checkbox />`.trim()}}}},a={render:e=>r.jsx(y,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox label="Standard 樣式"/>`.trim()}}}},n={render:e=>r.jsx(t,{...e,defaultChecked:!1}),parameters:{docs:{source:{code:`
<Checkbox defaultChecked={false}/>`.trim()}}}},s={render:e=>r.jsx(t,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  `.trim()}}}},c={render:e=>r.jsx(t,{...e,indeterminate:!0,label:"indeterminate"})};var d,m,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox />\`.trim()
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,h,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} defaultChecked={false} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox defaultChecked={false}/>\`.trim()
      }
    }
  }
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,x,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  \`.trim()
      }
    }
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,S,j;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} indeterminate={true} label="indeterminate" />
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Ce=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate"];export{c as Indeterminate,o as Standard,n as Uncontrolled,s as UncontrolledWithLabel,a as WithLabel,Ce as __namedExportsOrder,he as default};
