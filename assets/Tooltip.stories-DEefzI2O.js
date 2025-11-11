import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{a3 as a,a4 as p}from"./Calendar-Dr32-U0b.js";import{a as m}from"./Taxi.es-xnao8t90.js";import"./index-D4H_InIO.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const x={title:"components/Atoms/Tooltip/Tooltip",component:a,parameters:{layout:"centered",docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}}},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"]},arrow:{control:"boolean"}},args:{}},t={render:s=>o.jsx(a,{...s,children:o.jsx(p,{children:o.jsx(m,{})})}),args:{arrow:!0,title:"Label",placement:"bottom"}};var r,e,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <IconButton>\r
        <TaxiIcon />\r
      </IconButton>\r
    </Tooltip>,
  args: {
    arrow: true,
    title: "Label",
    placement: "bottom"
  }
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const T=["Label"];export{t as Label,T as __namedExportsOrder,x as default};
