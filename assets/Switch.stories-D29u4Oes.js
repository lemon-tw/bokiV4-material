import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-CzmFcrQX.js";import"./Cart-C3K20dwi.js";import{o as I}from"./Profile-XeOp9uDf.js";import"./ToggleButton-oZXW10Qn.js";import{S as g}from"./Calendar-C3JQvePW.js";import{e as w}from"./BottomModal-BGRPiAzg.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-BUHaCmAf.js";import"./CheckCircle.es-CWUap0Ir.js";import"./index-Bm8UbI65.js";import"./Copy.es-C9oN9lTh.js";import"./getThemeProps-BwdQ335V.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-DUc-6XiH.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,U={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:s.jsx(I,{}),unselectedIcon:s.jsx(w,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return s.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var a,i,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    return <Switch {...args} checked={checked} onChange={e => updateArgs({
      checked: e.target.checked
    })} />;
  },
  args: {
    disabled: false
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "開關狀態"
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const V=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,r as IconSwitch,e as NormalSwitch,V as __namedExportsOrder,U as default};
