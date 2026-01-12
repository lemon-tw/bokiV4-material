import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import"./lemonTheme-Bb89J2P2.js";import{t as d,q as x}from"./Calendar-BaGtf-Ws.js";import{I as C}from"./Cart-D-pvBHLo.js";import"./Profile-SZVm7_dG.js";import"./ToggleButton-C9hjwxNF.js";import"./BottomModal-eKP2Btm8.js";import"./Typography-BwE3U6T_.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-BiUdnq83.js";import"./CheckCircle.es-D_AxlQm-.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Users.es-oVc931zI.js";import"./Warning.es-TWNjRQ8R.js";const D={title:"components/Atoms/TextField/ClearTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:a.jsx(C,{position:"start",children:a.jsx(x,{})})}}}},t={render:g=>{const[f,b]=v.useState("Placeholder");return a.jsx(d,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "With Icon",
    defaultValue: "Placeholder",
    slotProps: {
      input: {
        startAdornment: <InputAdornment position="start">
            <MagnifyingGlassIcon />
          </InputAdornment>
      }
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const H=["Normal","WithIcon","Controlled"];export{t as Controlled,e as Normal,r as WithIcon,H as __namedExportsOrder,D as default};
