import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as W}from"./index-D4H_InIO.js";import"./lemonTheme-CMs8ldpH.js";import{x as a}from"./Calendar-CieY2Rnp.js";import"./Cart-C8E3AIEA.js";import"./Profile-MdmuAn2z.js";import"./ToggleButton-Cu_SBuig.js";import"./BottomModal-BE48lkrf.js";import"./Typography-BvOlI2Tp.js";import"./defaultPalette-DUshvIvh.js";import"./dayjs.min-Jy-M90ON.js";import"./CheckCircle.es-tQkoT-Dh.js";import"./Link-C1vULwQI.js";import"./Copy.es-C8nfs54p.js";import"./getThemeProps-DIZMmmV_.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BpAPiKPx.js";import"./index-Bm8UbI65.js";import"./WarningCircle.es-Dc7_P-Py.js";const X={title:"Components/Atoms/Checkbox/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},y=e=>{const[I,L]=W.useState(!1),T=U=>{L(U.target.checked)};return r.jsx(a,{...e,checked:I,onChange:T})},t={render:e=>r.jsx(y,{...e}),parameters:{docs:{source:{code:`
<Checkbox />`.trim()}}}},o={render:e=>r.jsx(y,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox label="Standard 樣式"/>`.trim()}}}},n={render:e=>r.jsx(a,{...e,defaultChecked:!1}),parameters:{docs:{source:{code:`
<Checkbox defaultChecked={false}/>`.trim()}}}},s={render:e=>r.jsx(a,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  `.trim()}}}},c={render:e=>r.jsx(a,{...e,indeterminate:!0,label:"indeterminate"})};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox />\`.trim()
      }
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Y=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate"];export{c as Indeterminate,t as Standard,n as Uncontrolled,s as UncontrolledWithLabel,o as WithLabel,Y as __namedExportsOrder,X as default};
