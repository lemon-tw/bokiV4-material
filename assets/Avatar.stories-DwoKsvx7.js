import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{fn as ta}from"./index-Cf3xVBfy.js";import{a as ra,b as ea,A as o}from"./Avatar-AuVD7Yum.js";import{D as W}from"./Done-By09n8md.js";import{r as p}from"./index-D4H_InIO.js";import{a as sa,g as na,s as oa,c as I,b as ca,m as ia}from"./memoTheme-Dg8ftLGV.js";import{u as la}from"./useSlot-DUJno6SE.js";import{u as pa}from"./DefaultPropsProvider-JiJShTPV.js";import"./createSvgIcon-5TDCF_r7.js";function ma(a){return na("MuiAvatarGroup",a)}const da=sa("MuiAvatarGroup",["root","avatar"]),y={small:-16,medium:-8},ua=a=>{const{classes:e}=a;return ca({root:["root"],avatar:["avatar"]},ma,e)},ga=oa("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,e)=>[{[`& .${da.avatar}`]:e.avatar},e.root]})(ia(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${ea.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),va=p.forwardRef(function(e,w){const G=pa({props:e,name:"MuiAvatarGroup"}),{children:Y,className:k,component:C="div",componentsProps:c,max:b=5,renderSurplus:R,slotProps:S={},slots:L={},spacing:F="medium",total:B,variant:A="circular",...j}=G;let s=b<2?2:b;const r={...G,max:b,spacing:F,component:C,variant:A},h=ua(r),x=p.Children.toArray(Y).filter(n=>p.isValidElement(n)),i=B||x.length;i===s&&(s+=1),s=Math.min(i+1,s);const D=Math.min(x.length,s-1),f=Math.max(i-s,i-D,0),H=R?R(f):`+${f}`;let l;r.spacing&&y[r.spacing]!==void 0?l=y[r.spacing]:r.spacing===0?l=0:l=-r.spacing||y.medium;const X={slots:L,slotProps:{surplus:S.additionalAvatar??(c==null?void 0:c.additionalAvatar),...c,...S}},[Z,aa]=la("surplus",{elementType:ra,externalForwardedProps:X,className:h.avatar,ownerState:r,additionalProps:{variant:A}});return t.jsxs(ga,{as:C,ownerState:r,className:I(h.root,k),ref:w,...j,style:{"--AvatarGroup-spacing":`${l}px`,...j.style},children:[f?t.jsx(Z,{...aa,children:H}):null,x.slice(0,D).reverse().map(n=>p.cloneElement(n,{className:I(n.props.className,h.avatar),variant:n.props.variant||A}))]})}),Ra={title:"components/Avatar/Avatar",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},children:{control:"text",description:"頭像內部的顯示內容，可以是string、icon"},types:{control:"select",options:["male","female","unknown"]},size:{control:"select",options:["small","medium","large","extraLarge"]},sx:{control:"object"}},args:{onClick:ta()}},m={args:{}},d={args:{alt:"A",children:"A",sx:{bgcolor:"green"}}},u={args:{alt:"image",src:"https://static.popdaily.com.tw/u/202409/0c2abc41-3d55-47d5-9727-2916bf7b2aaa.png"}},g={args:{alt:"icon",children:t.jsx(W,{}),sx:{bgcolor:"primary.main"}}},v={parameters:{docs:{source:{code:`
import AvatarGroup from "@mui/material/AvatarGroup";
import Done from "@mui/icons-material/Done";
  <AvatarGroup max={4} total={8}>
    <Avatar>
      <Done />
    </Avatar>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
    <Avatar src="https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false" />
    <Avatar src="https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png" />
  </AvatarGroup>`.trim()}}},render:a=>t.jsxs(va,{...a,children:[t.jsx(o,{children:t.jsx(W,{})}),t.jsx(o,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"}),t.jsx(o,{src:"https://media.nownews.com/nn_media/thumbnail/2020/07/1593842222912-3d70e1f25d65456999edbdd84b0ca8c0-360x640.jpeg?unShow=false"}),t.jsx(o,{src:"https://static.popdaily.com.tw/u/202409/fd4138c3-7bc4-483e-b54d-06d493792db6.png"})]}),args:{max:4,total:8},argTypes:{src:{table:{disable:!0}},children:{table:{disable:!0}},types:{table:{disable:!0}},size:{table:{disable:!0}},sx:{table:{disable:!0}}}};var P,E,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var _,$,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    alt: "icon",
    children: <Done />,
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
  render: args => <AvatarGroup {...args}>
      <Avatar>
        <Done />
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const Sa=["defaultAvarta","InitialAvata","ImageAvata","IconAvata","groupAvata"];export{g as IconAvata,u as ImageAvata,d as InitialAvata,Sa as __namedExportsOrder,Ra as default,m as defaultAvarta,v as groupAvata};
