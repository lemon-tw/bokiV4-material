import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as W}from"./index-D4H_InIO.js";import{p as P}from"./defaultPalette-CEdr43da.js";import{u as z}from"./useTheme-CfJJ7vPb.js";import{s as E}from"./memoTheme-B-2aWamJ.js";import{I as G}from"./IconButton-C88Fa9Or.js";import{X as A}from"./X.esm-De9lqQTk.js";import{B as r}from"./Box-CSoMWprg.js";import{C as q,a as V}from"./CaretRight.esm-QHyypDvM.js";import{D as _}from"./DialogTitle-NT82rxla.js";import{D as J,L as f,a as g,T as j,E as b}from"./Tray.esm-gTAdTZhU.js";import{B as x}from"./Button-CpKG82Mi.js";import{L as y}from"./Menu-1u8uYljr.js";import{L as C,a as v,D as S}from"./ListItemText-CM1aJ2SN.js";import{T as I}from"./Typography-D2w2x7Bk.js";import{T as d}from"./TextField-BWSC6YY6.js";import{M as L}from"./MenuItem-BfIpU7qz.js";import{F as B}from"./FormControlLabel-BKjE1J1C.js";import{C as M}from"./Checkbox-BRp8qgh9.js";import"./DefaultPropsProvider-D4sChuSN.js";import"./useTheme-Bh-_xkMb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-CbscuJ4o.js";import"./TransitionGroupContext-BDWcwKxU.js";import"./CircularProgress-Bgpk7tfQ.js";import"./IconBase.esm-BbKRF193.js";import"./extendSxProp-BVuH4Y-a.js";import"./index-Bm8UbI65.js";import"./useSlot-C4_QdBLF.js";import"./mergeSlotProps-mcaWG5ce.js";import"./utils-CTIOt_ev.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./Portal-0NmrZ8s3.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-Cpe4GJDi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-DtPqxWvG.js";import"./isMuiElement-d7vxVVg4.js";import"./useSlotProps-Dq4c04Y2.js";import"./Grow-BbX-4VhA.js";import"./index-Bwk1XUWi.js";import"./useFormControl-DgxBWWJq.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-IBbp6r5K.js";import"./useControlled-DIa7s2dv.js";import"./createSvgIcon-CDwIG09Y.js";import"./SwitchBase-HT7lNdSu.js";const N=(t,n="primary")=>{var i;const o=P[n],a=((i=t==null?void 0:t.palette)==null?void 0:i[n])??o;return{fontColor:a.menuFont??o.menuFont,bgColor:a.elevated??o.elevated,boxColor:a.onMain??o.onMain}},H=E(({title:t,content:n,align:o,...a})=>e.jsx(J,{...a}),{shouldForwardProp:t=>t!=="title"&&t!=="content"&&t!=="align"})(({anchor:t,theme:n})=>({"& .MuiDrawer-paper":{backgroundColor:N(n).bgColor,borderRadius:t==="left"?"0 20px 20px 0":t==="right"?"20px 0 0 20px":"0"}})),u=({title:t,align:n,content:o,actions:a,anchor:i="right",...s})=>{const h=z(),p=N(h);return e.jsxs(H,{anchor:i,...s,children:[e.jsx(G,{"aria-label":"close",onClick:l=>{var T;return(T=s.onClose)==null?void 0:T.call(s,l,"escapeKeyDown")},sx:{fontSize:"30px",position:"absolute",right:16,top:16},children:e.jsx(A,{})}),t&&e.jsxs(r,{sx:{display:"flex",justifyContent:n},children:[i==="right"&&n==="start"&&e.jsx(r,{sx:{alignContent:"center",ml:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(q,{})}),e.jsx(_,{sx:{p:0,m:"25px",textAlign:n,fontSize:n==="start"?"20px":"24px",fontWeight:n==="start"?500:600,gap:"20px"},color:p.fontColor,children:t}),i==="left"&&n==="start"&&e.jsx(r,{sx:{alignContent:"center",mr:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(V,{})})]}),e.jsx(r,{sx:{backgroundColor:p.boxColor,overflowY:"auto",maxHeight:"calc(100% - 92px)",boxShadow:"0px 2px 10px 0px #0000000D",p:"24px 24px 92px 24px"},children:o}),a&&e.jsx(r,{sx:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:n==="center"?"center":"flex-end",p:"10px",boxShadow:"0px -12px 10px 0px #0000000D",height:"92px",gap:"10px",backgroundColor:p.boxColor},children:a})]})};u.__docgenInfo={description:"",methods:[],displayName:"SideModal",props:{title:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},anchor:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"SideModal只有左右",defaultValue:{value:'"right"',computed:!1}}},composes:["Omit"]};const _e={title:"components/Modules/Modal/SideModal",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["left","right"]},content:{control:"text"},actions:{control:!1}},args:{}},c={render:t=>{const[n,o]=W.useState(!1),a=()=>{o(!0)},i=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(x,{variant:"outlined",onClick:a,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"left",title:"This is a modal title",content:e.jsxs(r,{sx:{width:250},role:"presentation",children:[e.jsx(y,{children:["Inbox","Starred","Send email","Drafts"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))}),e.jsx(S,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))}),e.jsx(S,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(C,{sx:{fontSize:24},children:n%2===0?e.jsx(j,{}):e.jsx(b,{})}),e.jsx(v,{primary:t})]})},t))})]})}},m={render:t=>{const[n,o]=W.useState(!1),a=()=>{o(!0)},i=()=>{o(!1)},s=["已入住","尚未入住"],h=["設施損壞","清潔問題","其他"],p=()=>e.jsxs(r,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(I,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(d,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(r,{sx:{display:"flex",gap:2},children:[e.jsx(d,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:s.map(l=>e.jsx(L,{value:l,children:l},l))}),e.jsx(d,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:h.map(l=>e.jsx(L,{value:l,children:l},l))})]}),e.jsx(d,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(r,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(I,{children:"點擊新增檔案 或拖拉"}),e.jsx(I,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(B,{control:e.jsx(M,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(B,{control:e.jsx(M,{}),label:"我不是機器人"})]});return e.jsxs(r,{children:[e.jsx(x,{variant:"outlined",onClick:a,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:i,content:e.jsx(p,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"right",title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"outlined",children:"Clear"}),e.jsx(x,{children:"Despatch"})]})}};var F,k,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <SideModal {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></SideModal>
      </div>;
  },
  args: {
    anchor: "left",
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
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
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
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
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
                  {index % 2 === 0 ? <Tray /> : <Envelope />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
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
        <SideModal {...args} open={open} onClose={handleClose} content={<ContactForm />} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"></SideModal>
      </Box>;
  },
  args: {
    anchor: "right",
    title: "聯絡我們",
    align: "start",
    actions: <>
        <Button variant="outlined">Clear</Button>
        <Button>Despatch</Button>
      </>
  }
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const Je=["Navigation","Form"];export{m as Form,c as Navigation,Je as __namedExportsOrder,_e as default};
