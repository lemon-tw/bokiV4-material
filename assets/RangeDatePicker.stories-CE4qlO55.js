import{j as i}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DbLJfmwh.js";import{R as n}from"./Calendar-CxVLanFE.js";import"./Profile-ixVkq0xe.js";import"./BottomModal-D04EwsMg.js";import{r as e}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-BtL_yMcr.js";import"./IconBase.es-BSjFOAhq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const y={title:"components/Atoms/DatePicker/RangeDatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},t={render:o=>{const[m,p]=e.useState(null),[u,c]=e.useState(null);return i.jsx(n,{...o,start:m,end:u,setStart:p,setEnd:c})},args:{buttonHeight:"48px"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null);
    return <RangeDatePicker {...args} start={start} end={end} setStart={setStart} setEnd={setEnd} />;
  },
  args: {
    buttonHeight: "48px"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,y as default};
