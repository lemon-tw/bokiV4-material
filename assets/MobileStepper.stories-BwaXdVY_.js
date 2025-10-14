import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{R as v}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-DN8Xv8n1.js";import{z as x,E as m,a as g,H as N,T,B as i,J as c,K as p}from"./Typography-Dy6dv8OK.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const q={title:"components/Modules/Stepper/MobileStepper",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},d={render:S=>{const a=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}],n=m(),[e,s]=v.useState(0),o=a.length,r=()=>{s(u=>u+1)},I=()=>{s(u=>u-1)};return t.jsxs(g,{sx:{maxWidth:400,flexGrow:1},children:[t.jsx(N,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t.jsx(T,{children:a[e].label})}),t.jsx(g,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:a[e].description}),t.jsx(x,{variant:"text",steps:o,position:"static",activeStep:e,nextButton:t.jsxs(i,{variant:"text",onClick:r,disabled:e===o-1,children:["Next",n.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:I,disabled:e===0,children:[n.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})]})}},l={render:S=>{const a=m(),[n,e]=v.useState(0),s=()=>{e(r=>r+1)},o=()=>{e(r=>r-1)};return t.jsx(x,{variant:"dots",steps:6,position:"static",activeStep:n,sx:{maxWidth:400,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===5,children:["Next",a.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:o,disabled:n===0,children:[a.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}},h={render:S=>{const a=m(),[n,e]=v.useState(0),s=()=>{e(r=>r+1)},o=()=>{e(r=>r-1)};return t.jsx(x,{variant:"progress",steps:6,position:"static",activeStep:n,sx:{maxWidth:800,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===5,sx:{width:"140px"},children:["Next",a.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:o,disabled:n===0,sx:{width:"140px"},children:[a.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}};var B,k,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var w,f,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,j,A;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const D=["Text","Dots","Progress"];export{l as Dots,h as Progress,d as Text,D as __namedExportsOrder,q as default};
