import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{C as b}from"./Chip-ClXkVJt2.js";import{A as h}from"./Avatar-DPfgUB08.js";import{T as C}from"./Taxi.esm-B-xgICOU.js";import"./index-D4H_InIO.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-C83d1A0S.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./X.esm-De9lqQTk.js";import"./IconBase.esm-BbKRF193.js";import"./Chip-CgDsGVBs.js";import"./createSvgIcon-DPKGROsd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CP1Oo1Bo.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./useSlot-BWf5NxIe.js";const Y={title:"components/Atoms/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},A=()=>{console.info("You clicked the Chip.")},g=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},r={args:{label:"Label",icon:a.jsx(C,{}),onDelete:g}},t={args:{label:"Label",selected:!0,onClick:A,onDelete:g,avatar:a.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:u=>a.jsx(b,{...u})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <Taxi />,
    onDelete: handleDelete
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    selected: true,
    onClick: handleClick,
    onDelete: handleDelete,
    avatar: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
  },
  render: args => <Chip {...args} /> // ← 關鍵：把 args 全灌進去
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const w=["Label","IconAndDelete","WithAvatar"];export{r as IconAndDelete,e as Label,t as WithAvatar,w as __namedExportsOrder,Y as default};
