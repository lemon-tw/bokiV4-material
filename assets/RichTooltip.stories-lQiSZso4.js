import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as x}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{u as a}from"./Rest-CkA2PqYt.js";import"./Alert-9_z-GEVK.js";import"./Avatar-kr3oDakC.js";import{B as r}from"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import"./Typography-BcGPB_gl.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./CheckCircle.es-DXCUKnUH.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./FormControlLabel-CQG9jDu4.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./Divider-QqgqyZ2C.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const nt={title:"components/Atoms/Tooltip/RichTooltip",component:a,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},o={render:e=>{const[i,s]=x.useState(!1),h=()=>{s(!0)},g=t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(r,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>s(!1),children:"close"})]});return t.jsx(a,{placement:"right-start",...e,open:i,onOpen:h,actions:g,children:t.jsx(r,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},n={render:e=>{const i=t.jsx(t.Fragment,{children:t.jsx(r,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(a,{placement:"right-start",...e,actions:i,children:t.jsx(r,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const localActions = <>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>\r
          learn more\r
        </Button>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => setOpen(false)}>\r
          close\r
        </Button>\r
      </>;
    return <RichTooltip placement="right-start" {...args} open={open} onOpen={handleOpen}
    // onClose={() => setOpen(false)}
    actions={localActions}>\r
        <Button>Hover to open</Button>\r
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const localActions = <>\r
        <Button variant="text" color="primary" sx={{
        width: 80,
        height: 30,
        padding: 0
      }} onClick={() => {
        alert("learn more clicked");
      }}>\r
          learn more\r
        </Button>\r
      </>;
    return <RichTooltip placement="right-start" {...args} actions={localActions}>\r
        <Button>Hover to open</Button>\r
      </RichTooltip>;
  },
  args: {
    title: "Title",
    content: "Supporting line text lorem ipsum dolor sit amet, consectetur",
    arrow: true,
    disableInteractive: false
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const et=["Controlled","Uncontrolled"];export{o as Controlled,n as Uncontrolled,et as __namedExportsOrder,nt as default};
