import{j as t}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DRSUy1mj.js";import{q as b,s as F,c as I}from"./Rest-Bw1LHVd7.js";import{I as v}from"./Alert-9_z-GEVK.js";import"./Avatar-kr3oDakC.js";import"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import"./Typography-BcGPB_gl.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const lr={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},r={args:{error:!1,label:"label",variant:"outlined"}},e={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:t.jsx(v,{position:"start",children:t.jsx(F,{})})}}},parameters:{docs:{source:{code:`
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
`.trim()}}}},o={render:x=>{const g=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return t.jsx(b,{...x,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:g.map(n=>t.jsx(I,{value:n.value,children:n.label},n.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label",
    variant: "outlined"
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,u,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const sr=["Normal","WithIcon","Select"];export{r as Normal,o as Select,e as WithIcon,sr as __namedExportsOrder,lr as default};
