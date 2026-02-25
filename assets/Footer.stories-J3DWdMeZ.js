import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";import{f as r,c as g}from"./footer-config-C61eU2n6.js";import{B as a,T as t}from"./CheckCircle.es-DXCUKnUH.js";import{S as b,T as z,a as B}from"./Tabs-CX_v8mKZ.js";import{L as j}from"./Link-D6s8y8jX.js";import"./Modal-BHwqZrHA.js";import{S as _}from"./BottomModal-CQgISz-Y.js";import{D as $}from"./Divider-Kbwq-I49.js";import"./InstagramLogo.es-D0IBbFqp.js";import"./Scales.es-C3AxRNFi.js";import"./Train.es-DbNsVOFc.js";import"./defaultPalette-BZVf8BwZ.js";import"./getThemeProps-D8nCqP97.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-Dpzk0ddK.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";const T=({links:p=r.links,brandName:k=r.brandName,contacts:d=r.contacts,address:s=r.address,license:w=r.license,socials:F=r.socials,legalText:m=r.legalText,isGroup:u=r.isGroup})=>e.jsx(e.Fragment,{children:e.jsxs(a,{component:"footer",sx:{bgcolor:"#FFFFFF",mt:4,color:"#1F1F1F"},children:[u&&e.jsx(b,{spacing:2,sx:{maxWidth:{md:783,lg:1200},mx:"auto",px:{xs:2.5,sm:4,md:0},py:{xs:3,md:4},display:"grid",justifyContent:"center"},children:e.jsxs(a,{sx:{display:{xs:"block",sm:"flex"}},children:[e.jsx(a,{sx:{display:"flex",flexDirection:{xs:"column",lg:"row"},justifyContent:{md:"space-between"},alignItems:{xs:"flex-start"},rowGap:2,columnGap:{xs:2,md:3},bgcolor:"#FFFFFF",px:{xs:1,md:2},py:{xs:2,md:2.5,lg:1},borderRadius:2},children:p.map(o=>{const n=!!o.onClick;return e.jsxs(j,{component:n?"button":"a",type:n?"button":void 0,href:n?void 0:o.href,onClick:o.onClick,underline:"none",color:"#444",sx:{display:"inline-flex",alignItems:"center",gap:1,fontSize:{xs:14,md:16},fontWeight:400,...n?{background:"none",border:"none",cursor:"pointer",p:0,textAlign:"left"}:{}},"aria-label":o.label,children:[o.icon,o.label]},o.label)})}),e.jsx(a,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(1, 1fr)"},columnGap:{md:3},rowGap:{xs:2,md:1}},children:e.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:{xs:1,md:1.5},px:{xs:1,md:2}},children:[e.jsx(t,{variant:"subtitle1",sx:{fontWeight:700,color:"#818181",size:14},children:k}),e.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:.75},children:[d.map(o=>e.jsxs(t,{variant:"body2",sx:{color:"#818181",fontSize:{xs:14,md:15},lineHeight:1.6},children:[o.label,"：",o.value]},o.label)),e.jsx(t,{variant:"body2",sx:{color:"#818181",fontSize:{xs:14,md:15},lineHeight:1.6},children:s}),e.jsx(t,{variant:"body2",sx:{color:"#818181",fontSize:{xs:14,md:15},lineHeight:1.6},children:w})]}),e.jsx(a,{sx:{display:"flex",gap:1.5,alignItems:"center",mt:.5},children:F.map(o=>e.jsx(j,{href:o.href,"aria-label":o.ariaLabel,underline:"none",target:"_blank",sx:{display:"inline-flex",alignItems:"center"},children:o.icon},o.ariaLabel))})]})})]})}),e.jsx(a,{sx:{py:1,bgcolor:"#F5F5F6",textAlign:"center"},children:e.jsx(t,{variant:"caption",sx:{color:"#7A7D80",fontSize:14,fontWeight:400},children:m})})]})});T.__docgenInfo={description:"酒店頁尾元件，依示意支援桌機/平板/手機的 RWD 排版。",methods:[],displayName:"Footer",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:`(
  event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"event"}],return:{name:"void"}},required:!1}}]}}],raw:"FooterLink[]"},description:"",defaultValue:{value:`[
  { label: "SSL 安全加密中", href: "https://www.google.com/", icon: <LockKeyIcon size={22} weight="regular" /> },
  { label: "隱私權政策", href: "https://tw.yahoo.com/" },
  { label: "飯店聯票專案訂購須知", href: "https://react.dev/" },
  { label: "取消政策", href: "https://vuejs.org/" },
  { label: "高鐵劃位通", href: "https://angular.dev/", icon: <TrainIcon size={22} weight="regular" /> },
]`,computed:!1}},brandName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Lemon Hotel"',computed:!1}},contacts:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"FooterContact[]"},description:"",defaultValue:{value:`[
  { label: "客服電話", value: "+886-2-8886-6688" },
  { label: "訂房專線", value: "+886-2-8886-6688" },
  { label: "飯店傳真", value: "+886-2-8886-6688" },
]`,computed:!1}},address:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"飯店地址：台北市中山區民生東路一段29號, 台北,臺灣"',computed:!1}},license:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"旅館登記編號：交觀業字第0001號"',computed:!1}},socials:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ariaLabel: string;
  href: string;
  icon: React.ReactNode;
}`,signature:{properties:[{key:"ariaLabel",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"SocialLink[]"},description:"",defaultValue:{value:`[
  { ariaLabel: "Line", href: "https://www.google.com/", icon: <TwitterLogoIcon size={22} weight="fill" color="#1DA1F2" /> },
  { ariaLabel: "Facebook", href: "https://www.google.com/", icon: <FacebookLogoIcon size={22} weight="fill" color="#1877F2" /> },
  { ariaLabel: "Instagram", href: "https://www.google.com/", icon: <InstagramLogoIcon size={22} weight="regular" color="#E1306C" /> },
  { ariaLabel: "Website", href: "https://www.google.com/", icon: <GlobeIcon size={22} weight="regular" color="#818181" /> },
]`,computed:!1}},legalText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"系統提供　膂盟資訊"',computed:!1}},isGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const pe={title:"components/Atoms/Footer/Footer",component:T,parameters:{layout:"fullscreen",docs:{source:{type:"code",code:`
import { Footer } from "./Footer";
import { footerDefaultData } from "./footer-config";

<Footer {...footerDefaultData} />
        `.trim()}}},tags:["autodocs"],argTypes:{links:{control:!1,table:{type:{summary:"FooterLink[]"},defaultValue:{summary:"預設 5 筆"}}},contacts:{control:!1,table:{type:{summary:"FooterContact[]"},defaultValue:{summary:"預設 3 筆"}}},socials:{control:!1,table:{type:{summary:"SocialLink[]"},defaultValue:{summary:"預設 4 筆"}}}}},v=p=>{var o;const[k,d]=C.useState(!1),[s,w]=C.useState(g[0].key),F=((o=p.links??r.links)==null?void 0:o.map(n=>n.label==="取消政策"?{...n,href:void 0,onClick:()=>d(!0)}:n))??[],m=g.find(n=>n.key===s)??g[0],u=(n,f)=>e.jsxs(b,{spacing:1,sx:{mt:2},children:[e.jsx(t,{variant:"subtitle1",fontWeight:700,children:n}),e.jsx(b,{spacing:.75,children:f.map((i,c)=>typeof i=="string"?e.jsx(t,{variant:"body2",color:"#3C3C3C",sx:{lineHeight:1.7},children:`${c+1}. ${i}`},`${n}-${c}`):e.jsxs(a,{children:[e.jsx(t,{variant:"body2",color:"#3C3C3C",sx:{lineHeight:1.7},children:`${c+1}. ${i.text}`}),i.subItems&&e.jsx(a,{component:"ul",sx:{pl:3.5,mt:.6,color:"#4B5563",listStyleType:"disc"},children:i.subItems.map((E,q)=>e.jsx(t,{component:"li",variant:"body2",color:"#4B5563",sx:{lineHeight:1.65,mb:.4},children:E},`${n}-${c}-${q}`))})]},`${n}-${c}`))})]});return e.jsxs(e.Fragment,{children:[e.jsx(T,{...p,links:F}),e.jsx(_,{open:k,anchor:"right",align:"center",onClose:(n,f)=>d(!1),title:"取消/訂金政策",content:e.jsxs(a,{sx:{minWidth:{xs:320,sm:440},color:"#1F1F1F"},children:[e.jsx(b,{spacing:.75,alignItems:"center",textAlign:"center",sx:{mb:2.5},children:e.jsx(t,{variant:"body2",color:"#373737",sx:{fontWeight:500},children:"飯店提供多種取消/訂金政策，您可以在付款時自由選擇。"})}),e.jsx(z,{value:s,onChange:(n,f)=>w(f),textColor:"inherit",variant:"fullWidth",TabIndicatorProps:{sx:{backgroundColor:"#1994FC",borderRadius:2}},sx:{minHeight:52},children:g.map(n=>e.jsx(B,{value:n.key,icon:e.jsx(n.Icon,{size:22,weight:"fill",color:s===n.key?n.color:"#9AA0A6"}),iconPosition:"start",label:n.key,sx:{textTransform:"none",minHeight:52,color:s===n.key?"#1D1B20":"#9AA0A6",fontWeight:s===n.key?700:500,gap:.5}},n.key))}),e.jsx($,{sx:{mb:1.5}}),u("訂金政策",m.depositPolicies),u("取消政策",m.cancelPolicies)]})})]})},l={parameters:{viewport:{defaultViewport:"responsive"},docs:{source:{code:`
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { ShieldCheckIcon, TrophyIcon, HourglassSimpleIcon } from "@phosphor-icons/react";
import { Footer } from "./Footer";
import { SideModal } from "./Modal";
import { footerDefaultData } from "./footer-config";

const plans = [
  { key: "安心方案", color: "#20C997", Icon: ShieldCheckIcon },
  { key: "彈性方案", color: "#FFB53F", Icon: TrophyIcon },
  { key: "免付方案", color: "#1994FC", Icon: HourglassSimpleIcon },
];

const FooterWithCancelPolicyModal = (args) => {
  const [open, setOpen] = useState(false);
  const [activePlanKey, setActivePlanKey] = useState(plans[0].key);
  const links = footerDefaultData.links.map((link) =>
    link.label === "取消政策"
      ? { ...link, href: undefined, onClick: () => setOpen(true) }
      : link
  );

  return (
    <>
      <Footer {...args} links={links} />
      <SideModal
        open={open}
        align="center"
        onClose={() => setOpen(false)}
        title="取消/訂金政策"
        content={
          <>
            <Tabs
              value={activePlanKey}
              onChange={(_, value) => setActivePlanKey(value)}
              TabIndicatorProps={{ sx: { backgroundColor: plans.find((p) => p.key === activePlanKey)?.color } }}
            >
              {plans.map((plan) => (
                <Tab
                  key={plan.key}
                  value={plan.key}
                  icon={
                    <plan.Icon
                      size={20}
                      weight={activePlanKey === plan.key ? "fill" : "regular"}
                      color={activePlanKey === plan.key ? plan.color : "#9AA0A6"}
                    />
                  }
                  label={plan.key}
                  iconPosition="start"
                  sx={{ textTransform: "none" }}
                />
              ))}
            </Tabs>
            {/* 依 activePlanKey 顯示不同的訂金/取消政策內容 */}
          </>
        }
      />
    </>
  );
};
                `.trim()}}},render:v,args:r},y={render:v,args:{...l.args},parameters:{viewport:{defaultViewport:"ipad"}}},h={render:v,args:{...l.args},parameters:{viewport:{defaultViewport:"iphone6"}}},x={render:v,args:{...l.args,isGroup:!1},parameters:{viewport:{defaultViewport:"responsive"}}};var I,S,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "responsive"
    },
    docs: {
      source: {
        code: \`
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { ShieldCheckIcon, TrophyIcon, HourglassSimpleIcon } from "@phosphor-icons/react";
import { Footer } from "./Footer";
import { SideModal } from "./Modal";
import { footerDefaultData } from "./footer-config";

const plans = [
  { key: "安心方案", color: "#20C997", Icon: ShieldCheckIcon },
  { key: "彈性方案", color: "#FFB53F", Icon: TrophyIcon },
  { key: "免付方案", color: "#1994FC", Icon: HourglassSimpleIcon },
];

const FooterWithCancelPolicyModal = (args) => {
  const [open, setOpen] = useState(false);
  const [activePlanKey, setActivePlanKey] = useState(plans[0].key);
  const links = footerDefaultData.links.map((link) =>
    link.label === "取消政策"
      ? { ...link, href: undefined, onClick: () => setOpen(true) }
      : link
  );

  return (
    <>
      <Footer {...args} links={links} />
      <SideModal
        open={open}
        align="center"
        onClose={() => setOpen(false)}
        title="取消/訂金政策"
        content={
          <>
            <Tabs
              value={activePlanKey}
              onChange={(_, value) => setActivePlanKey(value)}
              TabIndicatorProps={{ sx: { backgroundColor: plans.find((p) => p.key === activePlanKey)?.color } }}
            >
              {plans.map((plan) => (
                <Tab
                  key={plan.key}
                  value={plan.key}
                  icon={
                    <plan.Icon
                      size={20}
                      weight={activePlanKey === plan.key ? "fill" : "regular"}
                      color={activePlanKey === plan.key ? plan.color : "#9AA0A6"}
                    />
                  }
                  label={plan.key}
                  iconPosition="start"
                  sx={{ textTransform: "none" }}
                />
              ))}
            </Tabs>
            {/* 依 activePlanKey 顯示不同的訂金/取消政策內容 */}
          </>
        }
      />
    </>
  );
};
                \`.trim()
      }
    }
  },
  render: renderWithCancelPolicyModal,
  args: footerDefaultData
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var A,L,M;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: renderWithCancelPolicyModal,
  args: {
    ...Desktop.args
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad"
    }
  }
}`,...(M=(L=y.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var D,H,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: renderWithCancelPolicyModal,
  args: {
    ...Desktop.args
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6"
    }
  }
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var K,V,W;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: renderWithCancelPolicyModal,
  args: {
    ...Desktop.args,
    isGroup: false
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive"
    }
  }
}`,...(W=(V=x.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const de=["Desktop","Tablet","Mobile","HotelPage"];export{l as Desktop,x as HotelPage,h as Mobile,y as Tablet,de as __namedExportsOrder,pe as default};
