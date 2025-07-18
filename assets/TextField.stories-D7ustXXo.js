import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{T as b,o as F}from"./TextField-DAmfgc9Y.js";import{M as I}from"./MenuItem-Crf6pSjR.js";import{I as f}from"./InputAdornment-BssOETny.js";import"./index-D4H_InIO.js";import"./IconBase.es-F2kcR3Hr.js";import"./defaultPalette-fWaDn0-C.js";import"./WarningCircle.es-BJwRwsPd.js";import"./memoTheme-DQLz_w2O.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./TextField-YFjLigZH.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useId-CN9_kA9R.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Popover-yGUp7IJF.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CfgsmfYz.js";import"./useTheme-D4Xi4orm.js";import"./useTheme-BbNP3OZZ.js";import"./utils-BcbCFGQY.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-C9xN9Xr4.js";import"./mergeSlotProps-Cns_3EyO.js";import"./Modal-9hmaRIn8.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cbc_F17k.js";import"./index-C1j4tvSs.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./extendSxProp-DpymScOI.js";import"./FormLabel-CaASsKJw.js";import"./isMuiElement-d7vxVVg4.js";import"./Menu-DPgr-jSq.js";import"./index-Bm8UbI65.js";import"./useSlotProps-BPmQKDpQ.js";import"./MenuList-CGrUldIO.js";import"./ListContext-I3Sbm7li.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-C6ONGP5B.js";import"./MenuItem-DXPHPrX-.js";import"./ButtonBase-xXEST84h.js";import"./Typography-C85nDkcq.js";const gr={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},r={args:{error:!1,label:"label",variant:"outlined"}},e={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:t.jsx(f,{position:"start",children:t.jsx(F,{})})}}},parameters:{docs:{source:{code:`
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
`.trim()}}}},o={render:x=>{const g=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return t.jsx(b,{...x,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:g.map(n=>t.jsx(I,{value:n.value,children:n.label},n.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label",
    variant: "outlined"
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Fr=["Normal","WithIcon","Select"];export{r as Normal,o as Select,e as WithIcon,Fr as __namedExportsOrder,gr as default};
