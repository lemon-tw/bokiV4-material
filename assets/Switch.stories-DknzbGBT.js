import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{fn as k}from"./index-Cf3xVBfy.js";import"./lemonTheme-DRSUy1mj.js";import{S as g}from"./Rest-CG94CFjf.js";import"./Alert-DRAbsrNu.js";import"./Avatar-kr3oDakC.js";import"./ToggleButton-B_1nB3DD.js";import"./DraggableChips-D0MI0M_6.js";import{e as I}from"./Modal-C5rE0h8n.js";import"./BottomModal-byrGeGWZ.js";import"./Profile-C3shN0iq.js";import{o as w}from"./Typography-CFfHvyVk.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-g-olUpuS.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,ie={title:"components/Atoms/Switch/Switch",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedIcon:{control:!1},unselectedIcon:{control:!1},size:{options:["small","medium","large"],control:{type:"radio"}}},args:{onClick:k()}},e={args:{disabled:!1,size:"large",color:"error"}},r={args:{disabled:!1,selectedIcon:t.jsx(w,{}),unselectedIcon:t.jsx(I,{}),size:"small"}},o={render:u=>{const[{checked:h},f]=_();return t.jsx(g,{...u,checked:h,onChange:S=>f({checked:S.target.checked})})},args:{disabled:!1},argTypes:{checked:{control:"boolean",description:"開關狀態"}}};var s,c,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const me=["NormalSwitch","IconSwitch","ControlledSwitch"];export{o as ControlledSwitch,r as IconSwitch,e as NormalSwitch,me as __namedExportsOrder,ie as default};
