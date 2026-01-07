import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-D3L-fyAt.js";import{L as m,T as a,M as I,F as B,C as L}from"./Cart-BmTxRWkD.js";import"./Profile-D7fq0gac.js";import{B as d}from"./ToggleButton-Dz6MUWUy.js";import{L as x,e as u,f as h}from"./Calendar-urrPCR6X.js";import{B as y}from"./BottomModal-BV7TXOuO.js";import"./Typography-CuyCD7JC.js";import{r as f,o as j}from"./Tray.es-7PWiDqvs.js";import{B as l,T as b}from"./CheckCircle.es-CqC-SO1s.js";import{L as g}from"./ListItemIcon-DR2N8zuh.js";import{D as v}from"./Tabs-D_bHrf_Q.js";import"./DefaultPropsProvider-BCA4dz5N.js";import"./WarningCircle.es-xdjX6KHF.js";import"./index-Bm8UbI65.js";import"./Link-bWOyw_QZ.js";import"./dayjs.min-BJoxDa44.js";import"./Copy.es-BKSzFw9Z.js";import"./getThemeProps-7AknbUOe.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const ae={title:"components/Modules/Modal/BottomModal",component:y,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},s={render:t=>{const[n,i]=M.useState(!1),c=()=>{i(!0)},p=()=>{i(!1)};return e.jsxs("div",{children:[e.jsx(d,{variant:"outlined",onClick:c,children:"Open alert dialog"}),e.jsx(y,{...t,open:n,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:e.jsxs(l,{sx:{width:250},role:"presentation",children:[e.jsx(m,{children:["Inbox","Starred","Send email","Drafts"].map((t,n)=>e.jsx(x,{disablePadding:!0,children:e.jsxs(u,{children:[e.jsx(g,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(j,{})}),e.jsx(h,{primary:t})]})},t))}),e.jsx(v,{}),e.jsx(m,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(x,{disablePadding:!0,children:e.jsxs(u,{children:[e.jsx(g,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(j,{})}),e.jsx(h,{primary:t})]})},t))}),e.jsx(v,{}),e.jsx(m,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(x,{disablePadding:!0,children:e.jsxs(u,{children:[e.jsx(g,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(j,{})}),e.jsx(h,{primary:t})]})},t))})]})}},r={render:t=>{const[n,i]=M.useState(!1),c=()=>{i(!0)},p=()=>{i(!1)},W=["已入住","尚未入住"],D=["設施損壞","清潔問題","其他"],P=()=>e.jsxs(l,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(b,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(a,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(a,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(a,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(l,{sx:{display:"flex",gap:2},children:[e.jsx(a,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(o=>e.jsx(I,{value:o,children:o},o))}),e.jsx(a,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:D.map(o=>e.jsx(I,{value:o,children:o},o))})]}),e.jsx(a,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(l,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(b,{children:"點擊新增檔案 或拖拉"}),e.jsx(b,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(B,{control:e.jsx(L,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(B,{control:e.jsx(L,{}),label:"我不是機器人"})]});return e.jsxs(l,{children:[e.jsx(d,{variant:"outlined",onClick:c,children:"Open alert dialog"}),e.jsx(y,{...t,open:n,onClose:p,content:e.jsx(P,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outlined",children:"Clear"}),e.jsx(d,{children:"Despatch"})]})}};var T,C,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <BottomModal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>
      </div>;
  },
  args: {
    anchor: "top",
    title: "This is a modal title",
    content: <Box sx={{
      width: 250
    }} role="presentation">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{
              fontSize: 24
            }}>
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{
              fontSize: 24
            }}>
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{
              fontSize: 24
            }}>
                  {index % 2 === 0 ? <TrayIcon /> : <EnvelopeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
      </Box>
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var F,O,k;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      }}>
          <Typography variant="h6" fontWeight={600}>
            說明您的問題內容
          </Typography>

          <TextField fullWidth label="您的姓名" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField fullWidth label="手機號碼" variant="outlined" placeholder="+886" />

          <Box sx={{
          display: "flex",
          gap: 2
        }}>
            <TextField fullWidth select label="入住狀態" variant="outlined">
              {statuses.map(status => <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>)}
            </TextField>

            <TextField fullWidth select label="問題類別" variant="outlined">
              {issueTypes.map(type => <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>)}
            </TextField>
          </Box>

          <TextField fullWidth multiline rows={4} label="說明內容" variant="outlined" />

          <Box sx={{
          border: "1px dashed #ccc",
          borderRadius: 2,
          p: 2,
          textAlign: "center",
          color: "#666"
        }}>
            <Typography>點擊新增檔案 或拖拉</Typography>
            <Typography variant="caption">
              SVG, PNG, JPG or GIF (最大 3MB)
            </Typography>
          </Box>

          <FormControlLabel control={<Checkbox />} label="提供您的購物清單，更方便飯店人員回應您準確資訊" />

          <FormControlLabel control={<Checkbox />} label="我不是機器人" />
        </Box>;
    };
    return <Box>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <BottomModal {...args} open={open} onClose={handleClose} content={<ContactForm />} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></BottomModal>
      </Box>;
  },
  args: {
    title: "聯絡我們",
    align: "start",
    actions: <>
        <Button variant="outlined">Clear</Button>
        <Button>Despatch</Button>
      </>
  }
}`,...(k=(O=r.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const ie=["Navigation","Form"];export{r as Form,s as Navigation,ie as __namedExportsOrder,ae as default};
