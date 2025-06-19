import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{fn as ra}from"./index-Cf3xVBfy.js";import{a as ta,b as sa,A as n}from"./Avatar-BEG3qlk0.js";import{D as k}from"./Done-RCx7z8s7.js";import{r as l}from"./index-D4H_InIO.js";import{g as ea,b as oa,s as na,c as I,d as ca,m as ia}from"./createSvgIcon-CKKfgglB.js";import{u as pa}from"./useSlot-BSCrVW2G.js";import{u as la}from"./DefaultPropsProvider-CH6vpq24.js";function ma(a){return oa("MuiAvatarGroup",a)}const da=ea("MuiAvatarGroup",["root","avatar"]),w={small:-16,medium:-8},ua=a=>{const{classes:s}=a;return ca({root:["root"],avatar:["avatar"]},ma,s)},ga=na("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,s)=>[{[`& .${da.avatar}`]:s.avatar},s.root]})(ia(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${sa.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),va=l.forwardRef(function(s,G){const y=la({props:s,name:"MuiAvatarGroup"}),{children:L,className:T,component:C="div",componentsProps:c,max:A=5,renderSurplus:R,slotProps:S={},slots:z={},spacing:F="medium",total:B,variant:b="circular",...j}=y;let e=A<2?2:A;const t={...y,max:A,spacing:F,component:C,variant:b},h=ua(t),f=l.Children.toArray(L).filter(o=>l.isValidElement(o)),i=B||f.length;i===e&&(e+=1),e=Math.min(i+1,e);const D=Math.min(f.length,e-1),x=Math.max(i-e,i-D,0),H=R?R(x):`+${x}`;let p;t.spacing&&w[t.spacing]!==void 0?p=w[t.spacing]:t.spacing===0?p=0:p=-t.spacing||w.medium;const X={slots:z,slotProps:{surplus:S.additionalAvatar??(c==null?void 0:c.additionalAvatar),...c,...S}},[Z,aa]=pa("surplus",{elementType:ta,externalForwardedProps:X,className:h.avatar,ownerState:t,additionalProps:{variant:b}});return r.jsxs(ga,{as:C,ownerState:t,className:I(h.root,T),ref:G,...j,style:{"--AvatarGroup-spacing":`${p}px`,...j.style},children:[x?r.jsx(Z,{...aa,children:H}):null,f.slice(0,D).reverse().map(o=>l.cloneElement(o,{className:I(o.props.className,h.avatar),variant:o.props.variant||b}))]})}),Ca={title:"components/Avatar/Avatar",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},children:{control:"text"},types:{control:"select",options:["male","female","unknown"]},size:{control:"select",options:["small","medium","large","extraLarge"]},sx:{control:"object"}},args:{onClick:ra()}},m={args:{}},d={args:{alt:"A",children:"A",sx:{bgcolor:"green"}}},u={args:{alt:"image",src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}},g={args:{alt:"icon",children:r.jsx(k,{}),sx:{bgcolor:"primary.main"}}},v={parameters:{docs:{source:{code:`
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Done />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim()}}},render:a=>r.jsxs(va,{max:4,total:8,children:[r.jsx(n,{children:r.jsx(k,{})}),r.jsx(n,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"}),r.jsx(n,{src:"https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false"}),r.jsx(n,{src:"https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png"})]}),args:{}};var P,E,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {}
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,O,J;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var _,$,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    alt: "icon",
    children: <Done />,
    sx: {
      bgcolor: "primary.main"
    }
  }
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var Q,W,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Done />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>\`.trim()
      }
    }
  },
  render: args => <AvatarGroup max={4} total={8}>
      <Avatar>
        <Done />
      </Avatar>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
      <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
      <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
    </AvatarGroup>,
  args: {}
}`,...(Y=(W=v.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const Ra=["defaultAvarta","InitialAvarta","ImageAvarta","IconAvarta","groupAvarta"];export{g as IconAvarta,u as ImageAvarta,d as InitialAvarta,Ra as __namedExportsOrder,Ca as default,m as defaultAvarta,v as groupAvarta};
