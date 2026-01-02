import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{P as a}from"./Profile-CriQQtvK.js";import{p as n}from"./Cart-CqyQqfjd.js";import{B as s}from"./CheckCircle.es-CWUap0Ir.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-BUHaCmAf.js";import"./ToggleButton-oZXW10Qn.js";import"./BottomModal-BGRPiAzg.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./index-Bm8UbI65.js";const F={title:"components/Modules/Profile/Profile",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{steps:{control:!1},arrivalTimeOptions:{control:!1,table:{disable:!0}},specialRequirementOptions:{control:!1,table:{disable:!0}},invoiceIssueMethodOptions:{control:!1,table:{disable:!0}},importantInfoPanels:{control:!1,table:{disable:!0}},feeItems:{control:!1,table:{disable:!0}},initialCartItems:{control:!1,table:{disable:!0}},promoDiscount:{control:!1,table:{disable:!0}},memberDiscount:{control:!1,table:{disable:!0}}}},l=e=>{const m=e.memberRole??"guest",v=m==="guest"?"這是訪客":m==="socialGuest"?"這是社群帳號登入":"這是會員";return{...e.memberBenefitBanner??{},subTitle:v}},i={args:{steps:[{label:"選擇房型"},{label:"填寫資料"},{label:"完成付款"}],activeStep:1,memberRole:"guest",memberBenefitBanner:{title:"會員訂房即享９折以上優惠，",subTitle:"",descriptionBefore:"此訂單會員共可得",scorePoint:56,descriptionAfter:"積分以上",ctaLabel:"登入/註冊"},arrivalTimeOptions:n.arrivalTimeOptions,specialRequirementOptions:n.specialRequirementOptions,invoiceIssueMethodOptions:n.invoiceIssueMethodOptions,importantInfoPanels:n.importantInfoPanels,feeItems:n.feeItems,initialCartItems:n.cartItems,promoDiscount:n.promoDiscount,memberDiscount:n.memberDiscount},render:e=>t.jsx(a,{...e,memberBenefitBanner:l(e)}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"},docs:{source:{code:`
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
/>`}}}},r={args:i.args,render:e=>t.jsxs(t.Fragment,{children:[t.jsx(s,{sx:{height:"50px"}}),t.jsx(s,{sx:{width:"100%",maxWidth:1920,mx:"auto",p:{xs:1,sm:2,md:4}},children:t.jsx(a,{...e,memberBenefitBanner:l(e),sx:{maxWidth:1200}})})]}),parameters:{viewport:{defaultViewport:"ipad"},backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]}}},o={args:i.args,render:e=>t.jsxs(t.Fragment,{children:[t.jsx(s,{sx:{height:"50px"}}),t.jsx(s,{sx:{width:"100%",p:{xs:1,sm:2}},children:t.jsx(a,{...e,memberBenefitBanner:l(e),sx:{maxWidth:480,mx:"auto"}})})]}),parameters:{viewport:{defaultViewport:"iphone12"},backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]}}};var p,c,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    arrivalTimeOptions: profileConfig.arrivalTimeOptions,
    specialRequirementOptions: profileConfig.specialRequirementOptions,
    // specialRequirementPanels: profileConfig.specialRequirementPanels,
    invoiceIssueMethodOptions: profileConfig.invoiceIssueMethodOptions,
    importantInfoPanels: profileConfig.importantInfoPanels,
    feeItems: profileConfig.feeItems,
    initialCartItems: profileConfig.cartItems,
    promoDiscount: profileConfig.promoDiscount,
    memberDiscount: profileConfig.memberDiscount
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,f,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,I,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const w=["DefaultProfile","TabletAndMobile","MobileXS"];export{i as DefaultProfile,o as MobileXS,r as TabletAndMobile,w as __namedExportsOrder,F as default};
