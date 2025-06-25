import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{C as b}from"./Chip-Bm-1IDy6.js";import{A as h}from"./Avatar-AuVD7Yum.js";import{L as C}from"./LocalTaxiOutlined-2OQcK_TF.js";import"./index-D4H_InIO.js";import"./defaultPalette-zaxAseiV.js";import"./DefaultPropsProvider-JiJShTPV.js";import"./createSvgIcon-5TDCF_r7.js";import"./memoTheme-Dg8ftLGV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C4UZesTi.js";import"./useSlot-DUJno6SE.js";const E={title:"components/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},L=()=>{console.info("You clicked the Chip.")},u=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},a={args:{label:"Label",icon:t.jsx(C,{}),onDelete:u}},r={args:{label:"Label",selected:!0,onClick:L,onDelete:u,avatar:t.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:g=>t.jsx(b,{...g})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <LocalTaxiOutlinedIcon />,
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const J=["Label","IconAndDelete","WithAvatar"];export{a as IconAndDelete,e as Label,r as WithAvatar,J as __namedExportsOrder,E as default};
