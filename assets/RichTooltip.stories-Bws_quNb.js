import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as x}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{a2 as i,c as n}from"./Calendar-Dr32-U0b.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const w={title:"components/Atoms/Tooltip/RichTooltip",component:i,parameters:{docs:{description:{component:"因為storybook會阻擋首次Hover行為，點擊或focus後才能正常使用"}},layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:"text"},disableInteractive:{control:"boolean"}},args:{}},e={render:o=>{const[a,s]=x.useState(!1),h=()=>{s(!0)},g=t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"}),t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>s(!1),children:"close"})]});return t.jsx(i,{placement:"right-start",...o,open:a,onOpen:h,actions:g,children:t.jsx(n,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0}},r={render:o=>{const a=t.jsx(t.Fragment,{children:t.jsx(n,{variant:"text",color:"primary",sx:{width:80,height:30,padding:0},onClick:()=>{alert("learn more clicked")},children:"learn more"})});return t.jsx(i,{placement:"right-start",...o,actions:a,children:t.jsx(n,{children:"Hover to open"})})},args:{title:"Title",content:"Supporting line text lorem ipsum dolor sit amet, consectetur",arrow:!0,disableInteractive:!1}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const y=["Controlled","Uncontrolled"];export{e as Controlled,r as Uncontrolled,y as __namedExportsOrder,w as default};
