import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as x}from"./index-D4H_InIO.js";import"./lemonTheme-DbLJfmwh.js";import{y as i}from"./Calendar-DGseMECJ.js";import{B as n}from"./Profile-BgdNPY20.js";import"./BottomModal-Dlt3Pqpu.js";import"./DefaultPropsProvider-BtL_yMcr.js";import"./CaretRight.es-CgghsZ2Q.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const A={title:"components/Atoms/Tooltip/RichTooltip",component:i,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},e={render:r=>{const[a,s]=x.useState(!1),h=()=>{s(!0)},g=t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>s(!1),children:"close"})]});return t.jsx(i,{placement:"right-start",...r,open:a,onOpen:h,actions:g,children:t.jsx(n,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},o={render:r=>{const a=t.jsx(t.Fragment,{children:t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(i,{placement:"right-start",...r,actions:a,children:t.jsx(n,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const R=["Controlled","Uncontrolled"];export{e as Controlled,o as Uncontrolled,R as __namedExportsOrder,A as default};
