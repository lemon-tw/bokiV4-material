import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as U}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{z as a}from"./Calendar-BmNj-m-2.js";import"./Alert-ClZS_Bwn.js";import"./Avatar-BQ2BYgfS.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-DgRM22Vn.js";import"./Typography-BZQ6nlo4.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-CPwjJtCI.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const be={title:"Components/Atoms/Radio/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},j=e=>{const[D,y]=U.useState(!1),L=T=>{y(T.target.checked)};return r.jsx(a,{...e,checked:D,onChange:L})},o={render:e=>r.jsx(j,{...e}),parameters:{docs:{source:{code:`
<Radio />`.trim()}}}},t={render:e=>r.jsx(j,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio label="Standard 樣式"/>`.trim()}}}},s={render:e=>r.jsx(a,{...e,defaultChecked:!1})},d={render:e=>r.jsx(a,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim()}}}},n={render:e=>r.jsx(a,{...e,disabled:!0,label:"Disabled 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>`.trim()}}}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio />\`.trim()
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const ge=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{n as Disabled,o as Standard,s as Uncontrolled,d as UncontrolledWithLabel,t as WithLabel,ge as __namedExportsOrder,be as default};
