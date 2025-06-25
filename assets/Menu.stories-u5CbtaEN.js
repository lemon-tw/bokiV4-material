import{j as y}from"./jsx-runtime-BO8uF4Og.js";import{r as a,R as Ke}from"./index-D4H_InIO.js";import{a as K,g as G,s as F,c as H,b as _,m as ke,u as Ee,r as Re}from"./memoTheme-Dg8ftLGV.js";import{u as We}from"./index-Bm8UbI65.js";import{u as A}from"./useSlot-DUJno6SE.js";import{u as X,a as Z}from"./DefaultPropsProvider-JiJShTPV.js";import{u as Ue}from"./useSlotProps-_F3GTPgY.js";import{P as Ve}from"./Paper-DKoAgtLD.js";import{o as pe}from"./ownerDocument-DW-IO8s5.js";import{o as ue}from"./ownerWindow-HkKU3E4x.js";import{d as Ge}from"./debounce-Be36O1Ab.js";import{G as _e}from"./Grow-C_2ZQ3Rr.js";import{m as Xe}from"./mergeSlotProps-D3shFj3-.js";import{g as Ye,M as qe}from"./Modal-CI0hK-tz.js";import{u as $e,p as Je}from"./defaultPalette-zaxAseiV.js";import{B as Qe}from"./ButtonBase-C4UZesTi.js";import{B as Ze}from"./Button-C7gFOMVp.js";import{c as et}from"./createSvgIcon-5TDCF_r7.js";import{T as ee,t as ve}from"./Typography-BkLxxeGW.js";import"./useTheme-D4ymiu7F.js";import"./useTheme-DmlEiKNM.js";import"./Portal-DB6SIIFk.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-CgdZw-31.js";import"./index-BINuD49I.js";import"./extendSxProp-CPCMrNKz.js";function tt(e){return typeof e=="string"}const xe=K("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),te=a.createContext({});function ot(e){return G("MuiList",e)}K("MuiList",["root","padding","dense","subheader"]);const nt=e=>{const{classes:t,disablePadding:o,dense:n,subheader:c}=e;return _({root:["root",!o&&"padding",n&&"dense",c&&"subheader"]},ot,t)},st=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),rt=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiList"}),{children:c,className:r,component:i="ul",dense:p=!1,disablePadding:u=!1,subheader:P,...T}=n,S=a.useMemo(()=>({dense:p}),[p]),L={...n,component:i,dense:p,disablePadding:u},m=nt(L);return y.jsx(te.Provider,{value:S,children:y.jsxs(st,{as:i,className:H(m.root,r),ref:o,ownerState:L,...T,children:[P,c]})})});function it(e){return G("MuiListItemIcon",e)}const Ce=K("MuiListItemIcon",["root","alignItemsFlexStart"]),at=e=>{const{alignItems:t,classes:o}=e;return _({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},it,o)},lt=F("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(ke(({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),ct=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiListItemIcon"}),{className:c,...r}=n,i=a.useContext(te),p={...n,alignItems:i.alignItems},u=at(p);return y.jsx(lt,{className:H(u.root,c),ownerState:p,ref:o,...r})});function pt(e){return G("MuiListItemText",e)}const V=K("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ut=e=>{const{classes:t,inset:o,primary:n,secondary:c,dense:r}=e;return _({root:["root",o&&"inset",r&&"dense",n&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},pt,t)},dt=F("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${V.primary}`]:t.primary},{[`& .${V.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${ve.root}:where(& .${V.primary})`]:{display:"block"},[`.${ve.root}:where(& .${V.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),mt=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiListItemText"}),{children:c,className:r,disableTypography:i=!1,inset:p=!1,primary:u,primaryTypographyProps:P,secondary:T,secondaryTypographyProps:S,slots:L={},slotProps:m={},...x}=n,{dense:E}=a.useContext(te);let C=u??c,l=T;const b={...n,disableTypography:i,inset:p,primary:!!C,secondary:!!l,dense:E},s=ut(b),d={slots:L,slotProps:{primary:P,secondary:S,...m}},[g,k]=A("root",{className:H(s.root,r),elementType:dt,externalForwardedProps:{...d,...x},ownerState:b,ref:o}),[$,f]=A("primary",{className:s.primary,elementType:ee,externalForwardedProps:d,ownerState:b}),[R,D]=A("secondary",{className:s.secondary,elementType:ee,externalForwardedProps:d,ownerState:b});return C!=null&&C.type!==ee&&!i&&(C=y.jsx($,{variant:E?"body2":"body1",component:f!=null&&f.variant?void 0:"span",...f,children:C})),l!=null&&l.type!==ee&&!i&&(l=y.jsx(R,{variant:"body2",color:"textSecondary",...D,children:l})),y.jsxs(g,{...k,children:[C,l]})});function ce(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function Ie(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Oe(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.startsWith(t.keys.join(""))}function J(e,t,o,n,c,r){let i=!1,p=c(e,t,t?o:!1);for(;p;){if(p===e.firstChild){if(i)return!1;i=!0}const u=n?!1:p.disabled||p.getAttribute("aria-disabled")==="true";if(!p.hasAttribute("tabindex")||!Oe(p,r)||u)p=c(e,p,o);else return p.focus(),!0}return!1}const ft=a.forwardRef(function(t,o){const{actions:n,autoFocus:c=!1,autoFocusItem:r=!1,children:i,className:p,disabledItemsFocusable:u=!1,disableListWrap:P=!1,onKeyDown:T,variant:S="selectedMenu",...L}=t,m=a.useRef(null),x=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});$e(()=>{c&&m.current.focus()},[c]),a.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(s,{direction:d})=>{const g=!m.current.style.width;if(s.clientHeight<m.current.clientHeight&&g){const k=`${Ye(ue(s))}px`;m.current.style[d==="rtl"?"paddingLeft":"paddingRight"]=k,m.current.style.width=`calc(100% + ${k})`}return m.current}}),[]);const E=s=>{const d=m.current,g=s.key;if(s.ctrlKey||s.metaKey||s.altKey){T&&T(s);return}const $=pe(d).activeElement;if(g==="ArrowDown")s.preventDefault(),J(d,$,P,u,ce);else if(g==="ArrowUp")s.preventDefault(),J(d,$,P,u,Ie);else if(g==="Home")s.preventDefault(),J(d,null,P,u,ce);else if(g==="End")s.preventDefault(),J(d,null,P,u,Ie);else if(g.length===1){const f=x.current,R=g.toLowerCase(),D=performance.now();f.keys.length>0&&(D-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&R!==f.keys[0]&&(f.repeating=!1)),f.lastTime=D,f.keys.push(R);const B=$&&!f.repeating&&Oe($,f);f.previousKeyMatched&&(B||J(d,$,!1,u,ce,f))?s.preventDefault():f.previousKeyMatched=!1}T&&T(s)},C=Ee(m,o);let l=-1;a.Children.forEach(i,(s,d)=>{if(!a.isValidElement(s)){l===d&&(l+=1,l>=i.length&&(l=-1));return}s.props.disabled||(S==="selectedMenu"&&s.props.selected||l===-1)&&(l=d),l===d&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(l+=1,l>=i.length&&(l=-1))});const b=a.Children.map(i,(s,d)=>{if(d===l){const g={};return r&&(g.autoFocus=!0),s.props.tabIndex===void 0&&S==="selectedMenu"&&(g.tabIndex=0),a.cloneElement(s,g)}return s});return y.jsx(rt,{role:"menu",ref:C,className:p,onKeyDown:E,tabIndex:c?0:-1,...L,children:b})});function ht(e){return G("MuiPopover",e)}K("MuiPopover",["root","paper"]);function Me(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function Pe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Te(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function se(e){return typeof e=="function"?e():e}const yt=e=>{const{classes:t}=e;return _({root:["root"],paper:["paper"]},ht,t)},gt=F(qe,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),je=F(Ve,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),bt=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiPopover"}),{action:c,anchorEl:r,anchorOrigin:i={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:u="anchorEl",children:P,className:T,container:S,elevation:L=8,marginThreshold:m=16,open:x,PaperProps:E={},slots:C={},slotProps:l={},transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:s,transitionDuration:d="auto",TransitionProps:g={},disableScrollLock:k=!1,...$}=n,f=a.useRef(),R={...n,anchorOrigin:i,anchorReference:u,elevation:L,marginThreshold:m,transformOrigin:b,TransitionComponent:s,transitionDuration:d,TransitionProps:g},D=yt(R),B=a.useCallback(()=>{if(u==="anchorPosition")return p;const h=se(r),I=(h&&h.nodeType===1?h:pe(f.current).body).getBoundingClientRect();return{top:I.top+Me(I,i.vertical),left:I.left+Pe(I,i.horizontal)}},[r,i.horizontal,i.vertical,p,u]),N=a.useCallback(h=>({vertical:Me(h,b.vertical),horizontal:Pe(h,b.horizontal)}),[b.horizontal,b.vertical]),oe=a.useCallback(h=>{const M={width:h.offsetWidth,height:h.offsetHeight},I=N(M);if(u==="none")return{top:null,left:null,transformOrigin:Te(I)};const q=B();let W=q.top-I.vertical,U=q.left-I.horizontal;const fe=W+M.height,he=U+M.width,ye=ue(se(r)),ge=ye.innerHeight-m,be=ye.innerWidth-m;if(m!==null&&W<m){const j=W-m;W-=j,I.vertical+=j}else if(m!==null&&fe>ge){const j=fe-ge;W-=j,I.vertical+=j}if(m!==null&&U<m){const j=U-m;U-=j,I.horizontal+=j}else if(he>be){const j=he-be;U-=j,I.horizontal+=j}return{top:`${Math.round(W)}px`,left:`${Math.round(U)}px`,transformOrigin:Te(I)}},[r,u,B,N,m]),[ae,ne]=a.useState(x),O=a.useCallback(()=>{const h=f.current;if(!h)return;const M=oe(h);M.top!==null&&h.style.setProperty("top",M.top),M.left!==null&&(h.style.left=M.left),h.style.transformOrigin=M.transformOrigin,ne(!0)},[oe]);a.useEffect(()=>(k&&window.addEventListener("scroll",O),()=>window.removeEventListener("scroll",O)),[r,k,O]);const le=()=>{O()},z=()=>{ne(!1)};a.useEffect(()=>{x&&O()}),a.useImperativeHandle(c,()=>x?{updatePosition:()=>{O()}}:null,[x,O]),a.useEffect(()=>{if(!x)return;const h=Ge(()=>{O()}),M=ue(se(r));return M.addEventListener("resize",h),()=>{h.clear(),M.removeEventListener("resize",h)}},[r,x,O]);let v=d;const w={slots:{transition:s,...C},slotProps:{transition:g,paper:E,...l}},[Y,Fe]=A("transition",{elementType:_e,externalForwardedProps:w,ownerState:R,getSlotProps:h=>({...h,onEntering:(M,I)=>{var q;(q=h.onEntering)==null||q.call(h,M,I),le()},onExited:M=>{var I;(I=h.onExited)==null||I.call(h,M),z()}}),additionalProps:{appear:!0,in:x}});d==="auto"&&!Y.muiSupportAuto&&(v=void 0);const De=S||(r?pe(se(r)).body:void 0),[me,{slots:Be,slotProps:Ne,...ze}]=A("root",{ref:o,elementType:gt,externalForwardedProps:{...w,...$},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:C.backdrop},slotProps:{backdrop:Xe(typeof l.backdrop=="function"?l.backdrop(R):l.backdrop,{invisible:!0})},container:De,open:x},ownerState:R,className:H(D.root,T)}),[Ae,He]=A("paper",{ref:f,className:D.paper,elementType:je,externalForwardedProps:w,shouldForwardComponentProp:!0,additionalProps:{elevation:L,style:ae?void 0:{opacity:0}},ownerState:R});return y.jsx(me,{...ze,...!tt(me)&&{slots:Be,slotProps:Ne,disableScrollLock:k},children:y.jsx(Y,{...Fe,timeout:v,children:y.jsx(Ae,{...He,children:P})})})});function vt(e){return G("MuiMenu",e)}K("MuiMenu",["root","paper","list"]);const xt={vertical:"top",horizontal:"right"},Ct={vertical:"top",horizontal:"left"},It=e=>{const{classes:t}=e;return _({root:["root"],paper:["paper"],list:["list"]},vt,t)},Mt=F(bt,{shouldForwardProp:e=>Re(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Pt=F(je,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Tt=F(ft,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),St=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiMenu"}),{autoFocus:c=!0,children:r,className:i,disableAutoFocusItem:p=!1,MenuListProps:u={},onClose:P,open:T,PaperProps:S={},PopoverClasses:L,transitionDuration:m="auto",TransitionProps:{onEntering:x,...E}={},variant:C="selectedMenu",slots:l={},slotProps:b={},...s}=n,d=We(),g={...n,autoFocus:c,disableAutoFocusItem:p,MenuListProps:u,onEntering:x,PaperProps:S,transitionDuration:m,TransitionProps:E,variant:C},k=It(g),$=c&&!p&&T,f=a.useRef(null),R=(v,w)=>{f.current&&f.current.adjustStyleForScrollbar(v,{direction:d?"rtl":"ltr"}),x&&x(v,w)},D=v=>{v.key==="Tab"&&(v.preventDefault(),P&&P(v,"tabKeyDown"))};let B=-1;a.Children.map(r,(v,w)=>{a.isValidElement(v)&&(v.props.disabled||(C==="selectedMenu"&&v.props.selected||B===-1)&&(B=w))});const N={slots:l,slotProps:{list:u,transition:E,paper:S,...b}},oe=Ue({elementType:l.root,externalSlotProps:b.root,ownerState:g,className:[k.root,i]}),[ae,ne]=A("paper",{className:k.paper,elementType:Pt,externalForwardedProps:N,shouldForwardComponentProp:!0,ownerState:g}),[O,le]=A("list",{className:H(k.list,u.className),elementType:Tt,shouldForwardComponentProp:!0,externalForwardedProps:N,getSlotProps:v=>({...v,onKeyDown:w=>{var Y;D(w),(Y=v.onKeyDown)==null||Y.call(v,w)}}),ownerState:g}),z=typeof N.slotProps.transition=="function"?N.slotProps.transition(g):N.slotProps.transition;return y.jsx(Mt,{onClose:P,anchorOrigin:{vertical:"bottom",horizontal:d?"right":"left"},transformOrigin:d?xt:Ct,slots:{root:l.root,paper:ae,backdrop:l.backdrop,...l.transition&&{transition:l.transition}},slotProps:{root:oe,paper:ne,backdrop:typeof b.backdrop=="function"?b.backdrop(g):b.backdrop,transition:{...z,onEntering:(...v)=>{var w;R(...v),(w=z==null?void 0:z.onEntering)==null||w.call(z,...v)}}},open:T,ref:o,transitionDuration:m,ownerState:g,...s,classes:L,children:y.jsx(O,{actions:f,autoFocus:c&&(B===-1||p),autoFocusItem:$,variant:C,...le,children:r})})});function wt(e){return G("MuiMenuItem",e)}const Q=K("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Lt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},kt=e=>{const{disabled:t,dense:o,divider:n,disableGutters:c,selected:r,classes:i}=e,u=_({root:["root",o&&"dense",t&&"disabled",!c&&"gutters",n&&"divider",r&&"selected"]},wt,i);return{...i,...u}},Et=F(Qe,{shouldForwardProp:e=>Re(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Lt})(ke(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Z(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Q.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Q.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Z(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Q.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Q.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${xe.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${xe.inset}`]:{marginLeft:52},[`& .${V.root}`]:{marginTop:0,marginBottom:0},[`& .${V.inset}`]:{paddingLeft:36},[`& .${Ce.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${Ce.root} svg`]:{fontSize:"1.25rem"}}}]}))),Rt=a.forwardRef(function(t,o){const n=X({props:t,name:"MuiMenuItem"}),{autoFocus:c=!1,component:r="li",dense:i=!1,divider:p=!1,disableGutters:u=!1,focusVisibleClassName:P,role:T="menuitem",tabIndex:S,className:L,...m}=n,x=a.useContext(te),E=a.useMemo(()=>({dense:i||x.dense||!1,disableGutters:u}),[x.dense,i,u]),C=a.useRef(null);$e(()=>{c&&C.current&&C.current.focus()},[c]);const l={...n,dense:E.dense,divider:p,disableGutters:u},b=kt(n),s=Ee(C,o);let d;return n.disabled||(d=S!==void 0?S:-1),y.jsx(te.Provider,{value:E,children:y.jsx(Et,{ref:s,role:T,tabIndex:d,component:r,focusVisibleClassName:H(b.focusVisible,P),className:H(b.root,L),...m,ownerState:l,classes:b})})}),$t=F(St)(()=>({"& .MuiPaper-root":{boxShadow:"0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"}})),de=({open:e,...t})=>y.jsx($t,{open:e,...t});de.__docgenInfo={description:"",methods:[],displayName:"Menu",composes:["MenuProps"]};const Ot=(e,t="primary")=>{var c;const o=Je[t],n=((c=e==null?void 0:e.palette)==null?void 0:c[t])??o;return{fontColor:n.menuFont??o.menuFont,selectedBg:n.tonal??o.tonal,selectedFont:n.onTonal??o.onTonal}},jt=F(Rt,{})(({theme:e})=>{const t=Ot(e);return{fontFamily:"Noto Sans, Noto Sans TC, sans-serif",color:t.fontColor,"&:hover":{backgroundColor:Z(t.fontColor,.08)},"&.Mui-selected":{backgroundColor:t.selectedBg,color:t.selectedFont},"& .MuiTouchRipple-root":{display:"none"}}}),ie=({...e})=>y.jsx(jt,{...e});ie.__docgenInfo={description:"",methods:[],displayName:"MenuItem",composes:["MenuItemProps"]};const Ft=et(y.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"}),"Cloud"),mo={title:"components/Menu/Menu",component:de,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},re={parameters:{docs:{source:{code:`
import { Cloud } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click to Open
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
          Selected
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose} sx={{ p: 2 }}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>With Icon</ListItemText>
          <Typography variant="body2">⌘V</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
          Disabled
        </MenuItem>
      </Menu>
    </div>
      );
    `.trim()}}},render:e=>{const[t,o]=Ke.useState(null),n=!!t,c=i=>{o(i.currentTarget),console.log(i.currentTarget)},r=()=>{o(null)};return y.jsxs("div",{children:[y.jsx(Ze,{id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:c,children:"Click to Open"}),y.jsxs(de,{id:"basic-menu",anchorEl:t,open:n,onClose:r,slotProps:{list:{"aria-labelledby":"basic-button"}},sx:{"& .MuiPaper-root":{width:"200px"}},children:[y.jsx(ie,{onClick:r,selected:!0,sx:{p:2},children:"Selected"}),y.jsxs(ie,{onClick:r,sx:{p:2},children:[y.jsx(ct,{children:y.jsx(Ft,{fontSize:"small"})}),y.jsx(mt,{children:"With Icon"}),y.jsx(ee,{variant:"body2",children:"⌘V"})]}),y.jsx(ie,{onClick:r,disabled:!0,sx:{p:2},children:"Disabled"})]})]})}};var Se,we,Le;re.parameters={...re.parameters,docs:{...(Se=re.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
import { Cloud } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click to Open
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} selected sx={{ p: 2 }}>
          Selected
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose} sx={{ p: 2 }}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>With Icon</ListItemText>
          <Typography variant="body2">⌘V</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled sx={{ p: 2 }}>
          Disabled
        </MenuItem>
      </Menu>
    </div>
      );
    \`.trim()
      }
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <div>
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
          Click to Open
        </Button>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{
        list: {
          "aria-labelledby": "basic-button"
        }
      }} sx={{
        "& .MuiPaper-root": {
          width: "200px"
        }
      }}>
          <MenuItem onClick={handleClose} selected sx={{
          p: 2
        }}>
            Selected
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem onClick={handleClose} sx={{
          p: 2
        }}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>With Icon</ListItemText>
            <Typography variant="body2">⌘V</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disabled sx={{
          p: 2
        }}>
            Disabled
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(Le=(we=re.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};const fo=["Label"];export{re as Label,fo as __namedExportsOrder,mo as default};
