import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as W}from"./index-D4H_InIO.js";import{C as a}from"./Checkbox-DFeu6vpw.js";import"./defaultPalette-Cd1iQw4V.js";import"./DefaultPropsProvider-BDoOoArL.js";import"./memoTheme-CdwOf2Zq.js";import"./FormControlLabel-B73vfJXc.js";import"./useSlot-ButF_PD0.js";import"./SwitchBase-DObAijpa.js";import"./ButtonBase-C8Vo-zy8.js";import"./Typography-BTztMoTT.js";import"./index-DWJUMdO7.js";import"./useTheme-DcF0HAVz.js";import"./extendSxProp-D1SuGYEU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Ds0YbM2w.js";import"./mergeSlotProps-CBOfPbS_.js";const N={title:"Components/Checkbox/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},y=e=>{const[I,L]=W.useState(!1),T=U=>{L(U.target.checked)};return r.jsx(a,{...e,checked:I,onChange:T})},t={render:e=>r.jsx(y,{...e}),parameters:{docs:{source:{code:`
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const P=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate"];export{c as Indeterminate,t as Standard,n as Uncontrolled,s as UncontrolledWithLabel,o as WithLabel,P as __namedExportsOrder,N as default};
