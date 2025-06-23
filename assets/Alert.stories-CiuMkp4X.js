import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as q,R as ft}from"./index-D4H_InIO.js";import{p as ht}from"./defaultPalette-Cd1iQw4V.js";import{b as yt}from"./index-Cn4560As.js";import{G as u}from"./iconBase-BNkU7DqG.js";import{a as _,g as G,s as p,c as D,b as J,m as K}from"./memoTheme-CdwOf2Zq.js";import{u as Q,c as S,n as F,m as T}from"./DefaultPropsProvider-BDoOoArL.js";import{T as Ct}from"./Typography-BTztMoTT.js";import{u as c}from"./useSlot-ButF_PD0.js";import{c as j}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as m}from"./createSvgIcon-Ds0YbM2w.js";import{I as M}from"./IconButton-c1QbSxbJ.js";import{P as At}from"./Paper-CvuXfPMT.js";import{B as d}from"./Button-BbGwFtcX.js";import{C as X}from"./Close-WM-Y_mFM.js";import"./index-DWJUMdO7.js";import"./useTheme-DcF0HAVz.js";import"./extendSxProp-D1SuGYEU.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-C8Vo-zy8.js";import"./CircularProgress-CrDQAyon.js";import"./useTheme-D3V-hEE6.js";function jt(t){return G("MuiAlert",t)}const R=_("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),St=m(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Mt=m(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Bt=m(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),zt=m(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),It=m(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),kt=t=>{const{variant:o,color:n,severity:r,classes:s}=t,a={root:["root",`color${S(n||r)}`,`${o}${S(n||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return J(a,jt,s)},Lt=p(At,{name:"MuiAlert",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`${n.variant}${S(n.color||n.severity)}`]]}})(K(({theme:t})=>{const o=t.palette.mode==="light"?F:T,n=t.palette.mode==="light"?T:F;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(j(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${r}Color`]:o(t.palette[r].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${r}StandardBg`]:n(t.palette[r].light,.9),[`& .${R.icon}`]:t.vars?{color:t.vars.palette.Alert[`${r}IconColor`]}:{color:t.palette[r].main}}})),...Object.entries(t.palette).filter(j(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${r}Color`]:o(t.palette[r].light,.6),border:`1px solid ${(t.vars||t).palette[r].light}`,[`& .${R.icon}`]:t.vars?{color:t.vars.palette.Alert[`${r}IconColor`]}:{color:t.palette[r].main}}})),...Object.entries(t.palette).filter(j(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${r}FilledColor`],backgroundColor:t.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[r].dark:t.palette[r].main,color:t.palette.getContrastText(t.palette[r].main)}}}))]}})),bt=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ft=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Tt=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),w={success:e.jsx(St,{fontSize:"inherit"}),warning:e.jsx(Mt,{fontSize:"inherit"}),error:e.jsx(Bt,{fontSize:"inherit"}),info:e.jsx(zt,{fontSize:"inherit"})},Rt=q.forwardRef(function(o,n){const r=Q({props:o,name:"MuiAlert"}),{action:s,children:a,className:v,closeText:x="Close",color:B,components:z={},componentsProps:tt={},icon:I,iconMapping:et=w,onClose:k,role:rt="alert",severity:f="success",slotProps:ot={},slots:nt={},variant:st="standard",...at}=r,l={...r,color:B,severity:f,variant:st,colorSeverity:B||f},h=kt(l),i={slots:{closeButton:z.CloseButton,closeIcon:z.CloseIcon,...nt},slotProps:{...tt,...ot}},[lt,it]=c("root",{ref:n,shouldForwardComponentProp:!0,className:D(h.root,v),elementType:Lt,externalForwardedProps:{...i,...at},ownerState:l,additionalProps:{role:rt,elevation:0}}),[ct,dt]=c("icon",{className:h.icon,elementType:bt,externalForwardedProps:i,ownerState:l}),[pt,ut]=c("message",{className:h.message,elementType:Ft,externalForwardedProps:i,ownerState:l}),[L,b]=c("action",{className:h.action,elementType:Tt,externalForwardedProps:i,ownerState:l}),[mt,gt]=c("closeButton",{elementType:M,externalForwardedProps:i,ownerState:l}),[vt,xt]=c("closeIcon",{elementType:It,externalForwardedProps:i,ownerState:l});return e.jsxs(lt,{...it,children:[I!==!1?e.jsx(ct,{...dt,children:I||et[f]||w[f]}):null,e.jsx(pt,{...ut,children:a}),s!=null?e.jsx(L,{...b,children:s}):null,s==null&&k?e.jsx(L,{...b,children:e.jsx(mt,{size:"small","aria-label":x,title:x,color:"inherit",onClick:k,...gt,children:e.jsx(vt,{fontSize:"small",...xt})})}):null]})});function wt(t){return G("MuiAlertTitle",t)}_("MuiAlertTitle",["root"]);const Pt=t=>{const{classes:o}=t;return J({root:["root"]},wt,o)},Ot=p(Ct,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,o)=>o.root})(K(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2}))),$t=q.forwardRef(function(o,n){const r=Q({props:o,name:"MuiAlertTitle"}),{className:s,...a}=r,v=r,x=Pt(v);return e.jsx(Ot,{gutterBottom:!0,component:"div",ownerState:v,ref:n,className:D(x.root,s),...a})});function Et(t){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(t)}function Vt(t){return u({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"},child:[]}]})(t)}function Wt(t){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]}]})(t)}function P(t){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"},child:[]},{tag:"path",attr:{d:"m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"},child:[]}]})(t)}const Ht=(t,o="primary")=>{var s;const n=ht[o].alertColor,r=((s=t==null?void 0:t.palette)==null?void 0:s[o].alertColor)??n;return{bgColor:r??n,iconColor:r??n}},Nt={success:e.jsx(yt,{}),info:e.jsx(Vt,{}),warning:e.jsx(Et,{}),error:e.jsx(Wt,{}),gray:e.jsx(P,{}),dark:e.jsx(P,{})},Ut=p(Rt)(({"data-severity":t="success",theme:o,"data-color":n="primary"})=>{const r=Ht(o,n);return{fontSize:"16px",backgroundColor:r.bgColor[t][0],color:t=="dark"?"#FFFFFF":"#373737","& .MuiAlert-icon":{color:r.bgColor[t][1]},"& .MuiAlert-message":{color:t=="dark"?"#FFFFFF":"#373737"}}}),g=({severity:t="success",color:o="primary",iconMapping:n,icon:r,alertTitle:s,...a})=>e.jsxs(Ut,{"data-severity":t,"data-color":o,icon:r??Nt[t],...a,children:[s&&e.jsx($t,{sx:{color:t=="dark"?"#FFFFFF":"#1E1E1E"},children:s}),a.children]});g.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:`| "error"
| "success"
| "info"
| "warning"
| "gray"
| "dark"`,elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"success"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"surface" | "primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"surface"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},alertTitle:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};function Y(t){return u({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"},child:[]}]})(t)}const ue={title:"components/Alert/Alert",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}}},args:{}},y={render:t=>e.jsxs(g,{onClose:()=>{},...t,sx:{mb:2},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(d,{variant:"text",children:"Close"}),e.jsx(d,{variant:"text",children:"Retry"})]})]}),args:{severity:"success",alertTitle:"Alert title here"}},C={render:t=>e.jsx(g,{icon:e.jsx(Y,{}),onClose:()=>{},action:e.jsxs("div",{children:[e.jsx(d,{variant:"text",sx:{height:"35px"},children:"Close"}),e.jsx(d,{sx:{height:"35px"},children:"Retry"}),e.jsx(M,{color:"inherit",size:"small",children:e.jsx(X,{fontSize:"inherit"})})]}),...t,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),args:{severity:"info"}},A={render:t=>{const[o,n]=ft.useState(!0);return e.jsxs("div",{children:[o&&e.jsx(g,{icon:e.jsx(Y,{}),action:e.jsxs("div",{children:[e.jsx(d,{variant:"text",sx:{height:"35px"},onClick:()=>{n(!1)},children:"Close"}),e.jsx(M,{color:"inherit",size:"small",onClick:()=>{n(!1)},children:e.jsx(X,{fontSize:"inherit"})})]}),...t,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}),!o&&e.jsx(d,{onClick:()=>{n(!0)},children:"re-open"})]})},args:{severity:"error"}};var O,$,E;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    return <Alert onClose={() => {}} {...args} sx={{
      mb: 2
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <Button variant="text">Close</Button>
          <Button variant="text">Retry</Button>
        </div>
      </Alert>;
  },
  args: {
    severity: "success",
    alertTitle: "Alert title here"
  }
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var V,W,H;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    return <Alert icon={<BsBox />} onClose={() => {}} action={<div>
            <Button variant="text" sx={{
        height: "35px"
      }}>
              Close
            </Button>
            <Button sx={{
        height: "35px"
      }}>Retry</Button>
            <IconButton color="inherit" size="small">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Alert>;
  },
  args: {
    severity: "info"
  }
}`,...(H=(W=C.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,U,Z;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(true);
    return <div>
        {open && <Alert icon={<BsBox />} action={<div>
                <Button variant="text" sx={{
          height: "35px"
        }} onClick={() => {
          setOpen(false);
        }}>
                  Close
                </Button>
                <IconButton color="inherit" size="small" onClick={() => {
          setOpen(false);
        }}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </div>} {...args}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Alert>}
        {!open && <Button onClick={() => {
        setOpen(true);
      }}>
            re-open
          </Button>}
      </div>;
  },
  args: {
    severity: "error"
  }
}`,...(Z=(U=A.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const me=["AlertFloating","AlertSticky","CloseableAlert"];export{y as AlertFloating,C as AlertSticky,A as CloseableAlert,me as __namedExportsOrder,ue as default};
