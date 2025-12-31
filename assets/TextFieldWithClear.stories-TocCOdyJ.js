import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as v}from"./index-D4H_InIO.js";import"./lemonTheme-D8Y1J3Ig.js";import{I as x}from"./Cart-qIvgB5t4.js";import"./Profile-kW0Qm_sa.js";import{u as d}from"./Calendar-B-s2EpR5.js";import"./BottomModal-CSbStmmY.js";import{o as C}from"./MagnifyingGlass.es-DkPjd5Af.js";import"./DefaultPropsProvider-3QJ_VXVD.js";import"./Copy.es-WJ0Du8LM.js";import"./getThemeProps-BCfUtUYi.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-C-KGOsN8.js";const M={title:"components/Atoms/TextField/ClearTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}},error:{control:"boolean"}},args:{}},e={args:{error:!1,label:"label"}},r={args:{label:"With Icon",defaultValue:"Placeholder",slotProps:{input:{startAdornment:t.jsx(x,{position:"start",children:t.jsx(C,{})})}}}},a={render:g=>{const[f,b]=v.useState("Placeholder");return t.jsx(d,{value:f,onChange:h=>b(h.target.value),...g})},args:{error:!1,label:"label"},parameters:{docs:{source:{code:`
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
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const O=["Normal","WithIcon","Controlled"];export{a as Controlled,e as Normal,r as WithIcon,O as __namedExportsOrder,M as default};
