import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as q,R as he}from"./index-D4H_InIO.js";import{p as fe}from"./defaultPalette-zaxAseiV.js";import{b as ye}from"./index-Cn4560As.js";import{G as u}from"./iconBase-BNkU7DqG.js";import{a as _,g as G,s as p,c as D,b as J,m as K}from"./memoTheme-Dg8ftLGV.js";import{u as Q,c as S,p as F,o as T}from"./DefaultPropsProvider-JiJShTPV.js";import{T as Ce}from"./Typography-BkLxxeGW.js";import{u as c}from"./useSlot-DUJno6SE.js";import{c as j}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as m}from"./createSvgIcon-5TDCF_r7.js";import{I as M}from"./IconButton-BaukjZ9c.js";import{P as Ae}from"./Paper-DzSf8maI.js";import{B as d}from"./Button-C7gFOMVp.js";import{C as X}from"./Close-F3cDGBor.js";import"./index-BINuD49I.js";import"./useTheme-DmlEiKNM.js";import"./extendSxProp-CPCMrNKz.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-C4UZesTi.js";import"./CircularProgress-CgdZw-31.js";import"./useTheme-CytxYZgs.js";function je(e){return G("MuiAlert",e)}const R=_("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Se=m(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Me=m(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Be=m(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ze=m(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ie=m(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ke=e=>{const{variant:o,color:n,severity:r,classes:s}=e,l={root:["root",`color${S(n||r)}`,`${o}${S(n||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return J(l,je,s)},Le=p(Ae,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${S(n.color||n.severity)}`]]}})(K(({theme:e})=>{const o=e.palette.mode==="light"?F:T,n=e.palette.mode==="light"?T:F;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(j(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:n(e.palette[r].light,.9),[`& .${R.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(j(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${R.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(j(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)}}}))]}})),be=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Fe=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Te=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),w={success:t.jsx(Se,{fontSize:"inherit"}),warning:t.jsx(Me,{fontSize:"inherit"}),error:t.jsx(Be,{fontSize:"inherit"}),info:t.jsx(ze,{fontSize:"inherit"})},Re=q.forwardRef(function(o,n){const r=Q({props:o,name:"MuiAlert"}),{action:s,children:l,className:v,closeText:x="Close",color:B,components:z={},componentsProps:ee={},icon:I,iconMapping:te=w,onClose:k,role:re="alert",severity:h="success",slotProps:oe={},slots:ne={},variant:se="standard",...le}=r,a={...r,color:B,severity:h,variant:se,colorSeverity:B||h},f=ke(a),i={slots:{closeButton:z.CloseButton,closeIcon:z.CloseIcon,...ne},slotProps:{...ee,...oe}},[ae,ie]=c("root",{ref:n,shouldForwardComponentProp:!0,className:D(f.root,v),elementType:Le,externalForwardedProps:{...i,...le},ownerState:a,additionalProps:{role:re,elevation:0}}),[ce,de]=c("icon",{className:f.icon,elementType:be,externalForwardedProps:i,ownerState:a}),[pe,ue]=c("message",{className:f.message,elementType:Fe,externalForwardedProps:i,ownerState:a}),[L,b]=c("action",{className:f.action,elementType:Te,externalForwardedProps:i,ownerState:a}),[me,ge]=c("closeButton",{elementType:M,externalForwardedProps:i,ownerState:a}),[ve,xe]=c("closeIcon",{elementType:Ie,externalForwardedProps:i,ownerState:a});return t.jsxs(ae,{...ie,children:[I!==!1?t.jsx(ce,{...de,children:I||te[h]||w[h]}):null,t.jsx(pe,{...ue,children:l}),s!=null?t.jsx(L,{...b,children:s}):null,s==null&&k?t.jsx(L,{...b,children:t.jsx(me,{size:"small","aria-label":x,title:x,color:"inherit",onClick:k,...ge,children:t.jsx(ve,{fontSize:"small",...xe})})}):null]})});function we(e){return G("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const Pe=e=>{const{classes:o}=e;return J({root:["root"]},we,o)},Oe=p(Ce,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,o)=>o.root})(K(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2}))),$e=q.forwardRef(function(o,n){const r=Q({props:o,name:"MuiAlertTitle"}),{className:s,...l}=r,v=r,x=Pe(v);return t.jsx(Oe,{gutterBottom:!0,component:"div",ownerState:v,ref:n,className:D(x.root,s),...l})});function Ee(e){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(e)}function Ve(e){return u({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"},child:[]}]})(e)}function We(e){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]}]})(e)}function P(e){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"},child:[]},{tag:"path",attr:{d:"m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"},child:[]}]})(e)}const He=(e,o="primary")=>{var s;const n=fe[o].alertColor,r=((s=e==null?void 0:e.palette)==null?void 0:s[o].alertColor)??n;return{bgColor:r??n,iconColor:r??n}},Ne={success:t.jsx(ye,{}),info:t.jsx(Ve,{}),warning:t.jsx(Ee,{}),error:t.jsx(We,{}),gray:t.jsx(P,{}),dark:t.jsx(P,{})},Ue=p(Re)(({"data-severity":e="success",theme:o,"data-color":n="primary"})=>{const r=He(o,n);return{fontSize:"16px",backgroundColor:r.bgColor[e][0],color:e=="dark"?"#FFFFFF":"#373737","& .MuiAlert-icon":{color:r.bgColor[e][1]},"& .MuiAlert-message":{color:e=="dark"?"#FFFFFF":"#373737"}}}),g=({severity:e="success",color:o="primary",iconMapping:n,icon:r,alertTitle:s,...l})=>t.jsxs(Ue,{"data-severity":e,"data-color":o,icon:r??Ne[e],...l,children:[s&&t.jsx($e,{sx:{color:e=="dark"?"#FFFFFF":"#1E1E1E"},children:s}),l.children]});g.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:`| "error"
| "success"
| "info"
| "warning"
| "gray"
| "dark"`,elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"success"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"surface" | "primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"surface"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},alertTitle:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};function Y(e){return u({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"},child:[]}]})(e)}const ut={title:"components/Alert/Alert",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{table:{disable:!0}}},args:{}},y={render:e=>t.jsxs(g,{onClose:()=>{},...e,sx:{mb:2},children:[e.children,t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[t.jsx(d,{variant:"text",children:"Close"}),t.jsx(d,{variant:"text",children:"Retry"})]})]}),args:{severity:"success",alertTitle:"Alert title here",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}},C={render:e=>t.jsx(g,{icon:t.jsx(Y,{}),onClose:()=>{},action:t.jsxs("div",{children:[t.jsx(d,{variant:"text",sx:{height:"35px"},children:"Close"}),t.jsx(d,{sx:{height:"35px"},children:"Retry"}),t.jsx(M,{color:"inherit",size:"small",children:t.jsx(X,{fontSize:"inherit"})})]}),...e,children:e.children}),args:{severity:"info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},A={render:e=>{const[o,n]=he.useState(!0);return t.jsxs("div",{children:[o&&t.jsx(g,{icon:t.jsx(Y,{}),action:t.jsxs("div",{children:[t.jsx(d,{variant:"text",sx:{height:"35px"},onClick:()=>{n(!1)},children:"Close"}),t.jsx(M,{color:"inherit",size:"small",onClick:()=>{n(!1)},children:t.jsx(X,{fontSize:"inherit"})})]}),...e,children:e.children}),!o&&t.jsx(d,{onClick:()=>{n(!0)},children:"re-open"})]})},args:{severity:"error",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}};var O,$,E;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    return <Alert onClose={() => {}} {...args} sx={{
      mb: 2
    }}>
        {args.children}
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
    alertTitle: "Alert title here",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
        {args.children}
      </Alert>;
  },
  args: {
    severity: "info",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
            {args.children}
          </Alert>}
        {!open && <Button onClick={() => {
        setOpen(true);
      }}>
            re-open
          </Button>}
      </div>;
  },
  args: {
    severity: "error",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
}`,...(Z=(U=A.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const mt=["AlertFloating","AlertSticky","CloseableAlert"];export{y as AlertFloating,C as AlertSticky,A as CloseableAlert,mt as __namedExportsOrder,ut as default};
