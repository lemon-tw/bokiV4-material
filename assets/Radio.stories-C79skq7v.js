import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as U}from"./index-D4H_InIO.js";import{R as a}from"./Radio-BjAXm5Ss.js";import"./defaultPalette-CDIRQpAz.js";import"./DefaultPropsProvider-DqVT3Pki.js";import"./FormControlLabel-Bx_LTtIb.js";import"./memoTheme-DkEl0Jev.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-D9yE0s1_.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-DBLLtZzJ.js";import"./index-D641xpmC.js";import"./useTheme-Dm3NhWHt.js";import"./extendSxProp-Cr0utasV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-BX-FO1OC.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-DunFoCRt.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./createSvgIcon-FE0mXunH.js";import"./createChainedFunction-BO_9K8Jh.js";const X={title:"Components/Atoms/Radio/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},disabled:{control:"boolean"}},args:{}},j=e=>{const[D,y]=U.useState(!1),L=T=>{y(T.target.checked)};return r.jsx(a,{...e,checked:D,onChange:L})},o={render:e=>r.jsx(j,{...e}),parameters:{docs:{source:{code:`
<Radio />`.trim()}}}},t={render:e=>r.jsx(j,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio label="Standard 樣式"/>`.trim()}}}},s={render:e=>r.jsx(a,{...e,defaultChecked:!1})},d={render:e=>r.jsx(a,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>`.trim()}}}},n={render:e=>r.jsx(a,{...e,disabled:!0,label:"Disabled 樣式"}),parameters:{docs:{source:{code:`
<Radio 
  disabled={true}
  label="Disabled 樣式"
/>`.trim()}}}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio />\`.trim()
      }
    }
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Radio label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,R;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Radio {...args} defaultChecked={false} />
}`,...(R=(g=s.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var f,h,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Y=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Disabled"];export{n as Disabled,o as Standard,s as Uncontrolled,d as UncontrolledWithLabel,t as WithLabel,Y as __namedExportsOrder,X as default};
