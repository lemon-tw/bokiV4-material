import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as u}from"./index-D4H_InIO.js";import{B}from"./Box-C_5lmZ5e.js";import{C as Z}from"./CircularProgress-Ca9LbOKf.js";import{g as w,b as k,s as j,c as D,a as M,m as q}from"./memoTheme-DQLz_w2O.js";import{u as A,c as R,l as ee,j as te,a as W}from"./DefaultPropsProvider-CwqFt9v8.js";import{P as ae}from"./Paper-Cbc_F17k.js";import{C as U}from"./Checkbox-BV9M0_qO.js";import{A as oe}from"./Avatar-CFqripXw.js";import"./useTheme-BbNP3OZZ.js";import"./extendSxProp-DpymScOI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./useTheme-D4Xi4orm.js";import"./SwitchBase-kKEgFl4o.js";import"./useFormControl-DgxBWWJq.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-xXEST84h.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./createSvgIcon-C6ONGP5B.js";import"./mergeSlotProps-Cns_3EyO.js";const G=u.createContext();function ne(e){return w("MuiTable",e)}k("MuiTable",["root","stickyHeader"]);const re=e=>{const{classes:t,stickyHeader:a}=e;return M({root:["root",a&&"stickyHeader"]},ne,t)},se=j("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(q(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:t})=>t.stickyHeader,style:{borderCollapse:"separate"}}]}))),P="table",le=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTable"}),{className:p,component:n=P,padding:c="normal",size:d="medium",stickyHeader:i=!1,...b}=s,g={...s,component:n,padding:c,size:d,stickyHeader:i},f=re(g),C=u.useMemo(()=>({padding:c,size:d,stickyHeader:i}),[c,d,i]);return r.jsx(G.Provider,{value:C,children:r.jsx(se,{as:n,role:n===P?null:"table",ref:a,className:D(f.root,p),ownerState:g,...b})})}),I=u.createContext();function ie(e){return w("MuiTableBody",e)}k("MuiTableBody",["root"]);const ce=e=>{const{classes:t}=e;return M({root:["root"]},ie,t)},de=j("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),pe={variant:"body"},L="tbody",me=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTableBody"}),{className:p,component:n=L,...c}=s,d={...s,component:n},i=ce(d);return r.jsx(I.Provider,{value:pe,children:r.jsx(de,{className:D(i.root,p),as:n,ref:a,role:n===L?null:"rowgroup",ownerState:d,...c})})});function ue(e){return w("MuiTableCell",e)}const be=k("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ge=e=>{const{classes:t,variant:a,align:s,padding:p,size:n,stickyHeader:c}=e,d={root:["root",a,c&&"stickyHeader",s!=="inherit"&&`align${R(s)}`,p!=="normal"&&`padding${R(p)}`,`size${R(n)}`]};return M(d,ue,t)},ye=j("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${R(a.size)}`],a.padding!=="normal"&&t[`padding${R(a.padding)}`],a.align!=="inherit"&&t[`align${R(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(q(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?ee(W(e.palette.divider,1),.88):te(W(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${be.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:t})=>t.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),E=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTableCell"}),{align:p="inherit",className:n,component:c,padding:d,scope:i,size:b,sortDirection:g,variant:f,...C}=s,y=u.useContext(G),v=u.useContext(I),H=v&&v.variant==="head";let h;c?h=c:h=H?"th":"td";let x=i;h==="td"?x=void 0:!x&&H&&(x="col");const $=f||v&&v.variant,N={...s,align:p,component:h,padding:d||(y&&y.padding?y.padding:"normal"),size:b||(y&&y.size?y.size:"medium"),sortDirection:g,stickyHeader:$==="head"&&y&&y.stickyHeader,variant:$},o=ge(N);let l=null;return g&&(l=g==="asc"?"ascending":"descending"),r.jsx(ye,{as:h,ref:a,className:D(o.root,n),"aria-sort":l,scope:x,ownerState:N,...C})});function ve(e){return w("MuiTableContainer",e)}k("MuiTableContainer",["root"]);const fe=e=>{const{classes:t}=e;return M({root:["root"]},ve,t)},he=j("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Te=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTableContainer"}),{className:p,component:n="div",...c}=s,d={...s,component:n},i=fe(d);return r.jsx(he,{ref:a,as:n,className:D(i.root,p),ownerState:d,...c})});function Ce(e){return w("MuiTableHead",e)}k("MuiTableHead",["root"]);const xe=e=>{const{classes:t}=e;return M({root:["root"]},Ce,t)},Re=j("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),we={variant:"head"},O="thead",ke=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTableHead"}),{className:p,component:n=O,...c}=s,d={...s,component:n},i=xe(d);return r.jsx(I.Provider,{value:we,children:r.jsx(Re,{as:n,className:D(i.root,p),ref:a,role:n===O?null:"rowgroup",ownerState:d,...c})})});function je(e){return w("MuiTableRow",e)}const V=k("MuiTableRow",["root","selected","hover","head","footer"]),De=e=>{const{classes:t,selected:a,hover:s,head:p,footer:n}=e;return M({root:["root",a&&"selected",s&&"hover",p&&"head",n&&"footer"]},je,t)},Me=j("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(q(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${V.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${V.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),_="tr",Y=u.forwardRef(function(t,a){const s=A({props:t,name:"MuiTableRow"}),{className:p,component:n=_,hover:c=!1,selected:d=!1,...i}=s,b=u.useContext(I),g={...s,component:n,hover:c,selected:d,head:b&&b.variant==="head",footer:b&&b.variant==="footer"},f=De(g);return r.jsx(Me,{as:n,ref:a,className:D(f.root,p),role:n===_?null:"row",ownerState:g,...i})}),z=({data:e,columns:t,renderHeader:a,renderRow:s,renderBatchActions:p,onSelectionChange:n,initialSelectedIds:c=[],loading:d=!1})=>{const[i,b]=u.useState(c);u.useEffect(()=>{b(c)},[c]);const g=i.length===e.length&&e.length>0,f=i.length>0&&i.length<e.length,C=u.useCallback(o=>{b(o),n==null||n(o)},[n]),y=o=>{const l=o.target.checked?e.map(m=>m.id):[];C(l)},v=(o,l)=>m=>{const K=(l!==void 0?l:(m==null?void 0:m.target.checked)||!1)?[...i,o]:i.filter(Q=>Q!==o);C(K)},H=o=>l=>{if(l.target.closest(".MuiCheckbox-root"))return;const m=i.includes(o);v(o,!m)()},h=()=>r.jsx(ke,{children:r.jsxs(Y,{children:[r.jsx(E,{padding:"checkbox",children:r.jsx(U,{checked:g,indeterminate:f,onChange:y})}),t.map(o=>r.jsx(E,{align:o.align||"left",style:{minWidth:o.minWidth,width:o.width},children:o.label},String(o.id)))]})}),x=(o,l)=>{const m=o[l.id];if(l.id==="name")return r.jsxs(B,{sx:{display:"flex",alignItems:"center",gap:1},children:[r.jsx(oe,{src:o.avatar,sx:{width:24,height:24}}),l.format?l.format(m):m]});if(l.id==="members"){const T=m;return l.format?l.format(T):T.join("、")}return l.format?l.format(m):m},$=(o,l)=>{const m=i.includes(o.id);return console.log(l,"只是為了消除紅線"),r.jsxs(Y,{hover:!0,onClick:H(o.id),sx:{cursor:"pointer"},children:[r.jsx(E,{padding:"checkbox",children:r.jsx(U,{checked:m,onChange:v(o.id)})}),t.map(T=>r.jsx(E,{align:T.align||"left",children:x(o,T)},String(T.id)))]},o.id)},N=e.filter(o=>i.includes(o.id));return d?r.jsx(B,{sx:{display:"flex",justifyContent:"center",p:4},children:r.jsx(Z,{})}):r.jsxs(r.Fragment,{children:[p&&p({selectedItems:N,onAction:console.log}),r.jsx(Te,{component:ae,children:r.jsxs(le,{children:[a?a():h(),r.jsx(me,{children:e.map((o,l)=>s?s({item:o,checked:i.includes(o.id),onChange:v(o.id),index:l}):$(o,l))})]})})]})};z.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TableData"}],raw:"TableData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"TableData"}],raw:"Column<TableData>"}],raw:"Column<TableData>[]"},description:""},renderHeader:{required:!1,tsType:{name:"signature",type:"function",raw:"() => React.ReactNode",signature:{arguments:[],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderRow:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {\r
    item: TableData;\r
    checked: boolean;\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\r
    index: number;\r
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    item: TableData;\r
    checked: boolean;\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\r
    index: number;\r
}`,signature:{properties:[{key:"item",value:{name:"TableData",required:!0}},{key:"checked",value:{name:"boolean",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}},required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderBatchActions:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {\r
    selectedItems: TableData[];\r
    onAction: (action: string) => void;\r
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    selectedItems: TableData[];\r
    onAction: (action: string) => void;\r
}`,signature:{properties:[{key:"selectedItems",value:{name:"Array",elements:[{name:"TableData"}],raw:"TableData[]",required:!0}},{key:"onAction",value:{name:"signature",type:"function",raw:"(action: string) => void",signature:{arguments:[{type:{name:"string"},name:"action"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:""},initialSelectedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ae=[{id:"1",name:"Candy, Lee",email:"candylee@example.com",status:"待確認",team:"Tag",avatar:"https://i.pravatar.cc/150?u=1",members:["成員 A","成員 B"]},{id:"2",name:"Vicky, Yu",email:"vickyyu@example.com",status:"已通過",team:"Dev",avatar:"https://i.pravatar.cc/150?u=2",members:["成員 C"]}],He=[{id:"name",label:"姓名",minWidth:170},{id:"email",label:"Email",minWidth:200},{id:"status",label:"狀態",minWidth:100},{id:"team",label:"團隊",minWidth:100},{id:"members",label:"成員",minWidth:150,format:e=>Array.isArray(e)?e.join("、"):e}],tt={title:"Components/Atoms/Table/Table",component:z,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{data:{control:"object"},columns:{control:"object"},onSelectionChange:{action:"selectionChanged"},initialSelectedIds:{control:"object"},loading:{control:"boolean"},elevation:{control:{type:"number",min:0,max:24}},variant:{control:{type:"select",options:["elevation","outlined"]}},sx:{control:"object"},square:{control:"boolean"},style:{control:"object"},className:{control:"text"}},args:{data:Ae,columns:He,initialSelectedIds:[],loading:!1,elevation:1,variant:"elevation",sx:{},square:!1,style:{},className:""}},S={render:e=>r.jsx(z,{...e}),parameters:{docs:{source:{code:`
import React from "react";
import Table from "@/components/Atom/Table/Table";
import { TableData, Column } from "@/types/tableExtends";

const sampleData: TableData[] = [
  {
    id: "1",
    name: "Candy, Lee",
    email: "candylee@example.com",
    status: "待確認",
    team: "Tag",
    avatar: "https://i.pravatar.cc/150?u=1",
    members: ["成員 A", "成員 B"],
  },
  {
    id: "2",
    name: "Vicky, Yu",
    email: "vickyyu@example.com",
    status: "已通過",
    team: "Dev",
    avatar: "https://i.pravatar.cc/150?u=2",
    members: ["成員 C"],
  }
];
const columns: Column<TableData>[] = [
  { id: "name", label: "姓名", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "status", label: "狀態", minWidth: 100 },
  { id: "team", label: "團隊", minWidth: 100 },
  {
    id: "members",
    label: "成員",
    minWidth: 150,
    format: (value: string | string[]) => Array.isArray(value) ? value.join("、") : value,
  }
];

export default function DefaultExample() {
  return <Table data={sampleData} columns={columns} />;
}
        `.trim()}}}};var F,J,X;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Table {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
import React from "react";
import Table from "@/components/Atom/Table/Table";
import { TableData, Column } from "@/types/tableExtends";

const sampleData: TableData[] = [
  {
    id: "1",
    name: "Candy, Lee",
    email: "candylee@example.com",
    status: "待確認",
    team: "Tag",
    avatar: "https://i.pravatar.cc/150?u=1",
    members: ["成員 A", "成員 B"],
  },
  {
    id: "2",
    name: "Vicky, Yu",
    email: "vickyyu@example.com",
    status: "已通過",
    team: "Dev",
    avatar: "https://i.pravatar.cc/150?u=2",
    members: ["成員 C"],
  }
];
const columns: Column<TableData>[] = [
  { id: "name", label: "姓名", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "status", label: "狀態", minWidth: 100 },
  { id: "team", label: "團隊", minWidth: 100 },
  {
    id: "members",
    label: "成員",
    minWidth: 150,
    format: (value: string | string[]) => Array.isArray(value) ? value.join("、") : value,
  }
];

export default function DefaultExample() {
  return <Table data={sampleData} columns={columns} />;
}
        \`.trim()
      }
    }
  }
}`,...(X=(J=S.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const at=["Default"];export{S as Default,at as __namedExportsOrder,tt as default};
