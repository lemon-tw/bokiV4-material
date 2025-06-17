import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./index-D4lIrffr.js";import{C as n}from"./Checkbox-91P-jMj5.js";import"./defaultPalette-oHICA1rp.js";import"./useForkRef-DKvbwOfq.js";import"./DefaultPropsProvider-C_D9gtOx.js";import"./FormControlLabel-C9S6ue6v.js";import"./useSlot-DDFSxm4c.js";import"./SwitchBase-v29BblHh.js";import"./createSimplePaletteValueFilter-BFDY_7o5.js";import"./useEnhancedEffect-BJR13lql.js";import"./index-D-5puQfV.js";import"./useTheme-Bv91CFUT.js";const Q={title:"Components/Checkbox/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","error"]},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{color:"primary"}},B=e=>{const[o,t]=R.useState(!1),p=h=>{t(h.target.checked)};return r.jsx(n,{...e,checked:o,onChange:p})},c={render:e=>r.jsx(B,{...e}),parameters:{docs:{source:{code:`
<Checkbox />`.trim()}}}},s={render:e=>r.jsx(B,{...e,label:"Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox label="Standard 樣式"/>`.trim()}}}},l={render:e=>r.jsx(n,{...e,defaultChecked:!1}),parameters:{docs:{source:{code:`
<Checkbox defaultChecked={false}/>`.trim()}}}},d={render:e=>r.jsx(n,{...e,defaultChecked:!1,label:"非受控模式 - Standard 樣式"}),parameters:{docs:{source:{code:`
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  `.trim()}}}},m={render:e=>r.jsx(n,{...e,indeterminate:!0,label:"indeterminate"})},E=()=>{const[e,o]=R.useState([!0,!1]),t=e.every(Boolean),h=e.some(Boolean)&&!t;return r.jsxs("ul",{children:[r.jsx(n,{checked:t,indeterminate:h,onChange:a=>o([a.target.checked,a.target.checked]),label:"父層"}),r.jsx("li",{style:{marginLeft:"48px"},children:r.jsx(n,{checked:e[0],onChange:a=>o([a.target.checked,e[1]]),label:"子項目1"})}),r.jsx("li",{style:{marginLeft:"48px"},children:r.jsx(n,{checked:e[1],onChange:a=>o([e[0],a.target.checked]),label:"子項目2"})})]})},i={render:()=>r.jsx(E,{}),parameters:{docs:{source:{code:`
<ul>
  <li>
    <FormControlLabel
      label="全選"
      control={
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleParentChange}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目1"
      control={
        <Checkbox
          checked={checked[0]}
          onChange={handleChildChange(0)}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目2"
      control={
        <Checkbox
          checked={checked[1]}
          onChange={handleChildChange(1)}
        />
      }
    />
  </li>
</ul>
`.trim()}}}};var C,u,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox />\`.trim()
      }
    }
  }
}`,...(k=(u=c.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <InteractiveTemplate {...args} label="Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox label="Standard 樣式"/>\`.trim()
      }
    }
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,S,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} defaultChecked={false} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox defaultChecked={false}/>\`.trim()
      }
    }
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,I,y;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} defaultChecked={false} label="非受控模式 - Standard 樣式" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox 
  defaultChecked={false}
  label="非受控模式 - Standard 樣式"
/>
  \`.trim()
      }
    }
  }
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var F,T,v;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} indeterminate={true} label="indeterminate" />
}`,...(v=(T=m.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var G,U,W;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <IndeterminateGroupTemplate />,
  parameters: {
    docs: {
      source: {
        code: \`
<ul>
  <li>
    <FormControlLabel
      label="全選"
      control={
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleParentChange}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目1"
      control={
        <Checkbox
          checked={checked[0]}
          onChange={handleChildChange(0)}
        />
      }
    />
  </li>
  <li>
    <FormControlLabel
      label="子項目2"
      control={
        <Checkbox
          checked={checked[1]}
          onChange={handleChildChange(1)}
        />
      }
    />
  </li>
</ul>
\`.trim()
      }
    }
  }
}`,...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const V=["Standard","WithLabel","Uncontrolled","UncontrolledWithLabel","Indeterminate","IndeterminateGroup"];export{m as Indeterminate,i as IndeterminateGroup,c as Standard,l as Uncontrolled,d as UncontrolledWithLabel,s as WithLabel,V as __namedExportsOrder,Q as default};
