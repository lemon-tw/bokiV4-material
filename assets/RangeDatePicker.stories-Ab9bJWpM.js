import{j as i}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-C4MvoXbo.js";import"./Profile-CyJOgG7d.js";import{R as n}from"./Calendar-DfT9bNPn.js";import"./BottomModal-C5GXhLgl.js";import{r as e}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-BlyGpf_x.js";import"./Tabs-BNkIb3QA.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const y={title:"components/Atoms/DatePicker/RangeDatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},t={render:o=>{const[m,p]=e.useState(null),[u,c]=e.useState(null);return i.jsx(n,{...o,start:m,end:u,setStart:p,setEnd:c})},args:{buttonHeight:"48px"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    return <RangeDatePicker {...args} start={start} end={end} setStart={setStart} setEnd={setEnd} />;
  },
  args: {
    buttonHeight: "48px"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,y as default};
