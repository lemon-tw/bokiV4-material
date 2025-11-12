import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import"./DefaultPropsProvider-B0z8ytDR.js";import{q as p,s as f,c as t,B as d}from"./Calendar-CQbQvurq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const A={title:"components/Modules/Modal/Modal",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},a={render:l=>{const[s,o]=y.useState(!1),i=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:i,children:"Open alert dialog"}),n.jsx(p,{...l,open:s,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{icon:n.jsx(f,{}),size:"large",title:"This is a modal title",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},r={render:l=>{const[s,o]=y.useState(!1),i=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n.jsx(d,{sx:{display:"flex",gap:1},children:n.jsx(t,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),n.jsxs(d,{sx:{display:"flex",gap:1},children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:i,children:"Open alert dialog"}),n.jsx(p,{...l,open:s,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{size:"large",title:"This is a modal title",align:"start",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var h,u,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <>\r
        <Button onClick={handleClose} variant="outlined">\r
          Disagree\r
        </Button>\r
        <Button onClick={handleClose}>Agree</Button>\r
      </>;
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>\r
      </div>;
  },
  args: {
    icon: <WarningIcon />,
    size: "large",
    title: "This is a modal title",
    content: <>\r
        <p>1. You can replace this with your ❖ content component</p>\r
        <p>\r
          2. Or you can detach an instance of this modal and replace this\r
          content box with your own content\r
        </p>\r
      </>
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,m,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}>\r
        {/* 左邊的按鈕 */}\r
        <Box sx={{
        display: "flex",
        gap: 1
      }}>\r
          <Button variant="outlined" onClick={() => alert("Learn more")}>\r
            Learn more\r
          </Button>\r
        </Box>\r
\r
        {/* 右邊的按鈕 */}\r
        <Box sx={{
        display: "flex",
        gap: 1
      }}>\r
          <Button onClick={handleClose} variant="outlined">\r
            Disagree\r
          </Button>\r
          <Button onClick={handleClose}>Agree</Button>\r
        </Box>\r
      </Box>;
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>\r
      </div>;
  },
  args: {
    size: "large",
    title: "This is a modal title",
    align: "start",
    content: <>\r
        <p>1. You can replace this with your ❖ content component</p>\r
        <p>\r
          2. Or you can detach an instance of this modal and replace this\r
          content box with your own content\r
        </p>\r
      </>
  }
}`,...(C=(m=r.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const M=["WithIcon","WithLink"];export{a as WithIcon,r as WithLink,M as __namedExportsOrder,A as default};
