import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{ab as g,a as I,ac as w}from"./Calendar-Dr32-U0b.js";import"./index-D4H_InIO.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:o.jsx(w,{}),unselectedIcon:o.jsx(I,{}),size:"small"}},s={render:u=>{const[{checked:h},f]=b();return o.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var a,c,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var t,d,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["NormalSwitch","IconSwitch","ControlledSwitch"];export{s as ControlledSwitch,r as IconSwitch,e as NormalSwitch,T as __namedExportsOrder,O as default};
