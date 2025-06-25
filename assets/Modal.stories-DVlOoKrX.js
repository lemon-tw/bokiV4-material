import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as c}from"./index-D4H_InIO.js";import{p as Me}from"./defaultPalette-zaxAseiV.js";import{C as Te}from"./Close-F3cDGBor.js";import{u as H}from"./useTheme-D4ymiu7F.js";import{a as b,g as v,c as g,s as d,b as k,m as K,r as je}from"./memoTheme-Dg8ftLGV.js";import{I as Re}from"./IconButton-BaukjZ9c.js";import{u as w,c as f}from"./DefaultPropsProvider-JiJShTPV.js";import{T as Z}from"./Typography-BkLxxeGW.js";import{u as y}from"./useSlot-DUJno6SE.js";import{P as J}from"./Paper-DKoAgtLD.js";import{F as z,M as Be,B as Pe}from"./Modal-CI0hK-tz.js";import{u as We}from"./useId-CN9_kA9R.js";import{B as m}from"./Button-C7gFOMVp.js";import{b as Ae}from"./index-CcC4OUJZ.js";import{B as A}from"./Box-IN04qEEf.js";import"./createSvgIcon-5TDCF_r7.js";import"./useTheme-DmlEiKNM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C4UZesTi.js";import"./CircularProgress-CgdZw-31.js";import"./index-BINuD49I.js";import"./extendSxProp-CPCMrNKz.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DB6SIIFk.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./iconBase-BNkU7DqG.js";function Oe(e){return v("MuiDialog",e)}const O=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Q=c.createContext({}),Ne=d(Pe,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),$e=e=>{const{classes:o,scroll:t,maxWidth:a,fullWidth:r,fullScreen:s}=e,i={root:["root"],container:["container",`scroll${f(t)}`],paper:["paper",`paperScroll${f(t)}`,`paperWidth${f(String(a))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return k(i,Oe,o)},Fe=d(Be,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),Le=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.container,o[`scroll${f(t.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Ie=d(J,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.paper,o[`scrollPaper${f(t.scroll)}`],o[`paperWidth${f(String(t.maxWidth))}`],t.fullWidth&&o.paperFullWidth,t.fullScreen&&o.paperFullScreen]}})(K(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${e.breakpoints.values[o]}${e.breakpoints.unit}`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${O.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Ue=c.forwardRef(function(o,t){const a=w({props:o,name:"MuiDialog"}),r=H(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":l,"aria-modal":p=!0,BackdropComponent:u,BackdropProps:j,children:S,className:ee,disableEscapeKeyDown:N=!1,fullScreen:oe=!1,fullWidth:te=!1,maxWidth:ne="sm",onBackdropClick:$,onClick:F,onClose:R,open:L,PaperComponent:ae=J,PaperProps:I={},scroll:re="paper",slots:se={},slotProps:le={},TransitionComponent:ie=z,transitionDuration:U=s,TransitionProps:ce,...pe}=a,x={...a,disableEscapeKeyDown:N,fullScreen:oe,fullWidth:te,maxWidth:ne,scroll:re},B=$e(x),P=c.useRef(),de=h=>{P.current=h.target===h.currentTarget},ue=h=>{F&&F(h),P.current&&(P.current=null,$&&$(h),R&&R(h,"backdropClick"))},W=We(l),me=c.useMemo(()=>({titleId:W}),[W]),ge={transition:ie,...se},xe={transition:ce,paper:I,backdrop:j,...le},C={slots:ge,slotProps:xe},[he,fe]=y("root",{elementType:Fe,shouldForwardComponentProp:!0,externalForwardedProps:C,ownerState:x,className:g(B.root,ee),ref:t}),[Ce,ye]=y("backdrop",{elementType:Ne,shouldForwardComponentProp:!0,externalForwardedProps:C,ownerState:x}),[be,ve]=y("paper",{elementType:Ie,shouldForwardComponentProp:!0,externalForwardedProps:C,ownerState:x,className:g(B.paper,I.className)}),[ke,we]=y("container",{elementType:Le,externalForwardedProps:C,ownerState:x,className:g(B.container)}),[Se,De]=y("transition",{elementType:z,externalForwardedProps:C,ownerState:x,additionalProps:{appear:!0,in:L,timeout:U,role:"presentation"}});return n.jsx(he,{closeAfterTransition:!0,slots:{backdrop:Ce},slotProps:{backdrop:{transitionDuration:U,as:u,...ye}},disableEscapeKeyDown:N,onClose:R,open:L,onClick:ue,...fe,...pe,children:n.jsx(Se,{...De,children:n.jsx(ke,{onMouseDown:de,...we,children:n.jsx(be,{as:ae,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":W,"aria-modal":p,...ve,children:n.jsx(Q.Provider,{value:me,children:S})})})})})});function ze(e){return v("MuiDialogActions",e)}b("MuiDialogActions",["root","spacing"]);const Ye=e=>{const{classes:o,disableSpacing:t}=e;return k({root:["root",!t&&"spacing"]},ze,o)},qe=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:e})=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Ee=c.forwardRef(function(o,t){const a=w({props:o,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1,...i}=a,l={...a,disableSpacing:s},p=Ye(l);return n.jsx(qe,{className:g(p.root,r),ownerState:l,ref:t,...i})});function _e(e){return v("MuiDialogContent",e)}b("MuiDialogContent",["root","dividers"]);function Ve(e){return v("MuiDialogTitle",e)}const Xe=b("MuiDialogTitle",["root"]),Ge=e=>{const{classes:o,dividers:t}=e;return k({root:["root",t&&"dividers"]},_e,o)},He=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})(K(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${Xe.root} + &`]:{paddingTop:0}}}]}))),Ke=c.forwardRef(function(o,t){const a=w({props:o,name:"MuiDialogContent"}),{className:r,dividers:s=!1,...i}=a,l={...a,dividers:s},p=Ge(l);return n.jsx(He,{className:g(p.root,r),ownerState:l,ref:t,...i})});function Ze(e){return v("MuiDialogContentText",e)}b("MuiDialogContentText",["root"]);const Je=e=>{const{classes:o}=e,a=k({root:["root"]},Ze,o);return{...o,...a}},Qe=d(Z,{shouldForwardProp:e=>je(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,o)=>o.root})({}),eo=c.forwardRef(function(o,t){const a=w({props:o,name:"MuiDialogContentText"}),{children:r,className:s,...i}=a,l=Je(i);return n.jsx(Qe,{component:"p",variant:"body1",color:"textSecondary",ref:t,ownerState:i,className:g(l.root,s),...a,classes:l})}),oo=e=>{const{classes:o}=e;return k({root:["root"]},Ve,o)},to=d(Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Y=c.forwardRef(function(o,t){const a=w({props:o,name:"MuiDialogTitle"}),{className:r,id:s,...i}=a,l=a,p=oo(l),{titleId:u=s}=c.useContext(Q);return n.jsx(to,{component:"h2",className:g(p.root,r),ownerState:l,ref:t,variant:"h6",id:s??u,...i})}),no=(e,o="primary")=>{var r;const t=Me[o];return{fontColor:(((r=e==null?void 0:e.palette)==null?void 0:r[o])??t).menuFont??t.menuFont}},ao={desktop:{small:"440px",medium:"600px",large:"800px",extraLarge:"1200px"},tablet:{small:"320px",medium:"458px",large:"640px",extraLarge:"640px"},mobile:"320px"},ro=d(Ue)(({size:e="medium",deviceType:o="desktop"})=>{const t=ao[o];return{"& .MuiDialog-paper":{borderRadius:12,width:typeof t=="string"?t:t[e],padding:"24px 36px"}}}),T=({icon:e,title:o,content:t,actions:a,size:r,align:s="center",deviceType:i="desktop",...l})=>{const p=H(),u=no(p);return n.jsxs(ro,{size:r,deviceType:i,...l,maxWidth:"lg",children:[n.jsx(Re,{"aria-label":"close",onClick:j=>{var S;return(S=l.onClose)==null?void 0:S.call(l,j,"escapeKeyDown")},sx:{position:"absolute",right:16,top:16},children:n.jsx(Te,{})}),e&&n.jsx(Y,{color:u.fontColor,sx:{fontSize:"48px",height:"80px",p:0,textAlign:s},children:e}),o&&n.jsx(Y,{sx:{p:0,textAlign:s,fontSize:"20px",fontWeight:600},color:u.fontColor,children:o}),t&&n.jsx(Ke,{sx:{p:0},children:n.jsx(eo,{color:u.fontColor,sx:{textAlign:s,fontSize:"14px",fontWeight:400},children:t})}),a&&n.jsx(Ee,{sx:{justifyContent:s==="center"?"center":"flex-end",p:0},children:a})]})};T.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{deviceType:{required:!1,tsType:{name:"union",raw:'"desktop" | "tablet" | "mobile"',elements:[{name:"literal",value:'"desktop"'},{name:"literal",value:'"tablet"'},{name:"literal",value:'"mobile"'}]},description:"依設備控制Modal的尺寸",defaultValue:{value:'"desktop"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "extraLarge"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:"Modal的Title"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的Icon"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置",defaultValue:{value:'"center"',computed:!1}}},composes:["Omit"]};const Fo={title:"components/Modal/Modal",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},D={render:e=>{const[o,t]=c.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)},s=n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,variant:"outlined",children:"Disagree"}),n.jsx(m,{onClick:r,children:"Agree"})]});return n.jsxs("div",{children:[n.jsx(m,{variant:"outlined",onClick:a,children:"Open alert dialog"}),n.jsx(T,{...e,open:o,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{icon:n.jsx(Ae,{}),size:"large",title:"This is a modal title",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},M={render:e=>{const[o,t]=c.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)},s=n.jsxs(A,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n.jsx(A,{sx:{display:"flex",gap:1},children:n.jsx(m,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),n.jsxs(A,{sx:{display:"flex",gap:1},children:[n.jsx(m,{onClick:r,variant:"outlined",children:"Disagree"}),n.jsx(m,{onClick:r,children:"Agree"})]})]});return n.jsxs("div",{children:[n.jsx(m,{variant:"outlined",onClick:a,children:"Open alert dialog"}),n.jsx(T,{...e,open:o,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:s})]})},args:{size:"large",title:"This is a modal title",align:"start",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var q,E,_;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <>
        <Button onClick={handleClose} variant="outlined">
          Disagree
        </Button>
        <Button onClick={handleClose}>Agree</Button>
      </>;
    return <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>
      </div>;
  },
  args: {
    icon: <GoAlert />,
    size: "large",
    title: "This is a modal title",
    content: <>
        <p>1. You can replace this with your ❖ content component</p>
        <p>
          2. Or you can detach an instance of this modal and replace this
          content box with your own content
        </p>
      </>
  }
}`,...(_=(E=D.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var V,X,G;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    }}>
        {/* 左邊的按鈕 */}
        <Box sx={{
        display: "flex",
        gap: 1
      }}>
          <Button variant="outlined" onClick={() => alert("Learn more")}>
            Learn more
          </Button>
        </Box>

        {/* 右邊的按鈕 */}
        <Box sx={{
        display: "flex",
        gap: 1
      }}>
          <Button onClick={handleClose} variant="outlined">
            Disagree
          </Button>
          <Button onClick={handleClose}>Agree</Button>
        </Box>
      </Box>;
    return <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>
      </div>;
  },
  args: {
    size: "large",
    title: "This is a modal title",
    align: "start",
    content: <>
        <p>1. You can replace this with your ❖ content component</p>
        <p>
          2. Or you can detach an instance of this modal and replace this
          content box with your own content
        </p>
      </>
  }
}`,...(G=(X=M.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const Lo=["WithIcon","WithLink"];export{D as WithIcon,M as WithLink,Lo as __namedExportsOrder,Fo as default};
