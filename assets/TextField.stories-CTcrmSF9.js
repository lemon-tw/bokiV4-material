import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{T as b,I as F,M as f}from"./TextField-DaTS9yCu.js";import{M as v}from"./MenuItem-CpzsOz1K.js";import"./index-D4H_InIO.js";import"./IconBase.esm-BbKRF193.js";import"./defaultPalette-CDIRQpAz.js";import"./DefaultPropsProvider-DqVT3Pki.js";import"./memoTheme-DkEl0Jev.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-DBLLtZzJ.js";import"./index-D641xpmC.js";import"./useTheme-Dm3NhWHt.js";import"./extendSxProp-Cr0utasV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./WarningCircle.esm-DXvYe1ll.js";import"./TextField-CZVtwrgg.js";import"./useSlot-D9yE0s1_.js";import"./useId-CN9_kA9R.js";import"./formControlState-Dq1zat_P.js";import"./Menu-wCs4t9Vd.js";import"./index-Bm8UbI65.js";import"./useSlotProps-CxyZS-qg.js";import"./Paper-Cc5LuG26.js";import"./useTheme-DpjMkLyW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BMu7p32D.js";import"./utils-DUkByWFw.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-DVNWasIp.js";import"./mergeSlotProps-sSfPEMoJ.js";import"./Modal-BpHdIFDV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormLabel-DZ8OOg4w.js";import"./isMuiElement-d7vxVVg4.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-FE0mXunH.js";import"./MenuItem-DaMy8pAo.js";import"./ButtonBase-DunFoCRt.js";const ir={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},r={args:{error:!1,label:"label",variant:"outlined"}},e={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:o.jsx(F,{position:"start",children:o.jsx(f,{})})}}},parameters:{docs:{source:{code:`
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
`.trim()}}}},t={render:g=>{const x=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return o.jsx(b,{...g,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:x.map(n=>o.jsx(v,{value:n.value,children:n.label},n.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <MagnifyingGlass />\r
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
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ur=["Normal","WithIcon","Select"];export{r as Normal,t as Select,e as WithIcon,ur as __namedExportsOrder,ir as default};
