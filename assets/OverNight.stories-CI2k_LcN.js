import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{O as u}from"./OverNight-CcVdndJV.js";import{d as t}from"./dayjs.min-BJoxDa44.js";import{B as S}from"./CheckCircle.es-DXCUKnUH.js";import"./index-D4H_InIO.js";import"./CaretDown.es-C_6dMS2T.js";import"./BottomModal-CQgISz-Y.js";import"./defaultPalette-BZVf8BwZ.js";import"./Modal-BHwqZrHA.js";import"./useTheme-C-KIORmc.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./index-Bm8UbI65.js";import"./useSlotProps-Dpzk0ddK.js";import"./CaretUp.es-Cflm5pVD.js";import"./Alert-BXVqmw5v.js";import"./Warning.es-C1cCrKac.js";import"./WarningCircle.es-CJLwpT3c.js";import"./Rest-DPHg0exl.js";import"./ToggleButton-CJD6HA4B.js";import"./zh-tw-CCYRlzet.js";import"./Cart-Dvesi0jg.js";import"./FormControlLabel-S5Kd-VCb.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./lemonTheme-DRSUy1mj.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Avatar-BwnX3fSq.js";import"./DraggableChips-BTC8HJGy.js";import"./tiny-invariant-CopsF_GD.js";import"./Typography-BcGPB_gl.js";import"./Tabs-CX_v8mKZ.js";import"./Profile-CwMu8OsX.js";import"./AccordionSummary-D8DSbU2C.js";import"./CrownSimple.es-BynC5VcB.js";import"./Divider-Kbwq-I49.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";const Fe={title:"components/Modules/OverNight/OverNight",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
OverNight 為「過夜訂房」頁面的主模組，主要包含：

- 房型/專案清單與價格呈現
- 行事曆日期選擇與每日價格資訊
- 購物車摘要與加購流程
- 右側摘要區（即時金額變化）

此 story 提供 Desktop / Tablet / Mobile 三種情境，方便檢視 RWD 與互動狀態。
        `}}}},h=(i,s,T=[])=>{const g=(s??t()).startOf("month"),o={};for(let e=0;e<2;e++){const r=g.add(e,"month"),p=r.daysInMonth();for(let a=0;a<p;a++){const d=r.add(a,"day"),I=d.date();o[d.format("YYYY-MM-DD")]={amount:i,status:T.includes(I)?"closed":"available"}}}return o},k=()=>{const i={},s=t().startOf("day"),g=t().add(12,"month").endOf("month").diff(s,"day");let o=s.clone();for(let e=0;e<=g;e+=1){const r=o.format("YYYY-MM-DD"),p=e%13===0,a=!p&&e%9===0,d=6200+e%7*200;i[r]={date:r,price:d,status:{hot:a,unavailable:p}},o=o.add(1,"day")}return i},f=k(),U=h(3200,t("2025-03-01")),W=h(4200,t("2025-03-01"),[12,18]),B=h(3600,t("2025-03-01")),v={rooms:[{id:"overnight-room-1",name:"精緻市景雙人房",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],bedType:"一大床",maxGuests:2,size:"約30 坪",description:"簡約舒適的雙人房型，適合雙人旅程。",amenities:["Wi-Fi","浴缸","衣櫥","保險箱","迷你吧"],view:["市景"],remainingRooms:3},{id:"overnight-room-2",name:"高級海景家庭房",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],bedType:"兩大床",maxGuests:4,size:"約40 坪",description:"寬敞空間搭配海景視野，適合家庭入住。",amenities:["Wi-Fi","電視","客廳","雙衛浴"],view:["海景"],remainingRooms:2}],projects:[{id:"overnight-project-1",name:"假日出遊專案",memberOnly:!1,images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],tag:["含早餐","延遲退房"],freeCancelUntil:"2025/12/31",includeBreakfast:!0,description:"周末旅遊首選，包含早餐與延遲退房。",includes:[{name:"早餐",qty:"依人數"},{name:"延遲退房 1 小時"}]},{id:"overnight-project-2",name:"平日早鳥方案",memberOnly:!1,images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],tag:["不含早餐"],includeBreakfast:!1,description:"平日限定，適合商務與短暫旅行。",includes:[{name:"延遲退房 1 小時"}],addons:["加購早餐 300/人","加購洗衣 500/次"]}],links:[{projectId:"overnight-project-1",roomId:"overnight-room-1",price:{amount:3200,currency:"TWD",per:"每晚",calendarPrices:U,promoCode:{code:"STAY200",discount:200,applyTo:"firstNight"}}},{projectId:"overnight-project-1",roomId:"overnight-room-2",price:{amount:4200,currency:"TWD",per:"每晚",calendarPrices:W,promoCode:{code:"STAY10",discount:-.9,applyTo:"eachNight"}}},{projectId:"overnight-project-2",roomId:"overnight-room-1",price:{amount:3600,currency:"TWD",per:"每晚",calendarPrices:B,promoCode:{code:"STAY150",discount:150,applyTo:"lastNight"}}}]},y=[{id:"trip-1",status:"已預訂",code:"#BK25226782424",dateRange:"2025/03/19 (三) - 2025/03/20 (四)",note:"包含 2 段入住日期",rooms:"3 間房",price:1e3,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"},{id:"trip-2",status:"已預訂",code:"#BK25226782425",dateRange:"2025/04/02 (三) - 2025/04/04 (五)",note:"包含 2 段入住日期",rooms:"2 間房",price:2200,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"},{id:"trip-3",status:"已預訂",code:"#BK25226782426",dateRange:"2025/04/18 (五) - 2025/04/20 (日)",note:"包含 2 段入住日期",rooms:"4 間房",price:3200,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"}],b=[{id:"cart-1",title:"精緻市景雙人房",dateRange:"2 晚・4/14 - 4/16",rooms:"共 2 間房",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop"}],x={upsell:[{id:"overnight-upsell-1",title:"升級住房體驗",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],description:"升級海景家庭房，享受更寬敞的休息空間。",memberOnly:!1,price:1200,priceTag:"起",upsell:{group:"time",tiers:[{label:"升級 1 晚",price:1200},{label:"升級 2 晚",price:2200},{label:"升級 3 晚",price:3e3}]}}],addon:[{id:"overnight-addon-1",title:"豪華早餐",images:["https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"],description:"雙人豪華早餐套餐。",memberOnly:!1,price:260,priceTag:"每人",addon:{group:"quantitySelector",detail:{maxSelected:6}}},{id:"overnight-addon-2",title:"延遲退房",images:["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"],description:"每小時加購延遲退房服務。",memberOnly:!1,price:200,priceTag:"每小時",addon:{group:"quantitySelector",detail:{maxSelected:6}}}]},w=[{code:"VIP500",title:"會員專屬折扣",discount:"TWD 500",validRange:"2025/01/01 - 2025/12/31",minSpend:"TWD 5,000"},{code:"SPRING200",title:"春季會員限定",discount:"TWD 200",validRange:"2025/03/01 - 2025/06/30",minSpend:"TWD 3,000"}],m={render:()=>n.jsx(u,{info:v,upcomingTrips:y,pendingCarts:b,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"responsive"},docs:{description:{story:"桌機版 OverNight 畫面，呈現完整左右欄位佈局與購物車互動。"}}}},c={render:()=>n.jsx(S,{sx:{width:"100%",maxWidth:1920,mx:"auto"},children:n.jsx(u,{info:v,upcomingTrips:y,pendingCarts:b,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"ipad"},docs:{description:{story:"平板版 OverNight 畫面，確認中尺寸下的排版與元件行為。"}}}},l={render:()=>n.jsx(S,{sx:{width:"100%"},children:n.jsx(u,{info:v,upcomingTrips:y,pendingCarts:b,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"iphone12"},docs:{description:{story:"手機版 OverNight 畫面，確認行動版收合、清單與操作流程。"}}}};var D,O,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <OverNight info={overnightInfo} upcomingTrips={upcomingTrips} pendingCarts={pendingCarts} addonUpsellPreset={overnightAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#F7F7F7"
      }]
    },
    viewport: {
      defaultViewport: "responsive"
    },
    docs: {
      description: {
        story: "桌機版 OverNight 畫面，呈現完整左右欄位佈局與購物車互動。"
      }
    }
  }
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var M,P,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%",
    maxWidth: 1920,
    mx: "auto"
  }}>\r
      <OverNight info={overnightInfo} upcomingTrips={upcomingTrips} pendingCarts={pendingCarts} addonUpsellPreset={overnightAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />\r
    </Box>,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#F7F7F7"
      }]
    },
    viewport: {
      defaultViewport: "ipad"
    },
    docs: {
      description: {
        story: "平板版 OverNight 畫面，確認中尺寸下的排版與元件行為。"
      }
    }
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var j,N,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%"
  }}>\r
      <OverNight info={overnightInfo} upcomingTrips={upcomingTrips} pendingCarts={pendingCarts} addonUpsellPreset={overnightAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />\r
    </Box>,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#F7F7F7"
      }]
    },
    viewport: {
      defaultViewport: "iphone12"
    },
    docs: {
      description: {
        story: "手機版 OverNight 畫面，確認行動版收合、清單與操作流程。"
      }
    }
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const Me=["Desktop","Tablet","Mobile"];export{m as Desktop,l as Mobile,c as Tablet,Me as __namedExportsOrder,Fe as default};
