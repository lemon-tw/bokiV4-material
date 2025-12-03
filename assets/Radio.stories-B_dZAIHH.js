import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{R as U}from"./index-D4H_InIO.js";import"./lemonTheme-XVakIAq2.js";import{a6 as r}from"./Calendar-D4VDGI_h.js";import"./DefaultPropsProvider-BZF_OTnr.js";import"./IconBase.es-wFTi3CwP.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const z={title:"Components/Atoms/Radio/Radio",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},j=e=>{const[D,y]=U.useState(!1),L=T=>{y(T.target.checked)};return a.jsx(r,{...e,checked:D,onChange:L})},s={render:e=>a.jsx(j,{...e}),parameters:{docs:{source:{code:`
<Radio />`.trim()}}}},o={render:e=>a.jsx(j,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio label="Standard 樣式"/>`.trim()}}}},t={render:e=>a.jsx(r,{...e,defaultChecked:!1})},d={render:e=>a.jsx(r,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim()}}}},n={render:e=>a.jsx(r,{...e,disabled:!0,label:"Disabled 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>`.trim()}}}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio />\`.trim()
      }
    }
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Radio {...args} defaultChecked={false} />
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var R,h,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const B=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{n as Disabled,s as Standard,t as Uncontrolled,d as UncontrolledWithLabel,o as WithLabel,B as __namedExportsOrder,z as default};
