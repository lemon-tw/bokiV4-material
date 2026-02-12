import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as i}from"./index-D4H_InIO.js";import{I as T,B as l}from"./ToggleButton-CJD6HA4B.js";import{B as t,T as r,b as me}from"./CheckCircle.es-DXCUKnUH.js";import{O as f,o as E,e as ue}from"./OrderSectionCard-bAtulGj6.js";import{r as B}from"./Warning.es-C1cCrKac.js";import{o as L}from"./Eye.es-B6MeOKON.js";import{O as y,o as N}from"./OrderSectionTitle-40ERAQbU.js";import{e as xe}from"./WarningCircle.es-CJLwpT3c.js";import{f as ge,g as he}from"./OrderConfirmationConfig-XKAn-7Rt.js";import{f as fe}from"./footer-config-C61eU2n6.js";import{L as ye}from"./Link-D6s8y8jX.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./InstagramLogo.es-D0IBbFqp.js";import"./Scales.es-C3AxRNFi.js";import"./Train.es-DbNsVOFc.js";import"./useTheme-C-KIORmc.js";const S=({orderSummary:n={statusKey:"",orderNumber:"",lastDigits:"",paymentStatus:"",paymentNote:"",orderTime:"",payStateColor:"",resStateColor:""},announcement:m={title:"",timestamp:"",lines:[]},roomInfo:s={statusLabel:"",bookingCode:"",startDate:"",endDate:"",nights:0,segmentCount:0,roomCount:0,priceLabel:"",imageSrc:""},hotelInfo:o={name:"",checkIn:"",checkOut:"",phone:"",address:"",mapEmbedUrl:""},statusIcon:ae})=>{const[p,ie]=i.useState(!1),oe=i.useMemo(()=>ge(!1,s),[s.endDate,s.nights,s.startDate]),le=i.useMemo(()=>{const a=new URLSearchParams({action:"TEMPLATE"});a.append("text",`${o.name} 入住`),a.append("location",o.address),a.append("details",[`訂單號碼: ${n.orderNumber}`,`包含: ${s.segmentCount} 段入住日期`,`房間數: ${s.roomCount} 間房間`,`地址: ${o.address}`].join(`
`));const q=he(s);return q&&a.append("dates",q),`https://calendar.google.com/calendar/render?${a.toString()}`},[o.address,o.name,n.orderNumber,s.endDate,s.roomCount,s.segmentCount,s.startDate]),z=i.useMemo(()=>{const a=n.lastDigits||"";return p||a.length<=2?a:`${a[0]}${"*".repeat(a.length-2)}${a[a.length-1]}`},[p,n.lastDigits]),ce=(s==null?void 0:s.statusLabel)??"",D=n==null?void 0:n.actionButton,de=i.useMemo(()=>e.jsx(t,{component:"iframe",src:o.mapEmbedUrl,title:"hotel location map",loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",sx:{width:"100%",height:176,borderRadius:"4px",border:0}}),[o.mapEmbedUrl]),W=()=>ie(a=>!a),pe=()=>{typeof window>"u"||window.open(le,"_blank","noopener,noreferrer")};return e.jsx(t,{sx:{width:"100%",backgroundColor:"#FAFAFA",py:{xs:2,md:3}},children:e.jsxs(t,{sx:{maxWidth:1200,mx:"auto",px:{xs:1.5,sm:2,md:3},display:"flex",flexDirection:{xs:"column",lg:"row"},gap:{xs:2,md:3}},children:[e.jsxs(t,{sx:{flex:{xs:"1 1 0"},display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(f,{children:[e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,mb:1},children:[ae,e.jsxs(r,{sx:{fontSize:20,fontWeight:600,color:"#373737",my:1},children:["訂單",ce]})]}),e.jsx(r,{sx:{color:"#373737",fontSize:14,lineHeight:"20px",textAlign:"center",mb:2},children:n.paymentNote}),n.statusKey==="success"&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{sx:{display:"flex",gap:1,justifyContent:"space-between",backgroundColor:"#FAFAFA",px:1.5,py:2,borderRadius:"4px",mb:2,flexDirection:{xs:"column",sm:"row"}},children:[e.jsxs(t,{children:[e.jsx(r,{sx:{color:"#373737",fontSize:16,fontWeight:600,mb:2},children:"馬上分享訂單！"}),e.jsx(r,{sx:{color:"#373737",fontSize:14},children:"邀請同行旅伴並提供通行密碼，共享訂單公告與訂單資訊。"})]}),D]}),e.jsx(y,{children:"您的訂單"}),e.jsxs(t,{sx:{px:1.5},children:[e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"訂單編號"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:n.orderNumber})]}),e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"訂單號碼"}),e.jsxs(t,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{color:"#373737",fontSize:{xs:14,sm:16},mr:1},children:z}),e.jsx(T,{"aria-label":p?"隱藏訂單號碼":"顯示訂單號碼",onClick:W,sx:{backgroundColor:"#FFFFFF",color:"#07306F",fontSize:{xs:14,sm:16},mr:.5,p:.25,"&:hover":{backgroundColor:"#FFFFFF"}},children:p?e.jsx(L,{size:24,weight:"regular",color:"#7A7D80"}):e.jsx(N,{size:24,weight:"regular",color:"#7A7D80"})})]})]}),e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"付款狀態"}),e.jsxs(t,{children:[e.jsx(r,{sx:{fontSize:{xs:14,sm:16}},children:e.jsx(r,{component:"span",sx:{color:n.payStateColor,fontSize:16},children:n.paymentStatus})}),n.statusKey==="success"&&e.jsxs(t,{sx:{display:"flex",mt:1.5},children:[e.jsx(r,{component:"span",sx:{color:"#07306F",fontSize:{xs:14,sm:16},mr:.5,pt:.25},children:e.jsx(xe,{size:16,weight:"regular",color:"#818181"})}),e.jsx(r,{sx:{color:"#818181",fontSize:{xs:14,sm:16},lineHeight:1.6},children:n.paymentNote})]})]})]}),e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:16,textWrap:"nowrap"},children:"訂單時間"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:n.orderTime})]})]})]}),n.statusKey!=="success"&&e.jsxs(e.Fragment,{children:[e.jsx(y,{children:"您的訂單"}),e.jsxs(t,{sx:{px:{xs:0,sm:1.5},display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}},children:[e.jsxs(t,{children:[e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"訂單編號"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:n.orderNumber})]}),e.jsxs(t,{sx:{display:"flex",mb:1.5},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"訂單號碼"}),e.jsxs(t,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{color:"#373737",fontSize:{xs:14,sm:16},mr:1},children:z}),e.jsx(T,{"aria-label":p?"隱藏訂單號碼":"顯示訂單號碼",onClick:W,sx:{backgroundColor:"#FFFFFF",color:"#07306F",fontSize:{xs:14,sm:16},mr:.5,p:.25,"&:hover":{backgroundColor:"#FFFFFF"}},children:p?e.jsx(L,{size:24,weight:"regular",color:"#7A7D80"}):e.jsx(N,{size:24,weight:"regular",color:"#7A7D80"})})]})]}),e.jsxs(t,{sx:{display:"flex"},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:{xs:14,sm:16},textWrap:"nowrap"},children:"付款狀態"}),e.jsx(t,{children:e.jsx(r,{sx:{fontSize:{xs:14,sm:16},mb:1.5},children:e.jsx(r,{component:"span",sx:{color:n.payStateColor,fontSize:16},children:n.paymentStatus})})})]}),n.statusKey==="cancelled"&&e.jsxs(t,{sx:{display:"flex"},children:[e.jsx(r,{sx:{mr:6,color:"#373737",fontSize:16,textWrap:"nowrap"},children:"訂單時間"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:n.orderTime})]})]}),e.jsx(t,{children:D})]})]})]}),n.statusKey==="success"&&e.jsxs(f,{children:[e.jsx(y,{children:"訂單公告"}),e.jsxs(t,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#FAFAFA",px:1.5,py:2,borderRadius:"4px",mb:2},children:[e.jsxs(t,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:1},children:[e.jsx(r,{sx:{fontSize:16,fontWeight:700,color:"#1E1E1E"},children:m.title}),e.jsx(r,{sx:{fontSize:14,color:"#9C9C9C"},children:m.timestamp})]}),e.jsx(t,{sx:{color:"#373737",fontSize:14,lineHeight:1.6,display:"flex",flexDirection:"column"},children:m.lines.map(a=>e.jsx(r,{sx:{display:"flex",alignItems:"flex-start"},children:e.jsx("span",{children:a})},a))})]})]}),e.jsxs(f,{children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(y,{hasMargin:!1,children:"訂房資訊"}),n.statusKey!=="cancelled"&&n.statusKey!=="voided"&&e.jsx(l,{variant:"outlined",size:"small",color:"primary",onClick:pe,sx:{height:40},children:"加入日曆"})]}),e.jsxs(t,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:1.5,alignItems:{xs:"flex-start",sm:"center"},bgcolor:"#FAFAFA",borderRadius:"12px",mt:2,px:3,py:2},children:[n.statusKey!=="cancelled"&&n.statusKey!=="voided"&&e.jsx(t,{component:"img",src:s.imageSrc,alt:s.bookingCode,sx:{width:{xs:"100%",sm:110},height:{xs:180,sm:110},objectFit:"cover"}}),e.jsxs(t,{sx:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:.25},children:[e.jsxs(r,{sx:{fontSize:16,fontWeight:700},children:[e.jsx(r,{component:"span",sx:{color:n.resStateColor,fontSize:16,fontWeight:700,mr:1},children:s.statusLabel}),e.jsx(r,{component:"span",sx:{color:"#373737",fontSize:14,fontWeight:400},children:s.bookingCode})]}),e.jsx(r,{sx:{color:"#373737",fontSize:20,fontWeight:600},children:oe}),e.jsxs(r,{sx:{color:"#7A7A7A",fontSize:14},children:["包含: ",s.segmentCount," 段入住日期"]}),e.jsxs(r,{sx:{color:"#7A7A7A",fontSize:14},children:["房間數:",e.jsxs(r,{component:"span",sx:{color:"#373737",fontSize:14,ml:1},children:[s.roomCount," 間房間"]})]})]}),e.jsx(r,{sx:{color:"#0F62A8",fontWeight:500,fontSize:16,whiteSpace:"nowrap",alignSelf:"flex-end",pb:2},children:s.priceLabel})]}),e.jsx(t,{sx:{borderTop:"1px solid #E1E1E1",mt:2,pt:2,display:"flex",justifyContent:"center"},children:e.jsx(l,{variant:"text",color:"primary",sx:{color:"#1994FC",fontWeight:500},children:"查看訂房明細"})})]})]}),e.jsx(t,{sx:{flex:{xs:"0 0 360px",lg:"0 0 387px"},minWidth:0,position:"relative"},children:e.jsxs(f,{children:[e.jsx(r,{sx:{fontSize:20,fontWeight:600,color:"#373737",mb:1},children:o.name}),e.jsxs(t,{sx:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",mb:2,bgcolor:"#FAFAFA",px:2,py:3.5,borderRadius:"8px"},children:[e.jsxs(t,{sx:{display:"flex",mb:2},children:[e.jsxs(t,{sx:{width:"50%"},children:[e.jsx(r,{sx:{color:"#373737",fontSize:16},children:"入住時間"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:"Check In"})]}),e.jsx(r,{sx:{color:"#1E1E1E",fontSize:24,fontWeight:600},children:o.checkIn})]}),e.jsxs(t,{sx:{display:"flex"},children:[e.jsxs(t,{sx:{width:"50%"},children:[e.jsx(r,{sx:{color:"#373737",fontSize:16},children:"退房時間"}),e.jsx(r,{sx:{color:"#373737",fontSize:16},children:"Check Out"})]}),e.jsx(r,{sx:{color:"#1E1E1E",fontSize:24,fontWeight:600},children:o.checkOut})]})]}),e.jsxs(t,{sx:{mb:2},children:[e.jsx(r,{sx:{color:"#373737",fontSize:18,fontWeight:600,mb:1.5},children:"聯絡電話"}),e.jsx(r,{sx:{color:"#373737",fontSize:14},children:o.phone})]}),e.jsxs(t,{sx:{mb:2},children:[e.jsx(r,{sx:{color:"#373737",fontSize:18,fontWeight:600,mb:1.5},children:"飯店地址"}),e.jsx(r,{sx:{color:"#373737",fontSize:14,lineHeight:1.6},children:o.address})]}),de,e.jsx(t,{sx:{display:"flex",gap:1.5,alignItems:"center",my:2},children:fe.socials.map(a=>e.jsx(ye,{href:a.href,"aria-label":a.ariaLabel,underline:"none",target:"_blank",rel:"noopener noreferrer",sx:{display:"inline-flex",alignItems:"center"},children:a.icon},a.ariaLabel))}),e.jsx(l,{variant:"outlined",color:"primary",sx:{width:"100%",fontWeight:500},children:"更多飯店資訊"})]})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"OrderConfirmation",props:{email:{required:!1,tsType:{name:"string"},description:""},orderSummary:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    actionButton?: React.ReactNode;\r
    statusKey: string;\r
    orderNumber: string;\r
    lastDigits: string;\r
    paymentStatus: string;\r
    paymentNote: string;\r
    orderTime: string;\r
    payStateColor: string;\r
    resStateColor: string;\r
    backgroundColor?: string;\r
}`,signature:{properties:[{key:"actionButton",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"statusKey",value:{name:"string",required:!0}},{key:"orderNumber",value:{name:"string",required:!0}},{key:"lastDigits",value:{name:"string",required:!0}},{key:"paymentStatus",value:{name:"string",required:!0}},{key:"paymentNote",value:{name:"string",required:!0}},{key:"orderTime",value:{name:"string",required:!0}},{key:"payStateColor",value:{name:"string",required:!0}},{key:"resStateColor",value:{name:"string",required:!0}},{key:"backgroundColor",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{\r
    statusKey: "",\r
    orderNumber: "",\r
    lastDigits: "",\r
    paymentStatus: "",\r
    paymentNote: "",\r
    orderTime: "",\r
    payStateColor: "",\r
    resStateColor: "",\r
}`,computed:!1}},announcement:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    title: string;\r
    timestamp: string;\r
    lines: string[];\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!0}},{key:"lines",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},description:"",defaultValue:{value:'{ title: "", timestamp: "", lines: [] }',computed:!1}},roomInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    statusLabel: string;\r
    bookingCode: string;\r
    startDate: string;\r
    endDate: string;\r
    nights: number;\r
    segmentCount: number;\r
    roomCount: number;\r
    priceLabel: string;\r
    imageSrc: string;\r
}`,signature:{properties:[{key:"statusLabel",value:{name:"string",required:!0}},{key:"bookingCode",value:{name:"string",required:!0}},{key:"startDate",value:{name:"string",required:!0}},{key:"endDate",value:{name:"string",required:!0}},{key:"nights",value:{name:"number",required:!0}},{key:"segmentCount",value:{name:"number",required:!0}},{key:"roomCount",value:{name:"number",required:!0}},{key:"priceLabel",value:{name:"string",required:!0}},{key:"imageSrc",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{\r
    statusLabel: "",\r
    bookingCode: "",\r
    startDate: "",\r
    endDate: "",\r
    nights: 0,\r
    segmentCount: 0,\r
    roomCount: 0,\r
    priceLabel: "",\r
    imageSrc: "",\r
}`,computed:!1}},hotelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    name: string;\r
    checkIn: string;\r
    checkOut: string;\r
    phone: string;\r
    address: string;\r
    mapEmbedUrl: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"checkIn",value:{name:"string",required:!0}},{key:"checkOut",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"mapEmbedUrl",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{\r
    name: "",\r
    checkIn: "",\r
    checkOut: "",\r
    phone: "",\r
    address: "",\r
    mapEmbedUrl: "",\r
}`,computed:!1}},statusIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const R=i.createElement(l,{variant:"filled",color:"primary",size:"small",sx:{px:2,py:1.5,maxHeight:40,alignSelf:"flex-end",fontWeight:500,width:{xs:"100%",sm:"auto"},mt:{xs:2,sm:0}}},"再訂一次"),u={success:i.createElement(me,{size:48,weight:"fill",color:"#1AA27A"}),waiting:i.createElement(B,{size:48,weight:"fill",color:"#FFB53F"}),pending:i.createElement(B,{size:48,weight:"fill",color:"#DD9B32"}),cancelled:i.createElement(E,{size:48,weight:"fill",color:"#FF4D4F"}),voided:i.createElement(E,{size:48,weight:"fill",color:"#9C9C9C"})},be=i.createElement(l,{variant:"outlined",color:"primary",size:"small",startIcon:i.createElement(ue,{size:20}),sx:{px:2,py:1.5,maxHeight:40,fontWeight:500}},"分享訂單"),je=i.createElement(l,{variant:"filled",color:"primary",size:"small",sx:{px:2,py:1.5,maxHeight:40,fontWeight:500}},"前往付款"),Fe=i.createElement(l,{variant:"outlined",color:"primary",size:"small",sx:{px:2,py:1.5,maxHeight:40,fontWeight:500}},"取消訂單"),x={title:"訂單公告",timestamp:"2024/03/19 09:30",lines:["入住時請出示有效證件。","如需加購服務請於入住前三日完成。"]},g={statusLabel:"",bookingCode:"#BK25226782424",startDate:"2024/04/14",endDate:"2024/04/16",nights:2,segmentCount:1,roomCount:1,priceLabel:"TWD 7,200",imageSrc:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"},h={name:"Lemon Hotel",checkIn:"15:00",checkOut:"11:00",phone:"02-1234-5678",address:"台北市大安區復興南路一段 99 號",mapEmbedUrl:"https://maps.google.com/maps?q=Taipei%20101&t=&z=13&ie=UTF8&iwloc=&output=embed"},k={successPayment:{email:"zhangxiaomei@example.com",orderSummary:{actionButton:be,statusKey:"success",orderNumber:"#BK25226782424",lastDigits:"1234567890",paymentStatus:"已預訂",paymentNote:"請查看寄送給您的確認信，已發送至 zhangxiaomei@example.com。",orderTime:"2024/04/28 17:25 (GMT+8)",payStateColor:"#07306F",resStateColor:"#147B5D",backgroundColor:"#E9FAF5"},announcement:x,roomInfo:{...g,statusLabel:"已預訂"},hotelInfo:h,statusIcon:u.success},pendingPayment:{email:"zhangxiaomei@example.com",orderSummary:{actionButton:je,statusKey:"pending",orderNumber:"#BK25226782424",lastDigits:"1234567890",paymentStatus:"待付款",paymentNote:"請於 2022/04/28 17:25 前重新完成付款，否則訂單將取消。",orderTime:"2024/04/28 17:25 (GMT+8)",payStateColor:"#DD9B32",resStateColor:"#DD9B32",backgroundColor:"#E9FAF5"},announcement:x,roomInfo:{...g,statusLabel:"待確認"},hotelInfo:h,statusIcon:u.waiting},waitlistPaid:{email:"zhangxiaomei@example.com",orderSummary:{actionButton:Fe,statusKey:"waiting",orderNumber:"#BK25226782424",lastDigits:"1234567890",paymentStatus:"已預付",paymentNote:"2024/03/12 23:59 前若有空房釋出，將為您確認並通知。",orderTime:"2024/03/12 23:59 (GMT+8)",payStateColor:"#1AA27A",resStateColor:"#DD9B32"},announcement:x,roomInfo:{...g,statusLabel:"待確認(候補)"},hotelInfo:h,statusIcon:u.pending},cancelledPendingRefund:{email:"zhangxiaomei@example.com",orderSummary:{actionButton:R,statusKey:"cancelled",orderNumber:"#BK25226782424",lastDigits:"1234567890",paymentStatus:"待退款",paymentNote:"退款進行中。因各家信用卡結帳週期不同，實際退款時間需依各銀行為主，敬請留意近一兩期信用卡帳單。",orderTime:"2024/03/19 24:23 (GMT+8)",payStateColor:"#FF4D4F",resStateColor:"#FF4D4F"},announcement:x,roomInfo:{...g,statusLabel:"已取消",priceLabel:""},hotelInfo:h,statusIcon:u.cancelled},voidUnpaid:{email:"zhangxiaomei@example.com",orderSummary:{actionButton:R,statusKey:"voided",orderNumber:"#BK25226782424",lastDigits:"1234567890",paymentStatus:"未付款（作廢）",paymentNote:"訂單已作廢。",orderTime:"2024/03/19 24:23 (GMT+8)",payStateColor:"#9C9C9C",resStateColor:"#9C9C9C"},announcement:x,roomInfo:{...g,statusLabel:"已作廢",priceLabel:""},hotelInfo:h,statusIcon:u.voided}},Ve={title:"components/Modules/Order/OrderConfirmation",component:S,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{email:{control:"text"},orderSummary:{control:!1},announcement:{control:!1},roomInfo:{control:!1},hotelInfo:{control:!1},scenario:{control:"select",options:Object.keys(k)}}},c={scenario:"successPayment"},d=n=>{const{scenario:m="successPayment",...s}=n,o=k[m]??k.pendingPayment;return e.jsx(S,{...o,...s})},b={args:c,render:n=>d(n),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"}}},j={args:c,render:n=>e.jsx(t,{sx:{width:"100%",maxWidth:1920,mx:"auto",p:{xs:1,sm:2,md:4}},children:d(n)}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"ipad"}}},F={args:c,render:n=>e.jsx(t,{sx:{width:"100%",p:{xs:1,sm:2}},children:d(n)}),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"iphone12"}}},v={args:{...c,scenario:"pendingPayment"},render:n=>d(n),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"}},name:"待確認"},A={args:{...c,scenario:"waitlistPaid"},render:n=>d(n),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"}},name:"後補"},w={args:{...c,scenario:"cancelledPendingRefund"},render:n=>d(n),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"}},name:"取消"},C={args:{...c,scenario:"voidUnpaid"},render:n=>d(n),parameters:{backgrounds:{default:"page",values:[{name:"page",value:"#FAFAFA"}]},viewport:{defaultViewport:"responsive"}},name:"作廢"};var P,K,V;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => renderWithPreset(args),
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
    }
  }
}`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var O,M,U;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  }}>\r
            {renderWithPreset(args)}\r
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
}`,...(U=(M=j.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,H,I;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <Box sx={{
    width: "100%",
    p: {
      xs: 1,
      sm: 2
    }
  }}>\r
            {renderWithPreset(args)}\r
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
}`,...(I=(H=F.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,G,J;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    scenario: "pendingPayment"
  },
  render: args => renderWithPreset(args),
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
    }
  },
  name: "待確認"
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    scenario: "waitlistPaid"
  },
  render: args => renderWithPreset(args),
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
    }
  },
  name: "後補"
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    scenario: "cancelledPendingRefund"
  },
  render: args => renderWithPreset(args),
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
    }
  },
  name: "取消"
}`,...(re=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    scenario: "voidUnpaid"
  },
  render: args => renderWithPreset(args),
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
    }
  },
  name: "作廢"
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Oe=["Desktop","Tablet","Mobile","待確認","後補","取消","作廢"];export{b as Desktop,F as Mobile,j as Tablet,Oe as __namedExportsOrder,Ve as default,C as 作廢,w as 取消,v as 待確認,A as 後補};
