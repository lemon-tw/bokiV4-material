import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as h,R as b}from"./index-D4H_InIO.js";import"./lemonTheme-Bb89J2P2.js";import"./Calendar-BlZ4Vs92.js";import{i as K}from"./Cart-DvqdL-mf.js";import{S as z,c as E,d as O,C as U,e as k,f as I}from"./Profile-O2wuqqWP.js";import{B as m}from"./ToggleButton-C9hjwxNF.js";import{u as Q,P as X}from"./BottomModal-eKP2Btm8.js";import"./Typography-Ot6rEagF.js";import{g as $,d as q,s as R,c as H,a as V,f as Y,m as Z,B as u,T as x}from"./CheckCircle.es-D_AxlQm-.js";import{u as W}from"./defaultPalette-CV1bpgA4.js";import"./zh-tw-CQrB7Xx_.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Warning.es-TWNjRQ8R.js";function tt(n){return q("MuiStepButton",n)}const T=$("MuiStepButton",["root","horizontal","vertical","touchRipple"]),et=n=>{const{classes:o,orientation:e}=n;return V({root:["root",e],touchRipple:["touchRipple"]},tt,o)},nt=R(Y,{name:"MuiStepButton",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:e}=n;return[{[`& .${T.touchRipple}`]:o.touchRipple},o.root,o[e.orientation]]}})({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box",[`& .${T.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"},variants:[{props:{orientation:"vertical"},style:{justifyContent:"flex-start",padding:"8px",margin:"-8px"}}]}),ot=h.forwardRef(function(o,e){const a=W({props:o,name:"MuiStepButton"}),{children:r,className:c,icon:i,optional:s,...l}=a,{disabled:S,active:g}=h.useContext(z),{orientation:C}=h.useContext(E),f={...a,orientation:C},v=et(f),y={icon:i,optional:s},p=K(r,["StepLabel"])?h.cloneElement(r,y):t.jsx(O,{...y,children:r});return t.jsx(nt,{focusRipple:!0,disabled:S,TouchRippleProps:{className:v.touchRipple},className:H(v.root,c),ref:e,ownerState:f,"aria-current":g?"step":void 0,...l,children:p})});function st(n){return q("MuiStepContent",n)}$("MuiStepContent",["root","last","transition"]);const at=n=>{const{classes:o,last:e}=n;return V({root:["root",e&&"last"],transition:["transition"]},st,o)},rt=R("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:e}=n;return[o.root,e.last&&o.last]}})(Z(({theme:n})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?`1px solid ${n.vars.palette.StepContent.border}`:`1px solid ${n.palette.mode==="light"?n.palette.grey[400]:n.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),it=R(U,{name:"MuiStepContent",slot:"Transition",overridesResolver:(n,o)=>o.transition})({}),pt=h.forwardRef(function(o,e){const a=W({props:o,name:"MuiStepContent"}),{children:r,className:c,TransitionComponent:i=U,transitionDuration:s="auto",TransitionProps:l,slots:S={},slotProps:g={},...C}=a,{orientation:f}=h.useContext(E),{active:v,last:y,expanded:p}=h.useContext(z),d={...a,last:y},B=at(d);let A=s;s==="auto"&&!i.muiSupportAuto&&(A=void 0);const _={slots:S,slotProps:{transition:l,...g}},[G,J]=Q("transition",{elementType:it,externalForwardedProps:_,ownerState:d,className:B.transition,additionalProps:{in:v||p,timeout:A,unmountOnExit:!0}});return t.jsx(rt,{className:H(B.root,c),ref:e,ownerState:d,...C,children:t.jsx(G,{as:i,...J,children:r})})}),Lt={title:"components/Modules/Stepper/Stepper",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{nonLinear:{control:"boolean",description:"true, 讓整個 stepper 不需要照順序完成，搭配StepButton 讓每個 step 可以直接點選"},alternativeLabel:{control:"boolean",description:"true, 讓 stepper 的 label 在 stepper 的上方，否則在左側"},orientation:{control:"select",options:["horizontal","vertical"],description:"stepper 的方向"}},args:{}},w={render:n=>{const o=["Select campaign settings","Create an ad group","Create an ad"],[e,a]=b.useState(0),[r,c]=b.useState({}),i=()=>o.length,s=()=>Object.keys(r).length,l=()=>e===i()-1,S=()=>s()===i(),g=()=>{const p=l()&&!S()?o.findIndex((d,B)=>!(B in r)):e+1;a(p)},C=()=>{a(p=>p-1)},f=p=>()=>{a(p)},v=()=>{c({...r,[e]:!0}),g()},y=()=>{a(0),c({})};return t.jsxs(u,{sx:{width:"1000px "},children:[t.jsx(k,{activeStep:e,...n,children:o.map((p,d)=>t.jsx(I,{completed:r[d],children:t.jsx(ot,{color:"inherit",onClick:f(d),optional:d===2?t.jsx(x,{variant:"caption",children:"Optional"}):void 0,children:p})},p))}),t.jsx("div",{children:S()?t.jsxs(b.Fragment,{children:[t.jsx(x,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),t.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t.jsx(u,{sx:{flex:"1 1 auto"}}),t.jsx(m,{onClick:y,children:"Reset"})]})]}):t.jsxs(b.Fragment,{children:[t.jsxs(x,{sx:{mt:2,mb:1,py:1},children:["Step ",e+1]}),t.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t.jsx(m,{disabled:e===0,onClick:C,sx:{mr:1},children:"Back"}),t.jsx(u,{sx:{flex:"1 1 auto"}}),t.jsx(m,{onClick:g,sx:{mr:1},children:"Next"}),e!==o.length&&(r[e]?t.jsxs(x,{variant:"caption",sx:{display:"inline-block"},children:["Step ",e+1," already completed"]}):t.jsx(m,{onClick:v,children:s()===i()-1?"Finish":"Complete Step"}))]})]})})]})},args:{alternativeLabel:!0,nonLinear:!0,orientation:"horizontal"}},j={render:n=>{const[o,e]=b.useState(0),a=()=>{e(s=>s+1)},r=()=>{e(s=>s-1)},c=()=>{e(0)},i=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];return t.jsxs(u,{sx:{maxWidth:400},children:[t.jsx(k,{activeStep:o,...n,children:i.map((s,l)=>t.jsxs(I,{children:[t.jsx(O,{optional:l===i.length-1?t.jsx(x,{variant:"caption",children:"Last step"}):null,children:s.label}),t.jsxs(pt,{children:[t.jsx(x,{children:s.description}),t.jsxs(u,{sx:{mb:2},children:[t.jsx(m,{onClick:a,sx:{mt:1,mr:1},children:l===i.length-1?"Finish":"Continue"}),t.jsx(m,{disabled:l===0,onClick:r,sx:{mt:1,mr:1},children:"Back"})]})]})]},s.label))}),o===i.length&&t.jsxs(X,{square:!0,elevation:0,sx:{p:3},children:[t.jsx(x,{children:"All steps completed - you're finished"}),t.jsx(m,{onClick:c,sx:{mt:1,mr:1},children:"Reset"})]})]})},args:{alternativeLabel:!1,orientation:"vertical"}};var L,N,P;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(N=w.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var F,M,D;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(M=j.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Nt=["Horizontal","Vertical"];export{w as Horizontal,j as Vertical,Nt as __namedExportsOrder,Lt as default};
