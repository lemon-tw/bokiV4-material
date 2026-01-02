import{j as l}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-Cff-IwOP.js";import"./Cart-Bggd5MJL.js";import"./Profile-LD9QASci.js";import"./ToggleButton-nmKaFVRX.js";import{T as o}from"./Calendar-De-M7FAW.js";import"./BottomModal-CO6eF4lz.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-BaK2E95z.js";import"./CheckCircle.es-CCP3thZb.js";import"./index-Bm8UbI65.js";import"./index-Dgl_MXap.js";import"./getThemeProps-CgMh0Kv1.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-QawvxuqF.js";import"./Copy.es-Dlh5z7f2.js";const i=[{id:"1",name:"Candy, Lee",email:"candylee@example.com",status:"待確認",team:"Tag",avatar:"https://i.pravatar.cc/150?u=1",members:["成員 A","成員 B"]},{id:"2",name:"Vicky, Yu",email:"vickyyu@example.com",status:"已通過",team:"Dev",avatar:"https://i.pravatar.cc/150?u=2",members:["成員 C"]}],r=[{id:"name",label:"姓名",minWidth:170},{id:"email",label:"Email",minWidth:200},{id:"status",label:"狀態",minWidth:100},{id:"team",label:"團隊",minWidth:100},{id:"members",label:"成員",minWidth:150,format:a=>Array.isArray(a)?a.join("、"):a}],E={title:"Components/Atoms/Table/Table",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{data:{control:"object"},columns:{control:"object"},onSelectionChange:{action:"selectionChanged"},initialSelectedIds:{control:"object"},loading:{control:"boolean"},elevation:{control:{type:"number",min:0,max:24}},variant:{control:{type:"select",options:["elevation","outlined"]}},sx:{control:"object"},square:{control:"boolean"},style:{control:"object"},className:{control:"text"}},args:{data:i,columns:r,initialSelectedIds:[],loading:!1,elevation:1,variant:"elevation",sx:{},square:!1,style:{},className:""}},e={render:a=>l.jsx(o,{...a}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};var t,n,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,E as default};
