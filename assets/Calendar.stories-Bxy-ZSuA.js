import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as D}from"./index-D4H_InIO.js";import{d as c}from"./dayjs.min-BJoxDa44.js";import{o as f}from"./zh-tw-C-UY_gDz.js";import{C as h,a as S,o as T}from"./Rest-DDm1qR0Q.js";import{o as j}from"./HouseLine.es-5aRlzft1.js";import{e as k}from"./Alert-D5ekytAl.js";import{a as M}from"./Cart-BpIlSJmn.js";import{o as I}from"./Tent.es-CwUugGJI.js";import{e as P}from"./Modal-BPmM9JPO.js";import"./lemonTheme-B7Qis2N-.js";import"./Avatar-pRnr6DU5.js";import"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./BottomModal-imHOmNSj.js";import"./Profile-BMNnG9N8.js";import"./Typography-BZQ6nlo4.js";import{B as i}from"./CheckCircle.es-BXMbO79g.js";import{u as R}from"./useTheme-B9a50qyY.js";import{u as w}from"./index-BfevDTIX.js";import"./Plus.es-Cfd-24J4.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./defaultPalette-DLKPgRCf.js";import"./FormControlLabel-B--Rj6MC.js";import"./Tabs-BBXbhsQj.js";import"./getThemeProps-MPmnPgUq.js";import"./index-Bm8UbI65.js";import"./useSlotProps-BPBm8KYw.js";import"./CrownSimple.es-N3wLHKBe.js";import"./WarningCircle.es-x_3DymOb.js";import"./Moon.es-CJIcfKlP.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Link-CuGHZV3F.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./Users.es-DGjqvHPG.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function u(e,a="2026-12-31"){const t=c(),l=c(a).diff(t,"day"),n=new Set;for(;n.size<e;){const r=Math.floor(Math.random()*(l+1)),d=t.add(r,"day").format("YYYY-MM-DD");n.add(d)}return Array.from(n).sort()}const E=[{code:"DOUBLE11",description:"2025年11月1日至11日限時開跑，雙11專屬優惠現折 NT$200！超值折扣只有這 11 天，錯過就要再等一年，立即搶訂！",discountAmount:"TWD200",memberOnly:!0,minSpend:"TWD 5,000",stayPeriod:"2025/11/10 - 2026/11/10",title:"雙11限時優惠｜現折 NT$500",validPeriod:"2025/11/10 - 2025/11/30"},{code:"DOUBLE12",description:"2025年11月1日至11日限時開跑，雙11專屬優惠現折 NT$300！超值折扣只有這 11 天，錯過就要再等一年，立即搶訂！",discountAmount:"TWD300",memberOnly:!1,minSpend:"TWD 5,000",stayPeriod:"2025/11/10 - 2026/11/10",title:"雙11限時優惠｜現折 NT$500雙11限時優惠｜現折 NT$500雙11限時優惠｜現折 NT$500雙11限時優惠｜現折 NT$500雙11限時優惠｜現折 NT$500",validPeriod:"2025/11/10 - 2025/11/30"},{code:"DOUBLE13",description:"2025年11月1日至11日限時開跑，雙11專屬優惠現折 NT$400！超值折扣只有這 11 天，錯過就要再等一年，立即搶訂！",discountAmount:"TWD400",memberOnly:!0,minSpend:"TWD 5,000",stayPeriod:"2025/11/10 - 2026/11/10",title:"雙11限時優惠｜現折 NT$500",validPeriod:"2025/11/10 - 2025/11/30"}],B=[{code:"STD",description:"標準雙人房",discountAmount:"TWD2500",icon:f},{code:"DELUXE",description:"豪華雙人房",discountAmount:"TWD5000",icon:j},{code:"PREMIUM",description:"超級雙人房",discountAmount:"TWD5000",icon:I}],$=[{value:"overnight",label:"過夜住宿"},{value:"dayuse",label:"日間休息"}],F=({preset:e,options:a,overrides:t})=>{const s=R(),l=w(s.breakpoints.down("sm")),n=l?a.xsSize??a.defaultSize:a.defaultSize,r=l?a.xsPadding??a.defaultPadding??0:a.defaultPadding??0,d=(t==null?void 0:t.color)??e.iconColor,C=(t==null?void 0:t.backgroundColor)??e.backgroundColor??"transparent";return o.jsx(i,{sx:{width:n+r*2,height:n+r*2,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",bgcolor:C,padding:`${r}px`},children:o.jsx(e.Icon,{size:n,weight:"fill",color:d})})},p=(e,a,t)=>o.jsx(F,{preset:e,options:a,overrides:t}),x=[{key:"aaaaaa",label:"AA 方案",Icon:M,iconColor:"#2D8B6D"},{key:"ibmbar",label:"BB 方案",Icon:S,iconColor:"#9B5F00"},{key:"std",label:"CC 方案",Icon:f,iconColor:"#0648BE"}],z=e=>x.filter((a,t)=>(e.date()+t)%3===0||(e.day()+t)%4===0).map(a=>({key:`${a.key}-${e.format("YYYYMMDD")}`,label:a.label,icon:p(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0}),activeIcon:p(a,{defaultSize:14,xsSize:10,defaultPadding:2,xsPadding:0},{color:"#FFFFFF",backgroundColor:"transparent"})})),v=()=>{const e=c("2025-10-31"),a=c("2026-12-31"),t={},s=new Set(u(50)),l=new Set(u(20));let n=e.clone();for(;n.isBefore(a,"day")||n.isSame(a,"day");){const r=n.format("YYYY-MM-DD"),d=z(n);t[r]={date:r,price:6200,status:{hot:s.has(r),unavailable:l.has(r)},meta:d.length?{badges:d}:void 0},n=n.add(1,"day")}return t},O=[{key:"today",label:"今日",icon:o.jsx(i,{sx:{width:20,height:20,borderRadius:"4px",border:"1px solid #1994FC"}})},{key:"hot",label:"熱賣中",icon:o.jsx(i,{sx:{background:"#FFF5F5",width:20,height:20,borderRadius:"4px",padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsx(T,{size:16,weight:"fill",color:"#E24343"})})},{key:"disabled",label:"不可預訂",icon:o.jsx(i,{sx:{width:20,borderRadius:"4px",height:20,background:"#CECECE",display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsx(P,{size:16,color:"#B4B4B4"})})}];x.map(e=>o.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:1},children:[p(e,{defaultSize:18,xsSize:14,defaultPadding:4,xsPadding:2}),e.label]},`filter-${e.key}`));const Me={title:"components/Modules/Calendar/Calendar",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"},filterItems:{control:"object"},legendItems:{control:"object"},tabs:{control:"object"},infoText:{control:"text"},showDoubleMonth:{control:"boolean"},dayMap:{control:"object"},roomCodes:{control:"object"},promoDetails:{control:"object"}},args:{showDoubleMonth:!0,tabs:$,infoText:o.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(k,{size:24,color:"#1994FC"}),o.jsxs("span",{children:["根據您的條件，顯示",o.jsx("span",{style:{fontWeight:600,color:"#000"},children:"每間房"}),"1 晚的最低可用價格（含服務費及稅）。"]})]}),legendItems:O,dayMap:v(),roomCodes:B,promoDetails:E}},Y=e=>{const[a,t]=D.useState({start:null,end:null});return o.jsx(o.Fragment,{children:o.jsx(h,{...e,value:a,onChange:t,defaultMonth:c("2025-10-01"),onSubmit:s=>{t(s)}})})},m={render:e=>o.jsx(Y,{...e}),name:"Calendar",parameters:{docs:{source:{code:`
import { 
    Calendar,
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
                `.trim()}}}};var b,g,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <CalendarStory {...args} />,
  name: "Calendar",
  parameters: {
    docs: {
      source: {
        code: \`
import { 
    Calendar,
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
}`,...(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ie=["Default"];export{m as Default,Ie as __namedExportsOrder,Me as default};
