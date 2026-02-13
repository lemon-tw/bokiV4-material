import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{L as c,d as x,e as u}from"./Rest-CkA2PqYt.js";import{L as h,T as o,M as I}from"./Alert-9_z-GEVK.js";import"./Avatar-kr3oDakC.js";import{B as d}from"./ToggleButton-CJD6HA4B.js";import"./DraggableChips-D0MI0M_6.js";import"./Modal-C5rE0h8n.js";import{B as y}from"./BottomModal-Bux3tXCl.js";import"./Profile-R4YyeHyx.js";import"./Typography-BcGPB_gl.js";import{r as f,o as j}from"./Tray.es-MpG47nPm.js";import{B as a,T as b}from"./CheckCircle.es-DXCUKnUH.js";import{L as g}from"./ListItemIcon-BorWUrwm.js";import{D as B}from"./Divider-QqgqyZ2C.js";import{F as L,C as v}from"./FormControlLabel-CQG9jDu4.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-DEmRb1Aj.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-CGB2S-5Z.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-BbBue1HL.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./AccordionSummary-BPG7zxQD.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const Lt={title:"components/Modules/Modal/BottomModal",component:y,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},l={render:e=>{const[n,i]=M.useState(!1),p=()=>{i(!0)},m=()=>{i(!1)};return t.jsxs("div",{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:t.jsxs(a,{sx:{width:250},role:"presentation",children:[t.jsx(h,{children:["Inbox","Starred","Send email","Drafts"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))})]})}},s={render:e=>{const[n,i]=M.useState(!1),p=()=>{i(!0)},m=()=>{i(!1)},W=["已入住","尚未入住"],D=["設施損壞","清潔問題","其他"],P=()=>t.jsxs(a,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(b,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),t.jsx(o,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),t.jsx(o,{fullWidth:!0,label:"Email",variant:"outlined"}),t.jsx(o,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),t.jsxs(a,{sx:{display:"flex",gap:2},children:[t.jsx(o,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(r=>t.jsx(I,{value:r,children:r},r))}),t.jsx(o,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:D.map(r=>t.jsx(I,{value:r,children:r},r))})]}),t.jsx(o,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),t.jsxs(a,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[t.jsx(b,{children:"點擊新增檔案 或拖拉"}),t.jsx(b,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),t.jsx(L,{control:t.jsx(v,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),t.jsx(L,{control:t.jsx(v,{}),label:"我不是機器人"})]});return t.jsxs(a,{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:m,content:t.jsx(P,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{variant:"outlined",children:"Clear"}),t.jsx(d,{children:"Despatch"})]})}};var T,C,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var F,O,k;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const vt=["Navigation","Form"];export{s as Form,l as Navigation,vt as __namedExportsOrder,Lt as default};
