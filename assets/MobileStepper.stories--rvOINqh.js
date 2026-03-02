import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{R as u}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{i as x}from"./Rest-DPHg0exl.js";import"./Alert-BXVqmw5v.js";import"./Avatar-BwnX3fSq.js";import{B as i}from"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-BTC8HJGy.js";import{P as N}from"./Modal-BHwqZrHA.js";import{e as c,t as p}from"./BottomModal-CQgISz-Y.js";import"./Profile-CwMu8OsX.js";import"./Typography-BcGPB_gl.js";import{u as v}from"./useTheme-C-KIORmc.js";import{B as g,T}from"./CheckCircle.es-DXCUKnUH.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-Dvesi0jg.js";import"./FormControlLabel-S5Kd-VCb.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useSlotProps-Dpzk0ddK.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-CX_v8mKZ.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-Kbwq-I49.js";import"./AccordionSummary-D8DSbU2C.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const St={title:"components/Modules/Stepper/MobileStepper",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},d={render:S=>{const r=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}],n=v(),[e,a]=u.useState(0),s=r.length,o=()=>{a(m=>m+1)},I=()=>{a(m=>m-1)};return t.jsxs(g,{sx:{maxWidth:400,flexGrow:1},children:[t.jsx(N,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t.jsx(T,{children:r[e].label})}),t.jsx(g,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:r[e].description}),t.jsx(x,{variant:"text",steps:s,position:"static",activeStep:e,nextButton:t.jsxs(i,{variant:"text",onClick:o,disabled:e===s-1,children:["Next",n.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:I,disabled:e===0,children:[n.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})]})}},l={render:S=>{const r=v(),[n,e]=u.useState(0),a=()=>{e(o=>o+1)},s=()=>{e(o=>o-1)};return t.jsx(x,{variant:"dots",steps:6,position:"static",activeStep:n,sx:{maxWidth:400,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:a,disabled:n===5,children:["Next",r.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===0,children:[r.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}},h={render:S=>{const r=v(),[n,e]=u.useState(0),a=()=>{e(o=>o+1)},s=()=>{e(o=>o-1)};return t.jsx(x,{variant:"progress",steps:6,position:"static",activeStep:n,sx:{maxWidth:800,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:a,disabled:n===5,sx:{width:"140px"},children:["Next",r.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===0,sx:{width:"140px"},children:[r.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}};var B,k,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
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
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    return <Box sx={{
      maxWidth: 400,
      flexGrow: 1
    }}>\r
        <Paper square elevation={0} sx={{
        display: "flex",
        alignItems: "center",
        height: 50,
        pl: 2,
        bgcolor: "background.default"
      }}>\r
          <Typography>{steps[activeStep].label}</Typography>\r
        </Paper>\r
        <Box sx={{
        height: 255,
        maxWidth: 400,
        width: "100%",
        p: 2
      }}>\r
          {steps[activeStep].description}\r
        </Box>\r
        <MobileStepper variant="text" steps={maxSteps} position="static" activeStep={activeStep} nextButton={<Button variant="text" onClick={handleNext} disabled={activeStep === maxSteps - 1}>\r
              Next\r
              {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}\r
            </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0}>\r
              {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}\r
              Back\r
            </Button>} />\r
      </Box>;
  }
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,w,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    return <MobileStepper variant="dots" steps={6} position="static" activeStep={activeStep} sx={{
      maxWidth: 400,
      flexGrow: 1
    }} nextButton={<Button variant="text" onClick={handleNext} disabled={activeStep === 5}>\r
            Next\r
            {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}\r
          </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0}>\r
            {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}\r
            Back\r
          </Button>} />;
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,j,A;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    return <MobileStepper variant="progress" steps={6} position="static" activeStep={activeStep} sx={{
      maxWidth: 800,
      flexGrow: 1
    }} nextButton={<Button variant="text" onClick={handleNext} disabled={activeStep === 5} sx={{
      width: "140px"
    }}>\r
            Next\r
            {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}\r
          </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0} sx={{
      width: "140px"
    }}>\r
            {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}\r
            Back\r
          </Button>} />;
  }
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const gt=["Text","Dots","Progress"];export{l as Dots,h as Progress,d as Text,gt as __namedExportsOrder,St as default};
