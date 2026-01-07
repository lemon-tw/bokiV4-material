import{j as a}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-CMs8ldpH.js";import{B as b}from"./Calendar-CieY2Rnp.js";import"./Cart-C8E3AIEA.js";import{A as h}from"./Profile-MdmuAn2z.js";import"./ToggleButton-Cu_SBuig.js";import"./BottomModal-BE48lkrf.js";import"./Typography-BvOlI2Tp.js";import{a as C}from"./Taxi.es-C43MuDx8.js";import"./index-D4H_InIO.js";import"./defaultPalette-DUshvIvh.js";import"./dayjs.min-Jy-M90ON.js";import"./CheckCircle.es-tQkoT-Dh.js";import"./Link-C1vULwQI.js";import"./Copy.es-C8nfs54p.js";import"./getThemeProps-DIZMmmV_.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BpAPiKPx.js";import"./index-Bm8UbI65.js";import"./WarningCircle.es-Dc7_P-Py.js";const P={title:"components/Atoms/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},A=()=>{console.info("You clicked the Chip.")},g=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},r={args:{label:"Label",icon:a.jsx(C,{}),onDelete:g}},t={args:{label:"Label",selected:!0,onClick:A,onDelete:g,avatar:a.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:u=>a.jsx(b,{...u})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <TaxiIcon />,
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Q=["Label","IconAndDelete","WithAvatar"];export{r as IconAndDelete,e as Label,t as WithAvatar,Q as __namedExportsOrder,P as default};
