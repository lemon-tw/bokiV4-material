import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{L as m,d as x,e as u}from"./Rest-DPHg0exl.js";import{L as h,T as i,M as I}from"./Alert-BXVqmw5v.js";import"./Avatar-BwnX3fSq.js";import{B as d}from"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-BTC8HJGy.js";import"./Modal-BHwqZrHA.js";import{S as y}from"./BottomModal-CQgISz-Y.js";import"./Profile-CwMu8OsX.js";import"./Typography-BcGPB_gl.js";import{r as f,o as g}from"./Tray.es-MpG47nPm.js";import{B as a,T as j}from"./CheckCircle.es-DXCUKnUH.js";import{L as b}from"./ListItemIcon-BptdivKO.js";import{D as L}from"./Divider-Kbwq-I49.js";import{F as v,C as T}from"./FormControlLabel-S5Kd-VCb.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-Dvesi0jg.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-Dpzk0ddK.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-CX_v8mKZ.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./AccordionSummary-D8DSbU2C.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const ve={title:"components/Modules/Modal/SideModal",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["left","right"]},content:{control:"text"},actions:{control:!1}},args:{}},l={render:t=>{const[n,o]=M.useState(!1),p=()=>{o(!0)},c=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),e.jsx(y,{...t,open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"left",title:"This is a modal title",content:e.jsxs(a,{sx:{width:250},role:"presentation",children:[e.jsx(h,{children:["Inbox","Starred","Send email","Drafts"].map((t,n)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(x,{children:[e.jsx(b,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(g,{})}),e.jsx(u,{primary:t})]})},t))}),e.jsx(L,{}),e.jsx(h,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(x,{children:[e.jsx(b,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(g,{})}),e.jsx(u,{primary:t})]})},t))}),e.jsx(L,{}),e.jsx(h,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(m,{disablePadding:!0,children:e.jsxs(x,{children:[e.jsx(b,{sx:{fontSize:24},children:n%2===0?e.jsx(f,{}):e.jsx(g,{})}),e.jsx(u,{primary:t})]})},t))})]})}},s={render:t=>{const[n,o]=M.useState(!1),p=()=>{o(!0)},c=()=>{o(!1)},W=["已入住","尚未入住"],D=["設施損壞","清潔問題","其他"],P=()=>e.jsxs(a,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(j,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(i,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(i,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(i,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(a,{sx:{display:"flex",gap:2},children:[e.jsx(i,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(r=>e.jsx(I,{value:r,children:r},r))}),e.jsx(i,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:D.map(r=>e.jsx(I,{value:r,children:r},r))})]}),e.jsx(i,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(a,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(j,{children:"點擊新增檔案 或拖拉"}),e.jsx(j,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(v,{control:e.jsx(T,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(v,{control:e.jsx(T,{}),label:"我不是機器人"})]});return e.jsxs(a,{children:[e.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),e.jsx(y,{...t,open:n,onClose:c,content:e.jsx(P,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"right",title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outlined",children:"Clear"}),e.jsx(d,{children:"Despatch"})]})}};var C,B,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var F,O,k;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Te=["Navigation","Form"];export{s as Form,l as Navigation,Te as __namedExportsOrder,ve as default};
