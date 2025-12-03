import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import"./lemonTheme-XVakIAq2.js";import{q as p,t as f,B as t}from"./Calendar-D4VDGI_h.js";import{B as d}from"./IconBase.es-wFTi3CwP.js";import"./DefaultPropsProvider-BZF_OTnr.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const L={title:"components/Modules/Modal/Modal",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},a={render:s=>{const[i,o]=y.useState(!1),r=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:r,children:"Open alert dialog"}),n.jsx(p,{...s,open:i,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{icon:n.jsx(f,{}),size:"large",title:"This is a modal title",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},l={render:s=>{const[i,o]=y.useState(!1),r=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n.jsx(d,{sx:{display:"flex",gap:1},children:n.jsx(t,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),n.jsxs(d,{sx:{display:"flex",gap:1},children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:r,children:"Open alert dialog"}),n.jsx(p,{...s,open:i,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{size:"large",title:"This is a modal title",align:"start",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var h,u,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const localActions = <>
        <Button onClick={handleClose} variant="outlined">
          Disagree
        </Button>
        <Button onClick={handleClose}>Agree</Button>
      </>;
    return <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>
      </div>;
  },
  args: {
    icon: <WarningIcon />,
    size: "large",
    title: "This is a modal title",
    content: <>
        <p>1. You can replace this with your ❖ content component</p>
        <p>
          2. Or you can detach an instance of this modal and replace this
          content box with your own content
        </p>
      </>
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,m,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    }}>
        {/* 左邊的按鈕 */}
        <Box sx={{
        display: "flex",
        gap: 1
      }}>
          <Button variant="outlined" onClick={() => alert("Learn more")}>
            Learn more
          </Button>
        </Box>

        {/* 右邊的按鈕 */}
        <Box sx={{
        display: "flex",
        gap: 1
      }}>
          <Button onClick={handleClose} variant="outlined">
            Disagree
          </Button>
          <Button onClick={handleClose}>Agree</Button>
        </Box>
      </Box>;
    return <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" actions={localActions}></Modal>
      </div>;
  },
  args: {
    size: "large",
    title: "This is a modal title",
    align: "start",
    content: <>
        <p>1. You can replace this with your ❖ content component</p>
        <p>
          2. Or you can detach an instance of this modal and replace this
          content box with your own content
        </p>
      </>
  }
}`,...(C=(m=l.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const S=["WithIcon","WithLink"];export{a as WithIcon,l as WithLink,S as __namedExportsOrder,L as default};
