import{j as i}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DGlRE1oP.js";import"./Typography-2_fYrsYp.js";import{R as n}from"./RichTooltip-Cx3E0wiy.js";import{r as e}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const R={title:"components/Atoms/DatePicker/RangeDatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},t={render:o=>{const[m,p]=e.useState(null),[u,c]=e.useState(null);return i.jsx(n,{...o,start:m,end:u,setStart:p,setEnd:c})},args:{buttonHeight:"48px"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    return <RangeDatePicker {...args} start={start} end={end} setStart={setStart} setEnd={setEnd} />;
  },
  args: {
    buttonHeight: "48px"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,R as default};
