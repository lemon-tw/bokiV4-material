import{j as e}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DbLJfmwh.js";import{B as i,A as p}from"./Calendar-DGseMECJ.js";import{F as x}from"./Profile-BgdNPY20.js";import"./BottomModal-Dlt3Pqpu.js";import{B as m}from"./CaretRight.es-CgghsZ2Q.js";import"./index-D4H_InIO.js";import"./DefaultPropsProvider-BtL_yMcr.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const E={title:"Components/Atoms/Checkbox/CheckboxGroup",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"},renderParent:{control:!1},renderChild:{control:!1}},args:{parentLabel:"水果全選",labels:["Apple","Banana","Orange"]}},n={render:r=>e.jsx(m,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:e.jsx(i,{...r})}),parameters:{docs:{source:{code:`
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
        `.trim()}}}},o={render:r=>e.jsx(i,{...r,renderParent:({label:a,checked:t,indeterminate:c,onChange:l})=>e.jsx(m,{sx:{marginBottom:2},children:e.jsx(x,{label:a,control:e.jsx(p,{checked:t,indeterminate:c,onChange:l})})}),renderChild:({label:a,checked:t,onChange:c,index:l})=>e.jsx(m,{sx:{marginLeft:3,marginBottom:1},children:e.jsx(x,{label:a,control:e.jsx(p,{checked:t,onChange:c})})},l)}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};var s,d,h;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: "flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center"
  }}>
      <CheckboxGroup {...args} />
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,C,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args} renderParent={({
    label,
    checked,
    indeterminate,
    onChange
  }) => <Box sx={{
    marginBottom: 2
  }}>
          <FormControlLabel label={label} control={<Checkbox checked={checked} indeterminate={indeterminate} onChange={onChange} />} />
        </Box>} renderChild={({
    label,
    checked,
    onChange,
    index
  }) => <Box key={index} sx={{
    marginLeft: 3,
    marginBottom: 1
  }}>
          <FormControlLabel label={label} control={<Checkbox checked={checked} onChange={onChange} />} />
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
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const O=["Default","Vertical"];export{n as Default,o as Vertical,O as __namedExportsOrder,E as default};
