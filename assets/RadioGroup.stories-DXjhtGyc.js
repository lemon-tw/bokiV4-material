import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as m,R as T}from"./index-D4H_InIO.js";import{a as U,R as k}from"./Radio-Djr3xUQy.js";import{F as I,a as N}from"./FormLabel-DZ8OOg4w.js";import{a as G,g as w,s as V,c as F,b as j,u as P}from"./memoTheme-DkEl0Jev.js";import{u as _}from"./useControlled-DIa7s2dv.js";import{u as D}from"./useId-CN9_kA9R.js";import{u as E}from"./useFormControl-DgxBWWJq.js";import{f as A}from"./formControlState-Dq1zat_P.js";import{u as L}from"./DefaultPropsProvider-DqVT3Pki.js";import{F as O}from"./FormControlLabel-Bx_LTtIb.js";import{fn as $}from"./index-Cf3xVBfy.js";import"./defaultPalette-CDIRQpAz.js";import"./SwitchBase-BX-FO1OC.js";import"./useSlot-D9yE0s1_.js";import"./ButtonBase-DunFoCRt.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./createSvgIcon-FE0mXunH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./isMuiElement-d7vxVVg4.js";import"./Typography-DBLLtZzJ.js";import"./index-D641xpmC.js";import"./useTheme-Dm3NhWHt.js";import"./extendSxProp-Cr0utasV.js";function H(e){return G("MuiFormGroup",e)}w("MuiFormGroup",["root","row","error"]);const W=e=>{const{classes:r,row:o,error:a}=e;return j({root:["root",o&&"row",a&&"error"]},H,r)},z=V("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.row&&r.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),B=m.forwardRef(function(r,o){const a=L({props:r,name:"MuiFormGroup"}),{className:s,row:u=!1,...n}=a,d=E(),i=A({props:a,muiFormControl:d,states:["error"]}),p={...a,row:u,error:i.error},f=W(p);return t.jsx(z,{className:F(f.root,s),ownerState:p,ref:o,...n})});function J(e){return G("MuiRadioGroup",e)}w("MuiRadioGroup",["root","row","error"]);const K=e=>{const{classes:r,row:o,error:a}=e;return j({root:["root",o&&"row",a&&"error"]},J,r)},Q=m.forwardRef(function(r,o){const{actions:a,children:s,className:u,defaultValue:n,name:d,onChange:i,value:p,...f}=r,v=m.useRef(null),S=K(r),[b,y]=_({controlled:p,default:n,name:"RadioGroup"});m.useImperativeHandle(a,()=>({focus:()=>{let l=v.current.querySelector("input:not(:disabled):checked");l||(l=v.current.querySelector("input:not(:disabled)")),l&&l.focus()}}),[]);const q=P(o,v),R=D(d),M=m.useMemo(()=>({name:R,onChange(l){y(l.target.value),i&&i(l,l.target.value)},value:b}),[R,i,y,b]);return t.jsx(U.Provider,{value:M,children:t.jsx(B,{role:"radiogroup",ref:q,className:F(S.root,u),...f,children:s})})}),g=({options:e,color:r="primary",label:o,value:a,onChange:s,...u})=>t.jsxs(I,{component:"fieldset",children:[o&&t.jsx(N,{component:"legend",children:o}),t.jsx(Q,{value:a,onChange:s,...u,children:e.map(n=>t.jsx(O,{value:n.value,control:t.jsx(k,{color:r}),label:n.label},n.value))})]});g.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:`單選選項陣列，每個選項需有 label（顯示文字）與 value（值）\r
@example [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]`},color:{required:!1,tsType:{name:"literal",value:'"primary"'},description:"群組內所有單選按鈕的顏色（目前僅支援 primary）",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"群組標籤（顯示於群組上方，可選）"}},composes:["Omit"]};const Ge={title:"Components/Atoms/Radio/RadioGroup",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary"]},label:{control:"text"},value:{control:"text"}},args:{color:"primary",label:"性別選擇",options:[{label:"男性",value:"male"},{label:"女性",value:"female"},{label:"其他",value:"other"}],onClick:$()}},X=e=>{const[r,o]=T.useState(e.value),a=s=>{o(s.target.value)};return t.jsx(g,{...e,value:r,onChange:a})},c={render:e=>t.jsx(X,{...e}),parameters:{docs:{source:{code:`
const data=[
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: '其他', value: 'other' },
]

<RadioGroup
  label="性別選擇"
  options={data}
  value={value}
  onChange={handleChange}
/>

`.trim()}}}};var x,h,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
const data=[
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: '其他', value: 'other' },
]

<RadioGroup
  label="性別選擇"
  options={data}
  value={value}
  onChange={handleChange}
/>

\`.trim()
      }
    }
  }
}`,...(C=(h=c.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const we=["Standard"];export{c as Standard,we as __namedExportsOrder,Ge as default};
