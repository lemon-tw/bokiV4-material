import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import{C as d,I as x,M as C}from"./TextField-DaTS9yCu.js";import"./IconBase.esm-BbKRF193.js";import"./defaultPalette-CDIRQpAz.js";import"./DefaultPropsProvider-DqVT3Pki.js";import"./memoTheme-DkEl0Jev.js";import"./useFormControl-DgxBWWJq.js";import"./Typography-DBLLtZzJ.js";import"./index-D641xpmC.js";import"./useTheme-Dm3NhWHt.js";import"./extendSxProp-Cr0utasV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./WarningCircle.esm-DXvYe1ll.js";import"./TextField-CZVtwrgg.js";import"./useSlot-D9yE0s1_.js";import"./useId-CN9_kA9R.js";import"./formControlState-Dq1zat_P.js";import"./Menu-wCs4t9Vd.js";import"./index-Bm8UbI65.js";import"./useSlotProps-CxyZS-qg.js";import"./Paper-Cc5LuG26.js";import"./useTheme-DpjMkLyW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BMu7p32D.js";import"./utils-DUkByWFw.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-DVNWasIp.js";import"./mergeSlotProps-sSfPEMoJ.js";import"./Modal-BpHdIFDV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormLabel-DZ8OOg4w.js";import"./isMuiElement-d7vxVVg4.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-FE0mXunH.js";const se={title:"components/Atoms/TextField/ClearTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:a.jsx(x,{position:"start",children:a.jsx(C,{})})}}}},t={render:g=>{const[f,b]=v.useState("Placeholder");return a.jsx(d,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const le=["Normal","WithIcon","Controlled"];export{t as Controlled,e as Normal,r as WithIcon,le as __namedExportsOrder,se as default};
