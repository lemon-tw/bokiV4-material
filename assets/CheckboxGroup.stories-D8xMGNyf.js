import{j as e}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-Bb89J2P2.js";import{y as i,x as p}from"./Calendar-BlZ4Vs92.js";import{F as x}from"./Cart-DvqdL-mf.js";import"./Profile-O2wuqqWP.js";import"./ToggleButton-C9hjwxNF.js";import"./BottomModal-eKP2Btm8.js";import"./Typography-Ot6rEagF.js";import{B as l}from"./CheckCircle.es-D_AxlQm-.js";import"./index-D4H_InIO.js";import"./defaultPalette-CV1bpgA4.js";import"./zh-tw-CQrB7Xx_.js";import"./Link-xlDD0kqF.js";import"./Copy.es-D3r6Zzf3.js";import"./getThemeProps-BJB9b3ct.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";import"./Tabs-BAny_1Sm.js";import"./index-Bm8UbI65.js";import"./Warning.es-TWNjRQ8R.js";const q={title:"Components/Atoms/Checkbox/CheckboxGroup",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"},renderParent:{control:!1},renderChild:{control:!1}},args:{parentLabel:"水果全選",labels:["Apple","Banana","Orange"]}},o={render:r=>e.jsx(l,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:e.jsx(i,{...r})}),parameters:{docs:{source:{code:`
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
        `.trim()}}}},n={render:r=>e.jsx(i,{...r,renderParent:({label:t,checked:a,indeterminate:c,onChange:m})=>e.jsx(l,{sx:{marginBottom:2},children:e.jsx(x,{label:t,control:e.jsx(p,{checked:a,indeterminate:c,onChange:m})})}),renderChild:({label:t,checked:a,onChange:c,index:m})=>e.jsx(l,{sx:{marginLeft:3,marginBottom:1},children:e.jsx(x,{label:t,control:e.jsx(p,{checked:a,onChange:c})})},m)}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};var s,d,h;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,C,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const v=["Default","Vertical"];export{o as Default,n as Vertical,v as __namedExportsOrder,q as default};
