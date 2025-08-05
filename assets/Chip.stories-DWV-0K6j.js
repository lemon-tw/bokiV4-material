import{j as t}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DGlRE1oP.js";import{A as h}from"./Typography-2_fYrsYp.js";import{q as b}from"./RichTooltip-DcZiR5-0.js";import{a as C}from"./Taxi.es-BJc85RkZ.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const W={title:"components/Atoms/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},A=()=>{console.info("You clicked the Chip.")},g=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},a={args:{label:"Label",icon:t.jsx(C,{}),onDelete:g}},r={args:{label:"Label",selected:!0,onClick:A,onDelete:g,avatar:t.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:u=>t.jsx(b,{...u})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <TaxiIcon />,
    onDelete: handleDelete
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    selected: true,
    onClick: handleClick,
    onDelete: handleDelete,
    avatar: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
  },
  render: args => <Chip {...args} /> // ← 關鍵：把 args 全灌進去
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Label","IconAndDelete","WithAvatar"];export{a as IconAndDelete,e as Label,r as WithAvatar,y as __namedExportsOrder,W as default};
