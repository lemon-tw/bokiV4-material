import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as x,R as Q}from"./index-D4H_InIO.js";import{u as O,d as Tt}from"./DefaultPropsProvider-RK5HW-AM.js";import{a6 as q,a5 as V,ar as zt,w as Mt,as as It,at as At,s as C,p as D,q as _,au as ct,u as G,av as nt,aw as ot,ax as yt,ay as Nt,a7 as tt,az as Pt,aA as $t,aB as it,a as $,T as E,B as F,x as Et}from"./Header-B-sHNX6_.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function Ft(t){return q("MuiCollapse",t)}V("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Dt=t=>{const{orientation:e,classes:n}=t,s={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return _(s,Ft,n)},Ut=C("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.state==="entered"&&e.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&e.hidden]}})(G(({theme:t})=>({height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),Wt=C("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Ht=C("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),et=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiCollapse"}),{addEndListener:r,children:c,className:l,collapsedSize:a="0px",component:p,easing:m,in:u,onEnter:d,onEntered:S,onEntering:b,onExit:y,onExited:h,onExiting:v,orientation:w="vertical",style:L,timeout:g=Tt.standard,TransitionComponent:k=zt,...R}=s,T={...s,orientation:w,collapsedSize:a},f=Dt(T),M=Mt(),A=It(),I=x.useRef(null),J=x.useRef(),U=typeof a=="number"?`${a}px`:a,z=w==="horizontal",N=z?"width":"height",W=x.useRef(null),bt=At(n,W),H=i=>j=>{if(i){const B=W.current;j===void 0?i(B):i(B,j)}},st=()=>I.current?I.current[z?"clientWidth":"clientHeight"]:0,Ct=H((i,j)=>{I.current&&z&&(I.current.style.position="absolute"),i.style[N]=U,d&&d(i,j)}),wt=H((i,j)=>{const B=st();I.current&&z&&(I.current.style.position="");const{duration:K,easing:X}=ct({style:L,timeout:g,easing:m},{mode:"enter"});if(g==="auto"){const pt=M.transitions.getAutoHeightDuration(B);i.style.transitionDuration=`${pt}ms`,J.current=pt}else i.style.transitionDuration=typeof K=="string"?K:`${K}ms`;i.style[N]=`${B}px`,i.style.transitionTimingFunction=X,b&&b(i,j)}),Rt=H((i,j)=>{i.style[N]="auto",S&&S(i,j)}),Lt=H(i=>{i.style[N]=`${st()}px`,y&&y(i)}),jt=H(h),Bt=H(i=>{const j=st(),{duration:B,easing:K}=ct({style:L,timeout:g,easing:m},{mode:"exit"});if(g==="auto"){const X=M.transitions.getAutoHeightDuration(j);i.style.transitionDuration=`${X}ms`,J.current=X}else i.style.transitionDuration=typeof B=="string"?B:`${B}ms`;i.style[N]=U,i.style.transitionTimingFunction=K,v&&v(i)}),kt=i=>{g==="auto"&&A.start(J.current||0,i),r&&r(W.current,i)};return o.jsx(k,{in:u,onEnter:Ct,onEntered:Rt,onEntering:wt,onExit:Lt,onExited:jt,onExiting:Bt,addEndListener:kt,nodeRef:W,timeout:g==="auto"?null:g,...R,children:(i,{ownerState:j,...B})=>o.jsx(Ut,{as:p,className:D(f.root,l,{entered:f.entered,exited:!u&&U==="0px"&&f.hidden}[i]),style:{[z?"minWidth":"minHeight"]:U,...L},ref:bt,ownerState:{...T,state:i},...B,children:o.jsx(Wt,{ownerState:{...T,state:i},className:f.wrapper,ref:I,children:o.jsx(Ht,{ownerState:{...T,state:i},className:f.wrapperInner,children:c})})})})});et&&(et.muiSupportAuto=!0);function Ot(t){return q("MuiStep",t)}V("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const qt=t=>{const{classes:e,orientation:n,alternativeLabel:s,completed:r}=t;return _({root:["root",n,s&&"alternativeLabel",r&&"completed"]},Ot,e)},Vt=C("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.alternativeLabel&&e.alternativeLabel,n.completed&&e.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),ft=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiStep"}),{active:r,children:c,className:l,component:a="div",completed:p,disabled:m,expanded:u=!1,index:d,last:S,...b}=s,{activeStep:y,connector:h,alternativeLabel:v,orientation:w,nonLinear:L}=x.useContext(nt);let[g=!1,k=!1,R=!1]=[r,p,m];y===d?g=r!==void 0?r:!0:!L&&y>d?k=p!==void 0?p:!0:!L&&y<d&&(R=m!==void 0?m:!0);const T=x.useMemo(()=>({index:d,last:S,expanded:u,icon:d+1,active:g,completed:k,disabled:R}),[d,S,u,g,k,R]),f={...s,active:g,orientation:w,alternativeLabel:v,completed:k,disabled:R,expanded:u,component:a},M=qt(f),A=o.jsxs(Vt,{as:a,className:D(M.root,l),ref:n,ownerState:f,...b,children:[h&&v&&d!==0?h:null,c]});return o.jsx(ot.Provider,{value:T,children:h&&!v&&d!==0?o.jsxs(x.Fragment,{children:[h,A]}):A})}),_t=yt(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Gt=yt(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Jt(t){return q("MuiStepIcon",t)}const at=V("MuiStepIcon",["root","active","completed","error","text"]);var dt;const Kt=t=>{const{classes:e,active:n,completed:s,error:r}=t;return _({root:["root",n&&"active",s&&"completed",r&&"error"],text:["text"]},Jt,e)},rt=C(Nt,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(G(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${at.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${at.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${at.error}`]:{color:(t.vars||t).palette.error.main}}))),Qt=C("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(G(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),Xt=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiStepIcon"}),{active:r=!1,className:c,completed:l=!1,error:a=!1,icon:p,...m}=s,u={...s,active:r,completed:l,error:a},d=Kt(u);if(typeof p=="number"||typeof p=="string"){const S=D(c,d.root);return a?o.jsx(rt,{as:Gt,className:S,ref:n,ownerState:u,...m}):l?o.jsx(rt,{as:_t,className:S,ref:n,ownerState:u,...m}):o.jsxs(rt,{className:S,ref:n,ownerState:u,...m,children:[dt||(dt=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx(Qt,{className:d.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:p})]})}return p});function Yt(t){return q("MuiStepLabel",t)}const P=V("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Zt=t=>{const{classes:e,orientation:n,active:s,completed:r,error:c,disabled:l,alternativeLabel:a}=t;return _({root:["root",n,c&&"error",l&&"disabled",a&&"alternativeLabel"],label:["label",s&&"active",r&&"completed",c&&"error",l&&"disabled",a&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",r&&"completed",c&&"error",l&&"disabled",a&&"alternativeLabel"],labelContainer:["labelContainer",a&&"alternativeLabel"]},Yt,e)},te=C("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),ee=C("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(G(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}}))),ne=C("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}}),oe=C("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(G(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}}))),lt=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiStepLabel"}),{children:r,className:c,componentsProps:l={},error:a=!1,icon:p,optional:m,slots:u={},slotProps:d={},StepIconComponent:S,StepIconProps:b,...y}=s,{alternativeLabel:h,orientation:v}=x.useContext(nt),{active:w,disabled:L,completed:g,icon:k}=x.useContext(ot),R=p||k;let T=S;R&&!T&&(T=Xt);const f={...s,active:w,alternativeLabel:h,completed:g,disabled:L,error:a,orientation:v},M=Zt(f),A={slots:u,slotProps:{stepIcon:b,...l,...d}},[I,J]=tt("root",{elementType:te,externalForwardedProps:{...A,...y},ownerState:f,ref:n,className:D(M.root,c)}),[U,z]=tt("label",{elementType:ee,externalForwardedProps:A,ownerState:f}),[N,W]=tt("stepIcon",{elementType:T,externalForwardedProps:A,ownerState:f});return o.jsxs(I,{...J,children:[R||N?o.jsx(ne,{className:M.iconContainer,ownerState:f,children:o.jsx(N,{completed:g,active:w,error:a,icon:R,...W})}):null,o.jsxs(oe,{className:M.labelContainer,ownerState:f,children:[r?o.jsx(U,{...z,className:D(M.label,z==null?void 0:z.className),children:r}):null,m]})]})});lt.muiName="StepLabel";function se(t){return q("MuiStepButton",t)}const ut=V("MuiStepButton",["root","horizontal","vertical","touchRipple"]),ae=t=>{const{classes:e,orientation:n}=t;return _({root:["root",n],touchRipple:["touchRipple"]},se,e)},re=C($t,{name:"MuiStepButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${ut.touchRipple}`]:e.touchRipple},e.root,e[n.orientation]]}})({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box",[`& .${ut.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"},variants:[{props:{orientation:"vertical"},style:{justifyContent:"flex-start",padding:"8px",margin:"-8px"}}]}),ie=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiStepButton"}),{children:r,className:c,icon:l,optional:a,...p}=s,{disabled:m,active:u}=x.useContext(ot),{orientation:d}=x.useContext(nt),S={...s,orientation:d},b=ae(S),y={icon:l,optional:a},h=Pt(r,["StepLabel"])?x.cloneElement(r,y):o.jsx(lt,{...y,children:r});return o.jsx(re,{focusRipple:!0,disabled:m,TouchRippleProps:{className:b.touchRipple},className:D(b.root,c),ref:n,ownerState:S,"aria-current":u?"step":void 0,...p,children:h})});function le(t){return q("MuiStepContent",t)}V("MuiStepContent",["root","last","transition"]);const pe=t=>{const{classes:e,last:n}=t;return _({root:["root",n&&"last"],transition:["transition"]},le,e)},ce=C("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.last&&e.last]}})(G(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),de=C(et,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),ue=x.forwardRef(function(e,n){const s=O({props:e,name:"MuiStepContent"}),{children:r,className:c,TransitionComponent:l=et,transitionDuration:a="auto",TransitionProps:p,slots:m={},slotProps:u={},...d}=s,{orientation:S}=x.useContext(nt),{active:b,last:y,expanded:h}=x.useContext(ot),v={...s,last:y},w=pe(v);let L=a;a==="auto"&&!l.muiSupportAuto&&(L=void 0);const g={slots:m,slotProps:{transition:p,...u}},[k,R]=tt("transition",{elementType:de,externalForwardedProps:g,ownerState:v,className:w.transition,additionalProps:{in:b||h,timeout:L,unmountOnExit:!0}});return o.jsx(ce,{className:D(w.root,c),ref:n,ownerState:v,...d,children:o.jsx(k,{as:l,...R,children:r})})}),fe={title:"components/Modules/Stepper/Stepper",component:it,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{nonLinear:{control:"boolean",description:"true, 讓整個 stepper 不需要照順序完成，搭配StepButton 讓每個 step 可以直接點選"},alternativeLabel:{control:"boolean",description:"true, 讓 stepper 的 label 在 stepper 的上方，否則在左側"},orientation:{control:"select",options:["horizontal","vertical"],description:"stepper 的方向"}},args:{}},Y={render:t=>{const e=["Select campaign settings","Create an ad group","Create an ad"],[n,s]=Q.useState(0),[r,c]=Q.useState({}),l=()=>e.length,a=()=>Object.keys(r).length,p=()=>n===l()-1,m=()=>a()===l(),u=()=>{const h=p()&&!m()?e.findIndex((v,w)=>!(w in r)):n+1;s(h)},d=()=>{s(h=>h-1)},S=h=>()=>{s(h)},b=()=>{c({...r,[n]:!0}),u()},y=()=>{s(0),c({})};return o.jsxs($,{sx:{width:"1000px "},children:[o.jsx(it,{activeStep:n,...t,children:e.map((h,v)=>o.jsx(ft,{completed:r[v],children:o.jsx(ie,{color:"inherit",onClick:S(v),optional:v===2?o.jsx(E,{variant:"caption",children:"Optional"}):void 0,children:h})},h))}),o.jsx("div",{children:m()?o.jsxs(Q.Fragment,{children:[o.jsx(E,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),o.jsxs($,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx($,{sx:{flex:"1 1 auto"}}),o.jsx(F,{onClick:y,children:"Reset"})]})]}):o.jsxs(Q.Fragment,{children:[o.jsxs(E,{sx:{mt:2,mb:1,py:1},children:["Step ",n+1]}),o.jsxs($,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx(F,{disabled:n===0,onClick:d,sx:{mr:1},children:"Back"}),o.jsx($,{sx:{flex:"1 1 auto"}}),o.jsx(F,{onClick:u,sx:{mr:1},children:"Next"}),n!==e.length&&(r[n]?o.jsxs(E,{variant:"caption",sx:{display:"inline-block"},children:["Step ",n+1," already completed"]}):o.jsx(F,{onClick:b,children:a()===l()-1?"Finish":"Complete Step"}))]})]})})]})},args:{alternativeLabel:!0,nonLinear:!0,orientation:"horizontal"}},Z={render:t=>{const[e,n]=Q.useState(0),s=()=>{n(a=>a+1)},r=()=>{n(a=>a-1)},c=()=>{n(0)},l=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];return o.jsxs($,{sx:{maxWidth:400},children:[o.jsx(it,{activeStep:e,...t,children:l.map((a,p)=>o.jsxs(ft,{children:[o.jsx(lt,{optional:p===l.length-1?o.jsx(E,{variant:"caption",children:"Last step"}):null,children:a.label}),o.jsxs(ue,{children:[o.jsx(E,{children:a.description}),o.jsxs($,{sx:{mb:2},children:[o.jsx(F,{onClick:s,sx:{mt:1,mr:1},children:p===l.length-1?"Finish":"Continue"}),o.jsx(F,{disabled:p===0,onClick:r,sx:{mt:1,mr:1},children:"Back"})]})]})]},a.label))}),e===l.length&&o.jsxs(Et,{square:!0,elevation:0,sx:{p:3},children:[o.jsx(E,{children:"All steps completed - you're finished"}),o.jsx(F,{onClick:c,sx:{mt:1,mr:1},children:"Reset"})]})]})},args:{alternativeLabel:!1,orientation:"vertical"}};var ht,mt,xt;Y.parameters={...Y.parameters,docs:{...(ht=Y.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
    }}>
        <Stepper activeStep={activeStep} {...args}>
          {steps.map((label, index) => <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)} optional={index === 2 ? <Typography variant="caption">Optional</Typography> : undefined}>
                {label}
              </StepButton>
            </Step>)}
        </Stepper>
        <div>
          {allStepsCompleted() ? <React.Fragment>
              <Typography sx={{
            mt: 2,
            mb: 1
          }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2
          }}>
                <Box sx={{
              flex: "1 1 auto"
            }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment> : <React.Fragment>
              <Typography sx={{
            mt: 2,
            mb: 1,
            py: 1
          }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2
          }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{
              mr: 1
            }}>
                  Back
                </Button>
                <Box sx={{
              flex: "1 1 auto"
            }} />
                <Button onClick={handleNext} sx={{
              mr: 1
            }}>
                  Next
                </Button>
                {activeStep !== steps.length && (completed[activeStep] ? <Typography variant="caption" sx={{
              display: "inline-block"
            }}>
                      Step {activeStep + 1} already completed
                    </Typography> : <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
                    </Button>)}
              </Box>
            </React.Fragment>}
        </div>
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
    }}>
        <Stepper activeStep={activeStep} {...args}>
          {steps.map((step, index) => <Step key={step.label}>
              <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption">Last step</Typography> : null}>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{
              mb: 2
            }}>
                  <Button onClick={handleNext} sx={{
                mt: 1,
                mr: 1
              }}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{
                mt: 1,
                mr: 1
              }}>
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>)}
        </Stepper>
        {activeStep === steps.length && <Paper square elevation={0} sx={{
        p: 3
      }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{
          mt: 1,
          mr: 1
        }}>
              Reset
            </Button>
          </Paper>}
      </Box>;
  },
  args: {
    alternativeLabel: false,
    orientation: "vertical"
  }
}`,...(gt=(vt=Z.parameters)==null?void 0:vt.docs)==null?void 0:gt.source}}};const be=["Horizontal","Vertical"];export{Y as Horizontal,Z as Vertical,be as __namedExportsOrder,fe as default};
