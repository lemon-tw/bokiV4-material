import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{fn as ra}from"./index-Cf3xVBfy.js";import{u as ta}from"./DefaultPropsProvider-B0z8ytDR.js";import{aj as sa,ak as ea,al as na,am as oa,z as ca,E,H as ia,K as la,an as pa,A as o,af as W}from"./Calendar-SnC6ezyO.js";import{r as p}from"./index-D4H_InIO.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function da(a){return ea("MuiAvatarGroup",a)}const ma=sa("MuiAvatarGroup",["root","avatar"]),y={small:-16,medium:-8},ua=a=>{const{classes:s}=a;return ia({root:["root"],avatar:["avatar"]},da,s)},ga=ca("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,s)=>[{[`& .${ma.avatar}`]:s.avatar},s.root]})(la(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${pa.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),va=p.forwardRef(function(s,w){const G=ta({props:s,name:"MuiAvatarGroup"}),{children:Y,className:L,component:C="div",componentsProps:c,max:b=5,renderSurplus:j,slotProps:R={},slots:D={},spacing:F="medium",total:H,variant:A="circular",...S}=G;let e=b<2?2:b;const t={...G,max:b,spacing:F,component:C,variant:A},h=ua(t),x=p.Children.toArray(Y).filter(n=>p.isValidElement(n)),i=H||x.length;i===e&&(e+=1),e=Math.min(i+1,e);const I=Math.min(x.length,e-1),f=Math.max(i-e,i-I,0),B=j?j(f):`+${f}`;let l;t.spacing&&y[t.spacing]!==void 0?l=y[t.spacing]:t.spacing===0?l=0:l=-t.spacing||y.medium;const X={slots:D,slotProps:{surplus:R.additionalAvatar??(c==null?void 0:c.additionalAvatar),...c,...R}},[Z,aa]=na("surplus",{elementType:oa,externalForwardedProps:X,className:h.avatar,ownerState:t,additionalProps:{variant:A}});return r.jsxs(ga,{as:C,ownerState:t,className:E(h.root,L),ref:w,...S,style:{"--AvatarGroup-spacing":`${l}px`,...S.style},children:[f?r.jsx(Z,{...aa,children:B}):null,x.slice(0,I).reverse().map(n=>p.cloneElement(n,{className:E(n.props.className,h.avatar),variant:n.props.variant||A}))]})}),Ca={title:"components/Atoms/Avatar/Avatar",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},children:{control:"text",description:"頭像內部的顯示內容，可以是string、icon"},types:{control:"select",options:["male","female","unknown"]},size:{control:"select",options:["small","medium","large","extraLarge"]},sx:{control:"object"}},args:{onClick:ra()}},d={args:{}},m={args:{alt:"A",children:"A",sx:{bgcolor:"green"}}},u={args:{alt:"image",src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}},g={args:{alt:"icon",children:r.jsx(W,{}),sx:{bgcolor:"primary.main"}}},v={parameters:{docs:{source:{code:`
import AvatarGroup from "@mui/material/AvatarGroup";
import {CheckIcon} from "@phosphor-icons/react";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Check />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim()}}},render:a=>r.jsxs(va,{...a,children:[r.jsx(o,{children:r.jsx(W,{})}),r.jsx(o,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"}),r.jsx(o,{src:"https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false"}),r.jsx(o,{src:"https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png"})]}),args:{max:4,total:8},argTypes:{src:{table:{disable:!0}},children:{table:{disable:!0}},types:{table:{disable:!0}},size:{table:{disable:!0}},sx:{table:{disable:!0}}}};var P,k,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {}
}`,...(N=(k=d.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var V,K,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    alt: "A",
    children: "A",
    sx: {
      bgcolor: "green"
    }
  }
}`,...(O=(K=m.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var J,M,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    alt: "image",
    src: "https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"
  }
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var _,$,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    alt: "icon",
    children: <CheckIcon />,
    sx: {
      bgcolor: "primary.main"
    }
  }
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var T,q,Q;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import AvatarGroup from "@mui/material/AvatarGroup";
import {CheckIcon} from "@phosphor-icons/react";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Check />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>\`.trim()
      }
    }
  },
  render: args => <AvatarGroup {...args}>\r
      <Avatar>\r
        <CheckIcon />\r
      </Avatar>\r
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />\r
      <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />\r
      <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />\r
    </AvatarGroup>,
  args: {
    max: 4,
    total: 8
  },
  argTypes: {
    src: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    types: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    sx: {
      table: {
        disable: true
      }
    }
  }
}`,...(Q=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};const ja=["defaultAvarta","InitialAvata","ImageAvata","IconAvata","groupAvata"];export{g as IconAvata,u as ImageAvata,m as InitialAvata,ja as __namedExportsOrder,Ca as default,d as defaultAvarta,v as groupAvata};
