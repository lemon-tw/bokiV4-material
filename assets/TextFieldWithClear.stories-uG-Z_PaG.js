import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import"./lemonTheme-XVakIAq2.js";import{_ as i,Z as x}from"./Calendar-D4VDGI_h.js";import{o as C}from"./MagnifyingGlass.es-Cx5i6Fzj.js";import"./DefaultPropsProvider-BZF_OTnr.js";import"./IconBase.es-wFTi3CwP.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const y={title:"components/Atoms/TextField/ClearTextField",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:t.jsx(x,{position:"start",children:t.jsx(C,{})})}}}},a={render:g=>{const[f,b]=v.useState("Placeholder");return t.jsx(i,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState("Placeholder");

  <ClearTextField
    value={value}
    label: "label"
    onChange={(e) => setValue(e.target.value)}
  />
`.trim()}}}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    error: false,
    label: "label"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,c,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const R=["Normal","WithIcon","Controlled"];export{a as Controlled,e as Normal,r as WithIcon,R as __namedExportsOrder,y as default};
