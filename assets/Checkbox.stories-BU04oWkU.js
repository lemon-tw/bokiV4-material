import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as W}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{w as t}from"./Calendar-C2bZlQ4a.js";import"./Alert-ClZS_Bwn.js";import"./Avatar-BQ2BYgfS.js";import"./ToggleButton-CCo_jApl.js";import"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-DpoTxBBn.js";import"./Typography-BZQ6nlo4.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-U-oX7qnb.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const be={title:"Components/Atoms/Checkbox/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},y=e=>{const[I,L]=W.useState(!1),T=U=>{L(U.target.checked)};return r.jsx(t,{...e,checked:I,onChange:T})},o={render:e=>r.jsx(y,{...e}),parameters:{docs:{source:{code:`
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
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const he=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate"];export{c as Indeterminate,o as Standard,n as Uncontrolled,s as UncontrolledWithLabel,a as WithLabel,he as __namedExportsOrder,be as default};
