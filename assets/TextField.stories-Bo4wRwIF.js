import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{T as b,M as F}from"./TextField-I40lJZhW.js";import{M as f}from"./MenuItem-D3HTuJMK.js";import{I as v}from"./InputAdornment-DSnUWkrL.js";import"./index-D4H_InIO.js";import"./IconBase.esm-BbKRF193.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-C83d1A0S.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./WarningCircle.esm-DXvYe1ll.js";import"./TextField-BZkOxHPq.js";import"./useSlot-BWf5NxIe.js";import"./useId-CN9_kA9R.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Menu-Fjad2nT1.js";import"./index-Bm8UbI65.js";import"./useSlotProps-qwZrg_4U.js";import"./Paper-B8zVEXaw.js";import"./useTheme-CfJJ7vPb.js";import"./useTheme-Bh-_xkMb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-zgzfA1CP.js";import"./utils-bnsn1T2-.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-LBlGjCQn.js";import"./mergeSlotProps-DQ9n5Pzv.js";import"./Modal-DVo_Vf6F.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-zquPRXLs.js";import"./extendSxProp-BVuH4Y-a.js";import"./FormLabel-D9ocC7H4.js";import"./isMuiElement-d7vxVVg4.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-DPKGROsd.js";import"./MenuItem-eopvwNYj.js";import"./ButtonBase-CP1Oo1Bo.js";import"./Typography-D9Rxpb2u.js";const ur={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},r={args:{error:!1,label:"label",variant:"outlined"}},e={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:o.jsx(v,{position:"start",children:o.jsx(F,{})})}}},parameters:{docs:{source:{code:`
<TextField
  defaultValue="Placeholder"
  label="With Icon"
  slotProps={{
    input: {
      startAdornment:
        <InputAdornment position="start">
          <MagnifyingGlass />
        </InputAdornment>
    }
  }}
/>
`.trim()}}}},t={render:g=>{const x=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return o.jsx(b,{...g,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:x.map(n=>o.jsx(f,{value:n.value,children:n.label},n.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label",
    variant: "outlined"
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,p,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "With Icon",
    defaultValue: "Placeholder",
    slotProps: {
      input: {
        startAdornment: <InputAdornment position="start">
            <MagnifyingGlass />
          </InputAdornment>
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
<TextField
  defaultValue="Placeholder"
  label="With Icon"
  slotProps={{
    input: {
      startAdornment:
        <InputAdornment position="start">
          <MagnifyingGlass />
        </InputAdornment>
    }
  }}
/>
\`.trim()
      }
    }
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const currencies = [{
      value: "1audult1room",
      label: "一間房 一位成人"
    }, {
      value: "2audult1room",
      label: "一間房 兩位成人"
    }, {
      value: "1audult4room",
      label: "一間房 四位成人"
    }, {
      value: "4audult2room",
      label: "兩間房 四位成人"
    }];
    return <TextField {...args} slotProps={{
      input: {
        disableUnderline: true
      }
    }} helperText="Please select your currency" sx={{
      "& .MuiFilledInput-root": {
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        border: "1px solid",
        borderColor: "#E0E3E7"
      }
    }}>
        {currencies.map(option => <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>)}
      </TextField>;
  },
  args: {
    label: "Select",
    defaultValue: "1audult1room",
    variant: "filled",
    select: true
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const mr=["Normal","WithIcon","Select"];export{r as Normal,t as Select,e as WithIcon,mr as __namedExportsOrder,ur as default};
