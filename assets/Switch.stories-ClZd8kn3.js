import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-DRSUy1mj.js";import{S as g}from"./Rest-DPHg0exl.js";import"./Alert-BXVqmw5v.js";import"./Avatar-BwnX3fSq.js";import"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-BTC8HJGy.js";import{e as I}from"./Modal-BHwqZrHA.js";import"./BottomModal-CQgISz-Y.js";import"./Profile-CwMu8OsX.js";import{o as w}from"./Typography-BcGPB_gl.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-Dvesi0jg.js";import"./FormControlLabel-S5Kd-VCb.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-Dpzk0ddK.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-CX_v8mKZ.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-Kbwq-I49.js";import"./AccordionSummary-D8DSbU2C.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,mr={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},r={args:{disabled:!1,size:"large",color:"error"}},e={args:{disabled:!1,selectedIcon:t.jsx(w,{}),unselectedIcon:t.jsx(I,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return t.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var s,c,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: "large",
    color: "error"
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    disabled: false,
    selectedIcon: <CheckIcon />,
    unselectedIcon: <XIcon />,
    size: "small"
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const pr=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,e as IconSwitch,r as NormalSwitch,pr as __namedExportsOrder,mr as default};
