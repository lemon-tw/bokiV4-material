import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{T as b,I as F,M as f}from"./TextField-C2B1XV9Q.js";import{M as v}from"./MenuItem-wnclLFFd.js";import"./index-D4H_InIO.js";import"./IconBase.esm-BbKRF193.js";import"./defaultPalette-CEdr43da.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./memoTheme-B-2aWamJ.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-D2w2x7Bk.js";import"./index-Bwk1XUWi.js";import"./useTheme-Bh-_xkMb.js";import"./extendSxProp-BVuH4Y-a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./WarningCircle.esm-DXvYe1ll.js";import"./TextField-BWSC6YY6.js";import"./useSlot-C4_QdBLF.js";import"./useId-CN9_kA9R.js";import"./formControlState-Dq1zat_P.js";import"./Menu-1u8uYljr.js";import"./index-Bm8UbI65.js";import"./useSlotProps-Dq4c04Y2.js";import"./Paper-DtPqxWvG.js";import"./useTheme-CfJJ7vPb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BbX-4VhA.js";import"./utils-CTIOt_ev.js";import"./TransitionGroupContext-BDWcwKxU.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-0NmrZ8s3.js";import"./mergeSlotProps-mcaWG5ce.js";import"./Modal-Cpe4GJDi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormLabel-IBbp6r5K.js";import"./isMuiElement-d7vxVVg4.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-CDwIG09Y.js";import"./MenuItem-BfIpU7qz.js";import"./ButtonBase-CbscuJ4o.js";const ie={title:"components/Atoms/TextField/TextField",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"},variant:{control:{type:"radio"},options:["outlined","filled","standard"]}},args:{}},e={args:{error:!1,label:"label",variant:"outlined"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:o.jsx(F,{position:"start",children:o.jsx(f,{})})}}},parameters:{docs:{source:{code:`
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
`.trim()}}}},t={render:g=>{const x=[{value:"1audult1room",label:"一間房 一位成人"},{value:"2audult1room",label:"一間房 兩位成人"},{value:"1audult4room",label:"一間房 四位成人"},{value:"4audult2room",label:"兩間房 四位成人"}];return o.jsx(b,{...g,slotProps:{input:{disableUnderline:!0}},helperText:"Please select your currency",sx:{"& .MuiFilledInput-root":{borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid",borderColor:"#E0E3E7"}},children:x.map(n=>o.jsx(v,{value:n.value,children:n.label},n.value))})},args:{label:"Select",defaultValue:"1audult1room",variant:"filled",select:!0}};var a,l,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label",
    variant: "outlined"
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ue=["Normal","WithIcon","Select"];export{e as Normal,t as Select,r as WithIcon,ue as __namedExportsOrder,ie as default};
