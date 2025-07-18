import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{R as T}from"./index-D4H_InIO.js";import{C as d}from"./Checkbox-Ca9a4XMf.js";import{F as p}from"./FormControlLabel-CrI_EDe_.js";import{B as C}from"./Box-C_5lmZ5e.js";import"./defaultPalette-fWaDn0-C.js";import"./memoTheme-DQLz_w2O.js";import"./DefaultPropsProvider-CwqFt9v8.js";import"./Checkbox-BV9M0_qO.js";import"./SwitchBase-kKEgFl4o.js";import"./useFormControl-DgxBWWJq.js";import"./useSlot-21BVXanB.js";import"./useForkRef-Tlf6rvD7.js";import"./useControlled-DIa7s2dv.js";import"./ButtonBase-xXEST84h.js";import"./TransitionGroupContext-CaPC4DFa.js";import"./useEnhancedEffect-H9AsPDTf.js";import"./emotion-react.browser.esm-D6104Ad_.js";import"./createSvgIcon-C6ONGP5B.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Cns_3EyO.js";import"./formControlState-Dq1zat_P.js";import"./Typography-C85nDkcq.js";import"./index-C1j4tvSs.js";import"./useTheme-BbNP3OZZ.js";import"./extendSxProp-DpymScOI.js";const h=({labels:o,parentLabel:t="全選",renderParent:a,renderChild:c})=>{const[r,g]=T.useState(Array(o.length).fill(!1)),u=r.every(Boolean),b=r.some(Boolean)&&!u,x=e=>{g(Array(o.length).fill(e.target.checked))},v=e=>l=>{const m=[...r];m[e]=l.target.checked,g(m)},E=e=>n.jsx(p,{label:e.label,control:n.jsx(d,{checked:e.checked,indeterminate:e.indeterminate,onChange:e.onChange})}),j=e=>n.jsx(p,{label:e.label,control:n.jsx(d,{style:{marginLeft:"48px"},checked:e.checked,onChange:e.onChange})},e.label),G=a?a({label:t,checked:u,indeterminate:b,onChange:x}):E({label:t,checked:u,indeterminate:b,onChange:x}),A=o.map((e,l)=>{const m={label:e,checked:r[l],onChange:v(l),index:l};return c?c(m):j(m)});return n.jsxs(n.Fragment,{children:[G,A]})};h.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{renderParent:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {\r
    label: string;                    // 父層標籤文字\r
    checked: boolean;                 // 是否全選\r
    indeterminate: boolean;           // 是否為部分選取狀態\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 父層變更回調\r
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    label: string;                    // 父層標籤文字\r
    checked: boolean;                 // 是否全選\r
    indeterminate: boolean;           // 是否為部分選取狀態\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 父層變更回調\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}},{key:"indeterminate",value:{name:"boolean",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderChild:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {\r
    label: string;                    // 子項目標籤文字\r
    checked: boolean;                 // 子項目是否被選取\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 子項目變更回調\r
    index: number;                    // 子項目索引\r
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    label: string;                    // 子項目標籤文字\r
    checked: boolean;                 // 子項目是否被選取\r
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 子項目變更回調\r
    index: number;                    // 子項目索引\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}},required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},parentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"全選"',computed:!1}}},composes:["Omit"]};const te={title:"Components/Atoms/Checkbox/CheckboxGroup",component:h,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"},renderParent:{control:!1},renderChild:{control:!1}},args:{parentLabel:"水果全選",labels:["Apple","Banana","Orange"]}},i={render:o=>n.jsx(C,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:n.jsx(h,{...o})}),parameters:{docs:{source:{code:`
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";

export default function DefaultExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
    />
  );
}
        `.trim()}}}},s={render:o=>n.jsx(h,{...o,renderParent:({label:t,checked:a,indeterminate:c,onChange:r})=>n.jsx(C,{sx:{marginBottom:2},children:n.jsx(p,{label:t,control:n.jsx(d,{checked:a,indeterminate:c,onChange:r})})}),renderChild:({label:t,checked:a,onChange:c,index:r})=>n.jsx(C,{sx:{marginLeft:3,marginBottom:1},children:n.jsx(p,{label:t,control:n.jsx(d,{checked:a,onChange:c})})},r)}),parameters:{docs:{source:{code:`
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@/components/Atom/Checkbox/Checkbox";
import { Box } from "@mui/material";

export default function VerticalExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
      renderParent={({ label, checked, indeterminate, onChange }) => (
        <Box sx={{ marginBottom: 2 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
      renderChild={({ label, checked, onChange, index }) => (
        <Box key={index} sx={{ marginLeft: 3, marginBottom: 1 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
    />
  );
}
        `.trim()}}}};var k,f,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center'
  }}>\r
      <CheckboxGroup {...args} />\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: \`
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";

export default function DefaultExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
    />
  );
}
        \`.trim()
      }
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,L,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args} renderParent={({
    label,
    checked,
    indeterminate,
    onChange
  }) => <Box sx={{
    marginBottom: 2
  }}>\r
          <FormControlLabel label={label} control={<Checkbox checked={checked} indeterminate={indeterminate} onChange={onChange} />} />\r
        </Box>} renderChild={({
    label,
    checked,
    onChange,
    index
  }) => <Box key={index} sx={{
    marginLeft: 3,
    marginBottom: 1
  }}>\r
          <FormControlLabel label={label} control={<Checkbox checked={checked} onChange={onChange} />} />\r
        </Box>} />,
  parameters: {
    docs: {
      source: {
        code: \`
import React from "react";
import CheckboxGroup from "@/components/Atom/Checkbox/CheckboxGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@/components/Atom/Checkbox/Checkbox";
import { Box } from "@mui/material";

export default function VerticalExample() {
  return (
    <CheckboxGroup
      parentLabel="水果全選"
      labels={["Apple", "Banana", "Orange"]}
      renderParent={({ label, checked, indeterminate, onChange }) => (
        <Box sx={{ marginBottom: 2 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
      renderChild={({ label, checked, onChange, index }) => (
        <Box key={index} sx={{ marginLeft: 3, marginBottom: 1 }}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={checked}
                onChange={onChange}
              />
            }
          />
        </Box>
      )}
    />
  );
}
        \`.trim()
      }
    }
  }
}`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const ae=["Default","Vertical"];export{i as Default,s as Vertical,ae as __namedExportsOrder,te as default};
