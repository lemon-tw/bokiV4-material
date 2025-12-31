import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-D8Y1J3Ig.js";import"./Cart-qIvgB5t4.js";import{o as I}from"./Profile-kW0Qm_sa.js";import{S as g}from"./Calendar-B-s2EpR5.js";import{e as w}from"./BottomModal-CSbStmmY.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-3QJ_VXVD.js";import"./Copy.es-WJ0Du8LM.js";import"./getThemeProps-BCfUtUYi.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-C-KGOsN8.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:s.jsx(I,{}),unselectedIcon:s.jsx(w,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return s.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var c,t,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,d,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,r as IconSwitch,e as NormalSwitch,L as __namedExportsOrder,K as default};
