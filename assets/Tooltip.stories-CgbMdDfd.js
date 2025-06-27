import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{p as c}from"./defaultPalette-DS3qdIvj.js";import{s as d}from"./memoTheme-Dxm40b6r.js";import{T as g,t as a}from"./Tooltip-BWVFNTXJ.js";import{I as u}from"./IconButton-BesS91bd.js";import{L as f}from"./LocalTaxiOutlined-BRX5POzA.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-C6ZETEwd.js";import"./index-Bm8UbI65.js";import"./useTheme-CKabsHUK.js";import"./useTheme-CgXM_xl0.js";import"./useSlot-DpI2SreY.js";import"./ButtonBase-DqDsqRqn.js";import"./useControlled-DIa7s2dv.js";import"./useId-CN9_kA9R.js";import"./Portal-CdaRbCk9.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Grow-Cvzsn5qO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Be1aYaHu.js";import"./IconButton-DE89XgjZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DDzYLtWm.js";import"./createSvgIcon--HVZC8sH.js";const b=(o,t="primary")=>{var p;const n=c[t];return{bgColor:(((p=o==null?void 0:o.palette)==null?void 0:p[t])??n).tooltipBg??n.tooltipBg}},T=d(({className:o,...t})=>r.jsx(g,{...t,classes:{popper:o}}))(({theme:o})=>{const t=b(o);return{[`& .${a.tooltip}`]:{backgroundColor:t.bgColor,fontSize:13,fontFamily:"Noto Sans, Noto Sans TC, sans-serif",fontWeight:400},[`& .${a.arrow}`]:{color:t.bgColor}}}),s=({...o})=>r.jsx(T,{...o});s.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const J={title:"components/Tooltip/Tooltip",component:s,parameters:{layout:"centered",docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}}},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"]},arrow:{control:"boolean"}},args:{}},e={render:o=>r.jsx(s,{...o,children:r.jsx(u,{children:r.jsx(f,{})})}),args:{arrow:!0,title:"Label",placement:"bottom"}};var i,l,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <IconButton>
        <LocalTaxiOutlinedIcon />
      </IconButton>
    </Tooltip>,
  args: {
    arrow: true,
    title: "Label",
    placement: "bottom"
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const K=["Label"];export{e as Label,K as __namedExportsOrder,J as default};
