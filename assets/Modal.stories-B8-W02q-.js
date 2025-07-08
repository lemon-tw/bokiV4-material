import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as c}from"./index-D4H_InIO.js";import{p as Se}from"./defaultPalette-CDIRQpAz.js";import{u as K}from"./useTheme-DpjMkLyW.js";import{g as w,a as S,c as x,s as p,b as D,m as Z,r as De}from"./memoTheme-DkEl0Jev.js";import{I as je}from"./IconButton-D_P5iQm9.js";import{X as Me}from"./X.esm-De9lqQTk.js";import{a as Te,d as Be,D as U}from"./DialogTitle-C8rOzEkn.js";import{u as j,c as h}from"./DefaultPropsProvider-DqVT3Pki.js";import{T as Re}from"./Typography-DBLLtZzJ.js";import{u as C}from"./useSlot-D9yE0s1_.js";import{P as G}from"./Paper-Cc5LuG26.js";import{F as Y,M as We,B as Pe}from"./Modal-BpHdIFDV.js";import{u as Ae}from"./useId-CN9_kA9R.js";import{B as u}from"./Button-BOEVMV6G.js";import{W as Oe}from"./Warning.esm-9YsJlq-9.js";import{B as A}from"./Box-BMmTB2V6.js";import"./useTheme-Dm3NhWHt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DunFoCRt.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./CircularProgress-BzOVd61n.js";import"./IconBase.esm-BbKRF193.js";import"./index-D641xpmC.js";import"./extendSxProp-Cr0utasV.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DVNWasIp.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./utils-DUkByWFw.js";function Fe(e){return S("MuiDialog",e)}const O=w("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Ne=p(Pe,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),$e=e=>{const{classes:o,scroll:t,maxWidth:a,fullWidth:r,fullScreen:s}=e,l={root:["root"],container:["container",`scroll${h(t)}`],paper:["paper",`paperScroll${h(t)}`,`paperWidth${h(String(a))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return D(l,Fe,o)},Le=p(We,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),Ie=p("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.container,o[`scroll${h(t.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),ze=p(G,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.paper,o[`scrollPaper${h(t.scroll)}`],o[`paperWidth${h(String(t.maxWidth))}`],t.fullWidth&&o.paperFullWidth,t.fullScreen&&o.paperFullScreen]}})(Z(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${e.breakpoints.values[o]}${e.breakpoints.unit}`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${O.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Ue=c.forwardRef(function(o,t){const a=j({props:o,name:"MuiDialog"}),r=K(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":i,"aria-modal":d=!0,BackdropComponent:f,BackdropProps:T,children:b,className:J,disableEscapeKeyDown:F=!1,fullScreen:Q=!1,fullWidth:ee=!1,maxWidth:oe="sm",onBackdropClick:N,onClick:$,onClose:B,open:L,PaperComponent:te=G,PaperProps:I={},scroll:ne="paper",slots:ae={},slotProps:re={},TransitionComponent:se=Y,transitionDuration:z=s,TransitionProps:ie,...le}=a,m={...a,disableEscapeKeyDown:F,fullScreen:Q,fullWidth:ee,maxWidth:oe,scroll:ne},R=$e(m),W=c.useRef(),ce=g=>{W.current=g.target===g.currentTarget},pe=g=>{$&&$(g),W.current&&(W.current=null,N&&N(g),B&&B(g,"backdropClick"))},P=Ae(i),de=c.useMemo(()=>({titleId:P}),[P]),ue={transition:se,...ae},me={transition:ie,paper:I,backdrop:T,...re},y={slots:ue,slotProps:me},[ge,xe]=C("root",{elementType:Le,shouldForwardComponentProp:!0,externalForwardedProps:y,ownerState:m,className:x(R.root,J),ref:t}),[he,fe]=C("backdrop",{elementType:Ne,shouldForwardComponentProp:!0,externalForwardedProps:y,ownerState:m}),[ye,Ce]=C("paper",{elementType:ze,shouldForwardComponentProp:!0,externalForwardedProps:y,ownerState:m,className:x(R.paper,I.className)}),[be,ve]=C("container",{elementType:Ie,externalForwardedProps:y,ownerState:m,className:x(R.container)}),[ke,we]=C("transition",{elementType:Y,externalForwardedProps:y,ownerState:m,additionalProps:{appear:!0,in:L,timeout:z,role:"presentation"}});return n.jsx(ge,{closeAfterTransition:!0,slots:{backdrop:he},slotProps:{backdrop:{transitionDuration:z,as:f,...fe}},disableEscapeKeyDown:F,onClose:B,open:L,onClick:pe,...xe,...le,children:n.jsx(ke,{...we,children:n.jsx(be,{onMouseDown:ce,...ve,children:n.jsx(ye,{as:te,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":P,"aria-modal":d,...Ce,children:n.jsx(Te.Provider,{value:de,children:b})})})})})});function Ye(e){return S("MuiDialogActions",e)}w("MuiDialogActions",["root","spacing"]);const qe=e=>{const{classes:o,disableSpacing:t}=e;return D({root:["root",!t&&"spacing"]},Ye,o)},Ee=p("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:e})=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Xe=c.forwardRef(function(o,t){const a=j({props:o,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1,...l}=a,i={...a,disableSpacing:s},d=qe(i);return n.jsx(Ee,{className:x(d.root,r),ownerState:i,ref:t,...l})});function _e(e){return S("MuiDialogContent",e)}w("MuiDialogContent",["root","dividers"]);const Ve=e=>{const{classes:o,dividers:t}=e;return D({root:["root",t&&"dividers"]},_e,o)},He=p("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})(Z(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${Be.root} + &`]:{paddingTop:0}}}]}))),Ke=c.forwardRef(function(o,t){const a=j({props:o,name:"MuiDialogContent"}),{className:r,dividers:s=!1,...l}=a,i={...a,dividers:s},d=Ve(i);return n.jsx(He,{className:x(d.root,r),ownerState:i,ref:t,...l})});function Ze(e){return S("MuiDialogContentText",e)}w("MuiDialogContentText",["root"]);const Ge=e=>{const{classes:o}=e,a=D({root:["root"]},Ze,o);return{...o,...a}},Je=p(Re,{shouldForwardProp:e=>De(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,o)=>o.root})({}),Qe=c.forwardRef(function(o,t){const a=j({props:o,name:"MuiDialogContentText"}),{children:r,className:s,...l}=a,i=Ge(l);return n.jsx(Je,{component:"p",variant:"body1",color:"textSecondary",ref:t,ownerState:l,className:x(i.root,s),...a,classes:i})}),eo=(e,o="primary")=>{var r;const t=Se[o];return{fontColor:(((r=e==null?void 0:e.palette)==null?void 0:r[o])??t).menuFont??t.menuFont}},oo={desktop:{small:"440px",medium:"600px",large:"800px",extraLarge:"1200px"},tablet:{small:"320px",medium:"458px",large:"640px",extraLarge:"640px"},mobile:"320px"},to=p(Ue)(({size:e="medium",deviceType:o="desktop"})=>{const t=oo[o];return{"& .MuiDialog-paper":{borderRadius:12,width:typeof t=="string"?t:t[e],padding:"24px 36px"}}}),M=({icon:e,title:o,content:t,actions:a,size:r,align:s="center",deviceType:l="desktop",...i})=>{const d=K(),f=eo(d);return n.jsxs(to,{size:r,deviceType:l,...i,maxWidth:"lg",children:[n.jsx(je,{"aria-label":"close",onClick:T=>{var b;return(b=i.onClose)==null?void 0:b.call(i,T,"escapeKeyDown")},sx:{position:"absolute",right:16,top:16},children:n.jsx(Me,{})}),e&&n.jsx(U,{color:f.fontColor,sx:{fontSize:"48px",height:"80px",p:0,textAlign:s},children:e}),o&&n.jsx(U,{sx:{p:0,textAlign:s,fontSize:"20px",fontWeight:600},color:f.fontColor,children:o}),t&&n.jsx(Ke,{sx:{p:0},children:n.jsx(Qe,{color:f.fontColor,sx:{textAlign:s,fontSize:"14px",fontWeight:400},children:t})}),a&&n.jsx(Xe,{sx:{justifyContent:s==="center"?"center":"flex-end",p:0},children:a})]})};M.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{deviceType:{required:!1,tsType:{name:"union",raw:'"desktop" | "tablet" | "mobile"',elements:[{name:"literal",value:'"desktop"'},{name:"literal",value:'"tablet"'},{name:"literal",value:'"mobile"'}]},description:"依設備控制Modal的尺寸",defaultValue:{value:'"desktop"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "extraLarge"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:"Modal的Title"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的Icon"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置",defaultValue:{value:'"center"',computed:!1}}},composes:["Omit"]};const No={title:"components/Modules/Modal/Modal",component:M,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},v={render:e=>{const[o,t]=c.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)},s=n.jsxs(n.Fragment,{children:[n.jsx(u,{onClick:r,variant:"outlined",children:"Disagree"}),n.jsx(u,{onClick:r,children:"Agree"})]});return n.jsxs("div",{children:[n.jsx(u,{variant:"outlined",onClick:a,children:"Open alert dialog"}),n.jsx(M,{...e,open:o,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{icon:n.jsx(Oe,{}),size:"large",title:"This is a modal title",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},k={render:e=>{const[o,t]=c.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)},s=n.jsxs(A,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n.jsx(A,{sx:{display:"flex",gap:1},children:n.jsx(u,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),n.jsxs(A,{sx:{display:"flex",gap:1},children:[n.jsx(u,{onClick:r,variant:"outlined",children:"Disagree"}),n.jsx(u,{onClick:r,children:"Agree"})]})]});return n.jsxs("div",{children:[n.jsx(u,{variant:"outlined",onClick:a,children:"Open alert dialog"}),n.jsx(M,{...e,open:o,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{size:"large",title:"This is a modal title",align:"start",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var q,E,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(V=k.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const $o=["WithIcon","WithLink"];export{v as WithIcon,k as WithLink,$o as __namedExportsOrder,No as default};
