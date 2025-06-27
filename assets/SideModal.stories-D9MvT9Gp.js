import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as W}from"./index-D4H_InIO.js";import{p as P}from"./defaultPalette-DS3qdIvj.js";import{C as A}from"./Close-Cm_AzI4F.js";import{M as G,a as q}from"./index-D_n791Hj.js";import{u as E}from"./useTheme-CKabsHUK.js";import{s as V}from"./memoTheme-Dxm40b6r.js";import{I as z}from"./IconButton-DE89XgjZ.js";import{B as r}from"./Box-ColZNUIV.js";import{D as _}from"./DialogTitle-CeHXmy2g.js";import{D as J,L as f,a as g,I as b,M as j,b as L,T as d}from"./MoveToInbox-DzhwyQ3K.js";import{B as m}from"./Button-DEjvFugr.js";import{L as y,a as I,b as C,M as S}from"./MenuItem-QglLvHO9.js";import{T as v}from"./Typography-2UsIpkSH.js";import{F as B}from"./FormControlLabel-rm4GDmHz.js";import{C as M}from"./Checkbox-CXs9JgyO.js";import"./DefaultPropsProvider-C6ZETEwd.js";import"./createSvgIcon--HVZC8sH.js";import"./iconBase-BNkU7DqG.js";import"./useTheme-CgXM_xl0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CN9_kA9R.js";import"./ButtonBase-DqDsqRqn.js";import"./CircularProgress-DDzYLtWm.js";import"./extendSxProp-CjEWOyj5.js";import"./index-Bm8UbI65.js";import"./useSlot-DpI2SreY.js";import"./mergeSlotProps-Dxw82FU4.js";import"./Portal-CdaRbCk9.js";import"./index-BkuToD7M.js";import"./index-vYCkCKEW.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-B5ScNJ4P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-DrcfDPS5.js";import"./FormLabel-DUUM6bFW.js";import"./SwitchBase-Ce0aYy8z.js";import"./useControlled-DIa7s2dv.js";import"./index-C958WKz4.js";import"./useSlotProps-Be1aYaHu.js";import"./Grow-Cvzsn5qO.js";const N=(t,n="primary")=>{var i;const o=P[n],a=((i=t==null?void 0:t.palette)==null?void 0:i[n])??o;return{fontColor:a.menuFont??o.menuFont,bgColor:a.elevated??o.elevated,boxColor:a.onMain??o.onMain}},H=V(({title:t,content:n,align:o,...a})=>e.jsx(J,{...a}),{shouldForwardProp:t=>t!=="title"&&t!=="content"&&t!=="align"})(({anchor:t,theme:n})=>({"& .MuiDrawer-paper":{backgroundColor:N(n).bgColor,borderRadius:t==="left"?"0 20px 20px 0":t==="right"?"20px 0 0 20px":"0"}})),u=({title:t,align:n,content:o,actions:a,anchor:i="right",...s})=>{const h=E(),c=N(h);return e.jsxs(H,{anchor:i,...s,children:[e.jsx(z,{"aria-label":"close",onClick:l=>{var T;return(T=s.onClose)==null?void 0:T.call(s,l,"escapeKeyDown")},sx:{fontSize:"30px",position:"absolute",right:16,top:16},children:e.jsx(A,{})}),t&&e.jsxs(r,{sx:{display:"flex",justifyContent:n},children:[i==="right"&&n==="start"&&e.jsx(r,{sx:{alignContent:"center",ml:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(G,{})}),e.jsx(_,{sx:{p:0,m:"25px",textAlign:n,fontSize:n==="start"?"20px":"24px",fontWeight:n==="start"?500:600,gap:"20px"},color:c.fontColor,children:t}),i==="left"&&n==="start"&&e.jsx(r,{sx:{alignContent:"center",mr:"24px",mt:"8px",fontSize:"18px"},children:e.jsx(q,{})})]}),e.jsx(r,{sx:{backgroundColor:c.boxColor,overflowY:"auto",maxHeight:"calc(100% - 92px)",boxShadow:"0px 2px 10px 0px #0000000D",p:"24px 24px 92px 24px"},children:o}),a&&e.jsx(r,{sx:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:n==="center"?"center":"flex-end",p:"10px",boxShadow:"0px -12px 10px 0px #0000000D",height:"92px",gap:"10px",backgroundColor:c.boxColor},children:a})]})};u.__docgenInfo={description:"",methods:[],displayName:"SideModal",props:{title:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"Modal內容對其位置"},content:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Modal的內容，可以是字串或ReactNode"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的底部按鈕"},anchor:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"SideModal只有左右",defaultValue:{value:'"right"',computed:!1}}},composes:["Omit"]};const Ne={title:"components/Modal/SideModal",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{anchor:{control:"radio",options:["left","right"]},content:{control:"text"},actions:{control:!1}},args:{}},p={render:t=>{const[n,o]=W.useState(!1),a=()=>{o(!0)},i=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(m,{variant:"outlined",onClick:a,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"left",title:"This is a modal title",content:e.jsxs(r,{sx:{width:250},role:"presentation",children:[e.jsx(y,{children:["Inbox","Starred","Send email","Drafts"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(I,{children:n%2===0?e.jsx(b,{}):e.jsx(j,{})}),e.jsx(C,{primary:t})]})},t))}),e.jsx(L,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(I,{children:n%2===0?e.jsx(b,{}):e.jsx(j,{})}),e.jsx(C,{primary:t})]})},t))}),e.jsx(L,{}),e.jsx(y,{children:["All mail","Trash","Spam"].map((t,n)=>e.jsx(f,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(I,{children:n%2===0?e.jsx(b,{}):e.jsx(j,{})}),e.jsx(C,{primary:t})]})},t))})]})}},x={render:t=>{const[n,o]=W.useState(!1),a=()=>{o(!0)},i=()=>{o(!1)},s=["已入住","尚未入住"],h=["設施損壞","清潔問題","其他"],c=()=>e.jsxs(r,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(v,{variant:"h6",fontWeight:600,children:"說明您的問題內容"}),e.jsx(d,{fullWidth:!0,label:"您的姓名",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"Email",variant:"outlined"}),e.jsx(d,{fullWidth:!0,label:"手機號碼",variant:"outlined",placeholder:"+886"}),e.jsxs(r,{sx:{display:"flex",gap:2},children:[e.jsx(d,{fullWidth:!0,select:!0,label:"入住狀態",variant:"outlined",children:s.map(l=>e.jsx(S,{value:l,children:l},l))}),e.jsx(d,{fullWidth:!0,select:!0,label:"問題類別",variant:"outlined",children:h.map(l=>e.jsx(S,{value:l,children:l},l))})]}),e.jsx(d,{fullWidth:!0,multiline:!0,rows:4,label:"說明內容",variant:"outlined"}),e.jsxs(r,{sx:{border:"1px dashed #ccc",borderRadius:2,p:2,textAlign:"center",color:"#666"},children:[e.jsx(v,{children:"點擊新增檔案 或拖拉"}),e.jsx(v,{variant:"caption",children:"SVG, PNG, JPG or GIF (最大 3MB)"})]}),e.jsx(B,{control:e.jsx(M,{}),label:"提供您的購物清單，更方便飯店人員回應您準確資訊"}),e.jsx(B,{control:e.jsx(M,{}),label:"我不是機器人"})]});return e.jsxs(r,{children:[e.jsx(m,{variant:"outlined",onClick:a,children:"Open alert dialog"}),e.jsx(u,{...t,open:n,onClose:i,content:e.jsx(c,{}),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"})]})},args:{anchor:"right",title:"聯絡我們",align:"start",actions:e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"outlined",children:"Clear"}),e.jsx(m,{children:"Despatch"})]})}};var F,k,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>)}
        </List>
      </Box>
  }
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,D,R;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(D=x.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Pe=["Navigation","Form"];export{x as Form,p as Navigation,Pe as __namedExportsOrder,Ne as default};
