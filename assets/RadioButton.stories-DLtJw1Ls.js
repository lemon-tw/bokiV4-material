import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as T}from"./index-D4H_InIO.js";import{R as a}from"./RadioButton-C9vaJ0hH.js";import"./defaultPalette-zaxAseiV.js";import"./DefaultPropsProvider-JiJShTPV.js";import"./FormControlLabel-C8HEq9uy.js";import"./memoTheme-Dg8ftLGV.js";import"./useSlot-DUJno6SE.js";import"./SwitchBase-CU2fCIW4.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-C4UZesTi.js";import"./Typography-BkLxxeGW.js";import"./index-BINuD49I.js";import"./useTheme-DmlEiKNM.js";import"./extendSxProp-CPCMrNKz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-5TDCF_r7.js";import"./createChainedFunction-BO_9K8Jh.js";const P={title:"Components/RadioButton/RadioButton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},k=e=>{const[j,D]=T.useState(!1),y=L=>{D(L.target.checked)};return r.jsx(a,{...e,checked:j,onChange:y})},t={render:e=>r.jsx(k,{...e}),parameters:{docs:{source:{code:`
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Q=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{d as Disabled,t as Standard,s as Uncontrolled,n as UncontrolledWithLabel,o as WithLabel,Q as __namedExportsOrder,P as default};
