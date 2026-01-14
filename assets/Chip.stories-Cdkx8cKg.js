import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-B7Qis2N-.js";import"./Calendar-C2bZlQ4a.js";import"./Alert-ClZS_Bwn.js";import{A as h}from"./Avatar-BQ2BYgfS.js";import"./ToggleButton-CCo_jApl.js";import{C as b}from"./DraggableChips-JLIR-kmn.js";import"./Modal-D-33-_Gv.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-DpoTxBBn.js";import"./Typography-BZQ6nlo4.js";import{a as C}from"./Taxi.es-BkFvgB_B.js";import"./index-D4H_InIO.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-U-oX7qnb.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const se={title:"components/Atoms/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},A=()=>{console.info("You clicked the Chip.")},g=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},r={args:{label:"Label",icon:o.jsx(C,{}),onDelete:g}},t={args:{label:"Label",selected:!0,onClick:A,onDelete:g,avatar:o.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:u=>o.jsx(b,{...u})};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: <TaxiIcon />,
    onDelete: handleDelete
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Label",
    selected: true,
    onClick: handleClick,
    onDelete: handleDelete,
    avatar: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s" />
  },
  render: args => <Chip {...args} /> // ← 關鍵：把 args 全灌進去
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const ie=["Label","IconAndDelete","WithAvatar"];export{r as IconAndDelete,e as Label,t as WithAvatar,ie as __namedExportsOrder,se as default};
