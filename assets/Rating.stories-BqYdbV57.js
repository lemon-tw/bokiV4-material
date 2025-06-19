import{j as l}from"./jsx-runtime-BO8uF4Og.js";import{r as p}from"./index-D4H_InIO.js";import{G as M}from"./iconBase-BNkU7DqG.js";function j(e){return M({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function q(e){return M({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(e)}const E={small:20,medium:32,large:40},v=({value:e,max:o=5,precision:a=.1,size:f="medium",readOnly:i=!1,disabled:u=!1,showValueLabel:w=!0,onChange:y})=>{const[h,b]=p.useState(null),m=E[f]||32,S=p.useMemo(()=>Array.from({length:o}),[o]),C=c=>{const n=(h!==null?h:e)-c;return n>=1?1:n>0?Math.round(n/a)*a:0},R=(c,t)=>{if(i||u)return;const{left:n,width:s}=t.target.getBoundingClientRect(),g=(t.clientX-n)/s;let r=c+g;r=Math.round(r/a)*a,b(Math.max(a,Math.min(o,r)))},T=()=>{b(null)},z=(c,t)=>{if(i||u||!y)return;const{left:n,width:s}=t.target.getBoundingClientRect(),g=(t.clientX-n)/s;let r=c+g;r=Math.round(r/a)*a,y(Math.max(a,Math.min(o,r)))};return l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",cursor:i||u?"default":"pointer"},onMouseLeave:T,children:[S.map((c,t)=>{const n=C(t);return l.jsxs("span",{style:{position:"relative",width:m,height:m,display:"inline-block"},onMouseMove:s=>R(t,s),onClick:s=>z(t,s),children:[l.jsx(q,{size:m,style:{position:"absolute",left:0,top:0,color:"#bbb"}}),l.jsx("span",{style:{width:`${n*100}%`,overflow:"hidden",position:"absolute",left:0,top:0,height:"100%",pointerEvents:"none",display:"inline-block"},children:l.jsx(j,{size:m,style:{color:"#FFD700"}})})]},t)}),w&&l.jsx("span",{style:{marginLeft:8,fontSize:m*.7},children:(h??e).toFixed(1)})]})};v.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!0,tsType:{name:"number"},description:"目前評分值（支援小數）"},max:{required:!1,tsType:{name:"number"},description:"最大分數（預設 5 顆星）",defaultValue:{value:"5",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:"精度（如 0.1、0.5、1）",defaultValue:{value:"0.1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"尺寸，可選 small、medium、large",defaultValue:{value:'"medium"',computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"是否只讀",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"分數變動時的 callback"},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"是否顯示分數數字（可選）",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label（可選，無障礙）"}},composes:["Omit"]};const B={title:"components/Rating/Rating",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:5,step:.1}},readOnly:{control:"boolean"},disabled:{control:"boolean"},size:{control:{type:"radio"},options:["small","medium","large"]},precision:{control:{type:"number",min:.1,max:1,step:.1}},showValueLabel:{control:"boolean"}},args:{value:2.5,size:"medium",readOnly:!1,disabled:!1,precision:.1,showValueLabel:!0,onChange:()=>{}}},k=e=>{const[o,a]=p.useState(e.value??2);p.useEffect(()=>{a(e.value??2)},[e.value]);const f=i=>{var u;a(i),(u=e.onChange)==null||u.call(e,i)};return l.jsx(v,{...e,value:o,onChange:f})},d={render:e=>l.jsx(k,{...e}),parameters:{docs:{source:{code:`
import { Rating } from '@lemon/material';
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState(2.5);

useEffect(() => {
  setValue(args.value ?? 2.5);
}, [args.value]);

<Rating
  value={value}
  onChange={setValue}
  precision={0.1}
  size="medium"
  showValueLabel
/>
                `.trim()}}}};var V,x,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
import { Rating } from '@lemon/material';
import React, { useState, useEffect } from 'react';

const [value, setValue] = useState(2.5);

useEffect(() => {
  setValue(args.value ?? 2.5);
}, [args.value]);

<Rating
  value={value}
  onChange={setValue}
  precision={0.1}
  size="medium"
  showValueLabel
/>
                \`.trim()
      }
    }
  }
}`,...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const A=["CustomStar"];export{d as CustomStar,A as __namedExportsOrder,B as default};
