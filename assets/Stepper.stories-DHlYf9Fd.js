import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as u,R as X}from"./index-D4H_InIO.js";import{a as E,g as F,u as Mt,s as b,c as N,b as D,m as V}from"./memoTheme-DkEl0Jev.js";import{u as U,z as zt,c as gt}from"./DefaultPropsProvider-DqVT3Pki.js";import{B as H}from"./Button-BOEVMV6G.js";import{B as W}from"./Box-BMmTB2V6.js";import{i as It}from"./isMuiElement-d7vxVVg4.js";import{u as ot}from"./useSlot-D9yE0s1_.js";import{c as yt,S as Nt}from"./createSvgIcon-FE0mXunH.js";import{B as At}from"./ButtonBase-DunFoCRt.js";import{T as O}from"./Typography-DBLLtZzJ.js";import{u as $t}from"./useTheme-DpjMkLyW.js";import{T as Pt,g as ct}from"./utils-DUkByWFw.js";import{u as Et}from"./TransitionGroupContext-vo2vFi0t.js";import{P as Ft}from"./Paper-Cc5LuG26.js";import"./defaultPalette-CDIRQpAz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./CircularProgress-BzOVd61n.js";import"./useTheme-Dm3NhWHt.js";import"./extendSxProp-Cr0utasV.js";import"./index-D641xpmC.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";function Dt(t){return E("MuiCollapse",t)}F("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ut=t=>{const{orientation:e,classes:o}=t,r={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return D(r,Dt,o)},Wt=b("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(V(({theme:t})=>({height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),Ht=b("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Ot=b("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),nt=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiCollapse"}),{addEndListener:s,children:p,className:i,collapsedSize:a="0px",component:d,easing:h,in:m,onEnter:c,onEntered:v,onEntering:y,onExit:g,onExited:x,onExiting:f,orientation:w="vertical",style:L,timeout:S=zt.standard,TransitionComponent:T=Pt,...R}=r,k={...r,orientation:w,collapsedSize:a},C=Ut(k),z=$t(),A=Et(),I=u.useRef(null),K=u.useRef(),_=typeof a=="number"?`${a}px`:a,M=w==="horizontal",$=M?"width":"height",q=u.useRef(null),Ct=Mt(o,q),G=l=>j=>{if(l){const B=q.current;j===void 0?l(B):l(B,j)}},st=()=>I.current?I.current[M?"clientWidth":"clientHeight"]:0,wt=G((l,j)=>{I.current&&M&&(I.current.style.position="absolute"),l.style[$]=_,c&&c(l,j)}),Lt=G((l,j)=>{const B=st();I.current&&M&&(I.current.style.position="");const{duration:Q,easing:Z}=ct({style:L,timeout:S,easing:h},{mode:"enter"});if(S==="auto"){const pt=z.transitions.getAutoHeightDuration(B);l.style.transitionDuration=`${pt}ms`,K.current=pt}else l.style.transitionDuration=typeof Q=="string"?Q:`${Q}ms`;l.style[$]=`${B}px`,l.style.transitionTimingFunction=Z,y&&y(l,j)}),Rt=G((l,j)=>{l.style[$]="auto",v&&v(l,j)}),jt=G(l=>{l.style[$]=`${st()}px`,g&&g(l)}),Bt=G(x),Tt=G(l=>{const j=st(),{duration:B,easing:Q}=ct({style:L,timeout:S,easing:h},{mode:"exit"});if(S==="auto"){const Z=z.transitions.getAutoHeightDuration(j);l.style.transitionDuration=`${Z}ms`,K.current=Z}else l.style.transitionDuration=typeof B=="string"?B:`${B}ms`;l.style[$]=_,l.style.transitionTimingFunction=Q,f&&f(l)}),kt=l=>{S==="auto"&&A.start(K.current||0,l),s&&s(q.current,l)};return n.jsx(T,{in:m,onEnter:wt,onEntered:Rt,onEntering:Lt,onExit:jt,onExited:Bt,onExiting:Tt,addEndListener:kt,nodeRef:q,timeout:S==="auto"?null:S,...R,children:(l,{ownerState:j,...B})=>n.jsx(Wt,{as:d,className:N(C.root,i,{entered:C.entered,exited:!m&&_==="0px"&&C.hidden}[l]),style:{[M?"minWidth":"minHeight"]:_,...L},ref:Ct,ownerState:{...k,state:l},...B,children:n.jsx(Ht,{ownerState:{...k,state:l},className:C.wrapper,ref:I,children:n.jsx(Ot,{ownerState:{...k,state:l},className:C.wrapperInner,children:p})})})})});nt&&(nt.muiSupportAuto=!0);const J=u.createContext({}),Y=u.createContext({});function Vt(t){return E("MuiStep",t)}F("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const _t=t=>{const{classes:e,orientation:o,alternativeLabel:r,completed:s}=t;return D({root:["root",o,r&&"alternativeLabel",s&&"completed"]},Vt,e)},qt=b("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),bt=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStep"}),{active:s,children:p,className:i,component:a="div",completed:d,disabled:h,expanded:m=!1,index:c,last:v,...y}=r,{activeStep:g,connector:x,alternativeLabel:f,orientation:w,nonLinear:L}=u.useContext(J);let[S=!1,T=!1,R=!1]=[s,d,h];g===c?S=s!==void 0?s:!0:!L&&g>c?T=d!==void 0?d:!0:!L&&g<c&&(R=h!==void 0?h:!0);const k=u.useMemo(()=>({index:c,last:v,expanded:m,icon:c+1,active:S,completed:T,disabled:R}),[c,v,m,S,T,R]),C={...r,active:S,orientation:w,alternativeLabel:f,completed:T,disabled:R,expanded:m,component:a},z=_t(C),A=n.jsxs(qt,{as:a,className:N(z.root,i),ref:o,ownerState:C,...y,children:[x&&f&&c!==0?x:null,p]});return n.jsx(Y.Provider,{value:k,children:x&&!f&&c!==0?n.jsxs(u.Fragment,{children:[x,A]}):A})}),Gt=yt(n.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Jt=yt(n.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Kt(t){return E("MuiStepIcon",t)}const at=F("MuiStepIcon",["root","active","completed","error","text"]);var dt;const Qt=t=>{const{classes:e,active:o,completed:r,error:s}=t;return D({root:["root",o&&"active",r&&"completed",s&&"error"],text:["text"]},Kt,e)},it=b(Nt,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(V(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${at.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${at.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${at.error}`]:{color:(t.vars||t).palette.error.main}}))),Xt=b("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(V(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),Yt=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepIcon"}),{active:s=!1,className:p,completed:i=!1,error:a=!1,icon:d,...h}=r,m={...r,active:s,completed:i,error:a},c=Qt(m);if(typeof d=="number"||typeof d=="string"){const v=N(p,c.root);return a?n.jsx(it,{as:Jt,className:v,ref:o,ownerState:m,...h}):i?n.jsx(it,{as:Gt,className:v,ref:o,ownerState:m,...h}):n.jsxs(it,{className:v,ref:o,ownerState:m,...h,children:[dt||(dt=n.jsx("circle",{cx:"12",cy:"12",r:"12"})),n.jsx(Xt,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:m,children:d})]})}return d});function Zt(t){return E("MuiStepLabel",t)}const P=F("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),te=t=>{const{classes:e,orientation:o,active:r,completed:s,error:p,disabled:i,alternativeLabel:a}=t;return D({root:["root",o,p&&"error",i&&"disabled",a&&"alternativeLabel"],label:["label",r&&"active",s&&"completed",p&&"error",i&&"disabled",a&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",s&&"completed",p&&"error",i&&"disabled",a&&"alternativeLabel"],labelContainer:["labelContainer",a&&"alternativeLabel"]},Zt,e)},ee=b("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation]]}})({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),oe=b("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(V(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}}))),ne=b("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}}),re=b("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(V(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}}))),lt=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepLabel"}),{children:s,className:p,componentsProps:i={},error:a=!1,icon:d,optional:h,slots:m={},slotProps:c={},StepIconComponent:v,StepIconProps:y,...g}=r,{alternativeLabel:x,orientation:f}=u.useContext(J),{active:w,disabled:L,completed:S,icon:T}=u.useContext(Y),R=d||T;let k=v;R&&!k&&(k=Yt);const C={...r,active:w,alternativeLabel:x,completed:S,disabled:L,error:a,orientation:f},z=te(C),A={slots:m,slotProps:{stepIcon:y,...i,...c}},[I,K]=ot("root",{elementType:ee,externalForwardedProps:{...A,...g},ownerState:C,ref:o,className:N(z.root,p)}),[_,M]=ot("label",{elementType:oe,externalForwardedProps:A,ownerState:C}),[$,q]=ot("stepIcon",{elementType:k,externalForwardedProps:A,ownerState:C});return n.jsxs(I,{...K,children:[R||$?n.jsx(ne,{className:z.iconContainer,ownerState:C,children:n.jsx($,{completed:S,active:w,error:a,icon:R,...q})}):null,n.jsxs(re,{className:z.labelContainer,ownerState:C,children:[s?n.jsx(_,{...M,className:N(z.label,M==null?void 0:M.className),children:s}):null,h]})]})});lt.muiName="StepLabel";function se(t){return E("MuiStepButton",t)}const ut=F("MuiStepButton",["root","horizontal","vertical","touchRipple"]),ae=t=>{const{classes:e,orientation:o}=t;return D({root:["root",o],touchRipple:["touchRipple"]},se,e)},ie=b(At,{name:"MuiStepButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${ut.touchRipple}`]:e.touchRipple},e.root,e[o.orientation]]}})({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box",[`& .${ut.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"},variants:[{props:{orientation:"vertical"},style:{justifyContent:"flex-start",padding:"8px",margin:"-8px"}}]}),le=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepButton"}),{children:s,className:p,icon:i,optional:a,...d}=r,{disabled:h,active:m}=u.useContext(Y),{orientation:c}=u.useContext(J),v={...r,orientation:c},y=ae(v),g={icon:i,optional:a},x=It(s,["StepLabel"])?u.cloneElement(s,g):n.jsx(lt,{...g,children:s});return n.jsx(ie,{focusRipple:!0,disabled:h,TouchRippleProps:{className:y.touchRipple},className:N(y.root,p),ref:o,ownerState:v,"aria-current":m?"step":void 0,...d,children:x})});function pe(t){return E("MuiStepConnector",t)}F("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const ce=t=>{const{classes:e,orientation:o,alternativeLabel:r,active:s,completed:p,disabled:i}=t,a={root:["root",o,r&&"alternativeLabel",s&&"active",p&&"completed",i&&"disabled"],line:["line",`line${gt(o)}`]};return D(a,pe,e)},de=b("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),ue=b("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.line,e[`line${gt(o.orientation)}`]]}})(V(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return{display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:e,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),me=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepConnector"}),{className:s,...p}=r,{alternativeLabel:i,orientation:a="horizontal"}=u.useContext(J),{active:d,disabled:h,completed:m}=u.useContext(Y),c={...r,alternativeLabel:i,orientation:a,active:d,completed:m,disabled:h},v=ce(c);return n.jsx(de,{className:N(v.root,s),ref:o,ownerState:c,...p,children:n.jsx(ue,{className:v.line,ownerState:c})})});function he(t){return E("MuiStepContent",t)}F("MuiStepContent",["root","last","transition"]);const xe=t=>{const{classes:e,last:o}=t;return D({root:["root",o&&"last"],transition:["transition"]},he,e)},ve=b("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.last&&e.last]}})(V(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),Se=b(nt,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),fe=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepContent"}),{children:s,className:p,TransitionComponent:i=nt,transitionDuration:a="auto",TransitionProps:d,slots:h={},slotProps:m={},...c}=r,{orientation:v}=u.useContext(J),{active:y,last:g,expanded:x}=u.useContext(Y),f={...r,last:g},w=xe(f);let L=a;a==="auto"&&!i.muiSupportAuto&&(L=void 0);const S={slots:h,slotProps:{transition:d,...m}},[T,R]=ot("transition",{elementType:Se,externalForwardedProps:S,ownerState:f,className:w.transition,additionalProps:{in:y||x,timeout:L,unmountOnExit:!0}});return n.jsx(ve,{className:N(w.root,p),ref:o,ownerState:f,...c,children:n.jsx(T,{as:i,...R,children:s})})});function ge(t){return E("MuiStepper",t)}F("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const ye=t=>{const{orientation:e,nonLinear:o,alternativeLabel:r,classes:s}=t;return D({root:["root",e,o&&"nonLinear",r&&"alternativeLabel"]},ge,s)},be=b("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.nonLinear&&e.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),Ce=n.jsx(me,{}),we=u.forwardRef(function(e,o){const r=U({props:e,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:p=!1,children:i,className:a,component:d="div",connector:h=Ce,nonLinear:m=!1,orientation:c="horizontal",...v}=r,y={...r,nonLinear:m,alternativeLabel:p,orientation:c,component:d},g=ye(y),x=u.Children.toArray(i).filter(Boolean),f=x.map((L,S)=>u.cloneElement(L,{index:S,last:S+1===x.length,...L.props})),w=u.useMemo(()=>({activeStep:s,alternativeLabel:p,connector:h,nonLinear:m,orientation:c}),[s,p,h,m,c]);return n.jsx(J.Provider,{value:w,children:n.jsx(be,{as:d,ownerState:y,className:N(g.root,a),ref:o,...v,children:f})})}),rt=({children:t,...e})=>n.jsx(we,{...e,children:t});rt.__docgenInfo={description:"",methods:[],displayName:"Stepper"};const Je={title:"components/Modules/Stepper/Stepper",component:rt,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{nonLinear:{control:"boolean",description:"true, 讓整個 stepper 不需要照順序完成，搭配StepButton 讓每個 step 可以直接點選"},alternativeLabel:{control:"boolean",description:"true, 讓 stepper 的 label 在 stepper 的上方，否則在左側"},orientation:{control:"select",options:["horizontal","vertical"],description:"stepper 的方向"}},args:{}},tt={render:t=>{const e=["Select campaign settings","Create an ad group","Create an ad"],[o,r]=X.useState(0),[s,p]=X.useState({}),i=()=>e.length,a=()=>Object.keys(s).length,d=()=>o===i()-1,h=()=>a()===i(),m=()=>{const x=d()&&!h()?e.findIndex((f,w)=>!(w in s)):o+1;r(x)},c=()=>{r(x=>x-1)},v=x=>()=>{r(x)},y=()=>{p({...s,[o]:!0}),m()},g=()=>{r(0),p({})};return n.jsxs(W,{sx:{width:"1000px "},children:[n.jsx(rt,{activeStep:o,...t,children:e.map((x,f)=>n.jsx(bt,{completed:s[f],children:n.jsx(le,{color:"inherit",onClick:v(f),optional:f===2?n.jsx(O,{variant:"caption",children:"Optional"}):void 0,children:x})},x))}),n.jsx("div",{children:h()?n.jsxs(X.Fragment,{children:[n.jsx(O,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),n.jsxs(W,{sx:{display:"flex",flexDirection:"row",pt:2},children:[n.jsx(W,{sx:{flex:"1 1 auto"}}),n.jsx(H,{onClick:g,children:"Reset"})]})]}):n.jsxs(X.Fragment,{children:[n.jsxs(O,{sx:{mt:2,mb:1,py:1},children:["Step ",o+1]}),n.jsxs(W,{sx:{display:"flex",flexDirection:"row",pt:2},children:[n.jsx(H,{disabled:o===0,onClick:c,sx:{mr:1},children:"Back"}),n.jsx(W,{sx:{flex:"1 1 auto"}}),n.jsx(H,{onClick:m,sx:{mr:1},children:"Next"}),o!==e.length&&(s[o]?n.jsxs(O,{variant:"caption",sx:{display:"inline-block"},children:["Step ",o+1," already completed"]}):n.jsx(H,{onClick:y,children:a()===i()-1?"Finish":"Complete Step"}))]})]})})]})},args:{alternativeLabel:!0,nonLinear:!0,orientation:"horizontal"}},et={render:t=>{const[e,o]=X.useState(0),r=()=>{o(a=>a+1)},s=()=>{o(a=>a-1)},p=()=>{o(0)},i=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];return n.jsxs(W,{sx:{maxWidth:400},children:[n.jsx(rt,{activeStep:e,...t,children:i.map((a,d)=>n.jsxs(bt,{children:[n.jsx(lt,{optional:d===i.length-1?n.jsx(O,{variant:"caption",children:"Last step"}):null,children:a.label}),n.jsxs(fe,{children:[n.jsx(O,{children:a.description}),n.jsxs(W,{sx:{mb:2},children:[n.jsx(H,{onClick:r,sx:{mt:1,mr:1},children:d===i.length-1?"Finish":"Continue"}),n.jsx(H,{disabled:d===0,onClick:s,sx:{mt:1,mr:1},children:"Back"})]})]})]},a.label))}),e===i.length&&n.jsxs(Ft,{square:!0,elevation:0,sx:{p:3},children:[n.jsx(O,{children:"All steps completed - you're finished"}),n.jsx(H,{onClick:p,sx:{mt:1,mr:1},children:"Reset"})]})]})},args:{alternativeLabel:!1,orientation:"vertical"}};var mt,ht,xt;tt.parameters={...tt.parameters,docs:{...(mt=tt.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: args => {
    const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
      [k: number]: boolean;
    }>({});
    const totalSteps = () => {
      return steps.length;
    };
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
    const handleNext = () => {
      const newActiveStep = isLastStep() && !allStepsCompleted() ?
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
      setActiveStep(newActiveStep);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };
    const handleComplete = () => {
      setCompleted({
        ...completed,
        [activeStep]: true
      });
      handleNext();
    };
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };
    return <Box sx={{
      width: "1000px "
    }}>\r
        <Stepper activeStep={activeStep} {...args}>\r
          {steps.map((label, index) => <Step key={label} completed={completed[index]}>\r
              <StepButton color="inherit" onClick={handleStep(index)} optional={index === 2 ? <Typography variant="caption">Optional</Typography> : undefined}>\r
                {label}\r
              </StepButton>\r
            </Step>)}\r
        </Stepper>\r
        <div>\r
          {allStepsCompleted() ? <React.Fragment>\r
              <Typography sx={{
            mt: 2,
            mb: 1
          }}>\r
                All steps completed - you&apos;re finished\r
              </Typography>\r
              <Box sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2
          }}>\r
                <Box sx={{
              flex: "1 1 auto"
            }} />\r
                <Button onClick={handleReset}>Reset</Button>\r
              </Box>\r
            </React.Fragment> : <React.Fragment>\r
              <Typography sx={{
            mt: 2,
            mb: 1,
            py: 1
          }}>\r
                Step {activeStep + 1}\r
              </Typography>\r
              <Box sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2
          }}>\r
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{
              mr: 1
            }}>\r
                  Back\r
                </Button>\r
                <Box sx={{
              flex: "1 1 auto"
            }} />\r
                <Button onClick={handleNext} sx={{
              mr: 1
            }}>\r
                  Next\r
                </Button>\r
                {activeStep !== steps.length && (completed[activeStep] ? <Typography variant="caption" sx={{
              display: "inline-block"
            }}>\r
                      Step {activeStep + 1} already completed\r
                    </Typography> : <Button onClick={handleComplete}>\r
                      {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}\r
                    </Button>)}\r
              </Box>\r
            </React.Fragment>}\r
        </div>\r
      </Box>;
  },
  args: {
    alternativeLabel: true,
    nonLinear: true,
    orientation: "horizontal"
  }
}`,...(xt=(ht=tt.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var vt,St,ft;et.parameters={...et.parameters,docs:{...(vt=et.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: args => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    const handleReset = () => {
      setActiveStep(0);
    };
    const steps = [{
      label: "Select campaign settings",
      description: \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`
    }, {
      label: "Create an ad group",
      description: "An ad group contains one or more ads which target a shared set of keywords."
    }, {
      label: "Create an ad",
      description: \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`
    }];
    return <Box sx={{
      maxWidth: 400
    }}>\r
        <Stepper activeStep={activeStep} {...args}>\r
          {steps.map((step, index) => <Step key={step.label}>\r
              <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption">Last step</Typography> : null}>\r
                {step.label}\r
              </StepLabel>\r
              <StepContent>\r
                <Typography>{step.description}</Typography>\r
                <Box sx={{
              mb: 2
            }}>\r
                  <Button onClick={handleNext} sx={{
                mt: 1,
                mr: 1
              }}>\r
                    {index === steps.length - 1 ? "Finish" : "Continue"}\r
                  </Button>\r
                  <Button disabled={index === 0} onClick={handleBack} sx={{
                mt: 1,
                mr: 1
              }}>\r
                    Back\r
                  </Button>\r
                </Box>\r
              </StepContent>\r
            </Step>)}\r
        </Stepper>\r
        {activeStep === steps.length && <Paper square elevation={0} sx={{
        p: 3
      }}>\r
            <Typography>All steps completed - you&apos;re finished</Typography>\r
            <Button onClick={handleReset} sx={{
          mt: 1,
          mr: 1
        }}>\r
              Reset\r
            </Button>\r
          </Paper>}\r
      </Box>;
  },
  args: {
    alternativeLabel: false,
    orientation: "vertical"
  }
}`,...(ft=(St=et.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};const Ke=["Horizontal","Vertical"];export{tt as Horizontal,et as Vertical,Ke as __namedExportsOrder,Je as default};
