import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as p}from"./index-D4H_InIO.js";import{p as Se}from"./defaultPalette-fWaDn0-C.js";import{u as K}from"./useTheme-CfJJ7vPb.js";import{b as R,g as P,c as y,s as d,a as O,m as Z,r as De}from"./memoTheme-C83d1A0S.js";import{I as je}from"./IconButton-BTG6ddxK.js";import{X as Me}from"./X.esm-De9lqQTk.js";import{a as Te,d as Be,D as U}from"./DialogTitle-BwM33B7n.js";import{u as F,c as x}from"./DefaultPropsProvider-D4sChuSN.js";import{T as We}from"./Typography-D9Rxpb2u.js";import{D as Re}from"./DialogActions-CYsRj8AD.js";import{u as C}from"./useSlot-BWf5NxIe.js";import{P as G}from"./Paper-B8zVEXaw.js";import{F as Y,M as Pe,B as Oe}from"./Modal-DVo_Vf6F.js";import{u as Fe}from"./useId-CN9_kA9R.js";import{B as c}from"./Button-SgMA5SmR.js";import{W as Ae}from"./Warning.esm-9YsJlq-9.js";import{B}from"./Box-BuA1DgQs.js";import"./useTheme-Bh-_xkMb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CP1Oo1Bo.js";import"./TransitionGroupContext-DUOgHM_c.js";import"./useEnhancedEffect-BUbyLjya.js";import"./CircularProgress-Cn6m69C4.js";import"./IconBase.esm-BbKRF193.js";import"./index-zquPRXLs.js";import"./extendSxProp-BVuH4Y-a.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-LBlGjCQn.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./utils-bnsn1T2-.js";import"./Button-B10i2C5F.js";function $e(o){return P("MuiDialog",o)}const W=R("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Ne=d(Oe,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Le=o=>{const{classes:e,scroll:n,maxWidth:r,fullWidth:a,fullScreen:s}=o,i={root:["root"],container:["container",`scroll${x(n)}`],paper:["paper",`paperScroll${x(n)}`,`paperWidth${x(String(r))}`,a&&"paperFullWidth",s&&"paperFullScreen"]};return O(i,$e,e)},ze=d(Pe,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Ie=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.container,e[`scroll${x(n.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Ue=d(G,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.paper,e[`scrollPaper${x(n.scroll)}`],e[`paperWidth${x(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(Z(({theme:o})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(o.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${o.breakpoints.values[e]}${o.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Ye=p.forwardRef(function(e,n){const r=F({props:e,name:"MuiDialog"}),a=K(),s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":l,"aria-modal":g=!0,BackdropComponent:h,BackdropProps:S,children:b,className:J,disableEscapeKeyDown:A=!1,fullScreen:Q=!1,fullWidth:ee=!1,maxWidth:oe="sm",onBackdropClick:$,onClick:N,onClose:D,open:L,PaperComponent:te=G,PaperProps:z={},scroll:ne="paper",slots:re={},slotProps:ae={},TransitionComponent:se=Y,transitionDuration:I=s,TransitionProps:le,...ie}=r,u={...r,disableEscapeKeyDown:A,fullScreen:Q,fullWidth:ee,maxWidth:oe,scroll:ne},j=Le(u),M=p.useRef(),ce=m=>{M.current=m.target===m.currentTarget},pe=m=>{N&&N(m),M.current&&(M.current=null,$&&$(m),D&&D(m,"backdropClick"))},T=Fe(l),de=p.useMemo(()=>({titleId:T}),[T]),ue={transition:se,...re},me={transition:le,paper:z,backdrop:S,...ae},f={slots:ue,slotProps:me},[xe,ge]=C("root",{elementType:ze,shouldForwardComponentProp:!0,externalForwardedProps:f,ownerState:u,className:y(j.root,J),ref:n}),[he,fe]=C("backdrop",{elementType:Ne,shouldForwardComponentProp:!0,externalForwardedProps:f,ownerState:u}),[Ce,ye]=C("paper",{elementType:Ue,shouldForwardComponentProp:!0,externalForwardedProps:f,ownerState:u,className:y(j.paper,z.className)}),[be,ve]=C("container",{elementType:Ie,externalForwardedProps:f,ownerState:u,className:y(j.container)}),[ke,we]=C("transition",{elementType:Y,externalForwardedProps:f,ownerState:u,additionalProps:{appear:!0,in:L,timeout:I,role:"presentation"}});return t.jsx(xe,{closeAfterTransition:!0,slots:{backdrop:he},slotProps:{backdrop:{transitionDuration:I,as:h,...fe}},disableEscapeKeyDown:A,onClose:D,open:L,onClick:pe,...ge,...ie,children:t.jsx(ke,{...we,children:t.jsx(be,{onMouseDown:ce,...ve,children:t.jsx(Ce,{as:te,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":T,"aria-modal":g,...ye,children:t.jsx(Te.Provider,{value:de,children:b})})})})})});function qe(o){return P("MuiDialogContent",o)}R("MuiDialogContent",["root","dividers"]);const Ee=o=>{const{classes:e,dividers:n}=o;return O({root:["root",n&&"dividers"]},qe,e)},Xe=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,n.dividers&&e.dividers]}})(Z(({theme:o})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${Be.root} + &`]:{paddingTop:0}}}]}))),_e=p.forwardRef(function(e,n){const r=F({props:e,name:"MuiDialogContent"}),{className:a,dividers:s=!1,...i}=r,l={...r,dividers:s},g=Ee(l);return t.jsx(Xe,{className:y(g.root,a),ownerState:l,ref:n,...i})});function Ve(o){return P("MuiDialogContentText",o)}R("MuiDialogContentText",["root"]);const He=o=>{const{classes:e}=o,r=O({root:["root"]},Ve,e);return{...e,...r}},Ke=d(We,{shouldForwardProp:o=>De(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),Ze=p.forwardRef(function(e,n){const r=F({props:e,name:"MuiDialogContentText"}),{children:a,className:s,...i}=r,l=He(i);return t.jsx(Ke,{component:"p",variant:"body1",color:"textSecondary",ref:n,ownerState:i,className:y(l.root,s),...r,classes:l})}),Ge=(o,e="primary")=>{var a;const n=Se[e];return{fontColor:(((a=o==null?void 0:o.palette)==null?void 0:a[e])??n).menuFont??n.menuFont}},Je={desktop:{small:"440px",medium:"600px",large:"800px",extraLarge:"1200px"},tablet:{small:"320px",medium:"458px",large:"640px",extraLarge:"640px"},mobile:"320px"},Qe=d(Ye)(({size:o="medium",deviceType:e="desktop"})=>{const n=Je[e];return{"& .MuiDialog-paper":{borderRadius:12,width:typeof n=="string"?n:n[o],padding:"24px 36px"}}}),w=({icon:o,title:e,content:n,actions:r,size:a,align:s="center",deviceType:i="desktop",...l})=>{const g=K(),h=Ge(g);return t.jsxs(Qe,{size:a,deviceType:i,...l,maxWidth:"lg",children:[t.jsx(je,{"aria-label":"close",onClick:S=>{var b;return(b=l.onClose)==null?void 0:b.call(l,S,"escapeKeyDown")},sx:{position:"absolute",right:16,top:16},children:t.jsx(Me,{})}),o&&t.jsx(U,{color:h.fontColor,sx:{fontSize:"48px",height:"80px",p:0,textAlign:s},children:o}),e&&t.jsx(U,{sx:{p:0,textAlign:s,fontSize:"20px",fontWeight:600},color:h.fontColor,children:e}),n&&t.jsx(_e,{sx:{p:0},children:t.jsx(Ze,{color:h.fontColor,sx:{textAlign:s,fontSize:"14px",fontWeight:400},children:n})}),r&&t.jsx(Re,{sx:{justifyContent:s==="center"?"center":"flex-end",p:0},children:r})]})};w.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{deviceType:{required:!1,tsType:{name:"union",raw:'"desktop" | "tablet" | "mobile"',elements:[{name:"literal",value:'"desktop"'},{name:"literal",value:'"tablet"'},{name:"literal",value:'"mobile"'}]},description:"依設備控制Modal的尺寸",defaultValue:{value:'"desktop"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "extraLarge"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:"Modal的Title"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的Icon"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置",defaultValue:{value:'"center"',computed:!1}}},composes:["Omit"]};const $o={title:"components/Modules/Modal/Modal",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},v={render:o=>{const[e,n]=p.useState(!1),r=()=>{n(!0)},a=()=>{n(!1)},s=t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:a,variant:"outlined",children:"Disagree"}),t.jsx(c,{onClick:a,children:"Agree"})]});return t.jsxs("div",{children:[t.jsx(c,{variant:"outlined",onClick:r,children:"Open alert dialog"}),t.jsx(w,{...o,open:e,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{icon:t.jsx(Ae,{}),size:"large",title:"This is a modal title",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"1. You can replace this with your ❖ content component"}),t.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},k={render:o=>{const[e,n]=p.useState(!1),r=()=>{n(!0)},a=()=>{n(!1)},s=t.jsxs(B,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[t.jsx(B,{sx:{display:"flex",gap:1},children:t.jsx(c,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),t.jsxs(B,{sx:{display:"flex",gap:1},children:[t.jsx(c,{onClick:a,variant:"outlined",children:"Disagree"}),t.jsx(c,{onClick:a,children:"Agree"})]})]});return t.jsxs("div",{children:[t.jsx(c,{variant:"outlined",onClick:r,children:"Open alert dialog"}),t.jsx(w,{...o,open:e,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{size:"large",title:"This is a modal title",align:"start",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"1. You can replace this with your ❖ content component"}),t.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var q,E,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <>\r
        <Button onClick={handleClose} variant="outlined">\r
          Disagree\r
        </Button>\r
        <Button onClick={handleClose}>Agree</Button>\r
      </>;
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>\r
      </div>;
  },
  args: {
    icon: <Warning />,
    size: "large",
    title: "This is a modal title",
    content: <>\r
        <p>1. You can replace this with your ❖ content component</p>\r
        <p>\r
          2. Or you can detach an instance of this modal and replace this\r
          content box with your own content\r
        </p>\r
      </>
  }
}`,...(X=(E=v.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var _,V,H;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}>\r
        {/* 左邊的按鈕 */}\r
        <Box sx={{
        display: "flex",
        gap: 1
      }}>\r
          <Button variant="outlined" onClick={() => alert("Learn more")}>\r
            Learn more\r
          </Button>\r
        </Box>\r
\r
        {/* 右邊的按鈕 */}\r
        <Box sx={{
        display: "flex",
        gap: 1
      }}>\r
          <Button onClick={handleClose} variant="outlined">\r
            Disagree\r
          </Button>\r
          <Button onClick={handleClose}>Agree</Button>\r
        </Box>\r
      </Box>;
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>\r
      </div>;
  },
  args: {
    size: "large",
    title: "This is a modal title",
    align: "start",
    content: <>\r
        <p>1. You can replace this with your ❖ content component</p>\r
        <p>\r
          2. Or you can detach an instance of this modal and replace this\r
          content box with your own content\r
        </p>\r
      </>
  }
}`,...(H=(V=k.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const No=["WithIcon","WithLink"];export{v as WithIcon,k as WithLink,No as __namedExportsOrder,$o as default};
