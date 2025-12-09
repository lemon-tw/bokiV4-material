import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as x,R as P}from"./index-D4H_InIO.js";import"./lemonTheme-CCBhZM0j.js";import{ah as _,ai as q,aj as ue,ak as ae,al as J,B as k}from"./Calendar-kXuUiWby.js";import{h as $,g as F,s as y,c as I,b as z,j as re,k as me,m as U,i as V,l as xe,B,T,P as he}from"./BottomModal-ksZ4QMhy.js";import{u as D}from"./DefaultPropsProvider-CjMFwZtl.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";function Se(e){return $("MuiStep",e)}F("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const ve=e=>{const{classes:t,orientation:n,alternativeLabel:s,completed:a}=e;return z({root:["root",n,s&&"alternativeLabel",a&&"completed"]},Se,t)},ge=y("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),ie=x.forwardRef(function(t,n){const s=D({props:t,name:"MuiStep"}),{active:a,children:p,className:i,component:r="div",completed:l,disabled:m,expanded:u=!1,index:c,last:h,...g}=s,{activeStep:v,connector:d,alternativeLabel:S,orientation:C,nonLinear:w}=x.useContext(_);let[f=!1,R=!1,b=!1]=[a,l,m];v===c?f=a!==void 0?a:!0:!w&&v>c?R=l!==void 0?l:!0:!w&&v<c&&(b=m!==void 0?m:!0);const N=x.useMemo(()=>({index:c,last:h,expanded:u,icon:c+1,active:f,completed:R,disabled:b}),[c,h,u,f,R,b]),L={...s,active:f,orientation:C,alternativeLabel:S,completed:R,disabled:b,expanded:u,component:r},A=ve(L),M=o.jsxs(ge,{as:r,className:I(A.root,i),ref:n,ownerState:L,...g,children:[d&&S&&c!==0?d:null,p]});return o.jsx(q.Provider,{value:N,children:d&&!S&&c!==0?o.jsxs(x.Fragment,{children:[d,M]}):M})}),be=re(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),ye=re(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Ce(e){return $("MuiStepIcon",e)}const H=F("MuiStepIcon",["root","active","completed","error","text"]);var X;const fe=e=>{const{classes:t,active:n,completed:s,error:a}=e;return z({root:["root",n&&"active",s&&"completed",a&&"error"],text:["text"]},Ce,t)},G=y(me,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(U(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${H.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${H.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${H.error}`]:{color:(e.vars||e).palette.error.main}}))),Le=y("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(U(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),Re=x.forwardRef(function(t,n){const s=D({props:t,name:"MuiStepIcon"}),{active:a=!1,className:p,completed:i=!1,error:r=!1,icon:l,...m}=s,u={...s,active:a,completed:i,error:r},c=fe(u);if(typeof l=="number"||typeof l=="string"){const h=I(p,c.root);return r?o.jsx(G,{as:ye,className:h,ref:n,ownerState:u,...m}):i?o.jsx(G,{as:be,className:h,ref:n,ownerState:u,...m}):o.jsxs(G,{className:h,ref:n,ownerState:u,...m,children:[X||(X=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx(Le,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:l})]})}return l});function je(e){return $("MuiStepLabel",e)}const j=F("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),we=e=>{const{classes:t,orientation:n,active:s,completed:a,error:p,disabled:i,alternativeLabel:r}=e;return z({root:["root",n,p&&"error",i&&"disabled",r&&"alternativeLabel"],label:["label",s&&"active",a&&"completed",p&&"error",i&&"disabled",r&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",a&&"completed",p&&"error",i&&"disabled",r&&"alternativeLabel"],labelContainer:["labelContainer",r&&"alternativeLabel"]},je,t)},Be=y("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${j.alternativeLabel}`]:{flexDirection:"column"},[`&.${j.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),ke=y("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(U(({theme:e})=>({...e.typography.body2,display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${j.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${j.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${j.alternativeLabel}`]:{marginTop:16},[`&.${j.error}`]:{color:(e.vars||e).palette.error.main}}))),Te=y("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${j.alternativeLabel}`]:{paddingRight:0}}),Ae=y("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(U(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${j.alternativeLabel}`]:{textAlign:"center"}}))),K=x.forwardRef(function(t,n){const s=D({props:t,name:"MuiStepLabel"}),{children:a,className:p,componentsProps:i={},error:r=!1,icon:l,optional:m,slots:u={},slotProps:c={},StepIconComponent:h,StepIconProps:g,...v}=s,{alternativeLabel:d,orientation:S}=x.useContext(_),{active:C,disabled:w,completed:f,icon:R}=x.useContext(q),b=l||R;let N=h;b&&!N&&(N=Re);const L={...s,active:C,alternativeLabel:d,completed:f,disabled:w,error:r,orientation:S},A=we(L),M={slots:u,slotProps:{stepIcon:g,...i,...c}},[le,pe]=V("root",{elementType:Be,externalForwardedProps:{...M,...v},ownerState:L,ref:n,className:I(A.root,p)}),[ce,E]=V("label",{elementType:ke,externalForwardedProps:M,ownerState:L}),[Q,de]=V("stepIcon",{elementType:N,externalForwardedProps:M,ownerState:L});return o.jsxs(le,{...pe,children:[b||Q?o.jsx(Te,{className:A.iconContainer,ownerState:L,children:o.jsx(Q,{completed:f,active:C,error:r,icon:b,...de})}):null,o.jsxs(Ae,{className:A.labelContainer,ownerState:L,children:[a?o.jsx(ce,{...E,className:I(A.label,E==null?void 0:E.className),children:a}):null,m]})]})});K.muiName="StepLabel";function Me(e){return $("MuiStepButton",e)}const Y=F("MuiStepButton",["root","horizontal","vertical","touchRipple"]),Ie=e=>{const{classes:t,orientation:n}=e;return z({root:["root",n],touchRipple:["touchRipple"]},Me,t)},Ne=y(xe,{name:"MuiStepButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Y.touchRipple}`]:t.touchRipple},t.root,t[n.orientation]]}})({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box",[`& .${Y.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"},variants:[{props:{orientation:"vertical"},style:{justifyContent:"flex-start",padding:"8px",margin:"-8px"}}]}),Pe=x.forwardRef(function(t,n){const s=D({props:t,name:"MuiStepButton"}),{children:a,className:p,icon:i,optional:r,...l}=s,{disabled:m,active:u}=x.useContext(q),{orientation:c}=x.useContext(_),h={...s,orientation:c},g=Ie(h),v={icon:i,optional:r},d=ue(a,["StepLabel"])?x.cloneElement(a,v):o.jsx(K,{...v,children:a});return o.jsx(Ne,{focusRipple:!0,disabled:m,TouchRippleProps:{className:g.touchRipple},className:I(g.root,p),ref:n,ownerState:h,"aria-current":u?"step":void 0,...l,children:d})});function $e(e){return $("MuiStepContent",e)}F("MuiStepContent",["root","last","transition"]);const Fe=e=>{const{classes:t,last:n}=e;return z({root:["root",n&&"last"],transition:["transition"]},$e,t)},ze=y("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.last&&t.last]}})(U(({theme:e})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),Ue=y(ae,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),De=x.forwardRef(function(t,n){const s=D({props:t,name:"MuiStepContent"}),{children:a,className:p,TransitionComponent:i=ae,transitionDuration:r="auto",TransitionProps:l,slots:m={},slotProps:u={},...c}=s,{orientation:h}=x.useContext(_),{active:g,last:v,expanded:d}=x.useContext(q),S={...s,last:v},C=Fe(S);let w=r;r==="auto"&&!i.muiSupportAuto&&(w=void 0);const f={slots:m,slotProps:{transition:l,...u}},[R,b]=V("transition",{elementType:Ue,externalForwardedProps:f,ownerState:S,className:C.transition,additionalProps:{in:g||d,timeout:w,unmountOnExit:!0}});return o.jsx(ze,{className:I(C.root,p),ref:n,ownerState:S,...c,children:o.jsx(R,{as:i,...b,children:a})})}),Ke={title:"components/Modules/Stepper/Stepper",component:J,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{nonLinear:{control:"boolean",description:"true, 讓整個 stepper 不需要照順序完成，搭配StepButton 讓每個 step 可以直接點選"},alternativeLabel:{control:"boolean",description:"true, 讓 stepper 的 label 在 stepper 的上方，否則在左側"},orientation:{control:"select",options:["horizontal","vertical"],description:"stepper 的方向"}},args:{}},O={render:e=>{const t=["Select campaign settings","Create an ad group","Create an ad"],[n,s]=P.useState(0),[a,p]=P.useState({}),i=()=>t.length,r=()=>Object.keys(a).length,l=()=>n===i()-1,m=()=>r()===i(),u=()=>{const d=l()&&!m()?t.findIndex((S,C)=>!(C in a)):n+1;s(d)},c=()=>{s(d=>d-1)},h=d=>()=>{s(d)},g=()=>{p({...a,[n]:!0}),u()},v=()=>{s(0),p({})};return o.jsxs(B,{sx:{width:"1000px "},children:[o.jsx(J,{activeStep:n,...e,children:t.map((d,S)=>o.jsx(ie,{completed:a[S],children:o.jsx(Pe,{color:"inherit",onClick:h(S),optional:S===2?o.jsx(T,{variant:"caption",children:"Optional"}):void 0,children:d})},d))}),o.jsx("div",{children:m()?o.jsxs(P.Fragment,{children:[o.jsx(T,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),o.jsxs(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx(B,{sx:{flex:"1 1 auto"}}),o.jsx(k,{onClick:v,children:"Reset"})]})]}):o.jsxs(P.Fragment,{children:[o.jsxs(T,{sx:{mt:2,mb:1,py:1},children:["Step ",n+1]}),o.jsxs(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o.jsx(k,{disabled:n===0,onClick:c,sx:{mr:1},children:"Back"}),o.jsx(B,{sx:{flex:"1 1 auto"}}),o.jsx(k,{onClick:u,sx:{mr:1},children:"Next"}),n!==t.length&&(a[n]?o.jsxs(T,{variant:"caption",sx:{display:"inline-block"},children:["Step ",n+1," already completed"]}):o.jsx(k,{onClick:g,children:r()===i()-1?"Finish":"Complete Step"}))]})]})})]})},args:{alternativeLabel:!0,nonLinear:!0,orientation:"horizontal"}},W={render:e=>{const[t,n]=P.useState(0),s=()=>{n(r=>r+1)},a=()=>{n(r=>r-1)},p=()=>{n(0)},i=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];return o.jsxs(B,{sx:{maxWidth:400},children:[o.jsx(J,{activeStep:t,...e,children:i.map((r,l)=>o.jsxs(ie,{children:[o.jsx(K,{optional:l===i.length-1?o.jsx(T,{variant:"caption",children:"Last step"}):null,children:r.label}),o.jsxs(De,{children:[o.jsx(T,{children:r.description}),o.jsxs(B,{sx:{mb:2},children:[o.jsx(k,{onClick:s,sx:{mt:1,mr:1},children:l===i.length-1?"Finish":"Continue"}),o.jsx(k,{disabled:l===0,onClick:a,sx:{mt:1,mr:1},children:"Back"})]})]})]},r.label))}),t===i.length&&o.jsxs(he,{square:!0,elevation:0,sx:{p:3},children:[o.jsx(T,{children:"All steps completed - you're finished"}),o.jsx(k,{onClick:p,sx:{mt:1,mr:1},children:"Reset"})]})]})},args:{alternativeLabel:!1,orientation:"vertical"}};var Z,ee,te;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,se;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ne=W.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Qe=["Horizontal","Vertical"];export{O as Horizontal,W as Vertical,Qe as __namedExportsOrder,Ke as default};
