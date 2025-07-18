import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import{C as d,o as x}from"./TextField-DAmfgc9Y.js";import{I as C}from"./InputAdornment-BssOETny.js";import"./IconBase.es-F2kcR3Hr.js";import"./defaultPalette-fWaDn0-C.js";import"./WarningCircle.es-BJwRwsPd.js";import"./memoTheme-DQLz_w2O.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./TextField-YFjLigZH.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useId-CN9_kA9R.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Popover-yGUp7IJF.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CfgsmfYz.js";import"./useTheme-D4Xi4orm.js";import"./useTheme-BbNP3OZZ.js";import"./utils-BcbCFGQY.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-C9xN9Xr4.js";import"./mergeSlotProps-Cns_3EyO.js";import"./Modal-9hmaRIn8.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cbc_F17k.js";import"./index-C1j4tvSs.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./extendSxProp-DpymScOI.js";import"./FormLabel-CaASsKJw.js";import"./isMuiElement-d7vxVVg4.js";import"./Menu-DPgr-jSq.js";import"./index-Bm8UbI65.js";import"./useSlotProps-BPmQKDpQ.js";import"./MenuList-CGrUldIO.js";import"./ListContext-I3Sbm7li.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-C6ONGP5B.js";import"./Typography-C85nDkcq.js";const ge={title:"components/Atoms/TextField/ClearTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:o.jsx(C,{position:"start",children:o.jsx(x,{})})}}}},t={render:g=>{const[f,b]=v.useState("Placeholder");return o.jsx(d,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState("Placeholder");

  <ClearTextField
    value={value}
    label: "label"
    onChange={(e) => setValue(e.target.value)}
  />
`.trim()}}}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,m,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const fe=["Normal","WithIcon","Controlled"];export{t as Controlled,e as Normal,r as WithIcon,fe as __namedExportsOrder,ge as default};
