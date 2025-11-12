import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";import{a as x,b as k,o as D,C as y,B as d,e as S,d as i,c as j,f as B,u as I,g as w}from"./Calendar-SnC6ezyO.js";import"./DefaultPropsProvider-B0z8ytDR.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function m(e,a="2026-12-31"){const n=i(),l=i(a).diff(n,"day"),t=new Set;for(;t.size<e;){const r=Math.floor(Math.random()*(l+1)),c=n.add(r,"day").format("YYYY-MM-DD");t.add(c)}return Array.from(t).sort()}const h=[{key:"aaaaaa",label:"適用 AAAA",Icon:x,iconColor:"#2D8B6D",backgroundColor:"white"},{key:"ibmbar",label:"適用 BBBB",Icon:k,iconColor:"#9B5F00",backgroundColor:"white"},{key:"std",label:"適用 CCCC",Icon:D,iconColor:"#0648BE",backgroundColor:"white"}],M=({preset:e,options:a})=>{const n=I(),o=w(n.breakpoints.down("sm")),l=o?a.xsSize??a.defaultSize:a.defaultSize,t=o?a.xsPadding??a.defaultPadding??0:a.defaultPadding??0;return s.jsx(d,{sx:{width:l+t*2,height:l+t*2,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",bgcolor:e.backgroundColor??"transparent",padding:`${t}px`},children:s.jsx(e.Icon,{size:l,weight:"fill",color:e.iconColor})})},f=(e,a)=>s.jsx(M,{preset:e,options:a}),R=e=>h.filter((a,n)=>(e.date()+n)%3===0||(e.day()+n)%4===0).map(a=>({key:`${a.key}-${e.format("YYYYMMDD")}`,label:a.label,icon:f(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0})})),v=()=>{const e=i("2025-10-31"),a=i("2026-12-31"),n={},o=new Set(m(50)),l=new Set(m(20));let t=e.clone();for(;t.isBefore(a,"day")||t.isSame(a,"day");){const r=t.format("YYYY-MM-DD"),c=R(t);n[r]={date:r,price:6200,status:{hot:o.has(r),unavailable:l.has(r)},meta:c.length?{badges:c}:void 0},t=t.add(1,"day")}return n},A=[{value:"overnight",label:"過夜住宿"},{value:"dayuse",label:"日間休息"}],P=[{key:"today",label:"今日",icon:s.jsx(d,{sx:{width:20,height:20,borderRadius:"4px",border:"1px solid #1994FC"}})},{key:"hot",label:"熱賣中",icon:s.jsx(d,{sx:{background:"#FFF5F5",width:20,height:20,borderRadius:"4px",padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(j,{size:16,weight:"fill",color:"#E24343"})})},{key:"disabled",label:"不可預訂",icon:s.jsx(d,{sx:{width:20,borderRadius:"4px",height:20,background:"#CECECE",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(B,{size:16,color:"#B4B4B4"})})}],T=h.map(e=>s.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[f(e,{defaultSize:18,xsSize:14,defaultPadding:4,xsPadding:2}),e.label]},`filter-${e.key}`)),_={title:"components/Modules/Calendar/Calendar",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"},filterItems:{control:"object"},legendItems:{control:"object"},tabs:{control:"object"},infoText:{control:"text"},showDoubleMonth:{control:"boolean"},dayMap:{control:"object"}},args:{showDoubleMonth:!0,tabs:A,infoText:s.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(S,{size:24,color:"#1994FC"}),"根據您的條件，顯示每間房 1 晚的最低可用價格（含服務費及稅）。"]}),filterItems:T,legendItems:P,dayMap:v()}},z=e=>{const[a,n]=C.useState({start:null,end:null});return s.jsx(y,{...e,value:a,onChange:n,defaultMonth:i("2025-10-01"),onSubmit:o=>{n(o)}})},u={render:e=>s.jsx(z,{...e}),name:"Calender",parameters:{docs:{source:{code:`
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
    label: "適用 AAAA",
    Icon: ...
  },
  {
    key: "ibmbar",
    label: "適用 BBBB",
    Icon: ...
  },
  {
    key: "std",
    label: "適用 CCCC",
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
  filterItems={filters}
  defaultMonth={dayjs().startOf("("month")}
  showDoubleMonth={true}
  dayMap={map}
  value={range}
  onChange={setRange}
  onSubmit={setRange}
/>
                `.trim()}}}};var b,g,p;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    label: "適用 AAAA",
    Icon: ...
  },
  {
    key: "ibmbar",
    label: "適用 BBBB",
    Icon: ...
  },
  {
    key: "std",
    label: "適用 CCCC",
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
  filterItems={filters}
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
}`,...(p=(g=u.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const Q=["Default"];export{u as Default,Q as __namedExportsOrder,_ as default};
