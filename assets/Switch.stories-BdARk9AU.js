import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-DbLJfmwh.js";import{S as g}from"./Calendar-DGseMECJ.js";import{o as I}from"./Profile-BgdNPY20.js";import{e as w}from"./BottomModal-Dlt3Pqpu.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-BtL_yMcr.js";import"./CaretRight.es-CgghsZ2Q.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:s.jsx(I,{}),unselectedIcon:s.jsx(w,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return s.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var c,n,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,d,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const B=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,r as IconSwitch,e as NormalSwitch,B as __namedExportsOrder,P as default};
