import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{P as r}from"./Profile-PFiyOLDq.js";import{B as o}from"./CheckCircle.es-DXCUKnUH.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./Typography-CFfHvyVk.js";import"./ToggleButton-B_1nB3DD.js";import"./Avatar-kr3oDakC.js";import"./Modal-C5rE0h8n.js";import"./useTheme-C-KIORmc.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./CaretDown.es-C_6dMS2T.js";import"./Cart-DJEv7-_-.js";import"./FormControlLabel-CQG9jDu4.js";import"./BottomModal-Bux3tXCl.js";import"./index-Bm8UbI65.js";import"./useSlotProps-CGB2S-5Z.js";import"./Alert-DRAbsrNu.js";import"./Warning.es-C1cCrKac.js";import"./WarningCircle.es-CJLwpT3c.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./Link-D6s8y8jX.js";import"./AccordionSummary-BPG7zxQD.js";const _={title:"components/Modules/Profile/Profile",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{steps:{control:!1},arrivalTimeOptions:{control:!1,table:{disable:!0}},specialRequirementOptions:{control:!1,table:{disable:!0}},invoiceIssueMethodOptions:{control:!1,table:{disable:!0}},importantInfoPanels:{control:!1,table:{disable:!0}},feeItems:{control:!1,table:{disable:!0}},initialCartItems:{control:!1,table:{disable:!0}},promoDiscount:{control:!1,table:{disable:!0}},memberDiscount:{control:!1,table:{disable:!0}}}},s=e=>{const l=e.memberRole??"guest",x=l==="guest"?"這是訪客":l==="socialGuest"?"這是社群帳號登入":"這是會員";return{...e.memberBenefitBanner??{},subTitle:x}},i={args:{steps:[{label:"選擇房型"},{label:"填寫資料"},{label:"完成付款"}],activeStep:1,memberRole:"guest",memberBenefitBanner:{title:"會員訂房即享９折以上優惠，",subTitle:"",descriptionBefore:"此訂單會員共可得",scorePoint:56,descriptionAfter:"積分以上",ctaLabel:"登入/註冊"},arrivalTimeOptions:[{value:"unknown",label:"不確定"},{value:"16:00",label:"16:00"},{value:"17:00",label:"17:00"},{value:"18:00",label:"18:00"},{value:"19:00",label:"19:00"},{value:"20:00",label:"20:00"},{value:"21:00",label:"21:00"},{value:"22:00",label:"22:00"},{value:"23:00",label:"23:00"}],specialRequirementOptions:["近電梯","嬰兒床","禁菸房","非邊間","嬰兒澡盆","Morning call","高樓層房","床圍","奶瓶消毒鍋","同樓層"],invoiceIssueMethodOptions:[{value:"paper",label:"現場紙本發票"},{value:"mobile",label:"個人手機載具"},{value:"company",label:"三聯式發票"}],importantInfoPanels:[{id:"info-important",title:"重要公告",required:!0},{id:"info-disclaimer",title:"免責聲明",required:!0},{id:"info-policy",title:"訂房政策/個資蒐集前告知事項",required:!0},{id:"info-payment",title:"付款政策",required:!1},{id:"info-pet",title:"寵物政策",required:!1},{id:"info-member",title:"會員權益",required:!1}],importantInfoContent:{"info-disclaimer":{text:`本頁面所提供之資訊僅供參考，實際服務內容與規範以飯店現場公告與最終安排為準。
因不可抗力或必要之維護/修繕因素造成之設施暫停、服務調整或延遲，飯店將盡力提供替代方案或協助，但不保證完全符合個別需求。`,agreeLabel:"我已詳閱並同意免責聲明"},"info-policy":{text:`為完成訂房與入住流程，您可能需要提供聯絡資訊與必要之身分驗證資料；我們將依相關法令與隱私權政策進行蒐集、處理與利用。
若您不同意提供必要資訊，可能影響訂房成立、入住或售後服務之提供；詳細內容請以飯店公告之條款與政策為準。`,agreeLabel:"我已詳閱並同意訂房政策/個資蒐集前告知事項"},"info-payment":{text:`付款方式與扣款規則可能依房型、專案、促銷活動與平台而異。
若付款失敗或逾時未完成付款，訂單可能自動取消；請以結帳頁面顯示之付款說明為準。`},"info-pet":{text:`若需攜帶寵物入住，請事先確認飯店可否接待與相關規範（體型限制、清潔費、可入住區域等）。
未依規範申報或造成設備損壞者，飯店保留加收費用或拒絕入住之權利。`},"info-member":{text:`會員優惠、點數累積與使用規則可能依活動與等級有所不同，並以系統顯示與官方公告為準。
如遇退訂或改期，點數回補與資格認定將依條款辦理；若有疑問請洽客服或櫃台。`},default:{text:"相關內容以飯店公告為準。"}},feeItems:[{label:"服務費",value:"+TWD 310"},{label:"稅費",value:"+TWD 155"}],memberExclusiveCoupons:[{code:"VIP500",title:"會員專屬折扣",discount:"TWD 500",validRange:"2025/01/01 - 2025/12/31",minSpend:"TWD 5,000"},{code:"SPRING200",title:"春季會員限定",discount:"TWD 200",validRange:"2025/03/01 - 2025/06/30",minSpend:"TWD 3,000"}],initialCartItems:[{id:"c1",title:"精緻市景四人房",price:1800,dateRange:"04/14 - 04/15（1 晚）",guests:"1 成人, 1 兒童",plan:"假日出遊專案(含早餐)",discountLabel:"已優惠",discountAmount:200},{id:"c2",title:"精緻海景四人房",price:1800,dateRange:"04/14 - 04/15（1 晚）",guests:"1 成人, 1 兒童",plan:"假日出遊專案(含早餐)",discountLabel:"已優惠",discountAmount:200},{id:"c3",title:"精緻山景四人房",price:1800,dateRange:"04/14 - 04/15（1 晚）",guests:"1 成人, 1 兒童",plan:"假日出遊專案(含早餐)",discountLabel:"已優惠",discountAmount:200}],promoDiscount:900,memberDiscount:900,frequentGuests:[{id:"guest-1",lastName:"林",firstName:"佳琪",salute:"Ms.",dialCode:"+886",phone:"912345678",email:"guest1@example.com",country:"台灣",city:"台北市",idType:"身分證",idNumber:"A123456789"},{id:"guest-2",lastName:"陳",firstName:"柏宇",salute:"Mr.",dialCode:"+886",phone:"987654321",email:"guest2@example.com",country:"台灣",city:"台中市",idType:"護照",idNumber:"P1234567"}],frequentCompanies:[{id:"company-1",name:"幸福旅行社",taxId:"12345678"},{id:"company-2",name:"星旅文創有限公司",taxId:"87654321"}]},render:e=>t.jsx(r,{...e,memberBenefitBanner:s(e)}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"},docs:{source:{code:`
const memberBenefitBanner: {
    title: '會員訂房即享９折以上優惠，',
    subTitle: '此筆訂單還有積分可得！',
    descriptionBefore: '此訂單會員共可得',
    scorePoint: 56,
    descriptionAfter: '積分以上',
    ctaLabel: '登入/註冊',
},

const arrivalTimeOptions = [
    { value: "unknown", label: "不確定" },
    { value: "16:00", label: "16:00" },
    ...
];

const specialRequirementOptions = [
    "近電梯",
    "嬰兒床",
    ...
];

const specialRequirementPanels = [
    { id: "special-1", index: 1, title: "精緻市景四人房" },
    { id: "special-2", index: 2, title: "精緻市景四人房" },
    ...
];

const invoiceIssueMethodOptions = [
    { value: "paper", label: "現場紙本發票" },
    { value: "mobile", label: "手機載具發票" },
    ...
];

const importantInfoPanels = [
    { id: "info-important", title: "重要公告", required: true },
    { id: "info-disclaimer", title: "免責聲明", required: true },
    ...
];

export type ImportantInfoContent = Record<string, { text: string; agreeLabel?: string }>;

export const importantInfoContent: ImportantInfoContent = {
    "info-disclaimer": {
        text: "本頁面所提供之資訊僅供參考，實際服務內容與規範以飯店現場公告與最終安排為準。
因不可抗力或必要之維護/修繕因素造成之設施暫停、服務調整或延遲，飯店將盡力提供替代方案或協助，但不保證完全符合個別需求。",
        agreeLabel: "我已詳閱並同意免責聲明",
    },
    "info-policy": {
        text: "為完成訂房與入住流程，您可能需要提供聯絡資訊與必要之身分驗證資料；我們將依相關法令與隱私權政策進行蒐集、處理與利用。
若您不同意提供必要資訊，可能影響訂房成立、入住或售後服務之提供；詳細內容請以飯店公告之條款與政策為準。",
        agreeLabel: "我已詳閱並同意訂房政策/個資蒐集前告知事項",
    },
    ...
};

const feeItems = [
    { label: "服務費", value: "+TWD 310" },
    { label: "稅費", value: "+TWD 155" },
];

export type CartItemConfig = {
    id: string;
    title: string;
    price: number;
    dateRange: string;
    guests: string;
    plan: string;
    discountLabel?: string;
    discountAmount?: number;
};

const cartItems: CartItemConfig[] = [
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

const profileConfig = {
    arrivalTimeOptions,
    specialRequirementOptions,
    specialRequirementPanels,
    invoiceIssueMethodOptions,
    importantInfoPanels,
    importantInfoContent,
    feeItems,
    cartItems,
    promoDiscount: 900,
    memberDiscount: 900,
};

<Profile
activeStep={1}
memberRole="guest"
memberBenefitBanner={memberBanner}
arrivalTimeOptions={arrivalTimeOptions}
specialRequirementOptions={specialRequirementOptions}
specialRequirementPanels={specialRequirementPanels}
invoiceIssueMethodOptions={invoiceIssueMethodOptions}
importantInfoPanels={importantInfoPanels}
feeItems={feeItems}
initialCartItems={cartItems}
promoDiscount={promoDiscount}
memberDiscount={memberDiscount}
/>`}}}},n={args:i.args,render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{sx:{height:"50px"}}),t.jsx(o,{sx:{width:"100%",maxWidth:1920,mx:"auto",p:{xs:1,sm:2,md:4}},children:t.jsx(r,{...e,memberBenefitBanner:s(e),sx:{maxWidth:1200}})})]}),parameters:{viewport:{defaultViewport:"ipad"},backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]}}},a={args:i.args,render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{sx:{height:"50px"}}),t.jsx(o,{sx:{width:"100%",p:{xs:1,sm:2}},children:t.jsx(r,{...e,memberBenefitBanner:s(e),sx:{maxWidth:480,mx:"auto"}})})]}),parameters:{viewport:{defaultViewport:"iphone12"},backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]}}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "選擇房型"
    }, {
      label: "填寫資料"
    }, {
      label: "完成付款"
    }] satisfies ProfileStep[],
    activeStep: 1,
    memberRole: 'guest',
    memberBenefitBanner: {
      title: '會員訂房即享９折以上優惠，',
      subTitle: '',
      descriptionBefore: '此訂單會員共可得',
      scorePoint: 56,
      descriptionAfter: '積分以上',
      ctaLabel: '登入/註冊'
    },
    arrivalTimeOptions: [{
      value: "unknown",
      label: "不確定"
    }, {
      value: "16:00",
      label: "16:00"
    }, {
      value: "17:00",
      label: "17:00"
    }, {
      value: "18:00",
      label: "18:00"
    }, {
      value: "19:00",
      label: "19:00"
    }, {
      value: "20:00",
      label: "20:00"
    }, {
      value: "21:00",
      label: "21:00"
    }, {
      value: "22:00",
      label: "22:00"
    }, {
      value: "23:00",
      label: "23:00"
    }],
    specialRequirementOptions: ["近電梯", "嬰兒床", "禁菸房", "非邊間", "嬰兒澡盆", "Morning call", "高樓層房", "床圍", "奶瓶消毒鍋", "同樓層"],
    // specialRequirementPanels: [
    //     { id: "special-1", index: 1, title: "精緻市景四人房" },
    //     { id: "special-2", index: 2, title: "精緻市景四人房" },
    //     { id: "special-3", index: 3, title: "精緻市景四人房" },
    // ],
    invoiceIssueMethodOptions: [{
      value: "paper",
      label: "現場紙本發票"
    }, {
      value: "mobile",
      label: "個人手機載具"
    }, {
      value: "company",
      label: "三聯式發票"
    }],
    importantInfoPanels: [{
      id: "info-important",
      title: "重要公告",
      required: true
    }, {
      id: "info-disclaimer",
      title: "免責聲明",
      required: true
    }, {
      id: "info-policy",
      title: "訂房政策/個資蒐集前告知事項",
      required: true
    }, {
      id: "info-payment",
      title: "付款政策",
      required: false
    }, {
      id: "info-pet",
      title: "寵物政策",
      required: false
    }, {
      id: "info-member",
      title: "會員權益",
      required: false
    }],
    importantInfoContent: {
      "info-disclaimer": {
        text: "本頁面所提供之資訊僅供參考，實際服務內容與規範以飯店現場公告與最終安排為準。\\n因不可抗力或必要之維護/修繕因素造成之設施暫停、服務調整或延遲，飯店將盡力提供替代方案或協助，但不保證完全符合個別需求。",
        agreeLabel: "我已詳閱並同意免責聲明"
      },
      "info-policy": {
        text: "為完成訂房與入住流程，您可能需要提供聯絡資訊與必要之身分驗證資料；我們將依相關法令與隱私權政策進行蒐集、處理與利用。\\n若您不同意提供必要資訊，可能影響訂房成立、入住或售後服務之提供；詳細內容請以飯店公告之條款與政策為準。",
        agreeLabel: "我已詳閱並同意訂房政策/個資蒐集前告知事項"
      },
      "info-payment": {
        text: "付款方式與扣款規則可能依房型、專案、促銷活動與平台而異。\\n若付款失敗或逾時未完成付款，訂單可能自動取消；請以結帳頁面顯示之付款說明為準。"
      },
      "info-pet": {
        text: "若需攜帶寵物入住，請事先確認飯店可否接待與相關規範（體型限制、清潔費、可入住區域等）。\\n未依規範申報或造成設備損壞者，飯店保留加收費用或拒絕入住之權利。"
      },
      "info-member": {
        text: "會員優惠、點數累積與使用規則可能依活動與等級有所不同，並以系統顯示與官方公告為準。\\n如遇退訂或改期，點數回補與資格認定將依條款辦理；若有疑問請洽客服或櫃台。"
      },
      default: {
        text: "相關內容以飯店公告為準。"
      }
    },
    feeItems: [{
      label: "服務費",
      value: "+TWD 310"
    }, {
      label: "稅費",
      value: "+TWD 155"
    }],
    memberExclusiveCoupons: [{
      code: "VIP500",
      title: "會員專屬折扣",
      discount: "TWD 500",
      validRange: "2025/01/01 - 2025/12/31",
      minSpend: "TWD 5,000"
    }, {
      code: "SPRING200",
      title: "春季會員限定",
      discount: "TWD 200",
      validRange: "2025/03/01 - 2025/06/30",
      minSpend: "TWD 3,000"
    }],
    initialCartItems: [{
      id: "c1",
      title: "精緻市景四人房",
      price: 1800,
      dateRange: "04/14 - 04/15（1 晚）",
      guests: "1 成人, 1 兒童",
      plan: "假日出遊專案(含早餐)",
      discountLabel: "已優惠",
      discountAmount: 200
    }, {
      id: "c2",
      title: "精緻海景四人房",
      price: 1800,
      dateRange: "04/14 - 04/15（1 晚）",
      guests: "1 成人, 1 兒童",
      plan: "假日出遊專案(含早餐)",
      discountLabel: "已優惠",
      discountAmount: 200
    }, {
      id: "c3",
      title: "精緻山景四人房",
      price: 1800,
      dateRange: "04/14 - 04/15（1 晚）",
      guests: "1 成人, 1 兒童",
      plan: "假日出遊專案(含早餐)",
      discountLabel: "已優惠",
      discountAmount: 200
    }],
    promoDiscount: 900,
    memberDiscount: 900,
    frequentGuests: [{
      id: "guest-1",
      lastName: "林",
      firstName: "佳琪",
      salute: "Ms.",
      dialCode: "+886",
      phone: "912345678",
      email: "guest1@example.com",
      country: "台灣",
      city: "台北市",
      idType: "身分證",
      idNumber: "A123456789"
    }, {
      id: "guest-2",
      lastName: "陳",
      firstName: "柏宇",
      salute: "Mr.",
      dialCode: "+886",
      phone: "987654321",
      email: "guest2@example.com",
      country: "台灣",
      city: "台中市",
      idType: "護照",
      idNumber: "P1234567"
    }],
    frequentCompanies: [{
      id: "company-1",
      name: "幸福旅行社",
      taxId: "12345678"
    }, {
      id: "company-2",
      name: "星旅文創有限公司",
      taxId: "87654321"
    }]
  },
  render: args => <Profile {...args} memberBenefitBanner={buildMemberBanner(args)} />,
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
const memberBenefitBanner: {
    title: '會員訂房即享９折以上優惠，',
    subTitle: '此筆訂單還有積分可得！',
    descriptionBefore: '此訂單會員共可得',
    scorePoint: 56,
    descriptionAfter: '積分以上',
    ctaLabel: '登入/註冊',
},

const arrivalTimeOptions = [
    { value: "unknown", label: "不確定" },
    { value: "16:00", label: "16:00" },
    ...
];

const specialRequirementOptions = [
    "近電梯",
    "嬰兒床",
    ...
];

const specialRequirementPanels = [
    { id: "special-1", index: 1, title: "精緻市景四人房" },
    { id: "special-2", index: 2, title: "精緻市景四人房" },
    ...
];

const invoiceIssueMethodOptions = [
    { value: "paper", label: "現場紙本發票" },
    { value: "mobile", label: "手機載具發票" },
    ...
];

const importantInfoPanels = [
    { id: "info-important", title: "重要公告", required: true },
    { id: "info-disclaimer", title: "免責聲明", required: true },
    ...
];

export type ImportantInfoContent = Record<string, { text: string; agreeLabel?: string }>;

export const importantInfoContent: ImportantInfoContent = {
    "info-disclaimer": {
        text: "本頁面所提供之資訊僅供參考，實際服務內容與規範以飯店現場公告與最終安排為準。\\n因不可抗力或必要之維護/修繕因素造成之設施暫停、服務調整或延遲，飯店將盡力提供替代方案或協助，但不保證完全符合個別需求。",
        agreeLabel: "我已詳閱並同意免責聲明",
    },
    "info-policy": {
        text: "為完成訂房與入住流程，您可能需要提供聯絡資訊與必要之身分驗證資料；我們將依相關法令與隱私權政策進行蒐集、處理與利用。\\n若您不同意提供必要資訊，可能影響訂房成立、入住或售後服務之提供；詳細內容請以飯店公告之條款與政策為準。",
        agreeLabel: "我已詳閱並同意訂房政策/個資蒐集前告知事項",
    },
    ...
};

const feeItems = [
    { label: "服務費", value: "+TWD 310" },
    { label: "稅費", value: "+TWD 155" },
];

export type CartItemConfig = {
    id: string;
    title: string;
    price: number;
    dateRange: string;
    guests: string;
    plan: string;
    discountLabel?: string;
    discountAmount?: number;
};

const cartItems: CartItemConfig[] = [
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

const profileConfig = {
    arrivalTimeOptions,
    specialRequirementOptions,
    specialRequirementPanels,
    invoiceIssueMethodOptions,
    importantInfoPanels,
    importantInfoContent,
    feeItems,
    cartItems,
    promoDiscount: 900,
    memberDiscount: 900,
};

<Profile
activeStep={1}
memberRole="guest"
memberBenefitBanner={memberBanner}
arrivalTimeOptions={arrivalTimeOptions}
specialRequirementOptions={specialRequirementOptions}
specialRequirementPanels={specialRequirementPanels}
invoiceIssueMethodOptions={invoiceIssueMethodOptions}
importantInfoPanels={importantInfoPanels}
feeItems={feeItems}
initialCartItems={cartItems}
promoDiscount={promoDiscount}
memberDiscount={memberDiscount}
/>\`
      }
    }
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,d,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: DefaultProfile.args,
  render: args => <>
            <Box sx={{
      height: "50px"
    }} />
            <Box sx={{
      width: "100%",
      maxWidth: 1920,
      mx: "auto",
      p: {
        xs: 1,
        sm: 2,
        md: 4
      }
    }}>
                <Profile {...args} memberBenefitBanner={buildMemberBanner(args)} sx={{
        maxWidth: 1200
      }} />
            </Box>
        </>,
  parameters: {
    viewport: {
      defaultViewport: "ipad"
    },
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#FAFAFA"
      }]
    }
  }
}`,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,g,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: DefaultProfile.args,
  render: args => <>
            <Box sx={{
      height: "50px"
    }} />
            <Box sx={{
      width: "100%",
      p: {
        xs: 1,
        sm: 2
      }
    }}>
                <Profile {...args} memberBenefitBanner={buildMemberBanner(args)} sx={{
        maxWidth: 480,
        mx: "auto"
      }} />
            </Box>
        </>,
  parameters: {
    viewport: {
      defaultViewport: "iphone12"
    },
    backgrounds: {
      default: "page",
      values: [{
        name: "page",
        value: "#FAFAFA"
      }]
    }
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const z=["DefaultProfile","TabletAndMobile","MobileXS"];export{i as DefaultProfile,a as MobileXS,n as TabletAndMobile,z as __namedExportsOrder,_ as default};
