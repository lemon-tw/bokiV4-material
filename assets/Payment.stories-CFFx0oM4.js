import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{P as s,e as f}from"./Payment-Dird7_hr.js";import{b as x,B as b}from"./CheckCircle.es-DXCUKnUH.js";import{o as y,a as w}from"./Scales.es-C3AxRNFi.js";import{e as h}from"./Money.es-CLnK04hd.js";import{e as v}from"./WarningCircle.es-CJLwpT3c.js";import"./index-D4H_InIO.js";import"./index-B5T-G8Uu.js";import"./defaultPalette-BZVf8BwZ.js";import"./getThemeProps-D8nCqP97.js";import"./Alert-DRAbsrNu.js";import"./CaretDown.es-C_6dMS2T.js";import"./Modal-C5rE0h8n.js";import"./useTheme-C-KIORmc.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./useSlotProps-CGB2S-5Z.js";import"./index-Bm8UbI65.js";import"./Warning.es-C1cCrKac.js";import"./Cart-DJEv7-_-.js";import"./FormControlLabel-CQG9jDu4.js";import"./ToggleButton-B_1nB3DD.js";import"./BottomModal-Bux3tXCl.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./Link-D6s8y8jX.js";import"./CaretUp.es-Cflm5pVD.js";import"./Copy.es-Akm3ZCin.js";const X={title:"components/Modules/Payment/Payment",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{onExpire:{action:"expire",table:{disable:!0}}}},r={initialSeconds:20*60,message:"請在倒數結束前完成付款，以確保目前房價與優惠有效。",memberRole:"member",initialCartItems:[{id:"c1",title:"精緻市景四人房",price:1800,dateRange:"04/14 - 04/15（1 晚）",guests:"1 成人, 1 兒童",plan:"假日出遊專案(含早餐)",discountLabel:"已優惠",discountAmount:200},{id:"c2",title:"精緻市景四人房",price:1800,dateRange:"04/14 - 04/15（1 晚）",guests:"1 成人, 1 兒童",plan:"假日出遊專案(含早餐)",discountLabel:"已優惠",discountAmount:200}],feeItems:[{label:"服務費",value:"+TWD 310"},{label:"稅費",value:"+TWD 155"}],promoDiscount:900,memberDiscount:900,bookingPolicies:[{id:"safe",title:"安心方案（支付全額，3天前免費取消/修改）",payLabel:"現在支付訂金 TWD 3,600",accentColor:"#147B5D",icon:e.jsx(x,{size:18,weight:"fill",color:"#20C997"})},{id:"flexible",title:"彈性方案（支付 3 成訂單，14天內免費取消/修改）",payLabel:"支付訂金 TWD 1,080",accentColor:"#BA8126",icon:e.jsx(y,{size:18,weight:"fill",color:"#F6B73C"})},{id:"free",title:"免付方案（入住前 3 日取消可免費修改）",payLabel:"入住現場支付",accentColor:"#0F62A8",icon:e.jsx(w,{size:18,weight:"fill",color:"#4B91FF"})},{id:"guarantee",title:"擔保方案（刷卡保證、不扣款）",payLabel:"不扣款，僅驗證信用卡",accentColor:"#FF4D4F",icon:e.jsx(v,{size:18,weight:"fill",color:"#FF4D4F"})}],paymentMethods:[{id:"card",label:"信用卡",icon:e.jsx(f,{size:28,weight:"regular",color:"#4C4C4C"}),imageSrc:"https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976-500x281.png",imageAlt:"Taiwan Pay",imageWidth:54,imageHeight:24},{id:"line",label:"LINE Pay",imageSrc:"https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1992.png",imageAlt:"LINE Pay",imageWidth:54,imageHeight:24},{id:"counter",label:"街口支付",imageSrc:"https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006-500x281.png",imageAlt:"街口支付",imageWidth:40,imageHeight:24},{id:"atm",label:"ATM轉帳",icon:e.jsx(h,{size:28,weight:"regular",color:"#4C4C4C"})}],creditCards:[{name:"Visa",imgSrc:"https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006-500x281.png"},{name:"MasterCard",imgSrc:"https://1000logos.net/wp-content/uploads/2024/07/Mastercard-credit-card-Logo-500x281.png"},{name:"JCB",imgSrc:"https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo-700x394.png"}],bookingGuaranteeTerms:["所有價格將按照 TWD 結算，非台幣的顯示僅為參考費率。","飯店將在訂房成立後進行信用卡授權驗證，以確保卡片有效。","若於取消政策規範時間內未取消訂房且未入住，飯店有權依據取消政策，向綁定信用卡扣取相關費用。","需持有有效且具備授權能力的信用卡，否則訂房可能無法成立或將被取消。"],freePlanNotice:{title:"請注意",lines:["若選擇免付方案，飯店將保留隨時取消訂房的權利，若您希望確保房間不會被取消，建議您選擇預付訂金或全額保證方案。敬請留意，謝謝您的理解與配合。"]},wabATMPlanNotice:{title:"請注意",lines:["所有價格將按照 TWD 結算。非台幣的顯示僅為參考費率。","送出後下一頁會連結至所選擇金流頁面，請耐心等候訂購成功頁面出現，請勿在金流等候頁面關閉視窗、重新整裡或點選回上頁，以免造成訂購失敗或重複付款事宜。","旅宿業者或訂房系統商不會以任何形式要求您前往操作ATM解除扣款、變更付款方式、補繳金額、要求轉帳、解除分期、購券刷退退款等操作，亦不會要求您提供信用卡帳號資料、銀行帳號相關資料。若接到可疑電話，請務必致電旅宿業者確認，或撥打警政署反詐騙諮詢專線165，請勿回撥可疑來電，提醒您務必提高警覺！"]},cancelPolicyDefault:{title:"依「旅館業定型化契約」規定，消費者取消訂房時，應依以下標準辦理：",lines:["住宿日前第 14 日（含）以前通知取消：退還已付訂金 100%。","住宿日前第 10～13 日通知取消：退還已付訂金 70%。","住宿日前第 7～9 日通知取消：退還已付訂金 50%。","住宿日前第 4～6 日通知取消：退還已付訂金 40%。","住宿日前第 2～3 日通知取消：退還已付訂金 30%。","住宿日前 1 日通知取消：退還已付訂金 20%。","住宿當日通知或未通知未入住者（No-show）：不退還訂金。"],footer:"如因天災（如颱風、地震）等不可抗力因素影響行程，得依相關政府公告協議退訂。"},cancelPolicyFree:{title:"選擇免付方案的取消政策如下：",lines:["無需預付訂金，您可以隨時取消或修改訂房。","請注意，飯店保留隨時取消訂房的權利。"],footer:void 0},cancelPolicySafe:{title:"根據「旅館業定型化契約」的規定，若消費者選擇支付全額，則可享有以下的取消政策：",lines:["住宿日前第 3 日（含）以前通知取消：全額退款。","住宿日前第 2 日通知取消：退還已付金額的 70%。","住宿日前第 1 日通知取消：退還已付金額的 50%。","住宿當日通知或未通知未入住者（No-show）：不退還金額。"],footer:"若因天災（如颱風、地震）等不可抗力因素影響行程，則可依相關政府公告協議退訂。"},userAccount:{code:"808",account:"8888000123456789",remittanceAmount:"TWD 1,080",timeLimit:"2022/04/28 17:25(GMT+8)"},memberExclusiveCoupons:[{code:"VIP500",title:"會員專屬折扣",discount:"TWD 500",validRange:"2025/01/01 - 2025/12/31",minSpend:"TWD 5,000"},{code:"SPRING200",title:"春季會員限定",discount:"TWD 200",validRange:"2025/03/01 - 2025/06/30",minSpend:"TWD 3,000"}]},t={args:r,render:n=>e.jsx(s,{...n}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"},docs:{source:{code:`
import { Payment } from "components/Modules/Payment/Payment";

// 部分資料來源於 paymentConfig，示範主要 props 及內部資料格式

const cartItems = [
    {
        id: "c1",
        title: "精緻市景四人房",
        price: 1800,
        dateRange: "04/14 - 04/15（1 晚）",
        guests: "1 成人, 1 兒童",
        plan: "假日出遊專案(含早餐)",
        discountLabel: "已優惠",
        discountAmount: 200,
    },
    {
        id: "c2",
        title: "精緻市景四人房",
        price: 1800,
        dateRange: "04/14 - 04/15（1 晚）",
        guests: "1 成人, 1 兒童",
        plan: "假日出遊專案(含早餐)",
        discountLabel: "已優惠",
        discountAmount: 200,
    },
    ...
];

const feeItems = [
    { label: "服務費", value: "+TWD 310" },
    { label: "稅費", value: "+TWD 155" },
];

const paymentArgs = {
    initialSeconds: 20 * 60,
    message: "請在倒數結束前完成付款，以確保目前房價與優惠有效。",
    memberRole: "member",
    // onExpire: () => {...},
};

<Payment {...paymentArgs} />`}}}},a={args:r,render:n=>e.jsx(b,{sx:{width:"100%",maxWidth:1920,mx:"auto",p:{xs:1,sm:2,md:4}},children:e.jsx(s,{...n})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"ipad"}}},o={args:r,render:n=>e.jsx(b,{sx:{width:"100%",p:{xs:1,sm:2}},children:e.jsx(s,{...n})}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"iphone12"}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <Payment {...args} />,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#FAFAFA"
      }]
    },
    viewport: {
      defaultViewport: "responsive"
    },
    docs: {
      source: {
        code: \`
import { Payment } from "components/Modules/Payment/Payment";

// 部分資料來源於 paymentConfig，示範主要 props 及內部資料格式

const cartItems = [
    {
        id: "c1",
        title: "精緻市景四人房",
        price: 1800,
        dateRange: "04/14 - 04/15（1 晚）",
        guests: "1 成人, 1 兒童",
        plan: "假日出遊專案(含早餐)",
        discountLabel: "已優惠",
        discountAmount: 200,
    },
    {
        id: "c2",
        title: "精緻市景四人房",
        price: 1800,
        dateRange: "04/14 - 04/15（1 晚）",
        guests: "1 成人, 1 兒童",
        plan: "假日出遊專案(含早餐)",
        discountLabel: "已優惠",
        discountAmount: 200,
    },
    ...
];

const feeItems = [
    { label: "服務費", value: "+TWD 310" },
    { label: "稅費", value: "+TWD 155" },
];

const paymentArgs = {
    initialSeconds: 20 * 60,
    message: "請在倒數結束前完成付款，以確保目前房價與優惠有效。",
    memberRole: "member",
    // onExpire: () => {...},
};

<Payment {...paymentArgs} />\`
      }
    }
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <Box sx={{
    width: "100%",
    maxWidth: 1920,
    mx: "auto",
    p: {
      xs: 1,
      sm: 2,
      md: 4
    }
  }}>
            <Payment {...args} />
        </Box>,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#FAFAFA"
      }]
    },
    viewport: {
      defaultViewport: "ipad"
    }
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,A;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <Box sx={{
    width: "100%",
    p: {
      xs: 1,
      sm: 2
    }
  }}>
            <Payment {...args} />
        </Box>,
  parameters: {
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#FAFAFA"
      }]
    },
    viewport: {
      defaultViewport: "iphone12"
    }
  }
}`,...(A=(u=o.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};const Y=["Desktop","Tablet","Mobile"];export{t as Desktop,o as Mobile,a as Tablet,Y as __namedExportsOrder,X as default};
