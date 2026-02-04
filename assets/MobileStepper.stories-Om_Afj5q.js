import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{R as u}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{i as x}from"./Rest-BM8GJEeN.js";import"./Alert-C3r4vYPZ.js";import"./Avatar-pRnr6DU5.js";import{B as i}from"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import{P as N}from"./Modal-BPmM9JPO.js";import{e as c,t as p}from"./BottomModal-imHOmNSj.js";import"./Profile-CdAcNaFX.js";import"./Typography-BZQ6nlo4.js";import{u as v}from"./useTheme-B9a50qyY.js";import{B as g,T}from"./CheckCircle.es-BXMbO79g.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-C-UY_gDz.js";import"./Cart-z4MSENyy.js";import"./FormControlLabel-D0F9NOZF.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const vt={title:"components/Modules/Stepper/MobileStepper",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},d={render:S=>{const o=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}],n=v(),[e,r]=u.useState(0),s=o.length,a=()=>{r(m=>m+1)},I=()=>{r(m=>m-1)};return t.jsxs(g,{sx:{maxWidth:400,flexGrow:1},children:[t.jsx(N,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t.jsx(T,{children:o[e].label})}),t.jsx(g,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:o[e].description}),t.jsx(x,{variant:"text",steps:s,position:"static",activeStep:e,nextButton:t.jsxs(i,{variant:"text",onClick:a,disabled:e===s-1,children:["Next",n.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:I,disabled:e===0,children:[n.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})]})}},l={render:S=>{const o=v(),[n,e]=u.useState(0),r=()=>{e(a=>a+1)},s=()=>{e(a=>a-1)};return t.jsx(x,{variant:"dots",steps:6,position:"static",activeStep:n,sx:{maxWidth:400,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:r,disabled:n===5,children:["Next",o.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===0,children:[o.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}},h={render:S=>{const o=v(),[n,e]=u.useState(0),r=()=>{e(a=>a+1)},s=()=>{e(a=>a-1)};return t.jsx(x,{variant:"progress",steps:6,position:"static",activeStep:n,sx:{maxWidth:800,flexGrow:1},nextButton:t.jsxs(i,{variant:"text",onClick:r,disabled:n===5,sx:{width:"140px"},children:["Next",o.direction==="rtl"?t.jsx(p,{}):t.jsx(c,{})]}),backButton:t.jsxs(i,{variant:"text",onClick:s,disabled:n===0,sx:{width:"140px"},children:[o.direction==="rtl"?t.jsx(c,{}):t.jsx(p,{}),"Back"]})})}};var B,k,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    }}>
        <Paper square elevation={0} sx={{
        display: "flex",
        alignItems: "center",
        height: 50,
        pl: 2,
        bgcolor: "background.default"
      }}>
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{
        height: 255,
        maxWidth: 400,
        width: "100%",
        p: 2
      }}>
          {steps[activeStep].description}
        </Box>
        <MobileStepper variant="text" steps={maxSteps} position="static" activeStep={activeStep} nextButton={<Button variant="text" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}
            </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}
              Back
            </Button>} />
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
    }} nextButton={<Button variant="text" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}
          </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}
            Back
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
    }}>
            Next
            {theme.direction === "rtl" ? <CaretLeftIcon /> : <CaretRightIcon />}
          </Button>} backButton={<Button variant="text" onClick={handleBack} disabled={activeStep === 0} sx={{
      width: "140px"
    }}>
            {theme.direction === "rtl" ? <CaretRightIcon /> : <CaretLeftIcon />}
            Back
          </Button>} />;
  }
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const St=["Text","Dots","Progress"];export{l as Dots,h as Progress,d as Text,St as __namedExportsOrder,vt as default};
