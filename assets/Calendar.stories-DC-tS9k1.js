import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";import{d as c}from"./dayjs.min-BJoxDa44.js";import{r as D,s as S,C as f,b as h,o as j}from"./Calendar-BmVtggNF.js";import{e as k}from"./Alert-ClZS_Bwn.js";import{e as M}from"./Modal-D-33-_Gv.js";import"./lemonTheme-B7Qis2N-.js";import"./Avatar-BQ2BYgfS.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-JLIR-kmn.js";import"./BottomModal-CkIMqIlf.js";import"./Profile-CsM0VLsM.js";import"./Typography-BZQ6nlo4.js";import{B as i}from"./CheckCircle.es-BXMbO79g.js";import{u as R}from"./useTheme-B9a50qyY.js";import{u as I}from"./index-BfevDTIX.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-DkCEB5Ch.js";import"./FormControlLabel-DEb5GjGK.js";import"./Plus.es-B6v6yg-F.js";import"./defaultPalette-DLKPgRCf.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useSlotProps-Bzjfg0uB.js";import"./Link-CuGHZV3F.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-Fuv9uLiQ.js";import"./getThemeProps-MPmnPgUq.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-4E9YfVaz.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DAnoca7x.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function u(e,a="2026-12-31"){const t=c(),l=c(a).diff(t,"day"),n=new Set;for(;n.size<e;){const s=Math.floor(Math.random()*(l+1)),d=t.add(s,"day").format("YYYY-MM-DD");n.add(d)}return Array.from(n).sort()}const w=({preset:e,options:a,overrides:t})=>{const r=R(),l=I(r.breakpoints.down("sm")),n=l?a.xsSize??a.defaultSize:a.defaultSize,s=l?a.xsPadding??a.defaultPadding??0:a.defaultPadding??0,d=(t==null?void 0:t.color)??e.iconColor,x=(t==null?void 0:t.backgroundColor)??e.backgroundColor??"transparent";return o.jsx(i,{sx:{width:n+s*2,height:n+s*2,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",bgcolor:x,padding:`${s}px`},children:o.jsx(e.Icon,{size:n,weight:"fill",color:d})})},p=(e,a,t)=>o.jsx(w,{preset:e,options:a,overrides:t}),P=e=>h.filter((a,t)=>(e.date()+t)%3===0||(e.day()+t)%4===0).map(a=>({key:`${a.key}-${e.format("YYYYMMDD")}`,label:a.label,icon:p(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0}),activeIcon:p(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0},{color:"#FFFFFF",backgroundColor:"transparent"})})),F=()=>{const e=c("2025-10-31"),a=c("2026-12-31"),t={},r=new Set(u(50)),l=new Set(u(20));let n=e.clone();for(;n.isBefore(a,"day")||n.isSame(a,"day");){const s=n.format("YYYY-MM-DD"),d=P(n);t[s]={date:s,price:6200,status:{hot:r.has(s),unavailable:l.has(s)},meta:d.length?{badges:d}:void 0},n=n.add(1,"day")}return t},T=[{key:"today",label:"今日",icon:o.jsx(i,{sx:{width:20,height:20,borderRadius:"4px",border:"1px solid #1994FC"}})},{key:"hot",label:"熱賣中",icon:o.jsx(i,{sx:{background:"#FFF5F5",width:20,height:20,borderRadius:"4px",padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsx(j,{size:16,weight:"fill",color:"#E24343"})})},{key:"disabled",label:"不可預訂",icon:o.jsx(i,{sx:{width:20,borderRadius:"4px",height:20,background:"#CECECE",display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsx(M,{size:16,color:"#B4B4B4"})})}];h.map(e=>o.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:1},children:[p(e,{defaultSize:18,xsSize:14,defaultPadding:4,xsPadding:2}),e.label]},`filter-${e.key}`));const he={title:"components/Modules/Calendar/Calendar",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"},filterItems:{control:"object"},legendItems:{control:"object"},tabs:{control:"object"},infoText:{control:"text"},showDoubleMonth:{control:"boolean"},dayMap:{control:"object"},roomCodes:{control:"object"}},args:{showDoubleMonth:!0,tabs:S,infoText:o.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(k,{size:24,color:"#1994FC"}),o.jsxs("span",{children:["根據您的條件，顯示",o.jsx("span",{style:{fontWeight:600,color:"#000"},children:"每間房"}),"1 晚的最低可用價格（含服務費及稅）。"]})]}),legendItems:T,dayMap:F(),roomCodes:D}},z=e=>{const[a,t]=C.useState({start:null,end:null});return o.jsx(o.Fragment,{children:o.jsx(f,{...e,value:a,onChange:t,defaultMonth:c("2025-10-01"),onSubmit:r=>{t(r)}})})},m={render:e=>o.jsx(z,{...e}),name:"Calender",parameters:{docs:{source:{code:`
import { 
    Calender,
    type CalendarDay,
    type CalendarRangeValue,
    type CalendarTabOption, 
  } from '@lemon/material';
import React, { useState } from 'react';

// const badgePresets: BadgePreset[] = [
  {
    key: "aaaaaa",
    label: "適用 STD",
    Icon: ...
  },
  {
    key: "ibmbar",
    label: "適用 DELUXE",
    Icon: ...
  },
  {
    key: "std",
    label: "適用 PREMIUM",
    Icon: ...
  },
];

// 範例篩選條件
const filters = badgePresets.map((preset) => (
  ...
));

// 範例日期資料
const map: Record<string, CalendarDay> = {};

// 熱賣日期
const hotDates = new Set([...]);

// 不可預訂日期
const unavailableDates = new Set([...]);

// 建立日期資料
const [range, setRange] = useState<CalendarRangeValue>({
  start: null,
  end: null,
});

// 上方切換按鈕範本
const sampleTabs: CalendarTabOption[] = [
  { value: "overnight", label: "過夜住宿" },
  { value: "dayuse", label: "日間休息" },
];

// 左側標示範本
const sampleLegend = [
  {
    key: "today",
    label: "今日",
    icon: ....,
  },
  {
    key: "hot",
    label: "熱賣中",
    icon: ....
  },
  {
    key: "disabled",
    label: "不可預訂",
    icon: ....,
  },
];

<Calendar
  {...args}
  tabs={sampleTabs}
  legendItems={sampleLegend}
  defaultMonth={dayjs().startOf("("month")}
  showDoubleMonth={true}
  dayMap={map}
  value={range}
  onChange={setRange}
  onSubmit={setRange}
/>
                `.trim()}}}};var g,b,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <CalendarStory {...args} />,
  name: "Calender",
  parameters: {
    docs: {
      source: {
        code: \`
import { 
    Calender,
    type CalendarDay,
    type CalendarRangeValue,
    type CalendarTabOption, 
  } from '@lemon/material';
import React, { useState } from 'react';

// const badgePresets: BadgePreset[] = [
  {
    key: "aaaaaa",
    label: "適用 STD",
    Icon: ...
  },
  {
    key: "ibmbar",
    label: "適用 DELUXE",
    Icon: ...
  },
  {
    key: "std",
    label: "適用 PREMIUM",
    Icon: ...
  },
];

// 範例篩選條件
const filters = badgePresets.map((preset) => (
  ...
));

// 範例日期資料
const map: Record<string, CalendarDay> = {};

// 熱賣日期
const hotDates = new Set([...]);

// 不可預訂日期
const unavailableDates = new Set([...]);

// 建立日期資料
const [range, setRange] = useState<CalendarRangeValue>({
  start: null,
  end: null,
});

// 上方切換按鈕範本
const sampleTabs: CalendarTabOption[] = [
  { value: "overnight", label: "過夜住宿" },
  { value: "dayuse", label: "日間休息" },
];

// 左側標示範本
const sampleLegend = [
  {
    key: "today",
    label: "今日",
    icon: ....,
  },
  {
    key: "hot",
    label: "熱賣中",
    icon: ....
  },
  {
    key: "disabled",
    label: "不可預訂",
    icon: ....,
  },
];

<Calendar
  {...args}
  tabs={sampleTabs}
  legendItems={sampleLegend}
  defaultMonth={dayjs().startOf("("month")}
  showDoubleMonth={true}
  dayMap={map}
  value={range}
  onChange={setRange}
  onSubmit={setRange}
/>
                \`.trim()
      }
    }
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const xe=["Default"];export{m as Default,xe as __namedExportsOrder,he as default};
