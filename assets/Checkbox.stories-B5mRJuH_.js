import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as W}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{x as t}from"./Rest-BC3fsDfS.js";import"./Alert-C3r4vYPZ.js";import"./Avatar-pRnr6DU5.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./Modal-BPmM9JPO.js";import"./BottomModal-imHOmNSj.js";import"./Profile-CdAcNaFX.js";import"./Typography-BZQ6nlo4.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-z4MSENyy.js";import"./FormControlLabel-D0F9NOZF.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const be={title:"Components/Atoms/Checkbox/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},y=e=>{const[I,L]=W.useState(!1),T=U=>{L(U.target.checked)};return r.jsx(t,{...e,checked:I,onChange:T})},o={render:e=>r.jsx(y,{...e}),parameters:{docs:{source:{code:`
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} defaultChecked={false} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox defaultChecked={false}/>\`.trim()
      }
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,k,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,S,j;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} indeterminate={true} label="indeterminate" />
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const he=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate"];export{c as Indeterminate,o as Standard,n as Uncontrolled,s as UncontrolledWithLabel,a as WithLabel,he as __namedExportsOrder,be as default};
