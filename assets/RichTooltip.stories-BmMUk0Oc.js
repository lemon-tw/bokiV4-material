import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as x}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{t as a}from"./Rest-tDr7TA7b.js";import"./Alert-C4O2UbhG.js";import"./Avatar-BVa3lbN8.js";import{B as o}from"./ToggleButton-B_1nB3DD.js";import"./DraggableChips-Cqssnqvp.js";import"./Modal-d6heRAo4.js";import"./BottomModal-BdGv5m3s.js";import"./Profile-BM3a8Z3E.js";import"./Typography-CFfHvyVk.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-BDoXRaCv.js";import"./FormControlLabel-BHAu7ubQ.js";import"./useFormControl-Dnc_EiuP.js";import"./CaretDown.es-BrMieepg.js";import"./mergeSlotProps-DNuNo-y4.js";import"./Trash.es-Dpr1aoed.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-mCjdN8F2.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-XM0U5i7f.js";import"./CalendarBlank.es-BbqdSJFW.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-CX9ULaaP.js";import"./AccordionSummary-C21DAd0r.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const at={title:"components/Atoms/Tooltip/RichTooltip",component:a,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},r={render:e=>{const[i,s]=x.useState(!1),h=()=>{s(!0)},g=t.jsxs(t.Fragment,{children:[t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>s(!1),children:"close"})]});return t.jsx(a,{placement:"right-start",...e,open:i,onOpen:h,actions:g,children:t.jsx(o,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},n={render:e=>{const i=t.jsx(t.Fragment,{children:t.jsx(o,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(a,{placement:"right-start",...e,actions:i,children:t.jsx(o,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const st=["Controlled","Uncontrolled"];export{r as Controlled,n as Uncontrolled,st as __namedExportsOrder,at as default};
