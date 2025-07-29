import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as x,R as J}from"./index-D4H_InIO.js";import"./lemonTheme-DGlRE1oP.js";import{x as H,w as V,K as Tt,o as Mt,N as zt,u as It,s as C,g as D,h as _,O as ct,m as q,Q as yt,S as At,y as tt,R as Nt,j as Pt,a as $,T as E,B as F,P as $t}from"./Typography-2_fYrsYp.js";import{O as nt,Q as ot,U as it}from"./RichTooltip-Cx3E0wiy.js";import{u as Q,f as Et}from"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function Ft(t){return H("MuiCollapse",t)}V("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Dt=t=>{const{orientation:e,classes:n}=t,r={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return _(r,Ft,n)},Ut=C("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.state==="entered"&&e.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&e.hidden]}})(q(({theme:t})=>({height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),Wt=C("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Ot=C("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),et=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiCollapse"}),{addEndListener:a,children:c,className:l,collapsedSize:s="0px",component:p,easing:m,in:u,onEnter:d,onEntered:S,onEntering:b,onExit:y,onExited:h,onExiting:v,orientation:w="vertical",style:L,timeout:g=Et.standard,TransitionComponent:k=Tt,...R}=r,T={...r,orientation:w,collapsedSize:s},f=Dt(T),z=Mt(),A=zt(),I=x.useRef(null),K=x.useRef(),U=typeof s=="number"?`${s}px`:s,M=w==="horizontal",N=M?"width":"height",W=x.useRef(null),bt=It(n,W),O=i=>j=>{if(i){const B=W.current;j===void 0?i(B):i(B,j)}},rt=()=>I.current?I.current[M?"clientWidth":"clientHeight"]:0,Ct=O((i,j)=>{I.current&&M&&(I.current.style.position="absolute"),i.style[N]=U,d&&d(i,j)}),wt=O((i,j)=>{const B=rt();I.current&&M&&(I.current.style.position="");const{duration:G,easing:X}=ct({style:L,timeout:g,easing:m},{mode:"enter"});if(g==="auto"){const pt=z.transitions.getAutoHeightDuration(B);i.style.transitionDuration=`${pt}ms`,K.current=pt}else i.style.transitionDuration=typeof G=="string"?G:`${G}ms`;i.style[N]=`${B}px`,i.style.transitionTimingFunction=X,b&&b(i,j)}),Rt=O((i,j)=>{i.style[N]="auto",S&&S(i,j)}),Lt=O(i=>{i.style[N]=`${rt()}px`,y&&y(i)}),jt=O(h),Bt=O(i=>{const j=rt(),{duration:B,easing:G}=ct({style:L,timeout:g,easing:m},{mode:"exit"});if(g==="auto"){const X=z.transitions.getAutoHeightDuration(j);i.style.transitionDuration=`${X}ms`,K.current=X}else i.style.transitionDuration=typeof B=="string"?B:`${B}ms`;i.style[N]=U,i.style.transitionTimingFunction=G,v&&v(i)}),kt=i=>{g==="auto"&&A.start(K.current||0,i),a&&a(W.current,i)};return o.jsx(k,{in:u,onEnter:Ct,onEntered:Rt,onEntering:wt,onExit:Lt,onExited:jt,onExiting:Bt,addEndListener:kt,nodeRef:W,timeout:g==="auto"?null:g,...R,children:(i,{ownerState:j,...B})=>o.jsx(Ut,{as:p,className:D(f.root,l,{entered:f.entered,exited:!u&&U==="0px"&&f.hidden}[i]),style:{[M?"minWidth":"minHeight"]:U,...L},ref:bt,ownerState:{...T,state:i},...B,children:o.jsx(Wt,{ownerState:{...T,state:i},className:f.wrapper,ref:I,children:o.jsx(Ot,{ownerState:{...T,state:i},className:f.wrapperInner,children:c})})})})});et&&(et.muiSupportAuto=!0);function Ht(t){return H("MuiStep",t)}V("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Vt=t=>{const{classes:e,orientation:n,alternativeLabel:r,completed:a}=t;return _({root:["root",n,r&&"alternativeLabel",a&&"completed"]},Ht,e)},_t=C("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.alternativeLabel&&e.alternativeLabel,n.completed&&e.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),ft=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiStep"}),{active:a,children:c,className:l,component:s="div",completed:p,disabled:m,expanded:u=!1,index:d,last:S,...b}=r,{activeStep:y,connector:h,alternativeLabel:v,orientation:w,nonLinear:L}=x.useContext(nt);let[g=!1,k=!1,R=!1]=[a,p,m];y===d?g=a!==void 0?a:!0:!L&&y>d?k=p!==void 0?p:!0:!L&&y<d&&(R=m!==void 0?m:!0);const T=x.useMemo(()=>({index:d,last:S,expanded:u,icon:d+1,active:g,completed:k,disabled:R}),[d,S,u,g,k,R]),f={...r,active:g,orientation:w,alternativeLabel:v,completed:k,disabled:R,expanded:u,component:s},z=Vt(f),A=o.jsxs(_t,{as:s,className:D(z.root,l),ref:n,ownerState:f,...b,children:[h&&v&&d!==0?h:null,c]});return o.jsx(ot.Provider,{value:T,children:h&&!v&&d!==0?o.jsxs(x.Fragment,{children:[h,A]}):A})}),qt=yt(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Qt=yt(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Kt(t){return H("MuiStepIcon",t)}const st=V("MuiStepIcon",["root","active","completed","error","text"]);var dt;const Gt=t=>{const{classes:e,active:n,completed:r,error:a}=t;return _({root:["root",n&&"active",r&&"completed",a&&"error"],text:["text"]},Kt,e)},at=C(At,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(q(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${st.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${st.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${st.error}`]:{color:(t.vars||t).palette.error.main}}))),Jt=C("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(q(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),Xt=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiStepIcon"}),{active:a=!1,className:c,completed:l=!1,error:s=!1,icon:p,...m}=r,u={...r,active:a,completed:l,error:s},d=Gt(u);if(typeof p=="number"||typeof p=="string"){const S=D(c,d.root);return s?o.jsx(at,{as:Qt,className:S,ref:n,ownerState:u,...m}):l?o.jsx(at,{as:qt,className:S,ref:n,ownerState:u,...m}):o.jsxs(at,{className:S,ref:n,ownerState:u,...m,children:[dt||(dt=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx(Jt,{className:d.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:p})]})}return p});function Yt(t){return H("MuiStepLabel",t)}const P=V("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Zt=t=>{const{classes:e,orientation:n,active:r,completed:a,error:c,disabled:l,alternativeLabel:s}=t;return _({root:["root",n,c&&"error",l&&"disabled",s&&"alternativeLabel"],label:["label",r&&"active",a&&"completed",c&&"error",l&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",a&&"completed",c&&"error",l&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]},Yt,e)},te=C("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),ee=C("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(q(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}}))),ne=C("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}}),oe=C("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(q(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}}))),lt=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiStepLabel"}),{children:a,className:c,componentsProps:l={},error:s=!1,icon:p,optional:m,slots:u={},slotProps:d={},StepIconComponent:S,StepIconProps:b,...y}=r,{alternativeLabel:h,orientation:v}=x.useContext(nt),{active:w,disabled:L,completed:g,icon:k}=x.useContext(ot),R=p||k;let T=S;R&&!T&&(T=Xt);const f={...r,active:w,alternativeLabel:h,completed:g,disabled:L,error:s,orientation:v},z=Zt(f),A={slots:u,slotProps:{stepIcon:b,...l,...d}},[I,K]=tt("root",{elementType:te,externalForwardedProps:{...A,...y},ownerState:f,ref:n,className:D(z.root,c)}),[U,M]=tt("label",{elementType:ee,externalForwardedProps:A,ownerState:f}),[N,W]=tt("stepIcon",{elementType:T,externalForwardedProps:A,ownerState:f});return o.jsxs(I,{...K,children:[R||N?o.jsx(ne,{className:z.iconContainer,ownerState:f,children:o.jsx(N,{completed:g,active:w,error:s,icon:R,...W})}):null,o.jsxs(oe,{className:z.labelContainer,ownerState:f,children:[a?o.jsx(U,{...M,className:D(z.label,M==null?void 0:M.className),children:a}):null,m]})]})});lt.muiName="StepLabel";function re(t){return H("MuiStepButton",t)}const ut=V("MuiStepButton",["root","horizontal","vertical","touchRipple"]),se=t=>{const{classes:e,orientation:n}=t;return _({root:["root",n],touchRipple:["touchRipple"]},re,e)},ae=C(Pt,{name:"MuiStepButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${ut.touchRipple}`]:e.touchRipple},e.root,e[n.orientation]]}})({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box",[`& .${ut.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"},variants:[{props:{orientation:"vertical"},style:{justifyContent:"flex-start",padding:"8px",margin:"-8px"}}]}),ie=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiStepButton"}),{children:a,className:c,icon:l,optional:s,...p}=r,{disabled:m,active:u}=x.useContext(ot),{orientation:d}=x.useContext(nt),S={...r,orientation:d},b=se(S),y={icon:l,optional:s},h=Nt(a,["StepLabel"])?x.cloneElement(a,y):o.jsx(lt,{...y,children:a});return o.jsx(ae,{focusRipple:!0,disabled:m,TouchRippleProps:{className:b.touchRipple},className:D(b.root,c),ref:n,ownerState:S,"aria-current":u?"step":void 0,...p,children:h})});function le(t){return H("MuiStepContent",t)}V("MuiStepContent",["root","last","transition"]);const pe=t=>{const{classes:e,last:n}=t;return _({root:["root",n&&"last"],transition:["transition"]},le,e)},ce=C("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.last&&e.last]}})(q(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),de=C(et,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),ue=x.forwardRef(function(e,n){const r=Q({props:e,name:"MuiStepContent"}),{children:a,className:c,TransitionComponent:l=et,transitionDuration:s="auto",TransitionProps:p,slots:m={},slotProps:u={},...d}=r,{orientation:S}=x.useContext(nt),{active:b,last:y,expanded:h}=x.useContext(ot),v={...r,last:y},w=pe(v);let L=s;s==="auto"&&!l.muiSupportAuto&&(L=void 0);const g={slots:m,slotProps:{transition:p,...u}},[k,R]=tt("transition",{elementType:de,externalForwardedProps:g,ownerState:v,className:w.transition,additionalProps:{in:b||h,timeout:L,unmountOnExit:!0}});return o.jsx(ce,{className:D(w.root,c),ref:n,ownerState:v,...d,children:o.jsx(k,{as:l,...R,children:a})})}),Ce={title:"components/Modules/Stepper/Stepper",component:it,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{nonLinear:{control:"boolean",description:"true, 讓整個 stepper 不需要照順序完成，搭配StepButton 讓每個 step 可以直接點選"},alternativeLabel:{control:"boolean",description:"true, 讓 stepper 的 label 在 stepper 的上方，否則在左側"},orientation:{control:"select",options:["horizontal","vertical"],description:"stepper 的方向"}},args:{}},Y={render:t=>{const e=["Select campaign settings","Create an ad group","Create an ad"],[n,r]=J.useState(0),[a,c]=J.useState({}),l=()=>e.length,s=()=>Object.keys(a).length,p=()=>n===l()-1,m=()=>s()===l(),u=()=>{const h=p()&&!m()?e.findIndex((v,w)=>!(w in a)):n+1;r(h)},d=()=>{r(h=>h-1)},S=h=>()=>{r(h)},b=()=>{c({...a,[n]:!0}),u()},y=()=>{r(0),c({})};return o.jsxs($,{sx:{width:"1000px "},children:[o.jsx(it,{activeStep:n,...t,children:e.map((h,v)=>o.jsx(ft,{completed:a[v],children:o.jsx(ie,{color:"inherit",onClick:S(v),optional:v===2?o.jsx(E,{variant:"caption",children:"Optional"}):void 0,children:h})},h))}),o.jsx("div",{children:m()?o.jsxs(J.Fragment,{children:[o.jsx(E,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),o.jsxs($,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx($,{sx:{flex:"1 1 auto"}}),o.jsx(F,{onClick:y,children:"Reset"})]})]}):o.jsxs(J.Fragment,{children:[o.jsxs(E,{sx:{mt:2,mb:1,py:1},children:["Step ",n+1]}),o.jsxs($,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx(F,{disabled:n===0,onClick:d,sx:{mr:1},children:"Back"}),o.jsx($,{sx:{flex:"1 1 auto"}}),o.jsx(F,{onClick:u,sx:{mr:1},children:"Next"}),n!==e.length&&(a[n]?o.jsxs(E,{variant:"caption",sx:{display:"inline-block"},children:["Step ",n+1," already completed"]}):o.jsx(F,{onClick:b,children:s()===l()-1?"Finish":"Complete Step"}))]})]})})]})},args:{alternativeLabel:!0,nonLinear:!0,orientation:"horizontal"}},Z={render:t=>{const[e,n]=J.useState(0),r=()=>{n(s=>s+1)},a=()=>{n(s=>s-1)},c=()=>{n(0)},l=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];return o.jsxs($,{sx:{maxWidth:400},children:[o.jsx(it,{activeStep:e,...t,children:l.map((s,p)=>o.jsxs(ft,{children:[o.jsx(lt,{optional:p===l.length-1?o.jsx(E,{variant:"caption",children:"Last step"}):null,children:s.label}),o.jsxs(ue,{children:[o.jsx(E,{children:s.description}),o.jsxs($,{sx:{mb:2},children:[o.jsx(F,{onClick:r,sx:{mt:1,mr:1},children:p===l.length-1?"Finish":"Continue"}),o.jsx(F,{disabled:p===0,onClick:a,sx:{mt:1,mr:1},children:"Back"})]})]})]},s.label))}),e===l.length&&o.jsxs($t,{square:!0,elevation:0,sx:{p:3},children:[o.jsx(E,{children:"All steps completed - you're finished"}),o.jsx(F,{onClick:c,sx:{mt:1,mr:1},children:"Reset"})]})]})},args:{alternativeLabel:!1,orientation:"vertical"}};var ht,mt,xt;Y.parameters={...Y.parameters,docs:{...(ht=Y.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(xt=(mt=Y.parameters)==null?void 0:mt.docs)==null?void 0:xt.source}}};var St,vt,gt;Z.parameters={...Z.parameters,docs:{...(St=Z.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(gt=(vt=Z.parameters)==null?void 0:vt.docs)==null?void 0:gt.source}}};const we=["Horizontal","Vertical"];export{Y as Horizontal,Z as Vertical,we as __namedExportsOrder,Ce as default};
