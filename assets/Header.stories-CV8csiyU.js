import{j as a}from"./jsx-runtime-BO8uF4Og.js";import{fn as h}from"./index-Cf3xVBfy.js";import{r as e}from"./index-D4H_InIO.js";import{x as Q,w as K,s as X,g as ee,h as re,P as De,m as te,F as Ie,q as Z,o as Te,G as Ze,a as d,I as x,v as Le,t as Ne,b as T,p as Ee,H as Be,L as Pe,c as Re,d as Fe,J as Se,B as k,D as A,A as $e}from"./Typography-2_fYrsYp.js";import{u as ae,e as j}from"./DefaultPropsProvider-w6ViFw_n.js";import{L as We}from"./ListItemButton-IV0e0DPQ.js";import{o as Ue}from"./Heart.es-CmhBu5hz.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";function ze(r){return Q("MuiAppBar",r)}K("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Ge=r=>{const{color:n,position:s,classes:o}=r,g={root:["root",`color${j(n)}`,`position${j(s)}`]};return re(g,ze,o)},O=(r,n)=>r?`${r==null?void 0:r.replace(")","")}, ${n})`:n,Oe=X(De,{name:"MuiAppBar",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:s}=r;return[n.root,n[`position${j(s.position)}`],n[`color${j(s.color)}`]]}})(te(({theme:r})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":r.vars?r.vars.palette.AppBar.defaultBg:r.palette.grey[100],"--AppBar-color":r.vars?r.vars.palette.text.primary:r.palette.getContrastText(r.palette.grey[100]),...r.applyStyles("dark",{"--AppBar-background":r.vars?r.vars.palette.AppBar.defaultBg:r.palette.grey[900],"--AppBar-color":r.vars?r.vars.palette.text.primary:r.palette.getContrastText(r.palette.grey[900])})}},...Object.entries(r.palette).filter(Ie(["contrastText"])).map(([n])=>({props:{color:n},style:{"--AppBar-background":(r.vars??r).palette[n].main,"--AppBar-color":(r.vars??r).palette[n].contrastText}})),{props:n=>n.enableColorOnDark===!0&&!["inherit","transparent"].includes(n.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:n=>n.enableColorOnDark===!1&&!["inherit","transparent"].includes(n.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...r.applyStyles("dark",{backgroundColor:r.vars?O(r.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:r.vars?O(r.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...r.applyStyles("dark",{backgroundImage:"none"})}}]}))),_e=e.forwardRef(function(n,s){const o=ae({props:n,name:"MuiAppBar"}),{className:g,color:l="primary",enableColorOnDark:f=!1,position:c="fixed",...p}=o,u={...o,color:l,position:c,enableColorOnDark:f},i=Ge(u);return a.jsx(Oe,{square:!0,component:"header",ownerState:u,elevation:4,className:ee(i.root,g,c==="fixed"&&"mui-fixed"),ref:s,...p})});function Je(r){return Q("MuiToolbar",r)}K("MuiToolbar",["root","gutters","regular","dense"]);const Ye=r=>{const{classes:n,disableGutters:s,variant:o}=r;return re({root:["root",!s&&"gutters",o]},Je,n)},Qe=X("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:s}=r;return[n.root,!s.disableGutters&&n.gutters,n[s.variant]]}})(te(({theme:r})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:n})=>!n.disableGutters,style:{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:r.mixins.toolbar}]}))),Ke=e.forwardRef(function(n,s){const o=ae({props:n,name:"MuiToolbar"}),{className:g,component:l="div",disableGutters:f=!1,variant:c="regular",...p}=o,u={...o,component:l,disableGutters:f,variant:c},i=Ye(u);return a.jsx(Qe,{as:l,className:ee(i.root,g),ref:s,ownerState:u,...p})}),Xe=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM183,80H160V57ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm96.48-48.49a36,36,0,1,0-17,17l12,12a12,12,0,0,0,17-17ZM112,148a12,12,0,1,1,12,12A12,12,0,0,1,112,148Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),e.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-45.54-48.85a36.05,36.05,0,1,0-11.31,11.31l11.19,11.2a8,8,0,0,0,11.32-11.32ZM104,148a20,20,0,1,1,20,20A20,20,0,0,1,104,148Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M144,148a20,20,0,1,1-20-20A20,20,0,0,1,144,148Zm72-60V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-50.34,90.34-11.2-11.19a36.05,36.05,0,1,0-11.31,11.31l11.19,11.2a8,8,0,0,0,11.32-11.32ZM196,88,152,44V88Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-48.11-50.59a34.05,34.05,0,1,0-8.48,8.48l12.35,12.35a6,6,0,0,0,8.48-8.48ZM102,148a22,22,0,1,1,22,22A22,22,0,0,1,102,148Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-45.54-48.85a36.05,36.05,0,1,0-11.31,11.31l11.19,11.2a8,8,0,0,0,11.32-11.32ZM104,148a20,20,0,1,1,20,20A20,20,0,0,1,104,148Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-50.74-52.39a32.05,32.05,0,1,0-5.65,5.65l13.56,13.57a4,4,0,0,0,5.66-5.66ZM100,148a24,24,0,1,1,24,24A24,24,0,0,1,100,148Z"}))]]),er=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",opacity:"0.2"}),e.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"}))]]),rr=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,64V192H40V64Z",opacity:"0.2"}),e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),ne=e.forwardRef((r,n)=>e.createElement(Z,{ref:n,...r,weights:Xe}));ne.displayName="FileMagnifyingGlassIcon";const oe=e.forwardRef((r,n)=>e.createElement(Z,{ref:n,...r,weights:er}));oe.displayName="HouseIcon";const le=e.forwardRef((r,n)=>e.createElement(Z,{ref:n,...r,weights:rr}));le.displayName="ListIcon";const ie=({logo:r,brandName:n="Lemon Hotel",hotelName:s,onBrandClick:o,announcement:g=[],announcementControls:l,navigationItems:f=[],hotelHostSelector:c,languageSelector:p,currencySelector:u,user:i,isGroup:M,isLogin:se,loading:m,breakpoints:ue={mobile:600,tablet:900,desktop:1200},position:ce="sticky",responsive:q=!0,sx:pe,className:de})=>{const ge=Te(),V=Ze(ge.breakpoints.down(ue.tablet||900)),[L,me]=e.useState(!1),[N,E]=e.useState(null),[B,P]=e.useState(null),[R,F]=e.useState(null),[S,$]=e.useState(null),[v,w]=e.useState(0),[y,ye]=e.useState([]);e.useEffect(()=>{const t=g.filter(b=>b.visible);ye(t),v>=t.length&&t.length>0&&w(0)},[g,v]),e.useEffect(()=>{if(l!=null&&l.autoPlay&&y.length>1){const t=setInterval(()=>{W()},l.autoPlayInterval||5e3);return()=>clearInterval(t)}},[y,v,l]);const D=()=>{me(!L)},be=()=>{if(y.length>0){const t=v===0?y.length-1:v-1;w(t),l==null||l.onPrevious()}},W=()=>{if(y.length>0){const t=v===y.length-1?0:v+1;w(t),l==null||l.onNext()}},he=t=>{E(t.currentTarget)},U=()=>{E(null)},ve=t=>{c==null||c.onHotelHostChange(t),U()},fe=t=>{P(t.currentTarget)},z=()=>{P(null)},He=t=>{p==null||p.onLanguageChange(t),z()},xe=t=>{F(t.currentTarget)},G=()=>{F(null)},ke=t=>{u==null||u.onCurrencyChange(t),G()},Ae=t=>{$(t.currentTarget)},I=()=>{$(null)},Ce=()=>r?typeof r=="string"?a.jsx(d,{component:"img",src:r,alt:`${n} Logo`,sx:{height:40,width:"auto",maxWidth:200,mr:2,cursor:o?"pointer":"default"},onClick:o}):a.jsx(d,{sx:{mr:2,cursor:o?"pointer":"default"},onClick:o,children:r}):null,je=()=>{const t=M?n:s||n;return t?a.jsx(T,{variant:"h6",component:"div",color:"primary.custMain",sx:{fontWeight:"bold",cursor:o?"pointer":"default",flexGrow:V?1:0},onClick:o,children:t}):null},Me=()=>{if(!y.length)return null;const t=y[v],b=y.length>1;return a.jsxs(Le,{severity:"info",sx:{display:"flex",alignItems:"center",justifyContent:"space-between","& .MuiAlert-message":{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},children:[b&&a.jsx(x,{size:"small",onClick:be,sx:{mr:1},children:a.jsx(Ne,{size:16})}),a.jsxs(d,{sx:{flex:1,textAlign:"center"},children:[a.jsx(T,{variant:"subtitle2",component:"div",sx:{fontWeight:"bold"},children:t.title}),a.jsx(T,{variant:"body2",component:"div",children:t.article})]}),b&&a.jsx(x,{size:"small",onClick:W,sx:{ml:1},children:a.jsx(Ee,{size:16})})]})};//! 可能需要修改
const qe=()=>V&&q?null:a.jsx(d,{sx:{display:"flex",alignItems:"center",gap:2,ml:4},children:f.map((t,b)=>{const H={backgroundColor:t.active?"primary.tonal":"transparent",color:t.active?"primary.onTonal":"inherit","&:hover":{backgroundColor:"primary.tonal"}};return a.jsx(Se,{title:t.tooltip||"",arrow:!0,children:t.href?a.jsx(x,{component:"a",href:t.href,sx:H,disabled:t.disabled,target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noopener noreferrer":void 0,children:t.icon}):a.jsx(x,{sx:H,onClick:t.onClick,disabled:t.disabled,children:t.icon})},b)})}),Ve=()=>q?a.jsx(Be,{anchor:"left",open:L,onClose:D,sx:{display:{xs:"block",md:"none"}},children:a.jsx(d,{sx:{width:250},children:a.jsx(Pe,{children:f.map((t,b)=>a.jsx(Re,{disablePadding:!0,children:a.jsxs(We,{disabled:t.disabled,onClick:()=>{var H;(H=t.onClick)==null||H.call(t),D()},children:[a.jsx(d,{sx:{mr:2},children:t.icon}),a.jsx(Fe,{primary:t.tooltip||`選項 ${b+1}`})]})},b))})})}):null,we=()=>a.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[M&&c&&a.jsxs(a.Fragment,{children:[a.jsx(k,{variant:"text",onClick:he,disabled:m==null?void 0:m.hotelHost,children:c.currentHotelHost}),a.jsx(A,{anchorEl:N,open:!!N,onClose:U,items:c.hotelHosts.map(t=>({label:t.hotel,onClick:()=>ve(t.code)}))})]}),p&&a.jsxs(a.Fragment,{children:[a.jsx(k,{variant:"text",onClick:fe,startIcon:a.jsx("span",{children:"🌍"}),disabled:m==null?void 0:m.navigation,children:p.currentLanguage}),a.jsx(A,{anchorEl:B,open:!!B,onClose:z,items:p.languages.map(t=>({label:t.label,onClick:()=>He(t.code)}))})]}),u&&a.jsxs(a.Fragment,{children:[a.jsx(k,{variant:"text",onClick:xe,children:u.currentCurrency}),a.jsx(A,{anchorEl:R,open:!!R,onClose:G,items:u.currencies.map(t=>({label:`${t.symbol} ${t.label}`,onClick:()=>ke(t.code)}))})]}),!M&&i&&a.jsx(a.Fragment,{children:i.isAuthenticated&&se?a.jsxs(a.Fragment,{children:[a.jsx($e,{src:i.avatar,alt:i.name,onClick:Ae,sx:{cursor:"pointer"}}),a.jsx(A,{anchorEl:S,open:!!S,onClose:I,items:[...i.menuItems||[],{label:"個人資料",onClick:()=>{var t;(t=i.onProfile)==null||t.call(i),I()}},{label:"登出",onClick:()=>{var t;(t=i.onLogout)==null||t.call(i),I()}}]})]}):a.jsx(k,{variant:"filled",onClick:i.onLogin,disabled:m==null?void 0:m.user,children:"登入/註冊"})})]});return a.jsxs(d,{children:[a.jsx(_e,{position:ce,className:de,sx:{backgroundColor:"background.paper",color:"text.primary",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",...pe},children:a.jsxs(Ke,{sx:{minHeight:64,height:"100%"},children:[q&&V&&a.jsx(x,{edge:"start",color:"inherit","aria-label":"menu",onClick:D,sx:{mr:2},children:a.jsx(le,{size:24})}),a.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[Ce(),je()]}),qe(),a.jsx(d,{sx:{flexGrow:1}}),we()]})}),Me(),Ve()]})};ie.__docgenInfo={description:`Header 元件\r
提供網站頂部導覽功能，包含品牌識別、導覽選單、公告輪播、語系/幣別選擇、使用者功能等`,methods:[],displayName:"Header",props:{logo:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"品牌 Logo（可以是圖片 URL 或 React 元件）"},brandName:{required:!1,tsType:{name:"string"},description:"品牌名稱",defaultValue:{value:'"Lemon Hotel"',computed:!1}},hotelName:{required:!1,tsType:{name:"string"},description:"飯店名稱"},onBrandClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"品牌名稱點擊事件"},announcement:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    title: string | ReactNode;\r
    article: string | ReactNode;\r
    visible: boolean;  // 公告是否已發佈\r
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0}},{key:"article",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0}},{key:"visible",value:{name:"boolean",required:!0}}]}}],raw:`Array<{\r
    title: string | ReactNode;\r
    article: string | ReactNode;\r
    visible: boolean;  // 公告是否已發佈\r
}>`},description:"公告內容陣列",defaultValue:{value:"[]",computed:!1}},announcementControls:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    currentIndex: number;\r
    onPrevious: () => void;\r
    onNext: () => void;\r
    autoPlay?: boolean;\r
    autoPlayInterval?: number; // 毫秒\r
}`,signature:{properties:[{key:"currentIndex",value:{name:"number",required:!0}},{key:"onPrevious",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNext",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"autoPlay",value:{name:"boolean",required:!1}},{key:"autoPlayInterval",value:{name:"number",required:!1}}]}},description:"公告切換控制"},navigationItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    icon: ReactNode;  // 必填，因為確定只顯示 icon\r
    href?: string;\r
    onClick?: () => void;\r
    active?: boolean;\r
    disabled?: boolean;\r
    tooltip?: string;  // 建議加上 tooltip 提升可用性\r
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"string",required:!1}}]}}],raw:`Array<{\r
    icon: ReactNode;  // 必填，因為確定只顯示 icon\r
    href?: string;\r
    onClick?: () => void;\r
    active?: boolean;\r
    disabled?: boolean;\r
    tooltip?: string;  // 建議加上 tooltip 提升可用性\r
}>`},description:"導覽選單項目（僅顯示 icon）",defaultValue:{value:"[]",computed:!1}},hotelHostSelector:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    currentHotelHost: string | null;\r
    hotelHosts: Array<{\r
        code: string;\r
        hotel: string;\r
    }>;\r
    onHotelHostChange: (hotelHost: string) => void;  // 修正命名\r
}`,signature:{properties:[{key:"currentHotelHost",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hotelHosts",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    code: string;\r
    hotel: string;\r
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"hotel",value:{name:"string",required:!0}}]}}],raw:`Array<{\r
    code: string;\r
    hotel: string;\r
}>`,required:!0}},{key:"onHotelHostChange",value:{name:"signature",type:"function",raw:"(hotelHost: string) => void",signature:{arguments:[{type:{name:"string"},name:"hotelHost"}],return:{name:"void"}},required:!0}}]}},description:"館別選擇"},languageSelector:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    currentLanguage: string;\r
    languages: Array<{\r
        code: string;\r
        label: string;\r
    }>;\r
    onLanguageChange: (language: string) => void;\r
}`,signature:{properties:[{key:"currentLanguage",value:{name:"string",required:!0}},{key:"languages",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    code: string;\r
    label: string;\r
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{\r
    code: string;\r
    label: string;\r
}>`,required:!0}},{key:"onLanguageChange",value:{name:"signature",type:"function",raw:"(language: string) => void",signature:{arguments:[{type:{name:"string"},name:"language"}],return:{name:"void"}},required:!0}}]}},description:"語系選擇"},currencySelector:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    currentCurrency: string;\r
    currencies: Array<{\r
        code: string;\r
        label: string;\r
        symbol: string;\r
    }>;\r
    onCurrencyChange: (currency: string) => void;\r
}`,signature:{properties:[{key:"currentCurrency",value:{name:"string",required:!0}},{key:"currencies",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    code: string;\r
    label: string;\r
    symbol: string;\r
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}}]}}],raw:`Array<{\r
    code: string;\r
    label: string;\r
    symbol: string;\r
}>`,required:!0}},{key:"onCurrencyChange",value:{name:"signature",type:"function",raw:"(currency: string) => void",signature:{arguments:[{type:{name:"string"},name:"currency"}],return:{name:"void"}},required:!0}}]}},description:"幣別選擇"},user:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    isAuthenticated: boolean;\r
    name?: string;\r
    avatar?: string;\r
    onLogin?: () => void;\r
    onLogout?: () => void;\r
    onProfile?: () => void;\r
    menuItems?: Array<{\r
        label: string;\r
        icon?: ReactNode;\r
        onClick: () => void;\r
        divider?: boolean;\r
    }>;\r
}`,signature:{properties:[{key:"isAuthenticated",value:{name:"boolean",required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"avatar",value:{name:"string",required:!1}},{key:"onLogin",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onLogout",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onProfile",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"menuItems",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    icon?: ReactNode;\r
    onClick: () => void;\r
    divider?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"divider",value:{name:"boolean",required:!1}}]}}],raw:`Array<{\r
    label: string;\r
    icon?: ReactNode;\r
    onClick: () => void;\r
    divider?: boolean;\r
}>`,required:!1}}]}},description:"使用者相關"},isGroup:{required:!0,tsType:{name:"boolean"},description:"是否為集團首頁"},isLogin:{required:!0,tsType:{name:"boolean"},description:"是否已登入"},loading:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    user?: boolean;\r
    navigation?: boolean;\r
    hotelHost?: boolean;\r
    announcement?: boolean;\r
}`,signature:{properties:[{key:"user",value:{name:"boolean",required:!1}},{key:"navigation",value:{name:"boolean",required:!1}},{key:"hotelHost",value:{name:"boolean",required:!1}},{key:"announcement",value:{name:"boolean",required:!1}}]}},description:"載入狀態"},breakpoints:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    mobile?: number;    // 預設 600px (MUI sm)\r
    tablet?: number;    // 預設 900px (MUI md)\r
    desktop?: number;   // 預設 1200px (MUI lg)\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!1}},{key:"tablet",value:{name:"number",required:!1}},{key:"desktop",value:{name:"number",required:!1}}]}},description:"響應式斷點設定",defaultValue:{value:"{ mobile: 600, tablet: 900, desktop: 1200 }",computed:!1}},position:{required:!1,tsType:{name:"AppBarProps['position']",raw:"AppBarProps['position']"},description:"AppBar 相關屬性",defaultValue:{value:'"sticky"',computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"是否響應式（行動版顯示漢堡選單）",defaultValue:{value:"true",computed:!1}},sx:{required:!1,tsType:{name:"AppBarProps['sx']",raw:"AppBarProps['sx']"},description:"自定義樣式"},className:{required:!1,tsType:{name:"string"},description:"自定義 className"},argTypes:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
    propName: {\r
        control: false, // 不顯示於 Controls\r
        table: { disable: true }, // 不顯示於表格\r
    },\r
}`,signature:{properties:[{key:"propName",value:{name:"signature",type:"object",raw:`{\r
    control: false, // 不顯示於 Controls\r
    table: { disable: true }, // 不顯示於表格\r
}`,signature:{properties:[{key:"control",value:{name:"literal",value:"false",required:!0}},{key:"table",value:{name:"signature",type:"object",raw:"{ disable: true }",signature:{properties:[{key:"disable",value:{name:"literal",value:"true",required:!0}}]},required:!0}}]},required:!0}}]}},description:""},parameters:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
    docs: {\r
        description: {\r
            component: '這裡只寫你想顯示的簡短說明',\r
        },\r
    },\r
}`,signature:{properties:[{key:"docs",value:{name:"signature",type:"object",raw:`{\r
    description: {\r
        component: '這裡只寫你想顯示的簡短說明',\r
    },\r
}`,signature:{properties:[{key:"description",value:{name:"signature",type:"object",raw:`{\r
    component: '這裡只寫你想顯示的簡短說明',\r
}`,signature:{properties:[{key:"component",value:{name:"literal",value:"'這裡只寫你想顯示的簡短說明'",required:!0}}]},required:!0}}]},required:!0}}]}},description:""}}};const tr={languages:[{code:"zh-TW",label:"繁體中文",flag:"🇹🇼",isDefault:!0},{code:"en",label:"English",flag:"🇺🇸",isDefault:!1},{code:"ja",label:"日本語",flag:"🇯🇵",isDefault:!1},{code:"ko",label:"한국어",flag:"🇰🇷",isDefault:!1}],currencies:[{code:"TWD",label:"台幣",symbol:"NT$",isDefault:!0,exchangeRate:1},{code:"USD",label:"美元",symbol:"$",isDefault:!1,exchangeRate:31.5},{code:"JPY",label:"日圓",symbol:"¥",isDefault:!1,exchangeRate:.21},{code:"EUR",label:"歐元",symbol:"€",isDefault:!1,exchangeRate:34.2}],hotelHosts:[{code:"taipei",hotel:"台北館",fullName:"Lemon Hotel 台北館",address:"台北市信義區信義路五段7號",phone:"+886-2-2345-6789",image:"/images/hotels/taipei.jpg",isActive:!0,openingDate:"2020-01-15",features:["商務中心","健身房","免費WiFi","停車場"]},{code:"taichung",hotel:"台中館",fullName:"Lemon Hotel 台中館",address:"台中市西屯區台灣大道三段99號",phone:"+886-4-2345-6789",image:"/images/hotels/taichung.jpg",isActive:!0,openingDate:"2021-03-20",features:["溫泉SPA","會議廳","免費WiFi","接駁服務"]},{code:"kaohsiung",hotel:"高雄館",fullName:"Lemon Hotel 高雄館",address:"高雄市前金區中正四路211號",phone:"+886-7-2345-6789",image:"/images/hotels/kaohsiung.jpg",isActive:!0,openingDate:"2021-08-10",features:["海景房","游泳池","免費WiFi","自助早餐"]},{code:"hualien",hotel:"花蓮館",fullName:"Lemon Hotel 花蓮館",address:"花蓮縣花蓮市中山路123號",phone:"+886-3-2345-6789",image:"/images/hotels/hualien.jpg",isActive:!0,openingDate:"2022-05-01",features:["山景房","溫泉","免費WiFi","自行車租借"]},{code:"tainan",hotel:"台南館",fullName:"Lemon Hotel 台南館",address:"台南市中西區民族路二段76號",phone:"+886-6-2345-6789",image:"/images/hotels/tainan.jpg",isActive:!1,openingDate:"2023-12-01",features:["古城風情","文化導覽","免費WiFi","在地美食"]}],announcements:{global:[{id:"global-001",title:"🎉 集團新年特惠活動",article:"即日起至2月底，全館別住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",visible:!0,priority:1,startDate:"2025-01-01",endDate:"2025-02-28",targetHotels:["taipei","taichung","kaohsiung","hualien"],type:"promotion"},{id:"global-002",title:"🌟 集團會員升級優惠",article:"升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",visible:!0,priority:2,startDate:"2025-01-15",endDate:"2025-12-31",targetHotels:["taipei","taichung","kaohsiung","hualien"],type:"membership"}],taipei:[{id:"taipei-001",title:"🎉 台北館新年特惠活動",article:"台北館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",visible:!0,priority:1,startDate:"2025-01-01",endDate:"2025-02-28",type:"promotion"},{id:"taipei-002",title:"🌟 台北館會員升級優惠",article:"台北館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",visible:!0,priority:2,startDate:"2025-01-15",endDate:"2025-12-31",type:"membership"},{id:"taipei-003",title:"🚗 台北館免費停車服務",article:"台北館入住期間提供免費停車位，讓您的台北旅程更加便利無憂，市中心住宿首選。",visible:!0,priority:3,startDate:"2025-01-01",endDate:"2025-12-31",type:"service"}],taichung:[{id:"taichung-001",title:"🎉 台中館新年特惠活動",article:"台中館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",visible:!0,priority:1,startDate:"2025-01-01",endDate:"2025-02-28",type:"promotion"},{id:"taichung-002",title:"🌟 台中館會員升級優惠",article:"台中館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",visible:!0,priority:2,startDate:"2025-01-15",endDate:"2025-12-31",type:"membership"},{id:"taichung-003",title:"♨️ 台中館溫泉SPA開放",article:"台中館全新溫泉SPA設施正式開放，享受舒壓療癒時光，預約制服務，為您的住宿體驗加分。",visible:!0,priority:3,startDate:"2025-01-10",endDate:"2025-12-31",type:"facility"}],kaohsiung:[{id:"kaohsiung-001",title:"🎉 高雄館新年特惠活動",article:"高雄館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",visible:!0,priority:1,startDate:"2025-01-01",endDate:"2025-02-28",type:"promotion"},{id:"kaohsiung-002",title:"🌟 高雄館會員升級優惠",article:"高雄館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",visible:!0,priority:2,startDate:"2025-01-15",endDate:"2025-12-31",type:"membership"},{id:"kaohsiung-003",title:"🌊 高雄館海景房優惠",article:"高雄館海景房特別優惠，欣賞港都美景，感受海風徐徐，讓您的住宿體驗更加難忘。",visible:!0,priority:3,startDate:"2025-01-01",endDate:"2025-06-30",type:"room"}],hualien:[{id:"hualien-001",title:"🎉 花蓮館新年特惠活動",article:"花蓮館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",visible:!0,priority:1,startDate:"2025-01-01",endDate:"2025-02-28",type:"promotion"},{id:"hualien-002",title:"🌟 花蓮館會員升級優惠",article:"花蓮館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",visible:!0,priority:2,startDate:"2025-01-15",endDate:"2025-12-31",type:"membership"},{id:"hualien-003",title:"🏔️ 花蓮館山景溫泉體驗",article:"花蓮館獨特山景溫泉，在大自然懷抱中享受溫泉療癒，配合自行車租借服務，體驗花蓮之美。",visible:!0,priority:3,startDate:"2025-01-01",endDate:"2025-12-31",type:"experience"}]}},ar={headerConfig:tr};console.log(ar);const vr={title:"components/Modules/Header/Header",component:ie,parameters:{layout:"fullscreen",docs:{description:{component:"這裡只寫你想顯示的簡短說明"}}},tags:["autodocs"],argTypes:{logo:{name:"Logo",control:!1,description:"品牌 Logo 圖片 URL",table:{disable:!0}},brandName:{name:"品牌名稱",control:!1,description:"集團品牌名稱",table:{disable:!0}},hotelName:{name:"飯店名稱",control:!1,description:"選擇館別後顯示的飯店名稱",table:{disable:!0}},isGroup:{name:"集團模式",control:"boolean",description:"是否為集團首頁模式",table:{disable:!0}},isLogin:{name:"登入狀態",control:"boolean",description:"使用者是否已登入",table:{disable:!0}},announcement:{name:"公告",control:"object",description:"公告內容陣列",table:{disable:!0}},navigationItems:{name:"導覽選單",control:"object",description:"導覽圖示陣列",table:{disable:!0}},responsive:{name:"響應式",control:"boolean",description:"是否啟用響應式設計",table:{disable:!0}},position:{name:"定位方式",control:{type:"select"},options:["static","fixed","sticky","relative","absolute"],table:{disable:!0}}},args:{brandName:"Lemon",position:"sticky",responsive:!0,onBrandClick:h()}},nr=[{icon:a.jsx(oe,{}),tooltip:"客房",onClick:h()},{icon:a.jsx(Ue,{}),tooltip:"我的最愛",onClick:h()},{icon:a.jsx(ne,{}),tooltip:"搜尋",onClick:h()}],or=[{title:"🎉 新年特惠活動",article:"即日起至月底，住宿享 8 折優惠！立即預訂享受超值價格。",visible:!0},{title:"🌟 會員升級優惠",article:"升級VIP會員即享專屬禮遇，包含免費早餐和延遲退房服務。",visible:!0},{title:"🚗 免費停車服務",article:"入住期間提供免費停車位，讓您的旅程更加便利無憂。",visible:!0}],lr={currentLanguage:"繁體中文",languages:[{code:"zh-TW",label:"繁體中文"},{code:"en",label:"English"},{code:"ja",label:"日本語"}],onLanguageChange:h()},ir={currentCurrency:"TWD",currencies:[{code:"TWD",label:"台幣",symbol:"NT$"},{code:"USD",label:"美元",symbol:"$"},{code:"JPY",label:"日圓",symbol:"¥"}],onCurrencyChange:h()},sr={currentHotelHost:"請選擇館別",hotelHosts:[{code:"taipei",hotel:"台北館"},{code:"taichung",hotel:"台中館"},{code:"kaohsiung",hotel:"高雄館"},{code:"hualien",hotel:"花蓮館"}],onHotelHostChange:h()},C={args:{logo:"/header_LogoImage.jpg",brandName:"Lemon",isGroup:!0,isLogin:!1,announcement:or,announcementControls:{currentIndex:0,onPrevious:h(),onNext:h(),autoPlay:!0,autoPlayInterval:5e3},navigationItems:nr,hotelHostSelector:sr,languageSelector:lr,currencySelector:ir,loading:{user:!1,navigation:!1,hotelHost:!1,announcement:!1}},parameters:{docs:{description:{story:"集團首頁模式展示館別選擇功能，此模式下不顯示登入按鈕，主要用於讓使用者選擇要前往的飯店館別。"},source:{code:`
import Header from '@lemon/material/Header';

<Header
  logo="/logo.png"
  brandName="Lemon Hotel Group"
  isGroup={true}
  isLogin={false}
  announcement={[
    {
      title: '🎉 新年特惠活動',
      article: '即日起至月底，住宿享 8 折優惠！',
      visible: true,
    },
    // ... 更多公告
  ]}
  announcementControls={{
    currentIndex: 0,
    onPrevious: () => console.log('上一則'),
    onNext: () => console.log('下一則'),
    autoPlay: true,
    autoPlayInterval: 5000,
  }}
  hotelHostSelector={{
    currentHotelHost: '請選擇館別',
    hotelHosts: [
      { code: 'taipei', hotel: '台北館' },
      { code: 'taichung', hotel: '台中館' },
      { code: 'kaohsiung', hotel: '高雄館' },
      { code: 'hualien', hotel: '花蓮館' },
    ],
    onHotelHostChange: (hotel) => console.log('選擇館別:', hotel),
  }}
  languageSelector={{
    currentLanguage: '繁體中文',
    languages: [
      { code: 'zh-TW', label: '繁體中文' },
      { code: 'en', label: 'English' },
      { code: 'ja', label: '日本語' },
    ],
    onLanguageChange: (lang) => console.log('切換語系:', lang),
  }}
  currencySelector={{
    currentCurrency: 'TWD',
    currencies: [
      { code: 'TWD', label: '台幣', symbol: 'NT$' },
      { code: 'USD', label: '美元', symbol: '$' },
      { code: 'JPY', label: '日圓', symbol: '¥' },
    ],
    onCurrencyChange: (cur) => console.log('切換幣別:', cur),
  }}
/>
        `.trim()}}}};var _,J,Y;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    logo: "/header_LogoImage.jpg",
    brandName: "Lemon",
    isGroup: true,
    isLogin: false,
    announcement: commonAnnouncements,
    announcementControls: {
      currentIndex: 0,
      onPrevious: fn(),
      onNext: fn(),
      autoPlay: true,
      autoPlayInterval: 5000
    },
    navigationItems: commonNavigationItems,
    hotelHostSelector: hotelHostSelector,
    languageSelector,
    currencySelector,
    loading: {
      user: false,
      navigation: false,
      hotelHost: false,
      announcement: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: "集團首頁模式展示館別選擇功能，此模式下不顯示登入按鈕，主要用於讓使用者選擇要前往的飯店館別。"
      },
      source: {
        code: \`
import Header from '@lemon/material/Header';

<Header
  logo="/logo.png"
  brandName="Lemon Hotel Group"
  isGroup={true}
  isLogin={false}
  announcement={[
    {
      title: '🎉 新年特惠活動',
      article: '即日起至月底，住宿享 8 折優惠！',
      visible: true,
    },
    // ... 更多公告
  ]}
  announcementControls={{
    currentIndex: 0,
    onPrevious: () => console.log('上一則'),
    onNext: () => console.log('下一則'),
    autoPlay: true,
    autoPlayInterval: 5000,
  }}
  hotelHostSelector={{
    currentHotelHost: '請選擇館別',
    hotelHosts: [
      { code: 'taipei', hotel: '台北館' },
      { code: 'taichung', hotel: '台中館' },
      { code: 'kaohsiung', hotel: '高雄館' },
      { code: 'hualien', hotel: '花蓮館' },
    ],
    onHotelHostChange: (hotel) => console.log('選擇館別:', hotel),
  }}
  languageSelector={{
    currentLanguage: '繁體中文',
    languages: [
      { code: 'zh-TW', label: '繁體中文' },
      { code: 'en', label: 'English' },
      { code: 'ja', label: '日本語' },
    ],
    onLanguageChange: (lang) => console.log('切換語系:', lang),
  }}
  currencySelector={{
    currentCurrency: 'TWD',
    currencies: [
      { code: 'TWD', label: '台幣', symbol: 'NT$' },
      { code: 'USD', label: '美元', symbol: '$' },
      { code: 'JPY', label: '日圓', symbol: '¥' },
    ],
    onCurrencyChange: (cur) => console.log('切換幣別:', cur),
  }}
/>
        \`.trim()
      }
    }
  }
}`,...(Y=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};const fr=["GroupHomepage"];export{C as GroupHomepage,fr as __namedExportsOrder,vr as default};
