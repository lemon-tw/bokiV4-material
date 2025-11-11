import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as b}from"./index-D4H_InIO.js";import{C as p,B as r,e as y,d as c,o as h,a as C}from"./Calendar-Dr32-U0b.js";import"./DefaultPropsProvider-B0z8ytDR.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const x=()=>{const a=c("2025-10-31"),o=c("2026-12-31"),t={},d=new Set(["2025-10-23","2025-10-24","2025-10-30","2025-11-04","2025-11-05"]),g=new Set(["2025-11-07","2025-11-17","2025-11-29"]);let n=a.clone();for(;n.isBefore(o,"day")||n.isSame(o,"day");){const s=n.format("YYYY-MM-DD");t[s]={date:s,price:6200,status:{hot:d.has(s),unavailable:g.has(s)}},n=n.add(1,"day")}return t},f=[{value:"overnight",label:"過夜住宿"},{value:"dayuse",label:"日間休息"}],j=[{key:"today",label:"今日",icon:e.jsx(r,{sx:{width:20,height:20,borderRadius:"4px",border:"1px solid #1994FC"}})},{key:"hot",label:"熱賣中",icon:e.jsx(r,{sx:{background:"#FFF5F5",width:20,height:20,borderRadius:"4px",padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(h,{size:16,weight:"fill",color:"#E24343"})})},{key:"disabled",label:"不可預訂",icon:e.jsx(r,{sx:{width:20,borderRadius:"4px",height:20,background:"#CECECE",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(C,{size:16,color:"#B4B4B4"})})}],E={title:"components/Modules/Calendar/Calendar",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"},legendItems:{control:"object"},tabs:{control:"object"},infoText:{control:"text"},showDoubleMonth:{control:"boolean"},dayMap:{control:"object"}},args:{showDoubleMonth:!0,tabs:f,infoText:e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(y,{size:24,color:"#1994FC"}),"根據您的條件，顯示每間房 1 晚的最低可用價格（含服務費及稅）。"]}),legendItems:j,dayMap:x()}},D=a=>{const[o,t]=b.useState({start:null,end:null});return e.jsx(p,{...a,value:o,onChange:t,defaultMonth:c("2025-10-01"),onSubmit:d=>{t(d)}})},l={render:a=>e.jsx(D,{...a}),name:"Calender",parameters:{docs:{source:{code:`
import { 
    Calender,
    type CalendarDay,
    type CalendarRangeValue,
    type CalendarTabOption, 
  } from '@lemon/material';
import React, { useState } from 'react';

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
                `.trim()}}}};var i,m,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Default"];export{l as Default,I as __namedExportsOrder,E as default};
