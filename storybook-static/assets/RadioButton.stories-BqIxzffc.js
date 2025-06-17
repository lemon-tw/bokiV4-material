import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as T}from"./index-D4lIrffr.js";import{R as a}from"./RadioButton-DiMGgFUl.js";import"./defaultPalette-oHICA1rp.js";import"./FormControlLabel-C9S6ue6v.js";import"./useForkRef-DKvbwOfq.js";import"./DefaultPropsProvider-C_D9gtOx.js";import"./useSlot-DDFSxm4c.js";import"./SwitchBase-v29BblHh.js";import"./createSimplePaletteValueFilter-BFDY_7o5.js";import"./useEnhancedEffect-BJR13lql.js";import"./index-D-5puQfV.js";import"./useTheme-Bv91CFUT.js";const H={title:"Components/RadioButton/RadioButton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},k=e=>{const[j,D]=T.useState(!1),y=L=>{D(L.target.checked)};return r.jsx(a,{...e,checked:j,onChange:y})},t={render:e=>r.jsx(k,{...e}),parameters:{docs:{source:{code:`
<RadioButton />`.trim()}}}},o={render:e=>r.jsx(k,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<RadioButton label="Standard 樣式"/>`.trim()}}}},s={render:e=>r.jsx(a,{...e,defaultChecked:!1})},n={render:e=>r.jsx(a,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<RadioButton 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim()}}}},d={render:e=>r.jsx(a,{...e,disabled:!0,label:"Disabled 樣式"}),parameters:{docs:{source:{code:`
<RadioButton 
  disabled={true}
  label="Disabled 樣式"
/>`.trim()}}}};var c,l,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<RadioButton />\`.trim()
      }
    }
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<RadioButton label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,R;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <RadioButton {...args} defaultChecked={false} />
}`,...(R=(g=s.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var f,h,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <RadioButton {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<RadioButton 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>\`.trim()
      }
    }
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var B,x,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <RadioButton {...args} disabled={true} label="Disabled 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<RadioButton 
  disabled={true}
  label="Disabled 樣式"
/>\`.trim()
      }
    }
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const J=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{d as Disabled,t as Standard,s as Uncontrolled,n as UncontrolledWithLabel,o as WithLabel,J as __namedExportsOrder,H as default};
