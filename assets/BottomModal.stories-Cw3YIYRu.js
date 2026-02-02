import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as M}from"./index-D4H_InIO.js";import"./lemonTheme-B7Qis2N-.js";import{L as m,e as x,f as u}from"./Rest-BC3fsDfS.js";import{L as h,T as i,M as I}from"./Alert-C3r4vYPZ.js";import"./Avatar-pRnr6DU5.js";import{B as d}from"./ToggleButton-1S1uagp-.js";import"./DraggableChips-Gzah4u51.js";import"./Modal-BPmM9JPO.js";import{B as y}from"./BottomModal-imHOmNSj.js";import"./Profile-CdAcNaFX.js";import"./Typography-BZQ6nlo4.js";import{r as f,o as j}from"./Tray.es-B4oM4D8B.js";import{B as r,T as b}from"./CheckCircle.es-BXMbO79g.js";import{L as g}from"./ListItemIcon-C0zQWass.js";import{D as B}from"./Divider-DR1e4bhK.js";import{F as L,C as v}from"./FormControlLabel-D0F9NOZF.js";import"./defaultPalette-DLKPgRCf.js";import"./dayjs.min-BJoxDa44.js";import"./zh-tw-D5QUe-nd.js";import"./Cart-z4MSENyy.js";import"./Plus.es-B6v6yg-F.js";import"./Moon.es-CJIcfKlP.js";import"./Users.es-DGjqvHPG.js";import"./WarningCircle.es-x_3DymOb.js";import"./index-Bm8UbI65.js";import"./useTheme-B9a50qyY.js";import"./useSlotProps-BPBm8KYw.js";import"./Link-CuGHZV3F.js";import"./index-BfevDTIX.js";import"./getThemeProps-MPmnPgUq.js";import"./CaretUp.es-B8wKLcLK.js";import"./MagnifyingGlassPlus.es-CjjA4OJ9.js";import"./Tabs-BBXbhsQj.js";import"./CrownSimple.es-N3wLHKBe.js";import"./Warning.es-BRl635yR.js";import"./Collapse-DpSy8Sr3.js";import"./Copy.es-Cj1k5QIq.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./tiny-invariant-CopsF_GD.js";const Bt={title:"components/Modules/Modal/BottomModal",component:y,parameters:{layout:"centered",docs:{description:{component:"用手機可以用觸控上下滑動"}}},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["top","bottom"]},content:{control:"text"},actions:{control:!1}},args:{}},l={render:e=>{const[n,a]=M.useState(!1),p=()=>{a(!0)},c=()=>{a(!1)};return t.jsxs("div",{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"top",title:"This is a modal title",content:t.jsxs(r,{sx:{width:250},role:"presentation",children:[t.jsx(h,{children:["Inbox","Starred","Send email","Drafts"].map((e,n)=>t.jsx(m,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(m,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))}),t.jsx(B,{}),t.jsx(h,{children:["All mail","Trash","Spam"].map((e,n)=>t.jsx(m,{disablePadding:!0,children:t.jsxs(x,{children:[t.jsx(g,{sx:{fontSize:24},children:n%2===0?t.jsx(f,{}):t.jsx(j,{})}),t.jsx(u,{primary:e})]})},e))})]})}},s={render:e=>{const[n,a]=M.useState(!1),p=()=>{a(!0)},c=()=>{a(!1)},W=["已入住","尚未入住"],D=["設施損壞","清潔問題","其他"],P=()=>t.jsxs(r,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsx(b,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),t.jsx(i,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),t.jsx(i,{fullWidth:!0,label:"Email",variant:"outlined"}),t.jsx(i,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),t.jsxs(r,{sx:{display:"flex",gap:2},children:[t.jsx(i,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:W.map(o=>t.jsx(I,{value:o,children:o},o))}),t.jsx(i,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:D.map(o=>t.jsx(I,{value:o,children:o},o))})]}),t.jsx(i,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),t.jsxs(r,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[t.jsx(b,{children:"點擊新增檔案 或拖拉"}),t.jsx(b,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),t.jsx(L,{control:t.jsx(v,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),t.jsx(L,{control:t.jsx(v,{}),label:"我不是機器人"})]});return t.jsxs(r,{children:[t.jsx(d,{variant:"outlined",onClick:p,children:"Open alert dialog"}),t.jsx(y,{...e,open:n,onClose:c,content:t.jsx(P,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{title:"聯絡我們",align:"start",actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{variant:"outlined",children:"Clear"}),t.jsx(d,{children:"Despatch"})]})}};var T,C,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Lt=["Navigation","Form"];export{s as Form,l as Navigation,Lt as __namedExportsOrder,Bt as default};
