import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as x}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{v as a}from"./Rest-CQl1Bj9c.js";import"./Alert-D5ekytAl.js";import"./Avatar-pRnr6DU5.js";import{B as o}from"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./Modal-BPmM9JPO.js";import"./BottomModal-imHOmNSj.js";import"./Profile-0lAtxsva.js";import"./Typography-BZQ6nlo4.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-BXMbO79g.js";import"./zh-tw-C-UY_gDz.js";import"./Cart-uS54e7PY.js";import"./FormControlLabel-B--Rj6MC.js";import"./Plus.es-Cfd-24J4.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const rt={title:"components/Atoms/Tooltip/RichTooltip",component:a,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},r={render:e=>{const[i,s]=x.useState(!1),h=()=>{s(!0)},g=t.jsxs(t.Fragment,{children:[t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>s(!1),children:"close"})]});return t.jsx(a,{placement:"right-start",...e,open:i,onOpen:h,actions:g,children:t.jsx(o,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},n={render:e=>{const i=t.jsx(t.Fragment,{children:t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(a,{placement:"right-start",...e,actions:i,children:t.jsx(o,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const localActions = <>
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>
          learn more
        </Button>
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => setOpen(false)}>
          close
        </Button>
      </>;
    return <RichTooltip placement="right-start" {...args} open={open} onOpen={handleOpen}
    // onClose={() => setOpen(false)}
    actions={localActions}>
        <Button>Hover to open</Button>
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const localActions = <>
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>
          learn more
        </Button>
      </>;
    return <RichTooltip placement="right-start" {...args} actions={localActions}>
        <Button>Hover to open</Button>
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true,
    disableInteractive: false
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const nt=["Controlled","Uncontrolled"];export{r as Controlled,n as Uncontrolled,nt as __namedExportsOrder,rt as default};
