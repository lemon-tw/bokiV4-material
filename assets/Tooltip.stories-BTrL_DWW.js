import{j as o}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DGlRE1oP.js";import"./Typography-2_fYrsYp.js";import{m as a,n as p}from"./RichTooltip-CAyGoVZK.js";import{a as m}from"./Taxi.es-BJc85RkZ.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const h={title:"components/Atoms/Tooltip/Tooltip",component:a,parameters:{layout:"centered",docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}}},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"]},arrow:{control:"boolean"}},args:{}},t={render:s=>o.jsx(a,{...s,children:o.jsx(p,{children:o.jsx(m,{})})}),args:{arrow:!0,title:"Label",placement:"bottom"}};var r,e,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const j=["Label"];export{t as Label,j as __namedExportsOrder,h as default};
