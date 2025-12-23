import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{fn as ta}from"./index-Cf3xVBfy.js";import"./lemonTheme-DbLJfmwh.js";import"./Calendar-CxVLanFE.js";import{d as ra,e as ea,A as n,o as W}from"./Profile-ixVkq0xe.js";import"./BottomModal-D04EwsMg.js";import{r as l}from"./index-D4H_InIO.js";import{g as sa,b as oa,d as na,s as ca,c as P,a as ia,m as pa}from"./IconBase.es-BSjFOAhq.js";import{u as la}from"./DefaultPropsProvider-BtL_yMcr.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function da(a){return oa("MuiAvatarGroup",a)}const ma=sa("MuiAvatarGroup",["root","avatar"]),y={small:-16,medium:-8},ua=a=>{const{classes:e}=a;return ia({root:["root"],avatar:["avatar"]},da,e)},ga=ca("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,e)=>[{[`& .${ma.avatar}`]:e.avatar},e.root]})(pa(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${ea.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),va=l.forwardRef(function(e,w){const G=la({props:e,name:"MuiAvatarGroup"}),{children:Y,className:L,component:C="div",componentsProps:c,max:b=5,renderSurplus:R,slotProps:S={},slots:D={},spacing:F="medium",total:B,variant:A="circular",...j}=G;let s=b<2?2:b;const r={...G,max:b,spacing:F,component:C,variant:A},h=ua(r),x=l.Children.toArray(Y).filter(o=>l.isValidElement(o)),i=B||x.length;i===s&&(s+=1),s=Math.min(i+1,s);const I=Math.min(x.length,s-1),f=Math.max(i-s,i-I,0),H=R?R(f):`+${f}`;let p;r.spacing&&y[r.spacing]!==void 0?p=y[r.spacing]:r.spacing===0?p=0:p=-r.spacing||y.medium;const X={slots:D,slotProps:{surplus:S.additionalAvatar??(c==null?void 0:c.additionalAvatar),...c,...S}},[Z,aa]=na("surplus",{elementType:ra,externalForwardedProps:X,className:h.avatar,ownerState:r,additionalProps:{variant:A}});return t.jsxs(ga,{as:C,ownerState:r,className:P(h.root,L),ref:w,...j,style:{"--AvatarGroup-spacing":`${p}px`,...j.style},children:[f?t.jsx(Z,{...aa,children:H}):null,x.slice(0,I).reverse().map(o=>l.cloneElement(o,{className:P(o.props.className,h.avatar),variant:o.props.variant||A}))]})}),Ia={title:"components/Atoms/Avatar/Avatar",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},children:{control:"text",description:"頭像內部的顯示內容，可以是string、icon"},types:{control:"select",options:["male","female","unknown"]},size:{control:"select",options:["small","medium","large","extraLarge"]},sx:{control:"object"}},args:{onClick:ta()}},d={args:{}},m={args:{alt:"A",children:"A",sx:{bgcolor:"green"}}},u={args:{alt:"image",src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}},g={args:{alt:"icon",children:t.jsx(W,{}),sx:{bgcolor:"primary.main"}}},v={parameters:{docs:{source:{code:`
import AvatarGroup from "@mui/material/AvatarGroup";
import {CheckIcon} from "@phosphor-icons/react";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Check />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim()}}},render:a=>t.jsxs(va,{...a,children:[t.jsx(n,{children:t.jsx(W,{})}),t.jsx(n,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"}),t.jsx(n,{src:"https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false"}),t.jsx(n,{src:"https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png"})]}),args:{max:4,total:8},argTypes:{src:{table:{disable:!0}},children:{table:{disable:!0}},types:{table:{disable:!0}},size:{table:{disable:!0}},sx:{table:{disable:!0}}}};var E,N,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var k,O,J;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    alt: "A",
    children: "A",
    sx: {
      bgcolor: "green"
    }
  }
}`,...(J=(O=m.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,M,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    alt: "image",
    src: "https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"
  }
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var _,$,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    alt: "icon",
    children: <CheckIcon />,
    sx: {
      bgcolor: "primary.main"
    }
  }
}`,...(T=($=g.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var q,z,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  render: args => <AvatarGroup {...args}>
      <Avatar>
        <CheckIcon />
      </Avatar>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
      <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
      <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const Pa=["defaultAvarta","InitialAvata","ImageAvata","IconAvata","groupAvata"];export{g as IconAvata,u as ImageAvata,m as InitialAvata,Pa as __namedExportsOrder,Ia as default,d as defaultAvarta,v as groupAvata};
