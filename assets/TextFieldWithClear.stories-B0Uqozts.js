import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import{C as d,M as x}from"./TextField-DgOkwPZf.js";import{I as C}from"./InputAdornment-DSnUWkrL.js";import"./IconBase.esm-BbKRF193.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-C83d1A0S.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./WarningCircle.esm-DXvYe1ll.js";import"./TextField-BZkOxHPq.js";import"./useSlot-BWf5NxIe.js";import"./useId-CN9_kA9R.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Menu-Fjad2nT1.js";import"./index-Bm8UbI65.js";import"./useSlotProps-qwZrg_4U.js";import"./Paper-B8zVEXaw.js";import"./useTheme-CfJJ7vPb.js";import"./useTheme-Bh-_xkMb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-zgzfA1CP.js";import"./utils-bnsn1T2-.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-LBlGjCQn.js";import"./mergeSlotProps-DQ9n5Pzv.js";import"./Modal-DVo_Vf6F.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-zquPRXLs.js";import"./extendSxProp-BVuH4Y-a.js";import"./FormLabel-D9ocC7H4.js";import"./isMuiElement-d7vxVVg4.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-DPKGROsd.js";import"./Typography-D9Rxpb2u.js";const me={title:"components/Atoms/TextField/ClearTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:a.jsx(C,{position:"start",children:a.jsx(x,{})})}}}},t={render:g=>{const[f,b]=v.useState("Placeholder");return a.jsx(d,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState("Placeholder");

  <ClearTextField
    value={value}
    label: "label"
    onChange={(e) => setValue(e.target.value)}
  />
`.trim()}}}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label"
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,m,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Placeholder");
    return <ClearTextField value={value} onChange={e => setValue(e.target.value)} {...args} />;
  },
  args: {
    error: false,
    label: "label"
  },
  parameters: {
    docs: {
      source: {
        code: \`
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState("Placeholder");

  <ClearTextField
    value={value}
    label: "label"
    onChange={(e) => setValue(e.target.value)}
  />
\`.trim()
      }
    }
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const ie=["Normal","WithIcon","Controlled"];export{t as Controlled,e as Normal,r as WithIcon,ie as __namedExportsOrder,me as default};
