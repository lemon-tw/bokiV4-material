import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DRSUy1mj.js";import"./Rest-tDr7TA7b.js";import"./Alert-C4O2UbhG.js";import{A as h}from"./Avatar-BVa3lbN8.js";import"./ToggleButton-B_1nB3DD.js";import{C as b}from"./DraggableChips-Cqssnqvp.js";import"./Modal-d6heRAo4.js";import"./BottomModal-BdGv5m3s.js";import"./Profile-BM3a8Z3E.js";import"./Typography-CFfHvyVk.js";import{a as C}from"./Taxi.es-C-dVFvzT.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-BDoXRaCv.js";import"./FormControlLabel-BHAu7ubQ.js";import"./useFormControl-Dnc_EiuP.js";import"./CaretDown.es-BrMieepg.js";import"./mergeSlotProps-DNuNo-y4.js";import"./Trash.es-Dpr1aoed.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-mCjdN8F2.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-XM0U5i7f.js";import"./CalendarBlank.es-BbqdSJFW.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-CX9ULaaP.js";import"./AccordionSummary-C21DAd0r.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const me={title:"components/Atoms/Chip/Chip",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{avatar:{table:{disable:!0}},deleteIcon:{table:{disable:!0}},icon:{table:{disable:!0}},sx:{control:"object",description:"點擊 RAW 編輯自定義樣式, 例如: { backgroundColor: 'red' }",raw:!0}},args:{}},A=()=>{console.info("You clicked the Chip.")},g=()=>{console.info("You clicked the delete icon.")},e={args:{label:"Label"}},r={args:{label:"Label",icon:o.jsx(C,{}),onDelete:g}},t={args:{label:"Label",selected:!0,onClick:A,onDelete:g,avatar:o.jsx(h,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYnJOJepQloOKVPCIrRhgV9R7218hwCEUKg&s"})},render:u=>o.jsx(b,{...u})};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Label"
    // selected: true,
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const ce=["Label","IconAndDelete","WithAvatar"];export{r as IconAndDelete,e as Label,t as WithAvatar,ce as __namedExportsOrder,me as default};
