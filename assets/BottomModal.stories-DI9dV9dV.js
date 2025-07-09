import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as d}from"./index-D4H_InIO.js";import{u as Ft,p as Vt}from"./defaultPalette-CDIRQpAz.js";import{u as At}from"./useTheme-DpjMkLyW.js";import{s as Ot,c as _t,r as qt,m as $t,u as Jt}from"./memoTheme-DkEl0Jev.js";import{I as Ut}from"./IconButton-D_P5iQm9.js";import{X as Kt}from"./X.esm-De9lqQTk.js";import{B as I}from"./Box-BMmTB2V6.js";import{D as Qt}from"./DialogTitle-C8rOzEkn.js";import{r as St}from"./index-BkuToD7M.js";import{i as k,g as z,D as Zt,L as rt,a as nt,T as ot,E as at}from"./Tray.esm-mu6JURaU.js";import{g as te}from"./utils-DUkByWFw.js";import{u as ee}from"./useSlot-D9yE0s1_.js";import{c as re,u as ne}from"./DefaultPropsProvider-DqVT3Pki.js";import{b as st}from"./TransitionGroupContext-vo2vFi0t.js";import{o as Y}from"./ownerDocument-DW-IO8s5.js";import{m as wt}from"./mergeSlotProps-sSfPEMoJ.js";import{o as V}from"./ownerWindow-HkKU3E4x.js";import{B as _}from"./Button-BOEVMV6G.js";import{L as it}from"./Menu-wCs4t9Vd.js";import{L as lt,a as ct,D as jt}from"./ListItemText-B_0oKPvW.js";import{T as ut}from"./Typography-DBLLtZzJ.js";import{T as v}from"./TextField-CZVtwrgg.js";import{M as Ct}from"./MenuItem-DaMy8pAo.js";import{F as Lt}from"./FormControlLabel-Bx_LTtIb.js";import{C as It}from"./Checkbox-O-b5zA8X.js";import"./useTheme-Dm3NhWHt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-DunFoCRt.js";import"./CircularProgress-BzOVd61n.js";import"./IconBase.esm-BbKRF193.js";import"./extendSxProp-Cr0utasV.js";import"./index-vYCkCKEW.js";import"./index-Bm8UbI65.js";import"./Portal-DVNWasIp.js";import"./debounce-Be36O1Ab.js";import"./Modal-BpHdIFDV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cc5LuG26.js";import"./isMuiElement-d7vxVVg4.js";import"./useSlotProps-CxyZS-qg.js";import"./Grow-BMu7p32D.js";import"./index-D641xpmC.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DZ8OOg4w.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-FE0mXunH.js";import"./SwitchBase-BX-FO1OC.js";function oe(e){const{children:n,defer:a=!1,fallback:s=null}=e,[i,m]=d.useState(!1);return Ft(()=>{a||m(!0)},[a]),d.useEffect(()=>{a&&m(!0)},[a]),i?n:s}const ae=Ot("div",{shouldForwardProp:qt})($t(({theme:e})=>({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1,variants:[{props:{anchor:"left"},style:{right:"auto"}},{props:{anchor:"right"},style:{left:"auto",right:0}},{props:{anchor:"top"},style:{bottom:"auto",right:0}},{props:{anchor:"bottom"},style:{top:"auto",bottom:0,right:0}}]}))),se=d.forwardRef(function(n,a){const{anchor:s,classes:i={},className:m,width:l,style:x,...u}=n,w=n;return t.jsx(ae,{className:_t("PrivateSwipeArea-root",i.root,i[`anchor${re(s)}`],m),ref:a,style:{[k(s)?"width":"height"]:l,...x},ownerState:w,...u})}),X=3,pt=20;let L=null;function dt(e,n,a){return e==="right"?a.body.offsetWidth-n[0].pageX:n[0].pageX}function mt(e,n,a){return e==="bottom"?a.innerHeight-n[0].clientY:n[0].clientY}function D(e,n){return e?n.clientWidth:n.clientHeight}function Bt(e,n,a,s){return Math.min(Math.max(a?n-e:s+n-e,0),s)}function ie(e,n){const a=[];for(;e&&e!==n.parentElement;){const s=V(n).getComputedStyle(e);s.getPropertyValue("position")==="absolute"||s.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&a.push(e),e=e.parentElement}return a}function le({domTreeShapes:e,start:n,current:a,anchor:s}){const i={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(m=>{let l=a>=n;(s==="top"||s==="left")&&(l=!l);const x=s==="left"||s==="right"?"x":"y",u=Math.round(m[i.scrollPosition[x]]),w=u>0,M=u+m[i.clientLength[x]]<m[i.scrollLength[x]];return!!(l&&M||!l&&w)})}const ce=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),ue=d.forwardRef(function(n,a){const s=ne({name:"MuiSwipeableDrawer",props:n}),i=At(),m={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",disableBackdropTransition:x=!1,disableDiscovery:u=!1,disableSwipeToOpen:w=ce,hideBackdrop:M,hysteresis:ft=.52,allowSwipeInChildren:R=!1,minFlingVelocity:$=450,ModalProps:{BackdropProps:ht,...Ht}={},onClose:xt,onOpen:Nt,open:p=!1,PaperProps:gt={},SwipeAreaProps:zt,swipeAreaWidth:J=20,transitionDuration:U=m,variant:B="temporary",slots:yt={},slotProps:F={},...Yt}=s,[bt,K]=d.useState(!1),r=d.useRef({isSwiping:null}),Q=d.useRef(),A=d.useRef(),h=d.useRef(),Xt=Jt(gt.ref,h),O=d.useRef(!1),Z=d.useRef();Ft(()=>{Z.current=null},[p]);const W=d.useCallback((o,T={})=>{const{mode:c=null,changeTransition:f=!0}=T,g=z(i,l),y=["right","bottom"].includes(g)?1:-1,j=k(l),S=j?`translate(${y*o}px, 0)`:`translate(0, ${y*o}px)`,P=h.current.style;P.webkitTransform=S,P.transform=S;let b="";if(c&&(b=i.transitions.create("all",te({easing:void 0,style:void 0,timeout:U},{mode:c}))),f&&(P.webkitTransition=b,P.transition=b),!x&&!M){const C=A.current.style;C.opacity=1-o/D(j,h.current),f&&(C.webkitTransition=b,C.transition=b)}},[l,x,M,i,U]),H=st(o=>{if(!O.current)return;if(L=null,O.current=!1,St.flushSync(()=>{K(!1)}),!r.current.isSwiping){r.current.isSwiping=null;return}r.current.isSwiping=null;const T=z(i,l),c=k(l);let f;c?f=dt(T,o.changedTouches,Y(o.currentTarget)):f=mt(T,o.changedTouches,V(o.currentTarget));const g=c?r.current.startX:r.current.startY,y=D(c,h.current),j=Bt(f,g,p,y),S=j/y;if(Math.abs(r.current.velocity)>$&&(Z.current=Math.abs((y-j)/r.current.velocity)*1e3),p){r.current.velocity>$||S>ft?xt():W(0,{mode:"exit"});return}r.current.velocity<-$||1-S>ft?Nt():W(D(c,h.current),{mode:"enter"})}),Tt=(o=!1)=>{if(!bt){(o||!(u&&R))&&St.flushSync(()=>{K(!0)});const T=k(l);!p&&h.current&&W(D(T,h.current)+(u?15:-pt),{changeTransition:!1}),r.current.velocity=0,r.current.lastTime=null,r.current.lastTranslate=null,r.current.paperHit=!1,O.current=!0}},tt=st(o=>{if(!h.current||!O.current||L!==null&&L!==r.current)return;Tt(!0);const T=z(i,l),c=k(l),f=dt(T,o.touches,Y(o.currentTarget)),g=mt(T,o.touches,V(o.currentTarget));if(p&&h.current.contains(o.target)&&L===null){const b=ie(o.target,h.current);if(le({domTreeShapes:b,start:c?r.current.startX:r.current.startY,current:c?f:g,anchor:l})){L=!0;return}L=r.current}if(r.current.isSwiping==null){const b=Math.abs(f-r.current.startX),C=Math.abs(g-r.current.startY),N=c?b>C&&b>X:C>b&&C>X;if(N&&o.cancelable&&o.preventDefault(),N===!0||(c?C>X:b>X)){if(r.current.isSwiping=N,!N){H(o);return}r.current.startX=f,r.current.startY=g,!u&&!p&&(c?r.current.startX-=pt:r.current.startY-=pt)}}if(!r.current.isSwiping)return;const y=D(c,h.current);let j=c?r.current.startX:r.current.startY;p&&!r.current.paperHit&&(j=Math.min(j,y));const S=Bt(c?f:g,j,p,y);if(p)if(r.current.paperHit)S===0&&(r.current.startX=f,r.current.startY=g);else if(c?f<y:g<y)r.current.paperHit=!0,r.current.startX=f,r.current.startY=g;else return;r.current.lastTranslate===null&&(r.current.lastTranslate=S,r.current.lastTime=performance.now()+1);const P=(S-r.current.lastTranslate)/(performance.now()-r.current.lastTime)*1e3;r.current.velocity=r.current.velocity*.4+P*.6,r.current.lastTranslate=S,r.current.lastTime=performance.now(),o.cancelable&&o.preventDefault(),W(S)}),et=st(o=>{var y;if(o.defaultPrevented||o.defaultMuiPrevented||p&&(M||!A.current.contains(o.target))&&!h.current.contains(o.target))return;const T=z(i,l),c=k(l),f=dt(T,o.touches,Y(o.currentTarget)),g=mt(T,o.touches,V(o.currentTarget));if(!p){if(w||!(o.target===Q.current||(y=h.current)!=null&&y.contains(o.target)&&(typeof R=="function"?R(o,Q.current,h.current):R)))return;if(c){if(f>J)return}else if(g>J)return}o.defaultMuiPrevented=!0,L=null,r.current.startX=f,r.current.startY=g,Tt()});d.useEffect(()=>{if(B==="temporary"){const o=Y(h.current);return o.addEventListener("touchstart",et),o.addEventListener("touchmove",tt,{passive:!p}),o.addEventListener("touchend",H),()=>{o.removeEventListener("touchstart",et),o.removeEventListener("touchmove",tt,{passive:!p}),o.removeEventListener("touchend",H)}}},[B,p,et,tt,H]),d.useEffect(()=>()=>{L===r.current&&(L=null)},[]),d.useEffect(()=>{p||K(!1)},[p]);const[Gt,Et]=ee("swipeArea",{ref:Q,elementType:se,ownerState:s,externalForwardedProps:{slots:yt,slotProps:{swipeArea:zt,...F}},additionalProps:{width:J,anchor:l}});return t.jsxs(d.Fragment,{children:[t.jsx(Zt,{open:B==="temporary"&&bt?!0:p,variant:B,ModalProps:{BackdropProps:{...ht,ref:A},...B==="temporary"&&{keepMounted:!0},...Ht},hideBackdrop:M,anchor:l,transitionDuration:Z.current||U,onClose:xt,ref:a,slots:yt,slotProps:{...F,backdrop:wt(F.backdrop??ht,{ref:A}),paper:wt(F.paper??gt,{style:{pointerEvents:B==="temporary"&&!p&&!R?"none":""},ref:Xt})},...Yt}),!w&&B==="temporary"&&t.jsx(oe,{children:t.jsx(Gt,{...Et})})]})}),Wt=(e,n="primary")=>{var i;const a=Vt[n],s=((i=e==null?void 0:e.palette)==null?void 0:i[n])??a;return{fontColor:s.menuFont??a.menuFont,bgColor:s.elevated??a.elevated,boxColor:s.onMain??a.onMain}},pe=Ot(({title:e,content:n,align:a,...s})=>t.jsx(ue,{...s}),{shouldForwardProp:e=>e!=="title"&&e!=="content"&&e!=="align"})(({anchor:e,theme:n})=>({"& .MuiDrawer-paper":{backgroundColor:Wt(n).bgColor,borderRadius:e==="top"?"0 0 16px 16px":e==="bottom"?"16px 16px 0 0":"0"}})),q=({title:e,align:n,content:a,actions:s,anchor:i="bottom",...m})=>{const l=At(),x=Wt(l);return t.jsxs(pe,{anchor:i,...m,children:[t.jsx(Ut,{"aria-label":"close",onClick:u=>{var w;return(w=m.onClose)==null?void 0:w.call(m,u)},sx:{fontSize:"30px",position:"absolute",right:16,top:16},children:t.jsx(Kt,{})}),e&&t.jsx(I,{sx:{display:"flex",justifyContent:n},children:t.jsx(Qt,{sx:{p:0,m:"25px",textAlign:n,fontSize:n==="start"?"20px":"24px",fontWeight:n==="start"?500:600,gap:"20px"},color:x.fontColor,children:e})}),t.jsx(I,{sx:{backgroundColor:x.boxColor,overflowY:"auto",maxHeight:"calc(100% - 92px)",boxShadow:"0px 2px 10px 0px #0000000D",p:"24px 24px 92px 24px"},children:a}),s&&t.jsx(I,{sx:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:n==="center"?"center":"flex-end",p:"10px",boxShadow:"0px -12px 10px 0px #0000000D",height:"92px",gap:"10px",backgroundColor:x.boxColor},children:s})]})};q.__docgenInfo={description:"",methods:[],displayName:"BottomModal",props:{title:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},anchor:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"BottomModal只有上下 (上為額外增加)",defaultValue:{value:'"bottom"',computed:!1}}},composes:["Omit"]};const lr={title:"components/Modules/Modal/BottomModal",component:q,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},G={render:e=>{const[n,a]=d.useState(!1),s=()=>{a(!0)},i=()=>{a(!1)};return t.jsxs("div",{children:[t.jsx(_,{variant:"outlined",onClick:s,children:"Open alert dialog"}),t.jsx(q,{...e,open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:t.jsxs(I,{sx:{width:250},role:"presentation",children:[t.jsx(it,{children:["Inbox","Starred","Send email","Drafts"].map((e,n)=>t.jsx(rt,{disablePadding:!0,children:t.jsxs(nt,{children:[t.jsx(lt,{sx:{fontSize:24},children:n%2===0?t.jsx(ot,{}):t.jsx(at,{})}),t.jsx(ct,{primary:e})]})},e))}),t.jsx(jt,{}),t.jsx(it,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(rt,{disablePadding:!0,children:t.jsxs(nt,{children:[t.jsx(lt,{sx:{fontSize:24},children:n%2===0?t.jsx(ot,{}):t.jsx(at,{})}),t.jsx(ct,{primary:e})]})},e))}),t.jsx(jt,{}),t.jsx(it,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(rt,{disablePadding:!0,children:t.jsxs(nt,{children:[t.jsx(lt,{sx:{fontSize:24},children:n%2===0?t.jsx(ot,{}):t.jsx(at,{})}),t.jsx(ct,{primary:e})]})},e))})]})}},E={render:e=>{const[n,a]=d.useState(!1),s=()=>{a(!0)},i=()=>{a(!1)},m=["已入住","尚未入住"],l=["設施損壞","清潔問題","其他"],x=()=>t.jsxs(I,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(ut,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),t.jsx(v,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),t.jsx(v,{fullWidth:!0,label:"Email",variant:"outlined"}),t.jsx(v,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),t.jsxs(I,{sx:{display:"flex",gap:2},children:[t.jsx(v,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:m.map(u=>t.jsx(Ct,{value:u,children:u},u))}),t.jsx(v,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:l.map(u=>t.jsx(Ct,{value:u,children:u},u))})]}),t.jsx(v,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),t.jsxs(I,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[t.jsx(ut,{children:"點擊新增檔案 或拖拉"}),t.jsx(ut,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),t.jsx(Lt,{control:t.jsx(It,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),t.jsx(Lt,{control:t.jsx(It,{}),label:"我不是機器人"})]});return t.jsxs(I,{children:[t.jsx(_,{variant:"outlined",onClick:s,children:"Open alert dialog"}),t.jsx(q,{...e,open:n,onClose:i,content:t.jsx(x,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:t.jsxs(t.Fragment,{children:[t.jsx(_,{variant:"outlined",children:"Clear"}),t.jsx(_,{children:"Despatch"})]})}};var Mt,Pt,vt;G.parameters={...G.parameters,docs:{...(Mt=G.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <BottomModal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>\r
      </div>;
  },
  args: {
    anchor: "top",
    title: "This is a modal title",
    content: <Box sx={{
      width: 250
    }} role="presentation">\r
        <List>\r
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
        <Divider />\r
        <List>\r
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
        <Divider />\r
        <List>\r
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
      </Box>
  }
}`,...(vt=(Pt=G.parameters)==null?void 0:Pt.docs)==null?void 0:vt.source}}};var kt,Rt,Dt;E.parameters={...E.parameters,docs:{...(kt=E.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const statuses = ["已入住", "尚未入住"];
    const issueTypes = ["設施損壞", "清潔問題", "其他"];
    const ContactForm = () => {
      return <Box component="form" noValidate autoComplete="off" sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}>\r
          <Typography variant="h6" fontWeight={600}>\r
            說明您的問題內容\r
          </Typography>\r
\r
          <TextField fullWidth label="您的姓名" variant="outlined" />\r
          <TextField fullWidth label="Email" variant="outlined" />\r
          <TextField fullWidth label="手機號碼" variant="outlined" placeholder="+886" />\r
\r
          <Box sx={{
          display: "flex",
          gap: 2
        }}>\r
            <TextField fullWidth select label="入住狀態" variant="outlined">\r
              {statuses.map(status => <MenuItem key={status} value={status}>\r
                  {status}\r
                </MenuItem>)}\r
            </TextField>\r
\r
            <TextField fullWidth select label="問題類別" variant="outlined">\r
              {issueTypes.map(type => <MenuItem key={type} value={type}>\r
                  {type}\r
                </MenuItem>)}\r
            </TextField>\r
          </Box>\r
\r
          <TextField fullWidth multiline rows={4} label="說明內容" variant="outlined" />\r
\r
          <Box sx={{
          border: "1px dashed #ccc",
          borderRadius: 2,
          p: 2,
          textAlign: "center",
          color: "#666"
        }}>\r
            <Typography>點擊新增檔案 或拖拉</Typography>\r
            <Typography variant="caption">\r
              SVG, PNG, JPG or GIF (最大 3MB)\r
            </Typography>\r
          </Box>\r
\r
          <FormControlLabel control={<Checkbox />} label="提供您的購物清單，更方便飯店人員回應您準確資訊" />\r
\r
          <FormControlLabel control={<Checkbox />} label="我不是機器人" />\r
        </Box>;
    };
    return <Box>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <BottomModal {...args} open={open} onClose={handleClose} content={<ContactForm />} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>\r
      </Box>;
  },
  args: {
    title: "聯絡我們",
    align: "start",
    actions: <>\r
        <Button variant="outlined">Clear</Button>\r
        <Button>Despatch</Button>\r
      </>
  }
}`,...(Dt=(Rt=E.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.source}}};const cr=["Navigation","Form"];export{E as Form,G as Navigation,cr as __namedExportsOrder,lr as default};
