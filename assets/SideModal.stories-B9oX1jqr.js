import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as W}from"./index-D4H_InIO.js";import{p as P}from"./defaultPalette-CDIRQpAz.js";import{u as z}from"./useTheme-DpjMkLyW.js";import{s as E}from"./memoTheme-DkEl0Jev.js";import{I as G}from"./IconButton-D_P5iQm9.js";import{X as A}from"./X.esm-De9lqQTk.js";import{B as i}from"./Box-BMmTB2V6.js";import{C as q,a as V}from"./CaretRight.esm-QHyypDvM.js";import{D as _}from"./DialogTitle-C8rOzEkn.js";import{D as J,L as f,a as g,T as j,E as b}from"./Tray.esm-mu6JURaU.js";import{B as x}from"./Button-BOEVMV6G.js";import{L as y}from"./Menu-wCs4t9Vd.js";import{L as C,a as v,D as S}from"./ListItemText-B_0oKPvW.js";import{T as I}from"./Typography-DBLLtZzJ.js";import{T as d}from"./TextField-CZVtwrgg.js";import{M as L}from"./MenuItem-DaMy8pAo.js";import{F as B}from"./FormControlLabel-Bx_LTtIb.js";import{C as M}from"./Checkbox-O-b5zA8X.js";import"./DefaultPropsProvider-DqVT3Pki.js";import"./useTheme-Dm3NhWHt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-DunFoCRt.js";import"./TransitionGroupContext-vo2vFi0t.js";import"./CircularProgress-BzOVd61n.js";import"./IconBase.esm-BbKRF193.js";import"./extendSxProp-Cr0utasV.js";import"./index-Bm8UbI65.js";import"./useSlot-D9yE0s1_.js";import"./mergeSlotProps-sSfPEMoJ.js";import"./utils-DUkByWFw.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-DVNWasIp.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-BpHdIFDV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Cc5LuG26.js";import"./isMuiElement-d7vxVVg4.js";import"./useSlotProps-CxyZS-qg.js";import"./Grow-BMu7p32D.js";import"./index-D641xpmC.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DZ8OOg4w.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-FE0mXunH.js";import"./SwitchBase-BX-FO1OC.js";const N=(t,n="primary")=>{var a;const r=P[n],o=((a=t==null?void 0:t.palette)==null?void 0:a[n])??r;return{fontColor:o.menuFont??r.menuFont,bgColor:o.elevated??r.elevated,boxColor:o.onMain??r.onMain}},H=E(({title:t,content:n,align:r,...o})=>e.jsx(J,{...o}),{shouldForwardProp:t=>t!=="title"&&t!=="content"&&t!=="align"})(({anchor:t,theme:n})=>({"& .MuiDrawer-paper":{backgroundColor:N(n).bgColor,borderRadius:t==="left"?"0 20px 20px 0":t==="right"?"20px 0 0 20px":"0"}})),u=({title:t,align:n,content:r,actions:o,anchor:a="right",...s})=>{const h=z(),p=N(h);return e.jsxs(H,{anchor:a,...s,children:[e.jsx(G,{"aria-label":"close",onClick:l=>{var T;return(T=s.onClose)==null?void 0:T.call(s,l,"escapeKeyDown")},sx:{fontSize:"30px",position:"absolute",right:16,top:16},children:e.jsx(A,{})}),t&&e.jsxs(i,{sx:{display:"flex",justifyContent:n},children:[a==="right"&&n==="start"&&e.jsx(i,{sx:{alignContent:"center",ml:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(q,{})}),e.jsx(_,{sx:{p:0,m:"25px",textAlign:n,fontSize:n==="start"?"20px":"24px",fontWeight:n==="start"?500:600,gap:"20px"},color:p.fontColor,children:t}),a==="left"&&n==="start"&&e.jsx(i,{sx:{alignContent:"center",mr:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(V,{})})]}),e.jsx(i,{sx:{backgroundColor:p.boxColor,overflowY:"auto",maxHeight:"calc(100% - 92px)",boxShadow:"0px 2px 10px 0px #0000000D",p:"24px 24px 92px 24px"},children:r}),o&&e.jsx(i,{sx:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:n==="center"?"center":"flex-end",p:"10px",boxShadow:"0px -12px 10px 0px #0000000D",height:"92px",gap:"10px",backgroundColor:p.boxColor},children:o})]})};u.__docgenInfo={description:"",methods:[],displayName:"SideModal",props:{title:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},anchor:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"SideModal只有左右",defaultValue:{value:'"right"',computed:!1}}},composes:["Omit"]};const _e={title:"components/Modules/Modal/SideModal",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["left","right"]},content:{control:"text"},actions:{control:!1}},args:{}},c={render:t=>{const[n,r]=W.useState(!1),o=()=>{r(!0)},a=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(x,{variant:"outlined",onClick:o,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"left",title:"This is a modal title",content:e.jsxs(i,{sx:{width:250},role:"presentation",children:[e.jsx(y,{children:["Inbox","Starred","Send email","Drafts"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))}),e.jsx(S,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))}),e.jsx(S,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))})]})}},m={render:t=>{const[n,r]=W.useState(!1),o=()=>{r(!0)},a=()=>{r(!1)},s=["已入住","尚未入住"],h=["設施損壞","清潔問題","其他"],p=()=>e.jsxs(i,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(I,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(d,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(i,{sx:{display:"flex",gap:2},children:[e.jsx(d,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:s.map(l=>e.jsx(L,{value:l,children:l},l))}),e.jsx(d,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:h.map(l=>e.jsx(L,{value:l,children:l},l))})]}),e.jsx(d,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(i,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(I,{children:"點擊新增檔案 或拖拉"}),e.jsx(I,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(B,{control:e.jsx(M,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(B,{control:e.jsx(M,{}),label:"我不是機器人"})]});return e.jsxs(i,{children:[e.jsx(x,{variant:"outlined",onClick:o,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:a,content:e.jsx(p,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"right",title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"outlined",children:"Clear"}),e.jsx(x,{children:"Despatch"})]})}};var F,k,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <div>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <SideModal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></SideModal>\r
      </div>;
  },
  args: {
    anchor: "left",
    title: "This is a modal title",
    content: <Box sx={{
      width: 250
    }} role="presentation">\r
        <List>\r
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
        <Divider />\r
        <List>\r
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
        <Divider />\r
        <List>\r
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>\r
              <ListItemButton>\r
                <ListItemIcon sx={{
              fontSize: 24
            }}>\r
                  {index % 2 === 0 ? <Tray /> : <Envelope />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
      </Box>
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,w,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const statuses = ["已入住", "尚未入住"];
    const issueTypes = ["設施損壞", "清潔問題", "其他"];
    const ContactForm = () => {
      return <Box component="form" noValidate autoComplete="off" sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}>\r
          <Typography variant="h6" fontWeight={600}>\r
            說明您的問題內容\r
          </Typography>\r
\r
          <TextField fullWidth label="您的姓名" variant="outlined" />\r
          <TextField fullWidth label="Email" variant="outlined" />\r
          <TextField fullWidth label="手機號碼" variant="outlined" placeholder="+886" />\r
\r
          <Box sx={{
          display: "flex",
          gap: 2
        }}>\r
            <TextField fullWidth select label="入住狀態" variant="outlined">\r
              {statuses.map(status => <MenuItem key={status} value={status}>\r
                  {status}\r
                </MenuItem>)}\r
            </TextField>\r
\r
            <TextField fullWidth select label="問題類別" variant="outlined">\r
              {issueTypes.map(type => <MenuItem key={type} value={type}>\r
                  {type}\r
                </MenuItem>)}\r
            </TextField>\r
          </Box>\r
\r
          <TextField fullWidth multiline rows={4} label="說明內容" variant="outlined" />\r
\r
          <Box sx={{
          border: "1px dashed #ccc",
          borderRadius: 2,
          p: 2,
          textAlign: "center",
          color: "#666"
        }}>\r
            <Typography>點擊新增檔案 或拖拉</Typography>\r
            <Typography variant="caption">\r
              SVG, PNG, JPG or GIF (最大 3MB)\r
            </Typography>\r
          </Box>\r
\r
          <FormControlLabel control={<Checkbox />} label="提供您的購物清單，更方便飯店人員回應您準確資訊" />\r
\r
          <FormControlLabel control={<Checkbox />} label="我不是機器人" />\r
        </Box>;
    };
    return <Box>\r
        <Button variant="outlined" onClick={handleClickOpen}>\r
          Open alert dialog\r
        </Button>\r
        <SideModal {...args} open={open} onClose={handleClose} content={<ContactForm />} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></SideModal>\r
      </Box>;
  },
  args: {
    anchor: "right",
    title: "聯絡我們",
    align: "start",
    actions: <>\r
        <Button variant="outlined">Clear</Button>\r
        <Button>Despatch</Button>\r
      </>
  }
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const Je=["Navigation","Form"];export{m as Form,c as Navigation,Je as __namedExportsOrder,_e as default};
