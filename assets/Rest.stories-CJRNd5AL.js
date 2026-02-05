import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{f as u}from"./Rest-DDm1qR0Q.js";import{d as o}from"./dayjs.min-BJoxDa44.js";import{B as R}from"./CheckCircle.es-BXMbO79g.js";import"./index-D4H_InIO.js";import"./ToggleButton-1S1uagp-.js";import"./defaultPalette-DLKPgRCf.js";import"./zh-tw-C-UY_gDz.js";import"./Cart-BpIlSJmn.js";import"./FormControlLabel-B--Rj6MC.js";import"./Plus.es-Cfd-24J4.js";import"./Modal-BPmM9JPO.js";import"./useTheme-B9a50qyY.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./BottomModal-imHOmNSj.js";import"./index-Bm8UbI65.js";import"./useSlotProps-BPBm8KYw.js";import"./Alert-D5ekytAl.js";import"./Warning.es-BRl635yR.js";import"./WarningCircle.es-x_3DymOb.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./lemonTheme-B7Qis2N-.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Avatar-pRnr6DU5.js";import"./DraggableChips-Gzah4u51.js";import"./tiny-invariant-CopsF_GD.js";import"./Typography-BZQ6nlo4.js";import"./Tabs-BBXbhsQj.js";import"./Profile-BMNnG9N8.js";import"./Collapse-DpSy8Sr3.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-DR1e4bhK.js";import"./Copy.es-Cj1k5QIq.js";const be={title:"components/Modules/Rest/Rest",component:u,parameters:{layout:"fullscreen"}},g=(n,i,x=[])=>{const f=(i??o()).startOf("month"),t={};for(let e=0;e<2;e++){const a=f.add(e,"month"),p=a.daysInMonth();for(let r=0;r<p;r++){const d=a.add(r,"day"),I=d.date();t[d.format("YYYY-MM-DD")]={amount:n,status:x.includes(I)?"closed":"available"}}}return t},k=()=>{const n={},i=o().startOf("day"),f=o().add(12,"month").endOf("month").diff(i,"day");let t=i.clone();for(let e=0;e<=f;e+=1){const a=t.format("YYYY-MM-DD"),p=e%13===0,r=!p&&e%9===0,d=6200+e%7*200;n[a]={date:a,price:d,status:{hot:r,unavailable:p}},t=t.add(1,"day")}return n},y=k(),E=g(860,o("2025-03-01")),U=g(1200,o("2025-03-01"),[19,25]),C=g(980,o("2025-03-01")),h={rooms:[{id:"rest-room-1",name:"精緻市景雙人房",images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg-ZIvwHRef3gcoScgGGnxnasD-SfxgalFA&s","https://taipei.metropolitan.tw/stay/rooms/d07ao00000000ydc-img/1120_DPK_01.jpg"],bedType:"一大床",maxGuests:2,size:"約30 坪",description:"擁有舒適大床與獨立浴缸，適合短暫休息與放鬆。",amenities:["Wi-Fi","浴缸","衣櫥","保險箱","迷你吧"],view:["市景"],remainingRooms:3},{id:"rest-room-2",name:"高級海景家庭房",images:["https://searchome-aws.hmgcdn.com/article/doc73133/imgs20230315163050076.jpg"],bedType:"兩大床",maxGuests:4,size:"約40 坪",description:"面海景觀，適合家庭或好友短暫休息。",amenities:["Wi-Fi","電視","客廳","雙衛浴"],view:["海景"],remainingRooms:2}],projects:[{id:"rest-project-1",name:"假日休息專案",memberOnly:!1,images:["https://www.fullon-hotels.com.tw/upload/news_list_pic_s/a8_twL_news_25G08_kwwyhe4vnn.jpg"],tag:["含早餐","延遲退房"],freeCancelUntil:"2025/12/31",includeBreakfast:!0,description:"周末休息首選，享受房內舒適與餐點服務。",includes:[{name:"早餐",qty:"依人數"},{name:"延遲退房 1 小時"}]},{id:"rest-project-2",name:"平日休息方案",memberOnly:!1,images:["https://www.fullon-hotels.com.tw/upload/news_list_pic_s/a8_twL_news_25B25_ethfwyga8i.jpg"],tag:["不含早餐"],includeBreakfast:!1,description:"平日限定，適合商務與短暫休息需求。",includes:[{name:"延遲退房 1 小時"}],addons:["加購早餐 300/人","加購洗衣 500/次"]}],links:[{projectId:"rest-project-1",roomId:"rest-room-1",price:{amount:860,currency:"TWD",per:"每小時",calendarPrices:E,promoCode:{code:"REST200",discount:200,applyTo:"firstNight"}}},{projectId:"rest-project-1",roomId:"rest-room-2",price:{amount:1200,currency:"TWD",per:"每小時",calendarPrices:U,promoCode:{code:"REST10",discount:-.9,applyTo:"eachNight"}}},{projectId:"rest-project-2",roomId:"rest-room-1",price:{amount:980,currency:"TWD",per:"每小時",calendarPrices:C,promoCode:{code:"REST150",discount:150,applyTo:"lastNight"}}}]},w={upsell:[{id:"rest-upsell-1",title:"升級住房體驗",images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"],description:"升級豪華海景房，享受更寬敞的休息空間。",memberOnly:!1,price:600,priceTag:"起",upsell:{group:"time",tiers:[{label:"升級 2 小時",price:600},{label:"升級 3 小時",price:900},{label:"升級 4 小時",price:1200}]}}],addon:[{id:"rest-addon-1",title:"下午茶套餐",images:["https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"],description:"雙人下午茶，適合休息時段享用。",memberOnly:!1,price:100,priceTag:"每人",addon:{group:"quantitySelector",detail:{maxSelected:6}}},{id:"rest-addon-2",title:"延遲退房",images:["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"],description:"每小時加購延遲退房服務。",memberOnly:!1,price:200,priceTag:"每小時",addon:{group:"quantitySelector",detail:{maxSelected:6}}}]},v=[{code:"VIP500",title:"會員專屬折扣",discount:"TWD 500",validRange:"2025/01/01 - 2025/12/31",minSpend:"TWD 5,000"},{code:"SPRING200",title:"春季會員限定",discount:"TWD 200",validRange:"2025/03/01 - 2025/06/30",minSpend:"TWD 3,000"}],m={render:()=>s.jsx(u,{info:h,addonUpsellPreset:w,calendarDayMap:y,memberExclusiveCoupons:v}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"responsive"}}},c={render:()=>s.jsx(R,{sx:{width:"100%",maxWidth:1920,mx:"auto"},children:s.jsx(u,{info:h,addonUpsellPreset:w,calendarDayMap:y,memberExclusiveCoupons:v})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"ipad"}}},l={render:()=>s.jsx(R,{sx:{width:"100%"},children:s.jsx(u,{info:h,addonUpsellPreset:w,calendarDayMap:y,memberExclusiveCoupons:v})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#F7F7F7"}]},viewport:{defaultViewport:"iphone12"}}};var b,D,F;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Rest info={restInfo} addonUpsellPreset={restAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />,
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
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var j,P,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%",
    maxWidth: 1920,
    mx: "auto"
  }}>
      <Rest info={restInfo} addonUpsellPreset={restAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />
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
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,S,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: "100%"
  }}>
      <Rest info={restInfo} addonUpsellPreset={restAddonUpsellPreset} calendarDayMap={calendarDayMap} memberExclusiveCoupons={memberExclusiveCoupons} />
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
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const De=["Desktop","Tablet","Mobile"];export{m as Desktop,l as Mobile,c as Tablet,De as __namedExportsOrder,be as default};
