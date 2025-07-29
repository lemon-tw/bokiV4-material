import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-DGlRE1oP.js";import{a as l,L as x,c as m,d as u,B as d,T as h,e as I}from"./Typography-2_fYrsYp.js";import{B as y,a as L,T as a,F as v,b as B}from"./RichTooltip-Cx3E0wiy.js";import{r as j,o as b}from"./Tray.es-Pcw44Njx.js";import{L as f}from"./ListItemButton-IV0e0DPQ.js";import{L as g}from"./ListItemIcon-CyXb-wiQ.js";import"./DefaultPropsProvider-w6ViFw_n.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const K={title:"components/Modules/Modal/BottomModal",component:y,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},s={render:n=>{const[t,o]=M.useState(!1),c=()=>{o(!0)},p=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(d,{variant:"outlined",onClick:c,children:"Open alert dialog"}),e.jsx(y,{...n,open:t,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:e.jsxs(l,{sx:{width:250},role:"presentation",children:[e.jsx(x,{children:["Inbox","Starred","Send email","Drafts"].map((n,t)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(f,{children:[e.jsx(g,{sx:{fontSize:24},children:t%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(u,{primary:n})]})},n))}),e.jsx(L,{}),e.jsx(x,{children:["All mail","Trash","Spam"].map((n,t)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(f,{children:[e.jsx(g,{sx:{fontSize:24},children:t%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(u,{primary:n})]})},n))}),e.jsx(L,{}),e.jsx(x,{children:["All mail","Trash","Spam"].map((n,t)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(f,{children:[e.jsx(g,{sx:{fontSize:24},children:t%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(u,{primary:n})]})},n))})]})}},i={render:n=>{const[t,o]=M.useState(!1),c=()=>{o(!0)},p=()=>{o(!1)},W=["已入住","尚未入住"],P=["設施損壞","清潔問題","其他"],D=()=>e.jsxs(l,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(h,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(a,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(a,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(a,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(l,{sx:{display:"flex",gap:2},children:[e.jsx(a,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(r=>e.jsx(I,{value:r,children:r},r))}),e.jsx(a,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:P.map(r=>e.jsx(I,{value:r,children:r},r))})]}),e.jsx(a,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(l,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(h,{children:"點擊新增檔案 或拖拉"}),e.jsx(h,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(v,{control:e.jsx(B,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(v,{control:e.jsx(B,{}),label:"我不是機器人"})]});return e.jsxs(l,{children:[e.jsx(d,{variant:"outlined",onClick:c,children:"Open alert dialog"}),e.jsx(y,{...n,open:t,onClose:p,content:e.jsx(D,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outlined",children:"Clear"}),e.jsx(d,{children:"Despatch"})]})}};var T,C,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <BottomModal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>\r
      </div>;
  },
  args: {
    anchor: "top",
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
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}\r
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
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}\r
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
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}\r
                </ListItemIcon>\r
                <ListItemText primary={text} />\r
              </ListItemButton>\r
            </ListItem>)}\r
        </List>\r
      </Box>
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var F,O,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <BottomModal {...args} open={open} onClose={handleClose} content={<ContactForm />} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>\r
      </Box>;
  },
  args: {
    title: "聯絡我們",
    align: "start",
    actions: <>\r
        <Button variant="outlined">Clear</Button>\r
        <Button>Despatch</Button>\r
      </>
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Q=["Navigation","Form"];export{i as Form,s as Navigation,Q as __namedExportsOrder,K as default};
