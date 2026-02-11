import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{O as u}from"./OverNight-CH_69GyB.js";import{d as t}from"./dayjs.min-BJoxDa44.js";import{B as I}from"./CheckCircle.es-DXCUKnUH.js";import"./index-D4H_InIO.js";import"./CaretDown.es-C_6dMS2T.js";import"./BottomModal-byrGeGWZ.js";import"./defaultPalette-BZVf8BwZ.js";import"./Modal-C5rE0h8n.js";import"./useTheme-C-KIORmc.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./index-Bm8UbI65.js";import"./useSlotProps-CGB2S-5Z.js";import"./CaretUp.es-Cflm5pVD.js";import"./Alert-DRAbsrNu.js";import"./Warning.es-C1cCrKac.js";import"./WarningCircle.es-CJLwpT3c.js";import"./Rest-CG94CFjf.js";import"./ToggleButton-B_1nB3DD.js";import"./zh-tw-CCYRlzet.js";import"./Cart-g-olUpuS.js";import"./FormControlLabel-CQG9jDu4.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./lemonTheme-DRSUy1mj.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Avatar-kr3oDakC.js";import"./DraggableChips-D0MI0M_6.js";import"./tiny-invariant-CopsF_GD.js";import"./Typography-CFfHvyVk.js";import"./Tabs-BbBue1HL.js";import"./Profile-C3shN0iq.js";import"./AccordionSummary-BPG7zxQD.js";import"./CrownSimple.es-BynC5VcB.js";import"./Divider-QqgqyZ2C.js";import"./Copy.es-Akm3ZCin.js";const Fe={title:"components/Modules/OverNight/OverNight",component:u,parameters:{layout:"fullscreen"}},h=(i,s,T=[])=>{const g=(s??t()).startOf("month"),o={};for(let e=0;e<2;e++){const a=g.add(e,"month"),p=a.daysInMonth();for(let r=0;r<p;r++){const m=a.add(r,"day"),k=m.date();o[m.format("YYYY-MM-DD")]={amount:i,status:T.includes(k)?"closed":"available"}}}return o},U=()=>{const i={},s=t().startOf("day"),g=t().add(12,"month").endOf("month").diff(s,"day");let o=s.clone();for(let e=0;e<=g;e+=1){const a=o.format("YYYY-MM-DD"),p=e%13===0,r=!p&&e%9===0,m=6200+e%7*200;i[a]={date:a,price:m,status:{hot:r,unavailable:p}},o=o.add(1,"day")}return i},f=U(),B=h(3200,t("2025-03-01")),W=h(4200,t("2025-03-01"),[12,18]),Y=h(3600,t("2025-03-01")),v={rooms:[{id:"overnight-room-1",name:"精緻市景雙人房",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],bedType:"一大床",maxGuests:2,size:"約30 坪",description:"簡約舒適的雙人房型，適合雙人旅程。",amenities:["Wi-Fi","浴缸","衣櫥","保險箱","迷你吧"],view:["市景"],remainingRooms:3},{id:"overnight-room-2",name:"高級海景家庭房",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],bedType:"兩大床",maxGuests:4,size:"約40 坪",description:"寬敞空間搭配海景視野，適合家庭入住。",amenities:["Wi-Fi","電視","客廳","雙衛浴"],view:["海景"],remainingRooms:2}],projects:[{id:"overnight-project-1",name:"假日出遊專案",memberOnly:!1,images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],tag:["含早餐","延遲退房"],freeCancelUntil:"2025/12/31",includeBreakfast:!0,description:"周末旅遊首選，包含早餐與延遲退房。",includes:[{name:"早餐",qty:"依人數"},{name:"延遲退房 1 小時"}]},{id:"overnight-project-2",name:"平日早鳥方案",memberOnly:!1,images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],tag:["不含早餐"],includeBreakfast:!1,description:"平日限定，適合商務與短暫旅行。",includes:[{name:"延遲退房 1 小時"}],addons:["加購早餐 300/人","加購洗衣 500/次"]}],links:[{projectId:"overnight-project-1",roomId:"overnight-room-1",price:{amount:3200,currency:"TWD",per:"每晚",calendarPrices:B,promoCode:{code:"STAY200",discount:200,applyTo:"firstNight"}}},{projectId:"overnight-project-1",roomId:"overnight-room-2",price:{amount:4200,currency:"TWD",per:"每晚",calendarPrices:W,promoCode:{code:"STAY10",discount:-.9,applyTo:"eachNight"}}},{projectId:"overnight-project-2",roomId:"overnight-room-1",price:{amount:3600,currency:"TWD",per:"每晚",calendarPrices:Y,promoCode:{code:"STAY150",discount:150,applyTo:"lastNight"}}}]},b=[{id:"trip-1",status:"已預訂",code:"#BK25226782424",dateRange:"2025/03/19 (三) - 2025/03/20 (四)",note:"包含 2 段入住日期",rooms:"3 間房",price:1e3,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"},{id:"trip-2",status:"已預訂",code:"#BK25226782425",dateRange:"2025/04/02 (三) - 2025/04/04 (五)",note:"包含 2 段入住日期",rooms:"2 間房",price:2200,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"},{id:"trip-3",status:"已預訂",code:"#BK25226782426",dateRange:"2025/04/18 (五) - 2025/04/20 (日)",note:"包含 2 段入住日期",rooms:"4 間房",price:3200,image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"}],y=[{id:"cart-1",title:"精緻市景雙人房",dateRange:"2 晚・4/14 - 4/16",rooms:"共 2 間房",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop"}],x={upsell:[{id:"overnight-upsell-1",title:"升級住房體驗",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],description:"升級海景家庭房，享受更寬敞的休息空間。",memberOnly:!1,price:1200,priceTag:"起",upsell:{group:"time",tiers:[{label:"升級 1 晚",price:1200},{label:"升級 2 晚",price:2200},{label:"升級 3 晚",price:3e3}]}}],addon:[{id:"overnight-addon-1",title:"豪華早餐",images:["https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"],description:"雙人豪華早餐套餐。",memberOnly:!1,price:260,priceTag:"每人",addon:{group:"quantitySelector",detail:{maxSelected:6}}},{id:"overnight-addon-2",title:"延遲退房",images:["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"],description:"每小時加購延遲退房服務。",memberOnly:!1,price:200,priceTag:"每小時",addon:{group:"quantitySelector",detail:{maxSelected:6}}}]},w=[{code:"VIP500",title:"會員專屬折扣",discount:"TWD 500",validRange:"2025/01/01 - 2025/12/31",minSpend:"TWD 5,000"},{code:"SPRING200",title:"春季會員限定",discount:"TWD 200",validRange:"2025/03/01 - 2025/06/30",minSpend:"TWD 3,000"}],d={render:()=>n.jsx(u,{info:v,upcomingTrips:b,pendingCarts:y,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"responsive"}}},c={render:()=>n.jsx(I,{sx:{width:"100%",maxWidth:1920,mx:"auto"},children:n.jsx(u,{info:v,upcomingTrips:b,pendingCarts:y,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"ipad"}}},l={render:()=>n.jsx(I,{sx:{width:"100%"},children:n.jsx(u,{info:v,upcomingTrips:b,pendingCarts:y,addonUpsellPreset:x,calendarDayMap:f,memberExclusiveCoupons:w})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"iphone12"}}};var D,F,P;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    }
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var C,M,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%",
    maxWidth: 1920,
    mx: "auto"
  }}>
      <OverNight info={overnightInfo} upcomingTrips={upcomingTrips} pendingCarts={pendingCarts} addonUpsellPreset={overnightAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />
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
    }
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,q,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%"
  }}>
      <OverNight info={overnightInfo} upcomingTrips={upcomingTrips} pendingCarts={pendingCarts} addonUpsellPreset={overnightAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />
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
    }
  }
}`,...(S=(q=l.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const Pe=["Desktop","Tablet","Mobile"];export{d as Desktop,l as Mobile,c as Tablet,Pe as __namedExportsOrder,Fe as default};
