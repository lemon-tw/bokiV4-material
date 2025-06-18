import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as T}from"./index-D4lIrffr.js";import{R as a}from"./RadioButton-DKBd1PW0.js";import"./defaultPalette-BE1cnLGS.js";import"./DefaultPropsProvider-5n8G3NgK.js";import"./FormControlLabel-CdQqmBan.js";import"./useForkRef-QEm3Xmwm.js";import"./useSlot-AdCofFHF.js";import"./SwitchBase-BG8z4rOO.js";import"./createSimplePaletteValueFilter-iJNRV5yI.js";import"./Typography-bGj9uUIn.js";import"./index-2sH-j2OF.js";import"./useTheme-C8AFebTY.js";import"./createChainedFunction-BO_9K8Jh.js";const J={title:"Components/RadioButton/RadioButton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},k=e=>{const[j,D]=T.useState(!1),y=L=>{D(L.target.checked)};return r.jsx(a,{...e,checked:j,onChange:y})},t={render:e=>r.jsx(k,{...e}),parameters:{docs:{source:{code:`
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const K=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{d as Disabled,t as Standard,s as Uncontrolled,n as UncontrolledWithLabel,o as WithLabel,K as __namedExportsOrder,J as default};
