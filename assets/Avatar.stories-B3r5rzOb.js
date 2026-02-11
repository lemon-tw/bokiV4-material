import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{fn as ra}from"./index-Cf3xVBfy.js";import"./lemonTheme-DRSUy1mj.js";import"./Rest-VbacVP9U.js";import"./Alert-DRAbsrNu.js";import{a as ta,b as sa,A as n}from"./Avatar-kr3oDakC.js";import"./ToggleButton-B_1nB3DD.js";import"./DraggableChips-D0MI0M_6.js";import{u as ea}from"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-PFiyOLDq.js";import{o as W}from"./Typography-CFfHvyVk.js";import{r as m}from"./index-D4H_InIO.js";import{g as oa,d as na,s as ca,c as P,a as ia,m as pa}from"./CheckCircle.es-DXCUKnUH.js";import{u as ma}from"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DJEv7-_-.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function la(a){return na("MuiAvatarGroup",a)}const da=oa("MuiAvatarGroup",["root","avatar"]),y={small:-16,medium:-8},ua=a=>{const{classes:s}=a;return ia({root:["root"],avatar:["avatar"]},la,s)},ga=ca("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,s)=>[{[`& .${da.avatar}`]:s.avatar},s.root]})(pa(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${sa.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),va=m.forwardRef(function(s,w){const G=ma({props:s,name:"MuiAvatarGroup"}),{children:Y,className:L,component:C="div",componentsProps:c,max:b=5,renderSurplus:R,slotProps:S={},slots:D={},spacing:F="medium",total:B,variant:A="circular",...j}=G;let e=b<2?2:b;const t={...G,max:b,spacing:F,component:C,variant:A},h=ua(t),x=m.Children.toArray(Y).filter(o=>m.isValidElement(o)),i=B||x.length;i===e&&(e+=1),e=Math.min(i+1,e);const I=Math.min(x.length,e-1),f=Math.max(i-e,i-I,0),H=R?R(f):`+${f}`;let p;t.spacing&&y[t.spacing]!==void 0?p=y[t.spacing]:t.spacing===0?p=0:p=-t.spacing||y.medium;const X={slots:D,slotProps:{surplus:S.additionalAvatar??(c==null?void 0:c.additionalAvatar),...c,...S}},[Z,aa]=ea("surplus",{elementType:ta,externalForwardedProps:X,className:h.avatar,ownerState:t,additionalProps:{variant:A}});return r.jsxs(ga,{as:C,ownerState:t,className:P(h.root,L),ref:w,...j,style:{"--AvatarGroup-spacing":`${p}px`,...j.style},children:[f?r.jsx(Z,{...aa,children:H}):null,x.slice(0,I).reverse().map(o=>m.cloneElement(o,{className:P(o.props.className,h.avatar),variant:o.props.variant||A}))]})}),tr={title:"components/Atoms/Avatar/Avatar",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},children:{control:"text",description:"頭像內部的顯示內容，可以是string、icon"},types:{control:"select",options:["male","female","unknown"]},size:{control:"select",options:["small","medium","large","extraLarge"]},sx:{control:"object"}},args:{onClick:ra()}},l={args:{}},d={args:{alt:"A",children:"A",sx:{bgcolor:"green"}}},u={args:{alt:"image",src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}},g={args:{alt:"icon",children:r.jsx(W,{}),sx:{bgcolor:"primary.main"}}},v={parameters:{docs:{source:{code:`
import AvatarGroup from "@mui/material/AvatarGroup";
import {CheckIcon} from "@phosphor-icons/react";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Check />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim()}}},render:a=>r.jsxs(va,{...a,children:[r.jsx(n,{children:r.jsx(W,{})}),r.jsx(n,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"}),r.jsx(n,{src:"https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false"}),r.jsx(n,{src:"https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png"})]}),args:{max:4,total:8},argTypes:{src:{table:{disable:!0}},children:{table:{disable:!0}},types:{table:{disable:!0}},size:{table:{disable:!0}},sx:{table:{disable:!0}}}};var E,N,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var k,O,J;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    alt: "A",
    children: "A",
    sx: {
      bgcolor: "green"
    }
  }
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,M,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const sr=["defaultAvarta","InitialAvata","ImageAvata","IconAvata","groupAvata"];export{g as IconAvata,u as ImageAvata,d as InitialAvata,sr as __namedExportsOrder,tr as default,l as defaultAvarta,v as groupAvata};
