import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-Bb89J2P2.js";import{S as g}from"./Calendar-BaGtf-Ws.js";import"./Cart-D-pvBHLo.js";import"./Profile-SZVm7_dG.js";import"./ToggleButton-C9hjwxNF.js";import{e as I}from"./BottomModal-eKP2Btm8.js";import{o as w}from"./Typography-BwE3U6T_.js";import"./index-D4H_InIO.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-BiUdnq83.js";import"./CheckCircle.es-D_AxlQm-.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Users.es-oVc931zI.js";import"./Warning.es-TWNjRQ8R.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,q={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:s.jsx(w,{}),unselectedIcon:s.jsx(I,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return s.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var a,i,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,r as IconSwitch,e as NormalSwitch,v as __namedExportsOrder,q as default};
