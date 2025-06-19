import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as h}from"./Chip-Dz0DpBL-.js";import{A as u}from"./Avatar-DLEQ2_Ae.js";import{a as x}from"./createSvgIcon-D0snID3m.js";import"./index-D4H_InIO.js";import"./defaultPalette-DlcfKNQ6.js";import"./DefaultPropsProvider-BDoOoArL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B-HqQx1y.js";import"./useSlot-C1rtH0nw.js";const C=x([e.jsx("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.85 7h10.29l1.04 3H5.81zM19 17H5v-4.66l.12-.34h13.77l.11.34z"},"0"),e.jsx("circle",{cx:"7.5",cy:"14.5",r:"1.5"},"1"),e.jsx("circle",{cx:"16.5",cy:"14.5",r:"1.5"},"2")],"LocalTaxiOutlined"),H={title:"components/Chip/Chip",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}}},args:{}},v=()=>{console.info("You clicked the Chip.")},b=()=>{console.info("You clicked the delete icon.")},a={args:{label:"Label"}},t={args:{label:"Label",icon:e.jsx(C,{}),onDelete:b}},r={args:{label:"Label",selected:!0,onClick:v,onDelete:b,avatar:e.jsx(u,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:g=>e.jsx(h,{...g})};var o,s,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <LocalTaxiOutlinedIcon />,
    onDelete: handleDelete
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Label",
    selected: true,
    onClick: handleClick,
    onDelete: handleDelete,
    avatar: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
  },
  render: args => <Chip {...args} /> // ← 關鍵：把 args 全灌進去
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Label","IconAndDelete","WithAvatar"];export{t as IconAndDelete,a as Label,r as WithAvatar,V as __namedExportsOrder,H as default};
