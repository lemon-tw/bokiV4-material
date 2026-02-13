import{j as e}from"./jsx-runtime-BO8uF4Og.js";import"./lemonTheme-DRSUy1mj.js";import{x as i,w as p}from"./Rest-CkA2PqYt.js";import"./Alert-9_z-GEVK.js";import"./Avatar-kr3oDakC.js";import"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import"./Typography-BcGPB_gl.js";import{B as l}from"./CheckCircle.es-DXCUKnUH.js";import{F as x}from"./FormControlLabel-CQG9jDu4.js";import"./index-D4H_InIO.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const te={title:"Components/Atoms/Checkbox/CheckboxGroup",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{parentLabel:{control:"text"},labels:{control:"object"},renderParent:{control:!1},renderChild:{control:!1}},args:{parentLabel:"水果全選",labels:["Apple","Banana","Orange"]}},o={render:n=>e.jsx(l,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:e.jsx(i,{...n})}),parameters:{docs:{source:{code:`
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
        `.trim()}}}},r={render:n=>e.jsx(i,{...n,renderParent:({label:t,checked:a,indeterminate:m,onChange:c})=>e.jsx(l,{sx:{marginBottom:2},children:e.jsx(x,{label:t,control:e.jsx(p,{checked:a,indeterminate:m,onChange:c})})}),renderChild:({label:t,checked:a,onChange:m,index:c})=>e.jsx(l,{sx:{marginLeft:3,marginBottom:1},children:e.jsx(x,{label:t,control:e.jsx(p,{checked:a,onChange:m})})},c)}),parameters:{docs:{source:{code:`
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,C,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const ae=["Default","Vertical"];export{o as Default,r as Vertical,ae as __namedExportsOrder,te as default};
