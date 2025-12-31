import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";import{r as D,s as S,C as h,d as i,b as f,o as j}from"./Calendar-B-s2EpR5.js";import{e as k}from"./Cart-qIvgB5t4.js";import{B as c,e as M,u as R}from"./BottomModal-CSbStmmY.js";import"./lemonTheme-D8Y1J3Ig.js";import"./Profile-kW0Qm_sa.js";import{u as I}from"./Copy.es-WJ0Du8LM.js";import"./DefaultPropsProvider-3QJ_VXVD.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-C-KGOsN8.js";import"./getThemeProps-BCfUtUYi.js";function g(e,a="2026-12-31"){const t=i(),r=i(a).diff(t,"day"),o=new Set;for(;o.size<e;){const s=Math.floor(Math.random()*(r+1)),d=t.add(s,"day").format("YYYY-MM-DD");o.add(d)}return Array.from(o).sort()}const w=({preset:e,options:a,overrides:t})=>{const l=R(),r=I(l.breakpoints.down("sm")),o=r?a.xsSize??a.defaultSize:a.defaultSize,s=r?a.xsPadding??a.defaultPadding??0:a.defaultPadding??0,d=(t==null?void 0:t.color)??e.iconColor,x=(t==null?void 0:t.backgroundColor)??e.backgroundColor??"transparent";return n.jsx(c,{sx:{width:o+s*2,height:o+s*2,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",bgcolor:x,padding:`${s}px`},children:n.jsx(e.Icon,{size:o,weight:"fill",color:d})})},u=(e,a,t)=>n.jsx(w,{preset:e,options:a,overrides:t}),P=e=>f.filter((a,t)=>(e.date()+t)%3===0||(e.day()+t)%4===0).map(a=>({key:`${a.key}-${e.format("YYYYMMDD")}`,label:a.label,icon:u(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0}),activeIcon:u(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0},{color:"#FFFFFF",backgroundColor:"transparent"})})),F=()=>{const e=i("2025-10-31"),a=i("2026-12-31"),t={},l=new Set(g(50)),r=new Set(g(20));let o=e.clone();for(;o.isBefore(a,"day")||o.isSame(a,"day");){const s=o.format("YYYY-MM-DD"),d=P(o);t[s]={date:s,price:6200,status:{hot:l.has(s),unavailable:r.has(s)},meta:d.length?{badges:d}:void 0},o=o.add(1,"day")}return t},T=[{key:"today",label:"今日",icon:n.jsx(c,{sx:{width:20,height:20,borderRadius:"4px",border:"1px solid #1994FC"}})},{key:"hot",label:"熱賣中",icon:n.jsx(c,{sx:{background:"#FFF5F5",width:20,height:20,borderRadius:"4px",padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(j,{size:16,weight:"fill",color:"#E24343"})})},{key:"disabled",label:"不可預訂",icon:n.jsx(c,{sx:{width:20,borderRadius:"4px",height:20,background:"#CECECE",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(M,{size:16,color:"#B4B4B4"})})}];f.map(e=>n.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:1},children:[u(e,{defaultSize:18,xsSize:14,defaultPadding:4,xsPadding:2}),e.label]},`filter-${e.key}`));const q={title:"components/Modules/Calendar/Calendar",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"},filterItems:{control:"object"},legendItems:{control:"object"},tabs:{control:"object"},infoText:{control:"text"},showDoubleMonth:{control:"boolean"},dayMap:{control:"object"},roomCodes:{control:"object"}},args:{showDoubleMonth:!0,tabs:S,infoText:n.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:1},children:[n.jsx(k,{size:24,color:"#1994FC"}),n.jsxs("span",{children:["根據您的條件，顯示",n.jsx("span",{style:{fontWeight:600,color:"#000"},children:"每間房"}),"1 晚的最低可用價格（含服務費及稅）。"]})]}),legendItems:T,dayMap:F(),roomCodes:D}},z=e=>{const[a,t]=C.useState({start:null,end:null});return n.jsx(n.Fragment,{children:n.jsx(h,{...e,value:a,onChange:t,defaultMonth:i("2025-10-01"),onSubmit:l=>{t(l)}})})},m={render:e=>n.jsx(z,{...e}),name:"Calender",parameters:{docs:{source:{code:`
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
                `.trim()}}}};var b,p,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(p=m.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const G=["Default"];export{m as Default,G as __namedExportsOrder,q as default};
