import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import"./Rest-CQl1Bj9c.js";import"./Alert-D5ekytAl.js";import"./Avatar-pRnr6DU5.js";import{B as t}from"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import{M as p}from"./Modal-BPmM9JPO.js";import"./BottomModal-imHOmNSj.js";import"./Profile-0lAtxsva.js";import"./Typography-BZQ6nlo4.js";import{r as f}from"./Warning.es-BRl635yR.js";import{B as d}from"./CheckCircle.es-BXMbO79g.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-C-UY_gDz.js";import"./Cart-uS54e7PY.js";import"./FormControlLabel-B--Rj6MC.js";import"./Plus.es-Cfd-24J4.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Divider-DR1e4bhK.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const rn={title:"components/Modules/Modal/Modal",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text"},actions:{control:!1},icon:{control:!1}},args:{}},a={render:r=>{const[l,o]=y.useState(!1),s=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:s,children:"Open alert dialog"}),n.jsx(p,{...r,open:l,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{icon:n.jsx(f,{}),size:"large",title:"This is a modal title",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}},i={render:r=>{const[l,o]=y.useState(!1),s=()=>{o(!0)},e=()=>{o(!1)},c=n.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n.jsx(d,{sx:{display:"flex",gap:1},children:n.jsx(t,{variant:"outlined",onClick:()=>alert("Learn more"),children:"Learn more"})}),n.jsxs(d,{sx:{display:"flex",gap:1},children:[n.jsx(t,{onClick:e,variant:"outlined",children:"Disagree"}),n.jsx(t,{onClick:e,children:"Agree"})]})]});return n.jsxs("div",{children:[n.jsx(t,{variant:"outlined",onClick:s,children:"Open alert dialog"}),n.jsx(p,{...r,open:l,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",actions:c})]})},args:{size:"large",title:"This is a modal title",align:"start",content:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"1. You can replace this with your ❖ content component"}),n.jsx("p",{children:"2. Or you can detach an instance of this modal and replace this content box with your own content"})]})}};var m,h,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,g,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const ln=["WithIcon","WithLink"];export{a as WithIcon,i as WithLink,ln as __namedExportsOrder,rn as default};
