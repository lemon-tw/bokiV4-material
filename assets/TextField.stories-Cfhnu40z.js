import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DGlRE1oP.js";import{M as F}from"./Typography-2_fYrsYp.js";import{h as b,i as f}from"./RichTooltip-Cx3E0wiy.js";import{o as v}from"./MagnifyingGlass.es-DH9aAMvZ.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const V={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},e={args:{error:!1,label:"label",variant:"outlined"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:o.jsx(f,{position:"start",children:o.jsx(v,{})})}}},parameters:{docs:{source:{code:`
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
`.trim()}}}},n={render:x=>{const g=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return o.jsx(b,{...x,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:g.map(t=>o.jsx(F,{value:t.value,children:t.label},t.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label",
    variant: "outlined"
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var u,d,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "With Icon",
    defaultValue: "Placeholder",
    slotProps: {
      input: {
        startAdornment: <InputAdornment position="start">\r
            <MagnifyingGlassIcon />\r
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }}>\r
        {currencies.map(option => <MenuItem key={option.value} value={option.value}>\r
            {option.label}\r
          </MenuItem>)}\r
      </TextField>;
  },
  args: {
    label: "Select",
    defaultValue: "1audult1room",
    variant: "filled",
    select: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const W=["Normal","WithIcon","Select"];export{e as Normal,n as Select,r as WithIcon,W as __namedExportsOrder,V as default};
