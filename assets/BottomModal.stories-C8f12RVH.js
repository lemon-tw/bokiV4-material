import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-DRSUy1mj.js";import{L as c,d as x,e as u}from"./Rest-C3yE_EBj.js";import{L as h,T as i,M as I}from"./Alert-B8UFlkth.js";import"./Avatar-BwnX3fSq.js";import{B as d}from"./ToggleButton-B_1nB3DD.js";import"./DraggableChips-BTC8HJGy.js";import"./Modal-BHwqZrHA.js";import{B as y}from"./BottomModal-CQgISz-Y.js";import"./Profile-By_O9Y7X.js";import"./Typography-CFfHvyVk.js";import{r as f,o as j}from"./Tray.es-MpG47nPm.js";import{B as r,T as b}from"./CheckCircle.es-DXCUKnUH.js";import{L as g}from"./ListItemIcon-CQNzJoz6.js";import{D as B}from"./Divider-Kbwq-I49.js";import{F as L,C as v}from"./FormControlLabel-S5Kd-VCb.js";import"./defaultPalette-BZVf8BwZ.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-CCYRlzet.js";import"./Cart-HZpRRrMC.js";import"./CaretDown.es-C_6dMS2T.js";import"./Moon.es-mpdNk7_p.js";import"./Users.es-CXrS66a4.js";import"./WarningCircle.es-CJLwpT3c.js";import"./index-Bm8UbI65.js";import"./useTheme-C-KIORmc.js";import"./useSlotProps-Dpzk0ddK.js";import"./Link-D6s8y8jX.js";import"./index-B5T-G8Uu.js";import"./getThemeProps-D8nCqP97.js";import"./CaretUp.es-Cflm5pVD.js";import"./MagnifyingGlassPlus.es-BecyuEKe.js";import"./Tabs-CX_v8mKZ.js";import"./CrownSimple.es-BynC5VcB.js";import"./Warning.es-C1cCrKac.js";import"./AccordionSummary-D8DSbU2C.js";import"./Train.es-DbNsVOFc.js";import"./Copy.es-Akm3ZCin.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const Lt={title:"components/Modules/Modal/BottomModal",component:y,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},l={render:e=>{const[n,a]=M.useState(!1),p=()=>{a(!0)},m=()=>{a(!1)};return t.jsxs("div",{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:t.jsxs(r,{sx:{width:250},role:"presentation",children:[t.jsx(h,{children:["Inbox","Starred","Send email","Drafts"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(c,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))})]})}},s={render:e=>{const[n,a]=M.useState(!1),p=()=>{a(!0)},m=()=>{a(!1)},W=["已入住","尚未入住"],D=["設施損壞","清潔問題","其他"],P=()=>t.jsxs(r,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(b,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),t.jsx(i,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),t.jsx(i,{fullWidth:!0,label:"Email",variant:"outlined"}),t.jsx(i,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),t.jsxs(r,{sx:{display:"flex",gap:2},children:[t.jsx(i,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(o=>t.jsx(I,{value:o,children:o},o))}),t.jsx(i,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:D.map(o=>t.jsx(I,{value:o,children:o},o))})]}),t.jsx(i,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),t.jsxs(r,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[t.jsx(b,{children:"點擊新增檔案 或拖拉"}),t.jsx(b,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),t.jsx(L,{control:t.jsx(v,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),t.jsx(L,{control:t.jsx(v,{}),label:"我不是機器人"})]});return t.jsxs(r,{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:m,content:t.jsx(P,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{variant:"outlined",children:"Clear"}),t.jsx(d,{children:"Despatch"})]})}};var T,C,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const vt=["Navigation","Form"];export{s as Form,l as Navigation,vt as __namedExportsOrder,Lt as default};
