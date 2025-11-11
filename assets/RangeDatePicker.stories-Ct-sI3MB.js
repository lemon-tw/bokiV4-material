import{j as d}from"./jsx-runtime-BO8uF4Og.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{R as n}from"./Calendar-Dr32-U0b.js";import{r as e}from"./index-D4H_InIO.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const f={title:"components/Atoms/DatePicker/RangeDatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},t={render:o=>{const[u,c]=e.useState(null),[m,p]=e.useState(null);return d.jsx(n,{...o,start:u,end:m,setStart:c,setEnd:p})},args:{buttonHeight:"48px"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    return <RangeDatePicker {...args} start={start} end={end} setStart={setStart} setEnd={setEnd} />;
  },
  args: {
    buttonHeight: "48px"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,f as default};
